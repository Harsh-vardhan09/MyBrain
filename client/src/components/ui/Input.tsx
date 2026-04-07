const Input = ({ placeholder,ref }: { 
    placeholder:string;
    ref?:any
 }) => {
  return (
    <div className="">
      <input
        placeholder={placeholder}
        type={"text"}
        className="px-4 py-2 rounded border m-2"
        ref={ref}
      />
    </div>
  );
};
export default Input;