import { useRef, useState } from "react";
import CrossIcon from "../../icons/CrossIcon";
import Button from "./Button";
import Input from "./Input";
import axios from "axios";


enum ContentType{
  Youtube='youtube',
  Twitter="twitter"
}
// Controlled component
const CreateContentModal = ({ open, onClose}:{
open:boolean,
onClose:()=>void
}) => {
   
  const titleRef=useRef<HTMLInputElement>(null);
  const linkRef=useRef<HTMLInputElement>(null);
  const [type,setType]=useState(ContentType.Youtube)
  
  const addContent=async()=>{
    const title=titleRef.current?.value
    const link=linkRef.current?.value

    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/content`,{
      link,  
      title,
      type
    },{
      headers:{
        "Authorization":localStorage.getItem('token')
      }
    })
    alert('content added')
    onClose()
  }

  return (
    <div>
      {open && (
        <div className="max-w-screen h-screen bg-slate-600/60 fixed inset-0 flex justify-center items-center">
          <div className="bg-white h-fit rounded p-4">
            <div className="flex justify-end cursor-pointer" onClick={onClose}>
              <CrossIcon size="lg" />
            </div>
            <div>
              <Input ref={titleRef} placeholder="title"  />
              <Input ref={linkRef} placeholder="link" />
            </div>
            <div className="flex gap-12 justify-center">
              <Button onClick={()=>setType(ContentType.Youtube)} text="Youtube" variant={type===ContentType.Youtube?'primary':'secondary'}/>
              <Button onClick={()=>setType(ContentType.Twitter)} text="twitter" variant={type===ContentType.Twitter?'primary':'secondary'}/>
            </div>
            <div className="flex justify-center pt-2">
              <Button onClick={addContent} variant="primary" text="Submit" fullWidth={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



export default CreateContentModal;
