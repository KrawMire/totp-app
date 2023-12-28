import { useState } from "react";
import ModalWindow from "../modal-window/modal-window";
import "./new-code-form.css"

export default function NewCodeForm(props) {
  const [codeName, setCodeName] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const saveCode = () => {
    if (codeName === "" || secretKey === "") {
      alert("Code name and secret key cannot be empty");
      return;
    }

    let codes = [];
    const codesJson = localStorage.getItem("codes");

    if (codesJson) {
      codes = JSON.parse(codesJson);
    }

    const newCode = {
      name: codeName,
      key: secretKey
    };

    codes.push(newCode);
    localStorage.setItem("codes", JSON.stringify(codes));
  };

  return (
    <ModalWindow
      show={props.show}
      onClose={props.onClose}
    >
      <div className="new-code-form-container">
        <div className="new-code-form-header">
          <h2>Add new code</h2>
          <button
            className="close-button"
            onClick={() => props.onClose()}
          >
            x
          </button>
        </div>

        <div className="new-code-form">
          <label>Name:</label>
          <input onChange={(event) => setCodeName(event.target.value)}/>

          <label>Secret key:</label>
          <input onChange={(event) => setSecretKey(event.target.value)}/>

          <button
            onClick={saveCode}
            className="save-code-button"
          >
            Save code
          </button>
        </div>
      </div>
    </ModalWindow>
  );
}