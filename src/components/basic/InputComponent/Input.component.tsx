const InputComponent = ({
  labelText,
  type,
  value,
  setValue,
}: {
  labelText: string;
  type: string;
  value: string;
  setValue: (text: string) => void;
}) => {
  return (
    <div className="input">
      <label className="title title-dark title-capitalize title-medium">{labelText}</label>
      <input className="input-value" value={value} type={type} onChange={(event) => setValue(event.target.value)} />
    </div>
  );
};

export default InputComponent;
