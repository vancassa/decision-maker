const Option = ({
  option,
  label,
  onChange,
}: {
  option: string;
  label: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="option">
      <span>{label}</span>
      <input
        type="text"
        className="option_input"
        value={option}
        onChange={(e) => onChange((e.target as HTMLInputElement).value)}
      />
    </div>
  );
};
export default Option;
