import './App.css';
import NewCodeForm from "./components/new-code-form/new-code-form";
import {useEffect, useState} from "react";
import CodeCard from "./components/code-card/code-card";

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
    <div className="app">
      <NewCodeForm
        show={showNewForm}
        onClose={() => setShowNewForm(false)}
      />
      <div className="codes-container">
        {codes.map((code) => (
          <CodeCard
            code={code}
            key={code.name}
          />
        ))}
      </div>
      <button
        className="add-new-code-button"
        onClick={() => setShowNewForm(true)}
      >
        Add new code
      </button>
    </div>
  );
}

export default App;
