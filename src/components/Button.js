import React from 'react';

function Button({text, buttonClass, id,
  onClick = () => {
    console.log('nothing passed');
  }}) {
  return (
    <button onClick={() => onClick(id)} className={buttonClass}>
      {text}
    </button>
  );
}

export default Button;
