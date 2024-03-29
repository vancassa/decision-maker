import { useState } from "preact/hooks";
import "./app.css";
import Option from "./option";

export function App() {
  const [options, setOptions] = useState(["", ""]);
  const [result, setResult] = useState("");
  const isButtonEnabled = options.reduce((acc, current) => acc && current !== "", true);

  const changeOption = (index: number, newValue: string) => {
    const newOptions = [...options];
    newOptions[index] = newValue;
    setOptions(newOptions);
  };

  const decide = () => {
    const resultIdx = Math.floor(Math.random() * options.length);
    setResult(options[resultIdx]);
  };

  const deleteOption = (index: number) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
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
          <h1 className="title">Make decision for me</h1>
          {options.map((option, i) => (
            <Option
              key={`${option}_${i}`}
              option={option}
              label={`Option ${i + 1}`}
              onChange={(newValue) => changeOption(i, newValue)}
              canDelete={i !== 0 && i !== 1}
              deleteOption={() => deleteOption(i)}
            />
          ))}
          <div className="add_option">
            <button
              type="button"
              className="add_option__button"
              onClick={() => setOptions((options) => [...options, ""])}
            >
              + Add
            </button>
          </div>
          <button type="button" disabled={!isButtonEnabled} className="submit" onClick={decide}>
            Decide for me
          </button>
        </>
      )}
    </>
  );
}
