import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import "./app.css";
import Option from "./option";

export function App() {
  const [options, setOptions] = useState(["", ""]);
  const [result, setResult] = useState("");

  const isButtonEnabled = options.reduce((acc, current) => current !== "", true);

  const changeOption = (index: number, newValue: string) => {
    const newOptions = [...options];
    newOptions[index] = newValue;
    setOptions(newOptions);
  };

  const decide = () => {
    const resultIdx = Math.floor(Math.random() * options.length);
    setResult(options[resultIdx]);
    console.log(resultIdx);
  };

  return (
    <>
      {result ? (
        <div className="result">
          <h1 className="result__label">
            I think you should go with <span className="result__label--bold">{result}</span>
          </h1>
          <button type="button" className="result__button" onClick={() => setResult("")}>
            Try again
          </button>
        </div>
      ) : (
        <>
          <h1>Make decision for me</h1>
          {options.map((option, i) => (
            <Option
              option={option}
              label={`Option ${i + 1}`}
              onChange={(newValue) => changeOption(i, newValue)}
            />
          ))}
          <button
            type="button"
            className="add_option"
            onClick={() => setOptions((options) => [...options, ""])}
          >
            + Add
          </button>
          <button type="button" disabled={!isButtonEnabled} className="submit" onClick={decide}>
            Decide for me
          </button>
        </>
      )}
    </>
  );
}
