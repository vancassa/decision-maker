const Option = ({
  option,
  label,
  onChange,
  canDelete,
  deleteOption,
}: {
  option: string;
  label: string;
  onChange: (value: string) => void;
  canDelete: boolean;
  deleteOption: () => void;
}) => {
  return (
    <div className="option">
      <span className="option__label">{label}</span>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          className="option__input"
          value={option}
          onChange={(e) => onChange((e.target as HTMLInputElement).value)}
        />
        {canDelete && (
          <button type="button" className="option__delete" onClick={deleteOption}>
            x
          </button>
        )}
      </div>
    </div>
  );
};
export default Option;
