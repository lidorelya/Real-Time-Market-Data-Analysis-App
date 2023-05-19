import React, { useMemo } from 'react';

export default (props) => {
  const data = useMemo(
    () => props.api.getDisplayedRowAtIndex(props.rowIndex).data,
    []
  );

/*   return (
    <div className="custom-tooltip" style={{backgroundColor: props.color || 'white'}}>
      <div className="panel-heading">
        <h3 className="panel-title">{data.SecurityID}</h3>
      </div>
      <div className="panel-body">
        <h4 style={{ whiteSpace: 'nowrap' }}>{data.SecurityID}</h4>
        <p>Total: {data.Price}</p>
      </div>
    </div>
  ); */

  return (
    <div
      className="custom-tooltip"
      /* style={{ backgroundColor: props.color || 'white' , color: 'red'}} */
      style={{ color: 'white'}}
    >
      <p>
        <span>{data.SecurityID}</span>
      </p>
      <p>
        <span>Name: </span> {data.NameHebrew}
      </p>
      <p>
        <span>Price: </span> {data.Price}
      </p>
    </div>
  );
};
