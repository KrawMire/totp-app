import './App.css';
import generateTOTP from "./utils/totp-generator";
import NewCodeForm from "./components/new-code-form";
import {useEffect, useState} from "react";

function App() {
  const [showNewForm, setShowNewForm] = useState(false);
  const [, setRefreshCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRefreshCount(prevCount => prevCount + 1);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);


  let codes = [];
  const codesJson = localStorage.getItem("codes");

  if (codesJson) {
    codes = JSON.parse(codesJson);
  }

  return (
    <div className="App">
      {showNewForm && <NewCodeForm onClose={() => setShowNewForm(false)}/>}
      {codes.map((code) => (
        <div key={code.name}>
          <p>{code.name}</p>
          <p>{generateTOTP(code.key)}</p>
        </div>
      ))}
      <button onClick={() => setShowNewForm(true)}>Add new code</button>
    </div>
  );
}

export default App;
