import CrossIcon from "../../icons/CrossIcon";
import Button from "./Button";
import Input from "./Input";

// Controlled component
const CreateContentModal = ({ open, onClose}:{
open:boolean,
onClose:()=>void
}) => {
  return (
    <div>
      {open && (
        <div className="max-w-screen h-screen bg-slate-600/60 fixed inset-0 flex justify-center items-center">
          <div className="bg-white h-fit rounded p-4">
            <div className="flex justify-end cursor-pointer" onClick={onClose}>
              <CrossIcon size="lg" />
            </div>
            <div>
              <Input placeholder="title"  />
              <Input placeholder="link" />
            </div>
            <div className="flex justify-center">
              <Button variant="primary" text="Submit" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



export default CreateContentModal;
