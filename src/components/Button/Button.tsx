import React from "react";
import "./styles.css";

function Button(props: any) {
  return <button type="submit" onClick={props.handleClick}>Botão</button>
}

export default Button;
