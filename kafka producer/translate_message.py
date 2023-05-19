import json

# save the last loaded index/SequenceNumber
SequenceNumber = 0

with open(r'C:\Users\ASUS\PycharmProjects\pythonProject\data\field_Schema.json') as f1:
    field_schema = json.load(f1)

with open(r'C:\Users\ASUS\PycharmProjects\pythonProject\data\tableSchemaJson.json', 'rb') as f3:
    table_schema = json.load(f3)

log_file = open(r'C:\Users\ASUS\PycharmProjects\pythonProject\data\log_file_04-01-2022.txt', "r")
Lines = log_file.readlines()

EQ_record_type = ['VA', 'VB', 'VD', 'VE', 'VF', 'VG', 'VH', 'VI', 'VM']
index_record_type = ['VK']
derivative_record_type = ['FA', 'FB', 'FD', 'FE', 'FF', 'FG', 'FH', 'FI', 'FN', 'FO']
other_record_type = ['95', '63', 'CR', 'HC', 'HD', 'HE', '01', '99']

hebrew_field = ['SymbolHebrew', 'NameHebrew', 'MessageTextHebrew']

def heb_field_convert(string_array):
    hebrew_string = ''
    for s in string_array:
        if (ord(s) >= 96) and (ord(s) <= 143):
            hebrew_string = hebrew_string + chr(ord(s) - 96 + 1488)
        else:
            hebrew_string = hebrew_string + s

    # Reverse the string
    return hebrew_string[::-1]


def tableInOut(table_num, is_sub):
    if is_sub == 1:
        inputFiels = ["", ""]
    else:
        inputFiels = ""
    outputField = ""

    if table_num == "104":
        inputFiels = "code"
        outputField = "ISO_code"

    elif table_num == "143":
        inputFiels[0] = "type"
        inputFiels[1] = "subtype"
        outputField = "type_or_subtype_description"

    elif table_num == "145":
        inputFiels[0] = "industry_number"
        inputFiels[1] = "sub_industry_number"
        outputField = "industry_or_sub_industry_name"

    elif table_num == "304":
        inputFiels = "trade_stop_code"
        outputField = "trade_stop_reason"

    elif table_num == "306":
        inputFiels = "value_in_file"
        outputField = "ex_type"

    elif table_num == "451":
        inputFiels = ""
        outputField = ""

    elif table_num == "510":
        inputFiels = "index_code"
        outputField = "index_name"

    elif table_num == "512":
        inputFiels = "code"
        outputField = "description"

    elif table_num == "601":
        inputFiels = "contract_type"
        outputField = "contract_type_description"

    elif table_num == "602":
        inputFiels = "underlying_asset_code"
        outputField = "underlying_asset_description"

    elif table_num == "605":
        inputFiels = "underlying_asset_type"
        outputField = "description"

    elif table_num == "681":
        inputFiels = "trading_method_code"
        outputField = "trading_method_description"

    return inputFiels, outputField


def table_translation(table_schema, table_num, input_key, is_sub):
    inputFiels, outputField = tableInOut(table_num, is_sub)

    # if is_sub=1: input_key=[factor_number, sub_factor_number]
    output_value = ""
    for tbl in table_schema["objects"]:
        if tbl["tableCode"] == table_num:
            for row in tbl["fields"]:
                if is_sub == 0:
                    if row[inputFiels] == input_key:
                        output_value = row[outputField]
                        break
                else:
                    if (row[inputFiels[0]] == input_key[0]) & (row[inputFiels[1]] == input_key[1]):
                        output_value = row[outputField]
                        break

    return output_value


def translate_message(Line):
    SequenceNumber = Line[:Line.find(':')]
    msg = Line[Line.find(':') + 2:-1]
    msg_record_type = msg[:2]
    res = dict()
    if (msg_record_type in EQ_record_type) | (msg_record_type in index_record_type) | (
            msg_record_type in derivative_record_type):
        for typeName in field_schema["objects"]:
            # typeName = field_schema["objects"][5] # VF
            if typeName['typeName'] == msg_record_type:
                # res = dict()
                for fields in typeName['fields']:
                    # for table translation
                    remark_field = fields['remark']

                    # also remove leading and trailing whitespaces
                    if fields['variableName'] in hebrew_field:
                        string_array = msg[fields['offset']:fields['offset'] + fields['size']].strip()
                        res.update({fields['variableName']: heb_field_convert(string_array)})
                    else:
                        string_array = msg[fields['offset']:fields['offset'] + fields['size']].strip()

                        if "See table " in remark_field:
                            if (remark_field != "See table 143") & (remark_field != "See table 145") & (
                                    remark_field != "See table 510"):
                                output_value = table_translation(table_schema, remark_field[-3:], string_array, 0)
                                res.update({fields['variableName']: output_value})
                            else:
                                if remark_field == "See table 510":
                                    output_value = table_translation(table_schema, remark_field[-3:], string_array, 0)
                                    res.update({fields['variableName']: string_array})
                                    res.update({'IndexName': output_value})
                                elif remark_field == "See table 143":
                                    res.update({fields['variableName']: string_array})
                                    if fields['variableName'] == "SecuritySubType":
                                        input_key = [res['SecurityType'], string_array]
                                        output_value = table_translation(table_schema, remark_field[-3:], input_key, 1)
                                        res.update({'SecurityTypeName': output_value})
                                elif remark_field == "See table 145":
                                    res.update({fields['variableName']: string_array})
                                    if fields['variableName'] == "Sector":
                                        input_key = [string_array, "000"]
                                        output_value = table_translation(table_schema, remark_field[-3:], input_key, 1)
                                        res.update({"SectorName": output_value})
                                    elif fields['variableName'] == "SubSector":
                                        input_key = [res['Sector'], string_array]
                                        output_value = table_translation(table_schema, remark_field[-3:], input_key, 1)
                                        res.update({"SubSectorName": output_value})

                        else:
                            res.update({fields['variableName']: string_array})

                if msg_record_type in index_record_type:
                    res.update({'SecurityID': res['IndexCode']})
                if msg_record_type in derivative_record_type:
                    res.update({'SecurityID': res['ContractNumber']})

    if msg_record_type in other_record_type:
        for typeName in field_schema["objects"]:
            if typeName['typeName'] == msg_record_type:
                res = dict()
                for fields in typeName['fields']:
                    # also remove leading and trailing whitespaces
                    res.update(
                        {fields['variableName']: msg[fields['offset']:fields['offset'] + fields['size']].strip()})

    return res