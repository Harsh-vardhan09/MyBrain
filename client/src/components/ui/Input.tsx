const Input = ({ onChange, placeholder }: { 
    onChange?: () => void,
    placeholder:string
 }) => {
  return (
    <div className="">
      <input
        placeholder={placeholder}
        type={"text"}
        className="px-4 py-2 rounded border m-2"
        onChange={onChange}
      />
    </div>
  );
};
export default Input;