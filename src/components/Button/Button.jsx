import React from "react";
import { CustomButton } from "./Button.styled";
function Button({ text, onDeleteClick }) {
  return <CustomButton onClick={onDeleteClick}>{text}</CustomButton>;
}

export default Button;
