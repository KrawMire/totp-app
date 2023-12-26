import {useState} from "react";

export default function NewCodeForm(props) {
  const [codeName, setCodeName] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const saveCode = () => {
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
    <div>
      <button onClick={() => props.onClose()}>X</button>
      <label>Name:</label>
      <input onChange={(event) => setCodeName(event.target.value)}/>

      <label>Secret key</label>
      <input onChange={(event) => setSecretKey(event.target.value)}/>

      <button onClick={saveCode}>Save code</button>
    </div>
  );
}