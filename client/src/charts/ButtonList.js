import React from 'react';
import '../styles.css'

//const style={ width: "100%", height: "100%", padding: "0px 0px", fontSize: "12px", background: "none", border:0, color: "white" }

const ButtonList = ({ data, onButtonClick }) => {
  const handleClick = (buttonLabel) => {
    onButtonClick(buttonLabel);
  };

  return (
    <>
      {data.map((buttonData, index) => (
        //<button key={index} id={buttonData.id} onClick={() => handleClick(buttonData.id)} className={buttonData.selection === buttonData.id ? 'active' : ''}>
        <button key={index} id={buttonData.id} className="ButtonList" onClick={() => handleClick(buttonData.id)}>
          <b>{buttonData.label}</b>
        </button>
      ))}
    </>
  );
};

export default ButtonList;