
export const tableSchema ={
  flat: true,
  packing: "packed",
  objects: [
    {
      type: "table",
      tableCode: "104",
      tableNameCode: "Table 104 - Currencies",
      fields: [
        {
            "code": "1",
            "description": "ש\"ח",
            "ISO_code": "ILS"
        },
        {
            "code": "2",
            "description": "דולר",
            "ISO_code": "USD"
        },
        {
            "code": "3",
            "description": "פר\"ש",
            "ISO_code": "CHF"
        },
        {
            "code": "4",
            "description": "S.D.R",
            "ISO_code": null
        },
        {
            "code": "5",
            "description": "מרק",
            "ISO_code": "DEM"
        },
        {
            "code": "6",
            "description": "פלורין",
            "ISO_code": "NLG"
        },
        {
            "code": "7",
            "description": "שטרלינג",
            "ISO_code": "GBP"
        },
        {
            "code": "8",
            "description": "יין / 100",
            "ISO_code": "JPY"
        },
        {
            "code": "9",
            "description": "פר\"צ",
            "ISO_code": "FRF"
        },
        {
            "code": "10",
            "description": "דולר קנדי",
            "ISO_code": "CAD"
        },
        {
            "code": "11",
            "description": "E.C.U",
            "ISO_code": "EUR"
        },
        {
            "code": "12",
            "description": "כתר שבדי",
            "ISO_code": "SEK"
        },
        {
            "code": "13",
            "description": "דולר אוסטרלי",
            "ISO_code": "AUD"
        },
        {
            "code": "14",
            "description": "100 פזטה",
            "ISO_code": "ESP"
        },
        {
            "code": "17",
            "description": "רנד דרום - אפריקה",
            "ISO_code": "ZAR"
        },
        {
            "code": "18",
            "description": "סל",
            "ISO_code": null
        },
        {
            "code": "20",
            "description": "זהב",
            "ISO_code": null
        },
        {
            "code": "21",
            "description": "דינר ירדני",
            "ISO_code": "JOD"
        },
        {
            "code": "23",
            "description": "לירה טורקית",
            "ISO_code": "TRL"
        },
        {
            "code": "25",
            "description": "לירה מצרית",
            "ISO_code": "EGP"
        },
        {
            "code": "26",
            "description": "לירה לבנונית",
            "ISO_code": "LBP"
        },
        {
            "code": "27",
            "description": "מרק פיני",
            "ISO_code": "FIM"
        },
        {
            "code": "28",
            "description": "כתר נורווגי",
            "ISO_code": "NOK"
        },
        {
            "code": "29",
            "description": "כתר דני",
            "ISO_code": "DKK"
        },
        {
            "code": "30",
            "description": "EURO",
            "ISO_code": "EUR"
        }
      ]
    },
    {
      type: "table",
      tableCode: "143",
      tableNameCode: "Table 143 - Type / sub-type security",
      fields: [
        {
            "type": "01",
            "subtype": "01",
            "type_or_subtype_description": "מניה רגילה",
            "Inactive_from_date": null
        },
        {
            "type": "01",
            "subtype": "02",
            "type_or_subtype_description": "מניה מבוכרת",
            "Inactive_from_date": null
        },
        {
            "type": "01",
            "subtype": "03",
            "type_or_subtype_description": "מניה צוברת ומבוכרת",
            "Inactive_from_date": null
        },
        {
            "type": "01",
            "subtype": "04",
            "type_or_subtype_description": "מנית סטוק",
            "Inactive_from_date": null
        },
        {
            "type": "01",
            "subtype": "05",
            "type_or_subtype_description": "מנית יסוד",
            "Inactive_from_date": null
        },
        {
            "type": "01",
            "subtype": "06",
            "type_or_subtype_description": "מניה צוברת",
            "Inactive_from_date": null
        },
        {
            "type": "01",
            "subtype": "07",
            "type_or_subtype_description": "מניה משתתפת",
            "Inactive_from_date": null
        },
        {
            "type": "01",
            "subtype": "08",
            "type_or_subtype_description": "מניה צוברת ומשתתפת",
            "Inactive_from_date": null
        },
        {
            "type": "01",
            "subtype": "09",
            "type_or_subtype_description": "מנית הנהלה",
            "Inactive_from_date": null
        },
        {
            "type": "01",
            "subtype": "10",
            "type_or_subtype_description": "מניה נדחת",
            "Inactive_from_date": null
        },
        {
            "type": "01",
            "subtype": "11",
            "type_or_subtype_description": "מניה בכורה",
            "Inactive_from_date": null
        },
        {
            "type": "01",
            "subtype": "12",
            "type_or_subtype_description": "מנית פדיון",
            "Inactive_from_date": null
        },
        {
            "type": "01",
            "subtype": "13",
            "type_or_subtype_description": "קרן נאמנות סגורה",
            "Inactive_from_date": null
        },
        {
            "type": "01",
            "subtype": "14",
            "type_or_subtype_description": "מניה מסוג ריט",
            "Inactive_from_date": null
        },
        {
            "type": "01",
            "subtype": "98",
            "type_or_subtype_description": "מניה ללא זכויות הצבעה",
            "Inactive_from_date": null
        },
        {
            "type": "01",
            "subtype": "99",
            "type_or_subtype_description": "מניה רדומה",
            "Inactive_from_date": null
        },
        {
            "type": "02",
            "subtype": "01",
            "type_or_subtype_description": "אופציה למניה",
            "Inactive_from_date": null
        },
        {
            "type": "02",
            "subtype": "02",
            "type_or_subtype_description": "אופציה לאג\"ח להמרה",
            "Inactive_from_date": null
        },
        {
            "type": "02",
            "subtype": "03",
            "type_or_subtype_description": "אופציה לאופציה",
            "Inactive_from_date": null
        },
        {
            "type": "02",
            "subtype": "04",
            "type_or_subtype_description": "אופציה ליח' השתתפות",
            "Inactive_from_date": null
        },
        {
            "type": "02",
            "subtype": "05",
            "type_or_subtype_description": "אופציה משולבת",
            "Inactive_from_date": null
        },
        {
            "type": "03",
            "subtype": "01",
            "type_or_subtype_description": "אג\"ח להמרה",
            "Inactive_from_date": null
        },
        {
            "type": "03",
            "subtype": "02",
            "type_or_subtype_description": "שטר הון",
            "Inactive_from_date": null
        },
        {
            "type": "03",
            "subtype": "03",
            "type_or_subtype_description": "שטר התחייבות",
            "Inactive_from_date": null
        },
        {
            "type": "03",
            "subtype": "04",
            "type_or_subtype_description": "מיועד להמרה ולפדיון",
            "Inactive_from_date": null
        },
        {
            "type": "03",
            "subtype": "05",
            "type_or_subtype_description": "אג\"ח להמרה רכישה",
            "Inactive_from_date": null
        },
        {
            "type": "04",
            "subtype": "01",
            "type_or_subtype_description": "אג\"ח ממשלתי",
            "Inactive_from_date": null
        },
        {
            "type": "04",
            "subtype": "02",
            "type_or_subtype_description": "אג\"ח ממשלתי גלבוע",
            "Inactive_from_date": null
        },
        {
            "type": "04",
            "subtype": "03",
            "type_or_subtype_description": "אג\"ח ממשלתי רמון",
            "Inactive_from_date": null
        },
        {
            "type": "04",
            "subtype": "04",
            "type_or_subtype_description": "אג\"ח ממשלתי שגיא",
            "Inactive_from_date": null
        },
        {
            "type": "04",
            "subtype": "05",
            "type_or_subtype_description": "אג\"ח ממשלתי שגיא מש'",
            "Inactive_from_date": null
        },
        {
            "type": "04",
            "subtype": "06",
            "type_or_subtype_description": "אג\"ח ממשלתי גליל",
            "Inactive_from_date": null
        },
        {
            "type": "04",
            "subtype": "07",
            "type_or_subtype_description": "אג\"ח ממשלתי גליל מש'",
            "Inactive_from_date": null
        },
        {
            "type": "04",
            "subtype": "08",
            "type_or_subtype_description": "אג\"ח ממשלתי גבע",
            "Inactive_from_date": null
        },
        {
            "type": "04",
            "subtype": "09",
            "type_or_subtype_description": "אג\"ח ממשלתי כפיר",
            "Inactive_from_date": null
        },
        {
            "type": "04",
            "subtype": "10",
            "type_or_subtype_description": "אג\"ח ממשלתי גילון",
            "Inactive_from_date": null
        },
        {
            "type": "04",
            "subtype": "11",
            "type_or_subtype_description": "אג\"ח ממשלתי שחר",
            "Inactive_from_date": null
        },
        {
            "type": "04",
            "subtype": "12",
            "type_or_subtype_description": "אג\"ח ממשלתי כפיר חדש",
            "Inactive_from_date": null
        },
        {
            "type": "04",
            "subtype": "13",
            "type_or_subtype_description": "אג\"ח ממשלתי גילון חדש",
            "Inactive_from_date": null
        },
        {
            "type": "04",
            "subtype": "14",
            "type_or_subtype_description": "אג\"ח ממשלתית קצרה",
            "Inactive_from_date": null
        },
        {
            "type": "04",
            "subtype": "15",
            "type_or_subtype_description": "אג\"ח ממשלתית דואלית",
            "Inactive_from_date": null
        },
        {
            "type": "05",
            "subtype": "01",
            "type_or_subtype_description": "אג\"ח קונצרנים",
            "Inactive_from_date": null
        },
        {
            "type": "05",
            "subtype": "02",
            "type_or_subtype_description": "חוב שלא שולם",
            "Inactive_from_date": null
        },
        {
            "type": "05",
            "subtype": "03",
            "type_or_subtype_description": "אג\"ח להחלפה",
            "Inactive_from_date": null
        },
        {
            "type": "05",
            "subtype": "04",
            "type_or_subtype_description": "תעודות סל לאג\"ח (יוחלף בסוג 36)",
            "Inactive_from_date": null
        },
        {
            "type": "05",
            "subtype": "05",
            "type_or_subtype_description": "אג\"ח מובנית",
            "Inactive_from_date": null
        },
        {
            "type": "05",
            "subtype": "06",
            "type_or_subtype_description": "תעודות פקדון  –סוג הנייר הוחלף ע\"י סוג נייר 40",
            "Inactive_from_date": null
        },
        {
            "type": "05",
            "subtype": "07",
            "type_or_subtype_description": "אג\"ח מרובה פדיונות",
            "Inactive_from_date": null
        },
        {
            "type": "05",
            "subtype": "08",
            "type_or_subtype_description": "ניירות ערך מסחריים",
            "Inactive_from_date": null
        },
        {
            "type": "05",
            "subtype": "09",
            "type_or_subtype_description": "אג\"ח צמודת מניה",
            "Inactive_from_date": null
        },
        {
            "type": "05",
            "subtype": "10",
            "type_or_subtype_description": "אג\"ח הוני ניתן להמרה כפויה",
            "Inactive_from_date": null
        },
        {
            "type": "05",
            "subtype": "11",
            "type_or_subtype_description": "אג\"ח הוני ניתן למחיקה",
            "Inactive_from_date": null
        },
        {
            "type": "05",
            "subtype": "12",
            "type_or_subtype_description": "יחידת השתתפות עם מרכיב התחייבותי",
            "Inactive_from_date": null
        },
        {
            "type": "06",
            "subtype": "01",
            "type_or_subtype_description": "קבוצת תשואה",
            "Inactive_from_date": "לא פעיל"
        },
        {
            "type": "07",
            "subtype": "01",
            "type_or_subtype_description": "יחידת מו\"פ",
            "Inactive_from_date": null
        },
        {
            "type": "08",
            "subtype": "01",
            "type_or_subtype_description": "מלוה קצר מועד",
            "Inactive_from_date": null
        },
        {
            "type": "09",
            "subtype": "01",
            "type_or_subtype_description": "זכויות",
            "Inactive_from_date": null
        },
        {
            "type": "10",
            "subtype": "01",
            "type_or_subtype_description": "קרן נאמנות",
            "Inactive_from_date": null
        },
        {
            "type": "11",
            "subtype": "01",
            "type_or_subtype_description": "אג\"ח אופציה",
            "Inactive_from_date": null
        },
        {
            "type": "12",
            "subtype": "01",
            "type_or_subtype_description": "יחידת השתתפות",
            "Inactive_from_date": null
        },
        {
            "type": "12",
            "subtype": "02",
            "type_or_subtype_description": "יחידת השתתפות עם מרכיב הוני",
            "Inactive_from_date": null
        },
        {
            "type": "13",
            "subtype": "01",
            "type_or_subtype_description": "אופצית רכישה",
            "Inactive_from_date": null
        },
        {
            "type": "13",
            "subtype": "02",
            "type_or_subtype_description": "אופ. רכישה יח. השתתפות",
            "Inactive_from_date": null
        },
        {
            "type": "14",
            "subtype": "01",
            "type_or_subtype_description": "אופציה $ 3 חודשים",
            "Inactive_from_date": "לא פעיל"
        },
        {
            "type": "14",
            "subtype": "02",
            "type_or_subtype_description": "אופציה $ 12 חודשים",
            "Inactive_from_date": "לא פעיל"
        },
        {
            "type": "15",
            "subtype": "01",
            "type_or_subtype_description": "אופציה לאג\"ח רגיל",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "01",
            "type_or_subtype_description": "אופציה CALL (ת35)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "02",
            "type_or_subtype_description": "אופציה CALL (דלר)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "04",
            "type_or_subtype_description": "אופציה CALL (בנק)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "05",
            "type_or_subtype_description": "אופציה CALL (ארו)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "08",
            "type_or_subtype_description": "אופציה CALL (כיל)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "09",
            "type_or_subtype_description": "אופציה CALL (פעל)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "10",
            "type_or_subtype_description": "אופציה CALL (לאמ)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "11",
            "type_or_subtype_description": "אופציה CALL (טבע)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "12",
            "type_or_subtype_description": "אופציה CALL (דסק)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "13",
            "type_or_subtype_description": "אופציה CALL (מזר)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "14",
            "type_or_subtype_description": "אופציה CALL (אבנ)",
            "Inactive_from_date": "26/02/2017"
        },
        {
            "type": "16",
            "subtype": "15",
            "type_or_subtype_description": "אופציה CALL (ישק)",
            "Inactive_from_date": "29/04/2012"
        },
        {
            "type": "16",
            "subtype": "16",
            "type_or_subtype_description": "אופציה CALL (רצי)",
            "Inactive_from_date": "27/09/2015"
        },
        {
            "type": "16",
            "subtype": "17",
            "type_or_subtype_description": "אופציה CALL (ממא)",
            "Inactive_from_date": "15/01/2017"
        },
        {
            "type": "16",
            "subtype": "18",
            "type_or_subtype_description": "אופציה CALL (ממב)",
            "Inactive_from_date": "16/02/2014"
        },
        {
            "type": "16",
            "subtype": "19",
            "type_or_subtype_description": "אופציה CALL (בזק)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "20",
            "type_or_subtype_description": "אופציה CALL (פרג)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "21",
            "type_or_subtype_description": "אופציה CALL (תא1)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "22",
            "type_or_subtype_description": "אופציה CALL (בנל)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "23",
            "type_or_subtype_description": "אופציה CALL (ניס)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "24",
            "type_or_subtype_description": "אופציה CALL (דלק)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "25",
            "type_or_subtype_description": "אופציה CALL (ישק)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "26",
            "type_or_subtype_description": "אופציה CALL (חלי)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "27",
            "type_or_subtype_description": "אופציה CALL (אפק)",
            "Inactive_from_date": "23/04/2017"
        },
        {
            "type": "16",
            "subtype": "28",
            "type_or_subtype_description": "אופציה CALL (פרט)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "29",
            "type_or_subtype_description": "אופציה CALL (אלב)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "30",
            "type_or_subtype_description": "אופציה CALL (עזר)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "31",
            "type_or_subtype_description": "אופציה CALL (דקד)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "32",
            "type_or_subtype_description": "אופציה CALL (פזנ)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "33",
            "type_or_subtype_description": "אופציה CALL (גזת)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "34",
            "type_or_subtype_description": "אופציה CALL (מלס)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "35",
            "type_or_subtype_description": "אופציה CALL (שטר)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "37",
            "type_or_subtype_description": "אופציה CALL (ארמ)",
            "Inactive_from_date": "23/04/2017"
        },
        {
            "type": "16",
            "subtype": "38",
            "type_or_subtype_description": "אופציה CALL (מלן)",
            "Inactive_from_date": "19/11/2017"
        },
        {
            "type": "16",
            "subtype": "39",
            "type_or_subtype_description": "אופציה CALL (פרנ)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "40",
            "type_or_subtype_description": "אופציה CALL (סלק)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "41",
            "type_or_subtype_description": "אופציה CALL (הרא)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "42",
            "type_or_subtype_description": "אופציה CALL (שפר)",
            "Inactive_from_date": null
        },
        {
            "type": "16",
            "subtype": "43",
            "type_or_subtype_description": "אופציה CALL (פנק)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "01",
            "type_or_subtype_description": "אופציה PUT (תא35)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "02",
            "type_or_subtype_description": "אופציה PUT (דלר)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "04",
            "type_or_subtype_description": "אופציה PUT (בנק)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "05",
            "type_or_subtype_description": "אופציה PUT (ארו)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "08",
            "type_or_subtype_description": "אופציה PUT (כיל)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "09",
            "type_or_subtype_description": "אופציה PUT (פעל)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "10",
            "type_or_subtype_description": "אופציה PUT (לאמ)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "11",
            "type_or_subtype_description": "אופציה PUT (טבע)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "12",
            "type_or_subtype_description": "אופציה PUT (דסק)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "13",
            "type_or_subtype_description": "אופציה PUT (מזר)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "14",
            "type_or_subtype_description": "אופציה PUT (אבנ)",
            "Inactive_from_date": "26/02/2017"
        },
        {
            "type": "17",
            "subtype": "15",
            "type_or_subtype_description": "אופציה PUT (ישק)",
            "Inactive_from_date": "29/04/2012"
        },
        {
            "type": "17",
            "subtype": "16",
            "type_or_subtype_description": "אופציה PUT (רצי)",
            "Inactive_from_date": "27/09/2015"
        },
        {
            "type": "17",
            "subtype": "17",
            "type_or_subtype_description": "אופציה PUT (ממא)",
            "Inactive_from_date": "15/01/2017"
        },
        {
            "type": "17",
            "subtype": "18",
            "type_or_subtype_description": "אופציה PUT (ממב)",
            "Inactive_from_date": "16/02/2014"
        },
        {
            "type": "17",
            "subtype": "19",
            "type_or_subtype_description": "אופציה PUT (בזק)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "20",
            "type_or_subtype_description": "אופציה PUT (פרג)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "21",
            "type_or_subtype_description": "אופציה PUT (תא)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "22",
            "type_or_subtype_description": "אופציה PUT (בנל)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "23",
            "type_or_subtype_description": "אופציה PUT (ניס)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "24",
            "type_or_subtype_description": "אופציה PUT (דלק)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "25",
            "type_or_subtype_description": "אופציה PUT (ישק)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "26",
            "type_or_subtype_description": "אופציה PUT (חלי)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "27",
            "type_or_subtype_description": "אופציה PUT (אפק)",
            "Inactive_from_date": "23/04/2017"
        },
        {
            "type": "17",
            "subtype": "28",
            "type_or_subtype_description": "אופציה PUT (פרט)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "29",
            "type_or_subtype_description": "אופציה PUT (אלב)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "30",
            "type_or_subtype_description": "אופציה PUT (עזר)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "31",
            "type_or_subtype_description": "אופציה PUT (דקד)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "32",
            "type_or_subtype_description": "אופציה PUT (פזנ)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "33",
            "type_or_subtype_description": "אופציה PUT (גזת)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "34",
            "type_or_subtype_description": "אופציה PUT (מלס)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "35",
            "type_or_subtype_description": "אופציה PUT (שטר)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "37",
            "type_or_subtype_description": "אופציה PUT (ארמ)",
            "Inactive_from_date": "23/04/2017"
        },
        {
            "type": "17",
            "subtype": "38",
            "type_or_subtype_description": "אופציה PUT (מלן)",
            "Inactive_from_date": "19/11/2017"
        },
        {
            "type": "17",
            "subtype": "39",
            "type_or_subtype_description": "אופציה PUT (פרנ)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "40",
            "type_or_subtype_description": "אופציה PUT (סלק)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "41",
            "type_or_subtype_description": "אופציה PUT (הרא)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "42",
            "type_or_subtype_description": "אופציה PUT (שפר)",
            "Inactive_from_date": null
        },
        {
            "type": "17",
            "subtype": "43",
            "type_or_subtype_description": "אופציה PUT (פנק)",
            "Inactive_from_date": null
        },
        {
            "type": "18",
            "subtype": "01",
            "type_or_subtype_description": "חוזה עתידי (ת35)",
            "Inactive_from_date": null
        },
        {
            "type": "18",
            "subtype": "02",
            "type_or_subtype_description": "חוזה עתידי (דלר)",
            "Inactive_from_date": null
        },
        {
            "type": "18",
            "subtype": "03",
            "type_or_subtype_description": "חוזה עתידי (רב3)",
            "Inactive_from_date": "07/10/2009"
        },
        {
            "type": "18",
            "subtype": "04",
            "type_or_subtype_description": "חוזה עתידי (בנק)",
            "Inactive_from_date": null
        },
        {
            "type": "18",
            "subtype": "05",
            "type_or_subtype_description": "חוזה עתידי (ארו)",
            "Inactive_from_date": null
        },
        {
            "type": "18",
            "subtype": "06",
            "type_or_subtype_description": "חוזה עתידי (שחב)",
            "Inactive_from_date": "12/03/2008"
        },
        {
            "type": "18",
            "subtype": "07",
            "type_or_subtype_description": "חוזה עתידי (שחא)",
            "Inactive_from_date": "12/03/2008"
        },
        {
            "type": "18",
            "subtype": "21",
            "type_or_subtype_description": "חוזה עתידי (תא1)",
            "Inactive_from_date": null
        },
        {
            "type": "19",
            "subtype": "01",
            "type_or_subtype_description": "אופציה CALL שבועית (ת35)",
            "Inactive_from_date": null
        },
        {
            "type": "19",
            "subtype": "02",
            "type_or_subtype_description": "אופציה CALL שבועית (דלר)",
            "Inactive_from_date": null
        },
        {
            "type": "20",
            "subtype": "01",
            "type_or_subtype_description": "אופציה PUT שבועית (ת35)",
            "Inactive_from_date": null
        },
        {
            "type": "20",
            "subtype": "02",
            "type_or_subtype_description": "אופציה PUT שבועית (דלר)",
            "Inactive_from_date": null
        },
        {
            "type": "21",
            "subtype": "01",
            "type_or_subtype_description": "חוזה עתידי שבועי (ת35)",
            "Inactive_from_date": null
        },
        {
            "type": "21",
            "subtype": "02",
            "type_or_subtype_description": "חוזה עתידי שבועי (דלר)",
            "Inactive_from_date": null
        },
        {
            "type": "32",
            "subtype": "01",
            "type_or_subtype_description": "תעודות סל על מדדי מניות מקומיים",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "32",
            "subtype": "02",
            "type_or_subtype_description": "תעודות סל על מדדי מניות בינלאומיים",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "32",
            "subtype": "03",
            "type_or_subtype_description": "תעודת סחורה (שוק המניות)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "32",
            "subtype": "04",
            "type_or_subtype_description": "תעודת נוסחה מניה",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "32",
            "subtype": "05",
            "type_or_subtype_description": "תעודת שילוב מניה",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "32",
            "subtype": "06",
            "type_or_subtype_description": "תעודת נכס מתחלף מניה",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "32",
            "subtype": "07",
            "type_or_subtype_description": "תעודת נוסחה סחורה (שוק מניות)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "32",
            "subtype": "08",
            "type_or_subtype_description": "תעודת שילוב סחורות (שוק מניות)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "32",
            "subtype": "09",
            "type_or_subtype_description": "תעודת נכס מתחלף סחורה (שוק מניות)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "32",
            "subtype": "10",
            "type_or_subtype_description": "תעודת חוזה (שוק המניות)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "33",
            "subtype": "01",
            "type_or_subtype_description": "תעודה בחסר על מדדי מניות מקומיים",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "33",
            "subtype": "02",
            "type_or_subtype_description": "תעודה בחסר על מדדי מניות בינלאומיים",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "33",
            "subtype": "03",
            "type_or_subtype_description": "תעודה בחסר לסחורה (שוק המניות)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "34",
            "subtype": "01",
            "type_or_subtype_description": "אופציית כיסוי רכש על מדדי מניות  מקומיים",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "34",
            "subtype": "02",
            "type_or_subtype_description": "אופציית כיסוי רכש על מדדי מניות בינלאומיים",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "34",
            "subtype": "03",
            "type_or_subtype_description": "אופציית כיסוי רכש לסחורה (שוק המניות)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "34",
            "subtype": "04",
            "type_or_subtype_description": "אופציית כיסוי רכש למנית חו\"ל בודדות",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "35",
            "subtype": "01",
            "type_or_subtype_description": "אופציית כיסוי מכר על מדדי מניות מקומיים",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "35",
            "subtype": "02",
            "type_or_subtype_description": "אופציית כיסוי מכר על מדדי מניות בינלאומיים",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "35",
            "subtype": "03",
            "type_or_subtype_description": "אופציית כיסוי מכר לסחורה (שוק המניות)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "35",
            "subtype": "04",
            "type_or_subtype_description": "אופציית כיסוי מכר למניות חו\"ל בודדת",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "36",
            "subtype": "01",
            "type_or_subtype_description": "תעודת סל על מדדי אג\"ח מקומיים",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "36",
            "subtype": "02",
            "type_or_subtype_description": "תעודת סל על מדדי אג\"ח בינלאומיים",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "36",
            "subtype": "03",
            "type_or_subtype_description": "תעודת סחורה (שוק האג\"ח)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "36",
            "subtype": "04",
            "type_or_subtype_description": "תעודת נוסחה על מדדי אג\"ח",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "36",
            "subtype": "05",
            "type_or_subtype_description": "תעודת שילוב אג\"ח",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "36",
            "subtype": "06",
            "type_or_subtype_description": "תעודת נכס מתחלף אג\"ח",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "36",
            "subtype": "07",
            "type_or_subtype_description": "תעודת נוסחה סחורה (שוק אג\"ח)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "36",
            "subtype": "08",
            "type_or_subtype_description": "תעודת שילוב סחורה (שוק אג\"ח)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "36",
            "subtype": "09",
            "type_or_subtype_description": "תעודת נכס מתחלף סחורה (שוק אג\"ח)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "36",
            "subtype": "10",
            "type_or_subtype_description": "תעודת חוזה (שוק האג\"ח)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "37",
            "subtype": "01",
            "type_or_subtype_description": "תעודה בחסר על מדדי אג\"ח מקומיים",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "37",
            "subtype": "02",
            "type_or_subtype_description": "תעודה בחסר על מדדי אג\"ח בינלאומיים",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "37",
            "subtype": "03",
            "type_or_subtype_description": "תעודה בחסר לסחורה (שוק האג\"ח)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "38",
            "subtype": "01",
            "type_or_subtype_description": "אופציית כיסוי רכש על מדדי אג\"ח מקומיים",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "38",
            "subtype": "02",
            "type_or_subtype_description": "אופציית כיסוי רכש על מדדי אג\"ח בינלאומיים",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "38",
            "subtype": "03",
            "type_or_subtype_description": "אופציית כיסוי רכש לסחורה (שוק האג\"ח)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "38",
            "subtype": "04",
            "type_or_subtype_description": "אופציית כיסוי רכש למט\"ח (שוק האג\"ח)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "39",
            "subtype": "01",
            "type_or_subtype_description": "אופציית כיסוי מכר על מדדי אג\"ח מקומיים",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "39",
            "subtype": "02",
            "type_or_subtype_description": "אופציית כיסוי מכר על מדדי אג\"ח בינלאומיים",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "39",
            "subtype": "03",
            "type_or_subtype_description": "אופציית כיסוי מכר לסחורה (שוק האג\"ח)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "39",
            "subtype": "04",
            "type_or_subtype_description": "אופציית כיסוי מכר למט\"ח (שוק האג\"ח)",
            "Inactive_from_date": "01/01/2019"
        },
        {
            "type": "40",
            "subtype": "01",
            "type_or_subtype_description": "תעודת פיקדון שקלית",
            "Inactive_from_date": null
        },
        {
            "type": "40",
            "subtype": "02",
            "type_or_subtype_description": "תעודת פיקדון מט\"חית",
            "Inactive_from_date": null
        },
        {
            "type": "41",
            "subtype": "01",
            "type_or_subtype_description": "קרן היי טק",
            "Inactive_from_date": null
        },
        {
            "type": "42",
            "subtype": "01",
            "type_or_subtype_description": "קרן סל בשוק המניות",
            "Inactive_from_date": null
        },
        {
            "type": "43",
            "subtype": "01",
            "type_or_subtype_description": "קרן סל בשוק האג\"ח",
            "Inactive_from_date": null
        },
        {
            "type": "44",
            "subtype": "01",
            "type_or_subtype_description": "קרן חוץ נסחרת מניות",
            "Inactive_from_date": null
        },
        {
            "type": "45",
            "subtype": "01",
            "type_or_subtype_description": "קרן חוץ נסחרת אג\"ח",
            "Inactive_from_date": null
        },
        {
            "type": "90",
            "subtype": "01",
            "type_or_subtype_description": "זיהוי הנפקה",
            "Inactive_from_date": null
        }
    ]
    },
    {
      type: "table",
      tableCode: "145",
      tableNameCode: "Table 145 - industrys / sub-industrys",
      fields: [
        {
            "industry_number": "052",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אג\"ח ממשלתיות - בלתי צמודות",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "052",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "חדש\" אג\"ח ממשלתיות - ריבית משתנה - \"גילון\", \"גילון",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "052",
            "sub_industry_number": "002",
            "industry_or_sub_industry_name": "אג\"ח ממשלתיות - ריבית קבועה - \"שחר\"",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "052",
            "sub_industry_number": "003",
            "industry_or_sub_industry_name": "אג\"ח ממשלתיות - אג\"ח ממשלתית קצרה",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "057",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אג\"ח ממשלתיות - צמודות מדד",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "057",
            "sub_industry_number": "002",
            "industry_or_sub_industry_name": "אג\"ח ממשלתיות - \"גליל\"",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "057",
            "sub_industry_number": "003",
            "industry_or_sub_industry_name": "אג\"ח ממשלתיות - \"גליל משופר\", \"שגיא משופר\"",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "057",
            "sub_industry_number": "004",
            "industry_or_sub_industry_name": "אג\"ח ממשלתיות - \"שגיא\"",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "057",
            "sub_industry_number": "005",
            "industry_or_sub_industry_name": "אג\"ח ממשלתיות - \"כפיר\", \"כפיר חדש\"",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "062",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - צמודות מדד",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "062",
            "sub_industry_number": "002",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - צמודות מדד  –ריבית קבועה",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "062",
            "sub_industry_number": "003",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - צמודות מדד  –ריבית משתנה",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "062",
            "sub_industry_number": "004",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות  - צמודות מדד - היברידיות",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "065",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - נסחרות מט\"ח - ריבית קבועה",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "065",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - נסחרות מט\"ח - ריבית קבועה",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "066",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - נסחרות מט\"ח - ריבית משתנה",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "066",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - נסחרות מט\"ח - ריבית משתנה",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "067",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - תנאים מיוחדים",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "067",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - תנאים מיוחדים",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "067",
            "sub_industry_number": "003",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - צמודות לזהב",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "067",
            "sub_industry_number": "004",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - צמודות דולר ויחס מרק/דולר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "067",
            "sub_industry_number": "005",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - צמודות דולר ויחס יין/דולר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "070",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אג\"ח - צמודות מט\"ח",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "070",
            "sub_industry_number": "004",
            "industry_or_sub_industry_name": "אג\"ח ממשלתיות - צמודות דולר ריבית משתנה \"גלבוע\"",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "070",
            "sub_industry_number": "005",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - צמודות מט\"ח - מו\"פ",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "070",
            "sub_industry_number": "006",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - צמודות מט\"ח",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "070",
            "sub_industry_number": "007",
            "industry_or_sub_industry_name": "אג\"ח ממשלתיות - אג\"ח ממשלתית דואלית",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "072",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - ברירת הצמדה",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "072",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות  –ברירת הצמדה",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "072",
            "sub_industry_number": "002",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - צמודות מדד או סל מטבעות",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "072",
            "sub_industry_number": "003",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - הצמדות שונות של קרן וריבית",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "073",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - לא צמודות",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "073",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - לא צמודות",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "073",
            "sub_industry_number": "002",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות - לא צמודות  –ריבית משתנה",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "073",
            "sub_industry_number": "003",
            "industry_or_sub_industry_name": "אג\"ח קונצרניות  –לא צמודות - היברידיות",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "074",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "ניירות ערך למשקיעים מוסדיים",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "074",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "ניירות ערך למשקיעים מוסדיים",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "075",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "קרנות סל בשוק האג\"ח",
            "industry_group": "מכשירים פיננסיים",
            "canceled_from_date": null
        },
        {
            "industry_number": "075",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "קרנות סל בשוק האג\"ח",
            "industry_group": "מכשירים פיננסיים",
            "canceled_from_date": null
        },
        {
            "industry_number": "076",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "ניירות ערך מסחריים",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "076",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "ניירות ערך מסחריים",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "077",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "קרן חוץ נסחרת אג\"ח",
            "industry_group": "מכשירים פיננסיים",
            "canceled_from_date": null
        },
        {
            "industry_number": "077",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "קרן חוץ נסחרת אג\"ח",
            "industry_group": "מכשירים פיננסיים",
            "canceled_from_date": null
        },
        {
            "industry_number": "080",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "מלווה קצר מועד",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "080",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "מלווה קצר מועד",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "083",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "קרן חוץ נסחרת",
            "industry_group": "מכשירים פיננסיים",
            "canceled_from_date": null
        },
        {
            "industry_number": "083",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "קרן חוץ נסחרת",
            "industry_group": "מכשירים פיננסיים",
            "canceled_from_date": null
        },
        {
            "industry_number": "084",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "שירותים פיננסיים",
            "industry_group": "פיננסי",
            "canceled_from_date": null
        },
        {
            "industry_number": "084",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "שירותים פיננסיים",
            "industry_group": "פיננסי",
            "canceled_from_date": null
        },
        {
            "industry_number": "085",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "מכשירים פיננסיים",
            "industry_group": "מכשירים פיננסיים",
            "canceled_from_date": null
        },
        {
            "industry_number": "085",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "אג\"ח מובנות",
            "industry_group": "מכשירים פיננסיים",
            "canceled_from_date": null
        },
        {
            "industry_number": "085",
            "sub_industry_number": "002",
            "industry_or_sub_industry_name": "תעודות פיקדון",
            "industry_group": "מכשירים פיננסיים",
            "canceled_from_date": null
        },
        {
            "industry_number": "086",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "קרנות סל",
            "industry_group": "מכשירים פיננסיים",
            "canceled_from_date": null
        },
        {
            "industry_number": "086",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "קרנות סל",
            "industry_group": "מכשירים פיננסיים",
            "canceled_from_date": null
        },
        {
            "industry_number": "087",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "ביומד",
            "industry_group": "היי טק",
            "canceled_from_date": null
        },
        {
            "industry_number": "087",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "ביוטכנולוגיה",
            "industry_group": "היי טק",
            "canceled_from_date": null
        },
        {
            "industry_number": "087",
            "sub_industry_number": "002",
            "industry_or_sub_industry_name": "מכשור רפואי",
            "industry_group": "היי טק",
            "canceled_from_date": null
        },
        {
            "industry_number": "087",
            "sub_industry_number": "003",
            "industry_or_sub_industry_name": "השקעות במדעי החיים",
            "industry_group": "היי טק",
            "canceled_from_date": null
        },
        {
            "industry_number": "087",
            "sub_industry_number": "004",
            "industry_or_sub_industry_name": "פארמה",
            "industry_group": "היי טק",
            "canceled_from_date": null
        },
        {
            "industry_number": "088",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "טכנולוגיה",
            "industry_group": "היי טק",
            "canceled_from_date": null
        },
        {
            "industry_number": "088",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "שרותי מידע",
            "industry_group": "היי טק",
            "canceled_from_date": null
        },
        {
            "industry_number": "088",
            "sub_industry_number": "002",
            "industry_or_sub_industry_name": "תוכנה ואינטרנט",
            "industry_group": "היי טק",
            "canceled_from_date": null
        },
        {
            "industry_number": "088",
            "sub_industry_number": "003",
            "industry_or_sub_industry_name": "אלקטרוניקה  ואופטיקה",
            "industry_group": "היי טק",
            "canceled_from_date": null
        },
        {
            "industry_number": "088",
            "sub_industry_number": "004",
            "industry_or_sub_industry_name": "ביטחוניות",
            "industry_group": "היי טק",
            "canceled_from_date": null
        },
        {
            "industry_number": "088",
            "sub_industry_number": "005",
            "industry_or_sub_industry_name": "ציוד ותקשורת",
            "industry_group": "היי טק",
            "canceled_from_date": null
        },
        {
            "industry_number": "088",
            "sub_industry_number": "006",
            "industry_or_sub_industry_name": "מוליכים למחצה",
            "industry_group": "היי טק",
            "canceled_from_date": null
        },
        {
            "industry_number": "088",
            "sub_industry_number": "007",
            "industry_or_sub_industry_name": "השקעות בהייטק",
            "industry_group": "היי טק",
            "canceled_from_date": null
        },
        {
            "industry_number": "088",
            "sub_industry_number": "008",
            "industry_or_sub_industry_name": "קלינטק",
            "industry_group": "היי טק",
            "canceled_from_date": null
        },
        {
            "industry_number": "088",
            "sub_industry_number": "009",
            "industry_or_sub_industry_name": "קרנות הייטק",
            "industry_group": "היי טק",
            "canceled_from_date": null
        },
        {
            "industry_number": "090",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "בנקים",
            "industry_group": "פיננסי",
            "canceled_from_date": null
        },
        {
            "industry_number": "090",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "בנקים",
            "industry_group": "פיננסי",
            "canceled_from_date": null
        },
        {
            "industry_number": "091",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "בנקים למשכנתאות",
            "industry_group": null,
            "canceled_from_date": "01/01/2006"
        },
        {
            "industry_number": "091",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "בנקים למשכנתאות",
            "industry_group": null,
            "canceled_from_date": "01/01/2006"
        },
        {
            "industry_number": "093",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "ביטוח",
            "industry_group": "פיננסי",
            "canceled_from_date": null
        },
        {
            "industry_number": "093",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "ביטוח",
            "industry_group": "פיננסי",
            "canceled_from_date": null
        },
        {
            "industry_number": "094",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "מסחר ושירותים",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "094",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "מסחר",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "094",
            "sub_industry_number": "002",
            "industry_or_sub_industry_name": "ישרותים",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "094",
            "sub_industry_number": "003",
            "industry_or_sub_industry_name": "מלונאות ותיירות",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "094",
            "sub_industry_number": "004",
            "industry_or_sub_industry_name": "מחשבים",
            "industry_group": null,
            "canceled_from_date": "01/11/2012"
        },
        {
            "industry_number": "094",
            "sub_industry_number": "005",
            "industry_or_sub_industry_name": "שירותים פיננסיים",
            "industry_group": null,
            "canceled_from_date": "03/11/2013"
        },
        {
            "industry_number": "094",
            "sub_industry_number": "006",
            "industry_or_sub_industry_name": "תקשורת ומדיה",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "095",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "נדלן ובנייה",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "095",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "נדלן ובינוי",
            "industry_group": "ריאלי",
            "canceled_from_date": "01/07/2019"
        },
        {
            "industry_number": "095",
            "sub_industry_number": "002",
            "industry_or_sub_industry_name": "חקלאות",
            "industry_group": null,
            "canceled_from_date": "01/07/2004"
        },
        {
            "industry_number": "095",
            "sub_industry_number": "003",
            "industry_or_sub_industry_name": "נדלן מניב",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "095",
            "sub_industry_number": "004",
            "industry_or_sub_industry_name": "בנייה",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "096",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "תעשיה",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "096",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "מזון",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "096",
            "sub_industry_number": "002",
            "industry_or_sub_industry_name": "אופנה והלבשה",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "096",
            "sub_industry_number": "003",
            "industry_or_sub_industry_name": "מתכת ומוצרי בנייה",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "096",
            "sub_industry_number": "004",
            "industry_or_sub_industry_name": "חשמל",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "096",
            "sub_industry_number": "005",
            "industry_or_sub_industry_name": "מוצרי בניה",
            "industry_group": null,
            "canceled_from_date": "16/06/2010"
        },
        {
            "industry_number": "096",
            "sub_industry_number": "006",
            "industry_or_sub_industry_name": "כימיה, גומי ופלסטיק",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "096",
            "sub_industry_number": "007",
            "industry_or_sub_industry_name": "עץ, נייר ודפוס",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "096",
            "sub_industry_number": "008",
            "industry_or_sub_industry_name": "השקעות בתעשייה ותעשיות שונות",
            "industry_group": null,
            "canceled_from_date": "16/06/2010"
        },
        {
            "industry_number": "096",
            "sub_industry_number": "010",
            "industry_or_sub_industry_name": "ביומד",
            "industry_group": null,
            "canceled_from_date": "01/11/2012"
        },
        {
            "industry_number": "096",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "אלקטרוניקה",
            "industry_group": null,
            "canceled_from_date": "01/11/2012"
        },
        {
            "industry_number": "097",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "השקעה ואחזקות",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "097",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "השקעה ואחזקות",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "097",
            "sub_industry_number": "002",
            "industry_or_sub_industry_name": "השקעות בהייטק",
            "industry_group": null,
            "canceled_from_date": "01/11/2012"
        },
        {
            "industry_number": "097",
            "sub_industry_number": "004",
            "industry_or_sub_industry_name": "תעודות סל בשוק המניות",
            "industry_group": null,
            "canceled_from_date": "03/11/2013"
        },
        {
            "industry_number": "097",
            "sub_industry_number": "005",
            "industry_or_sub_industry_name": "אג\"ח מובנות",
            "industry_group": null,
            "canceled_from_date": "03/11/2013"
        },
        {
            "industry_number": "097",
            "sub_industry_number": "006",
            "industry_or_sub_industry_name": "חברות מעטפת",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "098",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אנרגיה וחיפושי נפט וגז",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "098",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "חיפושי נפט וגז",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "098",
            "sub_industry_number": "003",
            "industry_or_sub_industry_name": "אנרגיה",
            "industry_group": "ריאלי",
            "canceled_from_date": null
        },
        {
            "industry_number": "099",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "רשימה מקבילה",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "001",
            "industry_or_sub_industry_name": "רשימה מקבילה - בנקים מסחריים",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "רשימה מקבילה - בנקים למשכנתאות ומימון",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "031",
            "industry_or_sub_industry_name": "רשימה מקבילה - חברות וסוכנויות ביטוח",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "041",
            "industry_or_sub_industry_name": "רשימה מקבילה - מסחר",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "042",
            "industry_or_sub_industry_name": "רשימה מקבילה - שירותים",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "043",
            "industry_or_sub_industry_name": "רשימה מקבילה - מלונאות ושרותי תיירות",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "044",
            "industry_or_sub_industry_name": "רשימה מקבילה - מחשב ושרותי מחשב",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "051",
            "industry_or_sub_industry_name": "רשימה מקבילה - נדל\"ן, בינוי ופיתוח",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "052",
            "industry_or_sub_industry_name": "רשימה מקבילה - חקלאות",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "061",
            "industry_or_sub_industry_name": "רשימה מקבילה - מזון וטבק",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "062",
            "industry_or_sub_industry_name": "רשימה מקבילה - טקסטיל והלבשה",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "063",
            "industry_or_sub_industry_name": "רשימה מקבילה - מתכת ומוצריה",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "064",
            "industry_or_sub_industry_name": "רשימה מקבילה - מכונות חשמל, אלקטרוניקה ואופט'",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "065",
            "industry_or_sub_industry_name": "רשימה מקבילה - מוצרי בניה",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "066",
            "industry_or_sub_industry_name": "רשימה מקבילה - מוצרים כימיים, גומי ופלסטיק",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "067",
            "industry_or_sub_industry_name": "רשימה מקבילה - עץ ומוצריו, נייר ודפוס",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "068",
            "industry_or_sub_industry_name": "רשימה מקבילה - השקעות בתעשיה ותעשיות שונות",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "071",
            "industry_or_sub_industry_name": "רשימה מקבילה - חברות השקעה",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "099",
            "sub_industry_number": "081",
            "industry_or_sub_industry_name": "רשימה מקבילה - חיפושי נפט",
            "industry_group": null,
            "canceled_from_date": "01/01/1996"
        },
        {
            "industry_number": "201",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות וחוזים עתידיים על מדד ת\"א-35",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "201",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "ת\"א-35 - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "201",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "ת\"א-35 - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "201",
            "sub_industry_number": "013",
            "industry_or_sub_industry_name": "ת\"א-35 - אופציות CALL שבועיות",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "201",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "ת\"א-35 - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "201",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "ת\"א-35 - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "201",
            "sub_industry_number": "023",
            "industry_or_sub_industry_name": "ת\"א-35 - אופציות PUT שבועיות",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "201",
            "sub_industry_number": "031",
            "industry_or_sub_industry_name": "ת\"א-35 - חוזים עתידיים לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "201",
            "sub_industry_number": "032",
            "industry_or_sub_industry_name": "ת\"א-35 - חוזים עתידיים לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "201",
            "sub_industry_number": "033",
            "industry_or_sub_industry_name": "ת\"א-35 - חוזים עתידיים שבועיים",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "202",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות וחוזים עתידיים על שער הדולר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "202",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "דולר - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "202",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "דולר - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "202",
            "sub_industry_number": "013",
            "industry_or_sub_industry_name": "דולר - אופציות CALL שבועיות",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "202",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "דולר - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "202",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "דולר - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "202",
            "sub_industry_number": "023",
            "industry_or_sub_industry_name": "דולר - אופציות PUT שבועיות",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "202",
            "sub_industry_number": "031",
            "industry_or_sub_industry_name": "דולר - חוזים עתידיים לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "202",
            "sub_industry_number": "032",
            "industry_or_sub_industry_name": "דולר - חוזים עתידיים לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "202",
            "sub_industry_number": "033",
            "industry_or_sub_industry_name": "דולר - חוזים עתידיים שבועיים",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "203",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "חוזים עתידיים על שער הריבית ל-3 חודשים",
            "industry_group": null,
            "canceled_from_date": "07/10/2009"
        },
        {
            "industry_number": "203",
            "sub_industry_number": "031",
            "industry_or_sub_industry_name": "ריבית 3 ח' - חוזים עתידיים לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "07/10/2009"
        },
        {
            "industry_number": "203",
            "sub_industry_number": "032",
            "industry_or_sub_industry_name": "ריבית 3 ח' - חוזים עתידיים לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "07/10/2009"
        },
        {
            "industry_number": "204",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות וחוזים עתידיים על מדד ת\"א בנקים-5",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "204",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "ת\"א-בנק - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "204",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "ת\"א-בנק - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "204",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "ת\"א-בנק - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "204",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "ת\"א-בנק - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "204",
            "sub_industry_number": "031",
            "industry_or_sub_industry_name": "ת\"א-בנק - חוזים עתידיים לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "204",
            "sub_industry_number": "032",
            "industry_or_sub_industry_name": "ת\"א-בנק - חוזים עתידיים לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "205",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות וחוזים עתידיים על שער האירו",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "205",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "אירו - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "205",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "אירו - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "205",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "אירו - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "205",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "אירו - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "205",
            "sub_industry_number": "031",
            "industry_or_sub_industry_name": "אירו - חוזים עתידיים לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "205",
            "sub_industry_number": "032",
            "industry_or_sub_industry_name": "אירו - חוזים עתידיים לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "206",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "חוזים עתידיים על שחר לטווח בינוני",
            "industry_group": null,
            "canceled_from_date": "12/03/2008"
        },
        {
            "industry_number": "206",
            "sub_industry_number": "031",
            "industry_or_sub_industry_name": "שחר בינוני - חוזים עתידיים לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "12/03/2008"
        },
        {
            "industry_number": "206",
            "sub_industry_number": "032",
            "industry_or_sub_industry_name": "שחר בינוני - חוזים עתידיים לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "12/03/2008"
        },
        {
            "industry_number": "207",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "חוזים עתידיים על שחר לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "12/03/2008"
        },
        {
            "industry_number": "207",
            "sub_industry_number": "031",
            "industry_or_sub_industry_name": "שחר ארוך - חוזים עתידיים לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "12/03/2008"
        },
        {
            "industry_number": "207",
            "sub_industry_number": "032",
            "industry_or_sub_industry_name": "שחר ארוך - חוזים עתידיים לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "12/03/2008"
        },
        {
            "industry_number": "208",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית כיל",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "208",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "כיל - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "208",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "כיל - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "208",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "כיל - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "208",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "כיל - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "209",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית פועלים",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "209",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "פעל - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "209",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "פעל - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "209",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "פעל - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "209",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "פעל - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "210",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית לאומי",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "210",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "לאמ - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "210",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "לאמ - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "210",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "לאמ - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "210",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "לאמ - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "211",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית טבע",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "211",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "טבע - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "211",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "טבע - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "211",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "טבע - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "211",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "טבע - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "212",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית דיסקונט",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "212",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "דסק - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "212",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "דסק - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "212",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "דסק - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "212",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "דסק - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "213",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית מזרחי",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "213",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "מזר - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "213",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "מזר - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "213",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "מזר - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "213",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "מזר - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "214",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על יחידת השתתפות אבנר",
            "industry_group": null,
            "canceled_from_date": "26/02/2017"
        },
        {
            "industry_number": "214",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "אבנ - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "26/02/2017"
        },
        {
            "industry_number": "214",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "אבנ - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "26/02/2017"
        },
        {
            "industry_number": "214",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "אבנ - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "26/02/2017"
        },
        {
            "industry_number": "214",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "אבנ - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "26/02/2017"
        },
        {
            "industry_number": "215",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על יחידת השתתפות ישראמקו",
            "industry_group": null,
            "canceled_from_date": "29/04/2012"
        },
        {
            "industry_number": "215",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "ישק - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "29/04/2012"
        },
        {
            "industry_number": "215",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "ישק - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "29/04/2012"
        },
        {
            "industry_number": "215",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "ישק - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "29/04/2012"
        },
        {
            "industry_number": "215",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "ישק - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "29/04/2012"
        },
        {
            "industry_number": "216",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על יחידת השתתפות רציו",
            "industry_group": null,
            "canceled_from_date": "27/09/2015"
        },
        {
            "industry_number": "216",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "רצי - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "27/09/2015"
        },
        {
            "industry_number": "216",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "רצי - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "27/09/2015"
        },
        {
            "industry_number": "216",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "רצי - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "27/09/2015"
        },
        {
            "industry_number": "216",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "רצי - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "27/09/2015"
        },
        {
            "industry_number": "217",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על אג\"ח ממשלתי 120",
            "industry_group": null,
            "canceled_from_date": "15/01/2017"
        },
        {
            "industry_number": "217",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "ממא – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "15/01/2017"
        },
        {
            "industry_number": "217",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "ממא – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "15/01/2017"
        },
        {
            "industry_number": "217",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "ממא – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "15/01/2017"
        },
        {
            "industry_number": "217",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "ממא – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "15/01/2017"
        },
        {
            "industry_number": "218",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על אג\"ח ממשלתי 217",
            "industry_group": null,
            "canceled_from_date": "16/02/2014"
        },
        {
            "industry_number": "218",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "ממב – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "16/02/2014"
        },
        {
            "industry_number": "218",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "ממב – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "16/02/2014"
        },
        {
            "industry_number": "218",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "ממב – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "16/02/2014"
        },
        {
            "industry_number": "218",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "ממב – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "16/02/2014"
        },
        {
            "industry_number": "219",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית בזק",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "219",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "בזק – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "219",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "בזק – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "219",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "בזק – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "219",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "בזק – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "220",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית פריגו",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "220",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "פרג – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "220",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "פרג – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "220",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "פרג – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "220",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "פרג – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "221",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות וחוזים עתידיים על מדד ת\"א-125",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "221",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "ת\"א-125 - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "221",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "ת\"א-125 - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "221",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "ת\"א-125 - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "221",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "ת\"א-125 - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "221",
            "sub_industry_number": "031",
            "industry_or_sub_industry_name": "ת\"א-125 - חוזים עתידיים לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "221",
            "sub_industry_number": "032",
            "industry_or_sub_industry_name": "ת\"א-125 - חוזים עתידיים לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "222",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית הבינלאומי",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "222",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "בנל – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "222",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "בנל – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "222",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "בנל – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "222",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "בנל – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "223",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית נייס",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "223",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "ניס – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "223",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "ניס – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "223",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "ניס – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "223",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "ניס – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "224",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית דלק קבוצה",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "224",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "דלק – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "224",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "דלק – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "224",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "דלק – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "224",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "דלק – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "225",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על יחידת השתתפות ישראמקו",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "225",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "ישק – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "225",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "ישק – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "225",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "ישק – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "225",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "ישק – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "226",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית חברה לישראל",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "226",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "חלי – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "226",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "חלי – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "226",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "חלי – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "226",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "חלי – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "227",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית אופקו",
            "industry_group": null,
            "canceled_from_date": "23/04/2017"
        },
        {
            "industry_number": "227",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "אפק – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "23/04/2017"
        },
        {
            "industry_number": "227",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "אפק – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "23/04/2017"
        },
        {
            "industry_number": "227",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "אפק – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "23/04/2017"
        },
        {
            "industry_number": "227",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "אפק – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "23/04/2017"
        },
        {
            "industry_number": "228",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית פרוטרום",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "228",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "פרט – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "228",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "פרט – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "228",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "פרט – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "228",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "פרט – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "229",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית אלביט מערכות",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "229",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "אלב – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "229",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "אלב – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "229",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "אלב – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "229",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "אלב – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "230",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית עזריאלי",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "230",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "עזר – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "230",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "עזר – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "230",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "עזר – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "230",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "עזר – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "231",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על יחידת השתתפות דלק קידוחים",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "231",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "דקד – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "231",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "דקד – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "231",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "דקד – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "231",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "דקד – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "232",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית פז נפט",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "232",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "פזנ – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "232",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "פזנ – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "232",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "פזנ – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "232",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "פזנ – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "233",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית גזית גלוב",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "233",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "גזת – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "233",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "גזת – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "233",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "גזת – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "233",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "גזת – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "234",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית מליסרון",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "234",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "מלס – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "234",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "מלס – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "234",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "מלס – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "234",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "מלס – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "235",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית שטראוס גרופ",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "235",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "שטר – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "235",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "שטר – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "235",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "שטר – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "235",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "שטר – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "237",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית אורמת טכנו",
            "industry_group": null,
            "canceled_from_date": "23/04/2017"
        },
        {
            "industry_number": "237",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "ארמ – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "23/04/2017"
        },
        {
            "industry_number": "237",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "ארמ – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "23/04/2017"
        },
        {
            "industry_number": "237",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "ארמ – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "23/04/2017"
        },
        {
            "industry_number": "237",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "ארמ – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "23/04/2017"
        },
        {
            "industry_number": "238",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית מיילן",
            "industry_group": null,
            "canceled_from_date": "19/11/2017"
        },
        {
            "industry_number": "238",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "מלן – אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "19/11/2017"
        },
        {
            "industry_number": "238",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "מלן – אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "19/11/2017"
        },
        {
            "industry_number": "238",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "מלן – אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": "19/11/2017"
        },
        {
            "industry_number": "238",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "מלן – אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": "19/11/2017"
        },
        {
            "industry_number": "239",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית פרטנר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "239",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "פרנ - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "239",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "פרנ - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "239",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "פרנ - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "239",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "פרנ - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "240",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית סלקום",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "240",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "סלק - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "240",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "סלק - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "240",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "סלק - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "240",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "סלק - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "241",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית הראל השקעות",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "241",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "הרא - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "241",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "הרא - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "241",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "הרא - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "241",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "הרא - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "242",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית שופרסל",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "242",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "שפר - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "242",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "שפר - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "242",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "שפר - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "242",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "שפר - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "243",
            "sub_industry_number": "000",
            "industry_or_sub_industry_name": "אופציות על מניית הפניקס",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "243",
            "sub_industry_number": "011",
            "industry_or_sub_industry_name": "פנק - אופציות CALL לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "243",
            "sub_industry_number": "012",
            "industry_or_sub_industry_name": "פנק - אופציות CALL לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "243",
            "sub_industry_number": "021",
            "industry_or_sub_industry_name": "פנק - אופציות PUT לטווח קצר",
            "industry_group": null,
            "canceled_from_date": null
        },
        {
            "industry_number": "243",
            "sub_industry_number": "022",
            "industry_or_sub_industry_name": "פנק - אופציות PUT לטווח ארוך",
            "industry_group": null,
            "canceled_from_date": null
        }
    ]
    },
    {
      type: "table",
      tableCode: "304",
      tableNameCode: "Table 304 - Trade stop reason",
      fields: [
        {
            "trade_stop_code": "1",
            "trade_stop_reason": "הנפקת חברת בת"
        },
        {
            "trade_stop_code": "2",
            "trade_stop_reason": "הודעת חברת בת/קשורה"
        },
        {
            "trade_stop_code": "3",
            "trade_stop_reason": "פרסום דוח חברת בת קשורה"
        },
        {
            "trade_stop_code": "4",
            "trade_stop_reason": "הודעה על שינוי בתנאי נייר"
        },
        {
            "trade_stop_code": "5",
            "trade_stop_reason": "הודעה על איחוד הון"
        },
        {
            "trade_stop_code": "6",
            "trade_stop_reason": "דירוג אג\"ח"
        },
        {
            "trade_stop_code": "7",
            "trade_stop_reason": "בעיות סחירות"
        },
        {
            "trade_stop_code": "9",
            "trade_stop_reason": "פרסום מאזן רבעון ראשון"
        },
        {
            "trade_stop_code": "10",
            "trade_stop_reason": "פרסום מאזן רבעון שלישי"
        },
        {
            "trade_stop_code": "11",
            "trade_stop_reason": "פרסום מאזן שנתי"
        },
        {
            "trade_stop_code": "12",
            "trade_stop_reason": "פרסום מאזן רבעון שני"
        },
        {
            "trade_stop_code": "13",
            "trade_stop_reason": "פרסום מאזן רבעוני"
        },
        {
            "trade_stop_code": "14",
            "trade_stop_reason": "עסקה מהותית"
        },
        {
            "trade_stop_code": "15",
            "trade_stop_reason": "חלוקת דיבידנד"
        },
        {
            "trade_stop_code": "16",
            "trade_stop_reason": "חלוקת הטבה"
        },
        {
            "trade_stop_code": "17",
            "trade_stop_reason": "הכרזה על הנפקה לציבור"
        },
        {
            "trade_stop_code": "18",
            "trade_stop_reason": "הנפקה בדרך של זכויות"
        },
        {
            "trade_stop_code": "19",
            "trade_stop_reason": "הודעה על יחס זכויות"
        },
        {
            "trade_stop_code": "21",
            "trade_stop_reason": "הודעה על מחירי הנפקה"
        },
        {
            "trade_stop_code": "22",
            "trade_stop_reason": "הודעה על הגדלת הון"
        },
        {
            "trade_stop_code": "23",
            "trade_stop_reason": "המרה כפויה/פדיון מוקדם"
        },
        {
            "trade_stop_code": "24",
            "trade_stop_reason": "הודעת החברה"
        },
        {
            "trade_stop_code": "25",
            "trade_stop_reason": "הודעת הבורסה"
        },
        {
            "trade_stop_code": "26",
            "trade_stop_reason": "הצעת רכש / מיזוג"
        },
        {
            "trade_stop_code": "31",
            "trade_stop_reason": "לפני ההגרלה"
        },
        {
            "trade_stop_code": "32",
            "trade_stop_reason": "לפני פדיון סופי"
        },
        {
            "trade_stop_code": "33",
            "trade_stop_reason": "לפני מועד המרה אחרון"
        },
        {
            "trade_stop_code": "41",
            "trade_stop_reason": "פעולה חריגה בבורסה"
        },
        {
            "trade_stop_code": "42",
            "trade_stop_reason": "פעולת מימוש גדולה"
        },
        {
            "trade_stop_code": "43",
            "trade_stop_reason": "טעות בפרסום השער"
        },
        {
            "trade_stop_code": "44",
            "trade_stop_reason": "מחיקת בורסה מרישום/מסחר"
        },
        {
            "trade_stop_code": "45",
            "trade_stop_reason": "טעות בפרסום תשואה"
        },
        {
            "trade_stop_code": "46",
            "trade_stop_reason": "טעות בורסה"
        },
        {
            "trade_stop_code": "47",
            "trade_stop_reason": "הפסקה טכנית"
        },
        {
            "trade_stop_code": "48",
            "trade_stop_reason": "תנודה חדה במדד"
        },
        {
            "trade_stop_code": "49",
            "trade_stop_reason": "פקודות יוצאות דופן"
        },
        {
            "trade_stop_code": "50",
            "trade_stop_reason": "מסחר פתיחה מיוחד בסוף יום"
        },
        {
            "trade_stop_code": "51",
            "trade_stop_reason": "אי בהירות בעניינה של החברה"
        },
        {
            "trade_stop_code": "52",
            "trade_stop_reason": "אי פרסום דוחות"
        },
        {
            "trade_stop_code": "53",
            "trade_stop_reason": "מינוי כונס / מפרק"
        },
        {
            "trade_stop_code": "54",
            "trade_stop_reason": "העמדה לפרעון מיידי"
        },
        {
            "trade_stop_code": "55",
            "trade_stop_reason": "הפסקת מסחר בנכס הבסיס"
        },
        {
            "trade_stop_code": "56",
            "trade_stop_reason": "דו\"ח נכס בסיס"
        },
        {
            "trade_stop_code": "57",
            "trade_stop_reason": "הודעת נכס בסיס"
        },
        {
            "trade_stop_code": "58",
            "trade_stop_reason": "ממתן תנודות"
        },
        {
            "trade_stop_code": "59",
            "trade_stop_reason": "מימוש ביום קובע"
        },
        {
            "trade_stop_code": "60",
            "trade_stop_reason": "עילת 1 אגורה"
        },
        {
            "trade_stop_code": "61",
            "trade_stop_reason": "עקב איחוד/הפחתת הון"
        },
        {
            "trade_stop_code": "62",
            "trade_stop_reason": "כונס/מפרק לחברת בת - רב נכסיה"
        },
        {
            "trade_stop_code": "91",
            "trade_stop_reason": "אי פרסום תשקיף"
        },
        {
            "trade_stop_code": "92",
            "trade_stop_reason": "לא יום עסקים במטבע"
        },
        {
            "trade_stop_code": "93",
            "trade_stop_reason": "לא יום עסקים במטבע + אי פרסום תשקיף"
        },
        {
            "trade_stop_code": "94",
            "trade_stop_reason": "קרן לא נסחרת ביום א'"
        },
        {
            "trade_stop_code": "95",
            "trade_stop_reason": "קרן לא רשומה למסלקה"
        },
        {
            "trade_stop_code": "96",
            "trade_stop_reason": "הודעת מנהל הקרן"
        },
        {
            "trade_stop_code": "97",
            "trade_stop_reason": "קרן לא פעילה"
        },
        {
            "trade_stop_code": "99",
            "trade_stop_reason": "כללי"
        }
      ]
    },
    {
      type: "table",
      tableCode: "306",
      tableNameCode: "Table 306 - Ex codes",
      fields: [
        {
            "value_in_file": "1",
            "structure_in_print": "ב\"ת",
            "ex_type": "בלי תלוש"
        },
        {
            "value_in_file": "2",
            "structure_in_print": "ב\"ד",
            "ex_type": "בלי דיבידנד"
        },
        {
            "value_in_file": "3",
            "structure_in_print": "במ\"ה",
            "ex_type": "בלי מניות הטבה"
        },
        {
            "value_in_file": "4",
            "structure_in_print": "ב\"ז",
            "ex_type": "בלי זכויות"
        },
        {
            "value_in_file": "5",
            "structure_in_print": "ב\"ד במ\"ה",
            "ex_type": "בלי דיבידנד ובלי מניות הטבה"
        },
        {
            "value_in_file": "6",
            "structure_in_print": "ב\"ז במ\"ה",
            "ex_type": "בלי זכויות ובלי מניות הטבה"
        },
        {
            "value_in_file": "7",
            "structure_in_print": "ב\"ד/ז/מ\"ה",
            "ex_type": "בלי דיבידנד, זכויות ומניות הטבה"
        },
        {
            "value_in_file": "9",
            "structure_in_print": "ב\"ת במ\"ה",
            "ex_type": "בלי תלוש ובלי מניות ה\nטבה"
        },
        {
            "value_in_file": "10",
            "structure_in_print": "ב\"ת ב\"ז",
            "ex_type": "בלי תלוש ובלי זכויות"
        },
        {
            "value_in_file": "11",
            "structure_in_print": "ב\"ת/ז/מ\"ה",
            "ex_type": "בלי תלוש, זכויות ומניות הטבה"
        },
        {
            "value_in_file": "12",
            "structure_in_print": "ב\"ז ב\"ד",
            "ex_type": "בלי זכויות ובלי דיבידנד"
        },
        {
            "value_in_file": "13",
            "structure_in_print": "ת\"ט",
            "ex_type": "תיקון טכני"
        },
        {
            "value_in_file": "14",
            "structure_in_print": "א\"א",
            "ex_type": "אחרי איחוד מניות"
        },
        {
            "value_in_file": "15",
            "structure_in_print": "א\"א במ\"ה",
            "ex_type": "בלי מניות הטבה ואחרי איחוד"
        },
        {
            "value_in_file": "16",
            "structure_in_print": "אה\"ה",
            "ex_type": "אחרי איחוד/הפחתת הון"
        },
        {
            "value_in_file": "17",
            "structure_in_print": "ב\"ת בפ\"ח",
            "ex_type": "בלי תלוש ופדיון\n \nחלקי"
        },
        {
            "value_in_file": "07",
            "structure_in_print": "בפ\"ח",
            "ex_type": "בלי פדיון חלקי"
        }
      ]
    },
    {
      type: "table",
      tableCode: "451",
      tableNameCode: "Table 451 - Message type",
      fields: [
        {
            "message_type": "הודעות על תנודה בלתי מוגבלת",
            "record code": "11",
            "transmission_frequency": "יומי"
        },
        {
            "message_type": "הודעות על שערי בסיס למסחר",
            "record code": "13",
            "transmission_frequency": "יומי"
        },
        {
            "message_type": "מדד לתשואה כוללת במניות והמירים - יומי",
            "record code": "16",
            "transmission_frequency": "יומי"
        },
        {
            "message_type": "מדדים לתשואה כוללת באגרות חוב",
            "record code": "19",
            "transmission_frequency": "יומי"
        },
        {
            "message_type": "הודעות על הפסקות מסחר - כר\"מ",
            "record code": "20",
            "transmission_frequency": "יומי"
        },
        {
            "message_type": "הודעות על חברות שפרסמו דוחות כספיים",
            "record code": "21",
            "transmission_frequency": "יומי"
        },
        {
            "message_type": "הודעות על הפסקות מסחר קצובות במשתנים",
            "record code": "23",
            "transmission_frequency": "יומי"
        },
        {
            "message_type": "הפסקות מסחר קצובות במשתנים - פרסום דוחות",
            "record code": "24",
            "transmission_frequency": "יומי"
        },
        {
            "message_type": "הודעות כלליות",
            "record code": "25",
            "transmission_frequency": "יומי"
        },
        {
            "message_type": "הפסקות מסחר מתוכננות בני\"ע",
            "record code": "12",
            "transmission_frequency": "שבועי"
        },
        {
            "message_type": "הודעות על פתיחת מסחר בני\"ע",
            "record code": "14",
            "transmission_frequency": "שבועי"
        },
        {
            "message_type": "מועדי \"אקס\" במניות ובני\"ע המירים",
            "record code": "15",
            "transmission_frequency": "שבועי"
        },
        {
            "message_type": "מדדים לתשואה כוללת במניות והמירים - שבועי",
            "record code": "17",
            "transmission_frequency": "שבועי"
        },
        {
            "message_type": "מק\"מ תוצאות מכרזים",
            "record code": "22",
            "transmission_frequency": "שבועי"
        },
        {
            "message_type": "מדדים לתשואה כוללת במניות והמירים - חדשי",
            "record code": "18",
            "transmission_frequency": "חודשי"
        }
      ]
    },
    {
      type: "table",
      tableCode: "510",
      tableNameCode: "Table 510 - Indices table",
      fields: [
        {
            "index_code": "001",
            "index_name": "ת\"א-125",
            "remarks": "מדד ת\"א-125 מחליף את ת\"א-100 החל מה- 12/2/2017"
        },
        {
            "index_code": "002",
            "index_name": "ת\"א-35",
            "remarks": "מדד ת\"א-35 מחליף את ת\"א-25 החל מה- 12/2/2017"
        },
        {
            "index_code": "003",
            "index_name": "ת\"א גלובל-בלוטק",
            "remarks": "מדד ת\"א בלוטק-50 מחליף את תל טק החל מה- 3/4/2011\nמדד ת\"א בלוטק-50 מחליף את ת\"א בלוטק-50החל מה- 15/6/2014\nמדד ת\"א גלובל-בלוטק מחליף את ת\"א-בלוטק החל מה- 12/2/2017"
        },
        {
            "index_code": "004",
            "index_name": "ת\"א-90",
            "remarks": "מדד ת\"א-90 מחליף את ת\"א-75 החל מה- 12/2/2017"
        },
        {
            "index_code": "005",
            "index_name": "ת\"א בנקים-5",
            "remarks": "מדד ת\"א בנקים-5 מחליף את ת\"א-בנקים החל מה- 12/2/2017"
        },
        {
            "index_code": "006",
            "index_name": "תל-טק 15",
            "remarks": "מבוטל מה- 3/4/2011"
        },
        {
            "index_code": "007",
            "index_name": "ת\"א-SME60",
            "remarks": "מדד ת\"א-SME60 מחליף את ת\"א יתר-50 החל מה- 12/2/2017"
        },
        {
            "index_code": "008",
            "index_name": "ת\"א -פיננסים",
            "remarks": null
        },
        {
            "index_code": "009",
            "index_name": "ת\"א נדל\"ן",
            "remarks": "מדד ת\"א-נדל\"ן מחליף את ת\"א נדל\"ן-15 החל מה- 12/2/2017"
        },
        {
            "index_code": "011",
            "index_name": "ת\"א-צמיחה",
            "remarks": "מדד ת\"א יתר-מאגר מחליף את יתר-ת\"א החל מה- 28/3/2011.\nמדד ת\"א-צמיחה מחליף את  ת\"א יתר-מאגר החל מה- 12/2/2017"
        },
        {
            "index_code": "012",
            "index_name": "ת\"א -מעלה",
            "remarks": null
        },
        {
            "index_code": "013",
            "index_name": "תל- דיב",
            "remarks": "מדד תל-דיב מחליף את תל דיב-20 החל מה- 3/4/2011"
        },
        {
            "index_code": "014",
            "index_name": "תל בונד 20",
            "remarks": null
        },
        {
            "index_code": "015",
            "index_name": "תל בונד 40",
            "remarks": null
        },
        {
            "index_code": "016",
            "index_name": "תל בונד 60",
            "remarks": null
        },
        {
            "index_code": "017",
            "index_name": "תל בונד שקלי בריבית קבועה",
            "remarks": null
        },
        {
            "index_code": "018",
            "index_name": "ת\"א -ביומד",
            "remarks": null
        },
        {
            "index_code": "019",
            "index_name": "ת\"א-טכנולוגיה",
            "remarks": null
        },
        {
            "index_code": "020",
            "index_name": "ת\"א-נפט וגז",
            "remarks": null
        },
        {
            "index_code": "021",
            "index_name": "ת\"א ביטוח-פלוס",
            "remarks": "מדד ת\"א ביטוח-פלוס מחליף את ת\"א-ביטוח החל מה- 12/2/2017"
        },
        {
            "index_code": "022",
            "index_name": "ת\"א-תקשורת וטכנולוגיות מידע",
            "remarks": "מדד ת\"א-תקשורת וטכנולוגיות מידע מחליף את ת\"א-תקשורת החל מה- 12/2/2017"
        },
        {
            "index_code": "023",
            "index_name": "תל בונד צמודות",
            "remarks": null
        },
        {
            "index_code": "024",
            "index_name": "תל בונד צמודות - יתר",
            "remarks": null
        },
        {
            "index_code": "025",
            "index_name": "תל בונד צמודות - בנקים",
            "remarks": null
        },
        {
            "index_code": "026",
            "index_name": "תל בונד - תשואות",
            "remarks": null
        },
        {
            "index_code": "027",
            "index_name": "תל בונד - מאגר",
            "remarks": null
        },
        {
            "index_code": "028",
            "index_name": "ת\"א טק-עילית",
            "remarks": null
        },
        {
            "index_code": "029",
            "index_name": "תל בונד - ריבית משתנה",
            "remarks": null
        },
        {
            "index_code": "030",
            "index_name": "תל בונד - לא צמודות",
            "remarks": null
        },
        {
            "index_code": "031",
            "index_name": "תל בונד - תשואות שקלי",
            "remarks": null
        },
        {
            "index_code": "032",
            "index_name": "ת\"א-רימון",
            "remarks": null
        },
        {
            "index_code": "033",
            "index_name": "ת\"א-SME150",
            "remarks": null
        },
        {
            "index_code": "034",
            "index_name": "תל בונד - Dלובל",
            "remarks": null
        },
        {
            "index_code": "035",
            "index_name": "תל בונד שקלי-50",
            "remarks": null
        },
        {
            "index_code": "036",
            "index_name": "תל בונד-צמודות 0-3",
            "remarks": null
        },
        {
            "index_code": "037",
            "index_name": "תל בונד-צמודות 3-5",
            "remarks": null
        },
        {
            "index_code": "038",
            "index_name": "תל בונד-צמודות 5-15",
            "remarks": null
        },
        {
            "index_code": "039",
            "index_name": "תל בונד-שקלי 0-3",
            "remarks": null
        },
        {
            "index_code": "040",
            "index_name": "תל בונד-שקלי 3-5",
            "remarks": null
        },
        {
            "index_code": "041",
            "index_name": "תל בונד-שקלי 5-15",
            "remarks": null
        },
        {
            "index_code": "042",
            "index_name": "תל בונד-צמודות מעלה",
            "remarks": null
        },
        {
            "index_code": "043",
            "index_name": "תל בונד-שקלי מעלה",
            "remarks": null
        },
        {
            "index_code": "044",
            "index_name": "ת\"א סקטור-באלאנס",
            "remarks": null
        },
        {
            "index_code": "045",
            "index_name": "תל בונד שקלי-בנקים וביטוח",
            "remarks": null
        },
        {
            "index_code": "046",
            "index_name": "תל בונד צמודות-נדל\"ן",
            "remarks": null
        },
        {
            "index_code": "047",
            "index_name": "תל בונד-צמודות  A",
            "remarks": null
        },
        {
            "index_code": "048",
            "index_name": "תל בונד-צמודות  AA-AAA",
            "remarks": null
        },
        {
            "index_code": "049",
            "index_name": "תל בונד-שקלי  A",
            "remarks": null
        },
        {
            "index_code": "050",
            "index_name": "תל בונד-שקלי  AA-AAA",
            "remarks": null
        },
        {
            "index_code": "051",
            "index_name": "ת\"א-תעשייה",
            "remarks": null
        },
        {
            "index_code": "052",
            "index_name": "תל בונד-דולר",
            "remarks": null
        },
        {
            "index_code": "053",
            "index_name": "ת\"א-פמילי",
            "remarks": null
        },
        {
            "index_code": "054",
            "index_name": "ת\"א-תשתיות אנרגיה",
            "remarks": null
        },
        {
            "index_code": "168",
            "index_name": "ת\"א  All-Share",
            "remarks": "מדד ת\"א מאגר מחליף את ת\"א כללי החל מה- 28/3/2011\nמדד ת\"א All-Share מחליף את  ת\"א-מאגר החל מה- 12/2/2017"
        },
        {
            "index_code": "598",
            "index_name": "VTA35",
            "remarks": "מדד נגזרים"
        }
    ]
    },
    {
      type: "table",
      tableCode: "512",
      tableNameCode: "Table 512 - Trade methods",
      fields: [
        {
            "code": "B",
            "description": "אג\"ח"
        },
        {
            "code": "L",
            "description": "מק\"מ"
        },
        {
            "code": "N",
            "description": "מוסדיים אג\"ח"
        },
        {
            "code": "S",
            "description": "מניות"
        },
        {
            "code": "T",
            "description": "MTS"
        },
        {
            "code": "U",
            "description": "מוסדיים מניות"
        }
      ]
    },
    {
      type: "table",
      tableCode: "601",
      tableNameCode: "Table 601 - Contract type (MAOF)",
      fields: [
        {
            "contract_type": "01",
            "contract_type_description": "אופציית Call"
        },
        {
            "contract_type": "02",
            "contract_type_description": "אופציית Put"
        },
        {
            "contract_type": "03",
            "contract_type_description": "חוזה עתידי"
        },
        {
            "contract_type": "04",
            "contract_type_description": "אופציית Call שבועית"
        },
        {
            "contract_type": "05",
            "contract_type_description": "אופציית Put שבועית"
        },
        {
            "contract_type": "06",
            "contract_type_description": "חוזה עתידי שבועי"
        }
      ]
    },
    {
      type: "table",
      tableCode: "602",
      tableNameCode: "Table 602 - Underlying assets (MAOF)",
      fields: [
        {
            "underlying_asset_code": "001",
            "underlying_asset_description": "מדד ת\"א-35",
            "hebrew_notation_3_characters": "ת35",
            "hebrew_notation_2_characters": "תא",
            "english_notation_3_characters": "T35",
            "english_notation_2_characters": "TA",
            "active_from_date": "01/08/1993",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "002",
            "underlying_asset_description": "שער הדולר",
            "hebrew_notation_3_characters": "דלר",
            "hebrew_notation_2_characters": "דל",
            "english_notation_3_characters": "DLR",
            "english_notation_2_characters": "DL",
            "active_from_date": "10/04/1994",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "003",
            "underlying_asset_description": "שער ריבית ל-3 חודשים",
            "hebrew_notation_3_characters": "רב3",
            "hebrew_notation_2_characters": "רב",
            "english_notation_3_characters": "IS3",
            "english_notation_2_characters": "IS",
            "active_from_date": "09/03/2000",
            "canceled_from_date": "07/10/2009"
        },
        {
            "underlying_asset_code": "004",
            "underlying_asset_description": "מדד ת\"א בנקים-5",
            "hebrew_notation_3_characters": "בנק",
            "hebrew_notation_2_characters": "בנ",
            "english_notation_3_characters": "BNK",
            "english_notation_2_characters": "BK",
            "active_from_date": "24/08/2000",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "005",
            "underlying_asset_description": "שער האירו",
            "hebrew_notation_3_characters": "ארו",
            "hebrew_notation_2_characters": "אר",
            "english_notation_3_characters": "EUR",
            "english_notation_2_characters": "EU",
            "active_from_date": "28/11/2001",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "006",
            "underlying_asset_description": "שחר לטווח בינוני",
            "hebrew_notation_3_characters": "שחב",
            "hebrew_notation_2_characters": "שב",
            "english_notation_3_characters": "SHM",
            "english_notation_2_characters": "SM",
            "active_from_date": "24/04/2006",
            "canceled_from_date": "12/03/2008"
        },
        {
            "underlying_asset_code": "007",
            "underlying_asset_description": "שחר לטווח ארוך",
            "hebrew_notation_3_characters": "שחא",
            "hebrew_notation_2_characters": "שא",
            "english_notation_3_characters": "SHL",
            "english_notation_2_characters": "SL",
            "active_from_date": "24/04/2006",
            "canceled_from_date": "12/03/2008"
        },
        {
            "underlying_asset_code": "008",
            "underlying_asset_description": "מניית כיל",
            "hebrew_notation_3_characters": "כיל",
            "hebrew_notation_2_characters": "כל",
            "english_notation_3_characters": "ICL",
            "english_notation_2_characters": "CL",
            "active_from_date": "29/03/2009",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "009",
            "underlying_asset_description": "מניית פועלים",
            "hebrew_notation_3_characters": "פעל",
            "hebrew_notation_2_characters": "פע",
            "english_notation_3_characters": "POL",
            "english_notation_2_characters": "PL",
            "active_from_date": "23/04/2009",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "010",
            "underlying_asset_description": "מניית לאומי",
            "hebrew_notation_3_characters": "לאמ",
            "hebrew_notation_2_characters": "לא",
            "english_notation_3_characters": "LUM",
            "english_notation_2_characters": "LM",
            "active_from_date": "23/04/2009",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "011",
            "underlying_asset_description": "מניית טבע",
            "hebrew_notation_3_characters": "טבע",
            "hebrew_notation_2_characters": "טב",
            "english_notation_3_characters": "TVA",
            "english_notation_2_characters": "TV",
            "active_from_date": "27/05/2009",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "012",
            "underlying_asset_description": "מניית דיסקונט",
            "hebrew_notation_3_characters": "דסק",
            "hebrew_notation_2_characters": "דס",
            "english_notation_3_characters": "DSC",
            "english_notation_2_characters": "DS",
            "active_from_date": "29/05/2011",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "013",
            "underlying_asset_description": "מניית מזרחי",
            "hebrew_notation_3_characters": "מזר",
            "hebrew_notation_2_characters": "מז",
            "english_notation_3_characters": "MZR",
            "english_notation_2_characters": "MZ",
            "active_from_date": "29/05/2011",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "014",
            "underlying_asset_description": "יה\"ש אבנר",
            "hebrew_notation_3_characters": "אבנ",
            "hebrew_notation_2_characters": "אב",
            "english_notation_3_characters": "AVN",
            "english_notation_2_characters": "AV",
            "active_from_date": "29/05/2011",
            "canceled_from_date": "26/02/2017"
        },
        {
            "underlying_asset_code": "015",
            "underlying_asset_description": "יה\"ש ישראמקו",
            "hebrew_notation_3_characters": "ישק",
            "hebrew_notation_2_characters": "יש",
            "english_notation_3_characters": "ISC",
            "english_notation_2_characters": "IS",
            "active_from_date": "29/05/2011",
            "canceled_from_date": "29/04/2012"
        },
        {
            "underlying_asset_code": "016",
            "underlying_asset_description": "יה\"ש רציו",
            "hebrew_notation_3_characters": "רצי",
            "hebrew_notation_2_characters": "רצ",
            "english_notation_3_characters": "RTI",
            "english_notation_2_characters": "RT",
            "active_from_date": "29/05/2011",
            "canceled_from_date": "27/09/2015"
        },
        {
            "underlying_asset_code": "017",
            "underlying_asset_description": "ממשלתית שקלית 0120",
            "hebrew_notation_3_characters": "ממא",
            "hebrew_notation_2_characters": "מא",
            "english_notation_3_characters": "GVA",
            "english_notation_2_characters": "GA",
            "active_from_date": "10/11/2011",
            "canceled_from_date": "15/01/2017"
        },
        {
            "underlying_asset_code": "018",
            "underlying_asset_description": "ממשלתית שקלית 0217",
            "hebrew_notation_3_characters": "ממב",
            "hebrew_notation_2_characters": "מב",
            "english_notation_3_characters": "GVB",
            "english_notation_2_characters": "GB",
            "active_from_date": "10/11/2011",
            "canceled_from_date": "16/02/2014"
        },
        {
            "underlying_asset_code": "019",
            "underlying_asset_description": "מניית בזק",
            "hebrew_notation_3_characters": "בזק",
            "hebrew_notation_2_characters": "בז",
            "english_notation_3_characters": "BZQ",
            "english_notation_2_characters": "BZ",
            "active_from_date": "09/06/2014",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "020",
            "underlying_asset_description": "מניית פריגו",
            "hebrew_notation_3_characters": "פרג",
            "hebrew_notation_2_characters": "פר",
            "english_notation_3_characters": "PRG",
            "english_notation_2_characters": "PR",
            "active_from_date": "09/06/2014",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "021",
            "underlying_asset_description": "מדד ת\"א-125",
            "hebrew_notation_3_characters": "תא1",
            "hebrew_notation_2_characters": "תל",
            "english_notation_3_characters": "TL1",
            "english_notation_2_characters": "TL",
            "active_from_date": "29/01/2015",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "022",
            "underlying_asset_description": "מניית הבינלאומי",
            "hebrew_notation_3_characters": "בנל",
            "hebrew_notation_2_characters": "בל",
            "english_notation_3_characters": "BNL",
            "english_notation_2_characters": "BN",
            "active_from_date": "28/01/2016",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "023",
            "underlying_asset_description": "מניית נייס",
            "hebrew_notation_3_characters": "ניס",
            "hebrew_notation_2_characters": "נס",
            "english_notation_3_characters": "NIC",
            "english_notation_2_characters": "NC",
            "active_from_date": "28/01/2016",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "024",
            "underlying_asset_description": "מניית דלק קבוצה",
            "hebrew_notation_3_characters": "דלק",
            "hebrew_notation_2_characters": "דל",
            "english_notation_3_characters": "DLK",
            "english_notation_2_characters": "DK",
            "active_from_date": "28/01/2016",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "025",
            "underlying_asset_description": "יה\"ש ישראמקו",
            "hebrew_notation_3_characters": "ישק",
            "hebrew_notation_2_characters": "יש",
            "english_notation_3_characters": "ISC",
            "english_notation_2_characters": "IS",
            "active_from_date": "28/01/2016",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "026",
            "underlying_asset_description": "מניית חברה לישראל",
            "hebrew_notation_3_characters": "חלי",
            "hebrew_notation_2_characters": "חל",
            "english_notation_3_characters": "ICO",
            "english_notation_2_characters": "IC",
            "active_from_date": "28/01/2016",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "027",
            "underlying_asset_description": "מניית אופקו",
            "hebrew_notation_3_characters": "אפק",
            "hebrew_notation_2_characters": "אפ",
            "english_notation_3_characters": "OPK",
            "english_notation_2_characters": "OP",
            "active_from_date": "25/02/2016",
            "canceled_from_date": "23/04/2017"
        },
        {
            "underlying_asset_code": "028",
            "underlying_asset_description": "מניית פרוטרום",
            "hebrew_notation_3_characters": "פרט",
            "hebrew_notation_2_characters": "פט",
            "english_notation_3_characters": "FRT",
            "english_notation_2_characters": "FR",
            "active_from_date": "25/02/2016",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "029",
            "underlying_asset_description": "מניית אלביט מערכות",
            "hebrew_notation_3_characters": "אלב",
            "hebrew_notation_2_characters": "אל",
            "english_notation_3_characters": "ELB",
            "english_notation_2_characters": "EL",
            "active_from_date": "25/02/2016",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "030",
            "underlying_asset_description": "מניית עזריאלי",
            "hebrew_notation_3_characters": "עזר",
            "hebrew_notation_2_characters": "עז",
            "english_notation_3_characters": "AZR",
            "english_notation_2_characters": "AZ",
            "active_from_date": "25/02/2016",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "031",
            "underlying_asset_description": "יה\"ש דלק קידוחים",
            "hebrew_notation_3_characters": "דקד",
            "hebrew_notation_2_characters": "דק",
            "english_notation_3_characters": "DDR",
            "english_notation_2_characters": "DR",
            "active_from_date": "25/02/2016",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "032",
            "underlying_asset_description": "מניית פז נפט",
            "hebrew_notation_3_characters": "פזנ",
            "hebrew_notation_2_characters": "פז",
            "english_notation_3_characters": "PAZ",
            "english_notation_2_characters": "PZ",
            "active_from_date": "23/03/2016",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "033",
            "underlying_asset_description": "מניית גזית גלוב",
            "hebrew_notation_3_characters": "גזת",
            "hebrew_notation_2_characters": "גז",
            "english_notation_3_characters": "GZT",
            "english_notation_2_characters": "GZ",
            "active_from_date": "23/03/2016",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "034",
            "underlying_asset_description": "מניית מליסרון",
            "hebrew_notation_3_characters": "מלס",
            "hebrew_notation_2_characters": "מל",
            "english_notation_3_characters": "MLS",
            "english_notation_2_characters": "ML",
            "active_from_date": "23/03/2016",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "035",
            "underlying_asset_description": "מניית שטראוס גרופ",
            "hebrew_notation_3_characters": "שטר",
            "hebrew_notation_2_characters": "שט",
            "english_notation_3_characters": "STR",
            "english_notation_2_characters": "ST",
            "active_from_date": "23/03/2016",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "037",
            "underlying_asset_description": "מניית אורמת טכנו",
            "hebrew_notation_3_characters": "ארמ",
            "hebrew_notation_2_characters": "אר",
            "english_notation_3_characters": "ORM",
            "english_notation_2_characters": "OR",
            "active_from_date": "23/03/2016",
            "canceled_from_date": "23/04/2017"
        },
        {
            "underlying_asset_code": "038",
            "underlying_asset_description": "מניית מיילן",
            "hebrew_notation_3_characters": "מלן",
            "hebrew_notation_2_characters": "מן",
            "english_notation_3_characters": "MYL",
            "english_notation_2_characters": "MY",
            "active_from_date": "23/03/2016",
            "canceled_from_date": "19/11/2017"
        },
        {
            "underlying_asset_code": "039",
            "underlying_asset_description": "מניית פרטנר",
            "hebrew_notation_3_characters": "פרנ",
            "hebrew_notation_2_characters": "פנ",
            "english_notation_3_characters": "PRN",
            "english_notation_2_characters": "PN",
            "active_from_date": "25/05/2017",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "040",
            "underlying_asset_description": "מניית סלקום",
            "hebrew_notation_3_characters": "סלק",
            "hebrew_notation_2_characters": "סל",
            "english_notation_3_characters": "CEL",
            "english_notation_2_characters": "CE",
            "active_from_date": "25/05/2017",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "041",
            "underlying_asset_description": "מניית הראל השקעות",
            "hebrew_notation_3_characters": "הרא",
            "hebrew_notation_2_characters": "הר",
            "english_notation_3_characters": "HAR",
            "english_notation_2_characters": "HR",
            "active_from_date": "25/05/2017",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "042",
            "underlying_asset_description": "מניית שופרסל",
            "hebrew_notation_3_characters": "שפר",
            "hebrew_notation_2_characters": "שפ",
            "english_notation_3_characters": "SFR",
            "english_notation_2_characters": "SF",
            "active_from_date": "26/04/2018",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "043",
            "underlying_asset_description": "מניית הפניקס",
            "hebrew_notation_3_characters": "פנק",
            "hebrew_notation_2_characters": "פק",
            "english_notation_3_characters": "PNX",
            "english_notation_2_characters": "PX",
            "active_from_date": "26/04/2018",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "044",
            "underlying_asset_description": "בזן",
            "hebrew_notation_3_characters": "בזן",
            "hebrew_notation_2_characters": "זן",
            "english_notation_3_characters": "BZN",
            "english_notation_2_characters": "ZN",
            "active_from_date": "20/10/2019",
            "canceled_from_date": null
        },
        {
            "underlying_asset_code": "045",
            "underlying_asset_description": "אלוני חץ",
            "hebrew_notation_3_characters": "אחץ",
            "hebrew_notation_2_characters": "חץ",
            "english_notation_3_characters": "AHZ",
            "english_notation_2_characters": "HZ",
            "active_from_date": "23/04/2020",
            "canceled_from_date": null
        }
    ]
    },
    {
      type: "table",
      tableCode: "605",
      tableNameCode: "Table 605 - Underlying assets type (MAOF)",
      fields: [
        {
            "underlying_asset_type": "01",
            "description": "מדד מניות"
        },
        {
            "underlying_asset_type": "02",
            "description": "שער מט\"ח"
        },
        {
            "underlying_asset_type": "03",
            "description": "ריבית"
        },
        {
            "underlying_asset_type": "04",
            "description": "מניה בודדת"
        },
        {
            "underlying_asset_type": "05",
            "description": "אג\"ח ממשלתית"
        }
      ]
    },
    {
      type: "table",
      tableCode: "681",
      tableNameCode: "Table 681 - Trade methods (MAOF - markets)",
      fields: [
        {
            "trading_method_code": "M",
            "trading_method_description": "מסחר רציף בנגזרים על מדד ת\"א-35",
            "canceled_from_date": null
        },
        {
            "trading_method_code": "D",
            "trading_method_description": "מסחר רציף בנגזרים על שער הדולר",
            "canceled_from_date": null
        },
        {
            "trading_method_code": "I",
            "trading_method_description": "מסחר רציף בחוזים עתידיים על שער הריבית ל-3 חודשים",
            "canceled_from_date": "07/10/2009"
        },
        {
            "trading_method_code": "K",
            "trading_method_description": "מסחר רציף בנגזרים על מדד ת\"א בנקים",
            "canceled_from_date": null
        },
        {
            "trading_method_code": "E",
            "trading_method_description": "מסחר רציף בנגזרים על שער האירו",
            "canceled_from_date": null
        },
        {
            "trading_method_code": "O",
            "trading_method_description": "מסחר רציף בחוזים עתידיים על שחר לטווח בינוני",
            "canceled_from_date": "12/03/2008"
        },
        {
            "trading_method_code": "P",
            "trading_method_description": "מסחר רציף בחוזים עתידיים על שחר לטווח ארוך",
            "canceled_from_date": "12/03/2008"
        },
        {
            "trading_method_code": "Q",
            "trading_method_description": "מסחר רציף באופציות על מניות בודדות",
            "canceled_from_date": null
        },
        {
            "trading_method_code": "G",
            "trading_method_description": "מסחר רציף באופציות על אג\"ח ממשלתיות",
            "canceled_from_date": "12/01/2017"
        },
        {
            "trading_method_code": "A",
            "trading_method_description": "מסחר רציף בנגזרים על מדד ת\"א-125",
            "canceled_from_date": null
        }
    ]
    },
  ]
}