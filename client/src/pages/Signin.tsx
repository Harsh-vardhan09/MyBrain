import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const usernameRef=useRef<HTMLInputElement>(null);
  const passwordRef=useRef<HTMLInputElement>(null);
  const navigate=useNavigate();

  const signin=async()=>{
    const username=usernameRef.current?.value;
    const password=passwordRef.current?.value;

  const response=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/signin`,{
        username,
        password
    }).catch((e)=>{
      console.log(e)
    })
    const jwt=response?.data.token;
    localStorage.setItem('token',jwt);
    //redirect user to dashboard
    navigate('/');
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white  border min-w-48 p-8 rounded">
        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" />
        <div className="flex items-center justify-center">
          <Button onClick={signin} variant="primary" text="Sign in" fullWidth={true}/>
        </div>
      </div>
    </div>
  )
}

export default Signin
