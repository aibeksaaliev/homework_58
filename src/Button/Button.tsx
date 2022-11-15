import React from 'react';

interface ButtonProps {
  name: string;
  buttonType: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({name, buttonType, onClick}) => {
  const buttonCss: string = "w-25 btn btn-" + buttonType;

  return (
    <>
     <button className={buttonCss} onClick={onClick}>{name}</button>
    </>
  );
};

export default Button;