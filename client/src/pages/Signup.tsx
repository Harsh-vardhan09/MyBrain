import { useRef } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signup = async () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const navigate = useNavigate();

    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/signup`, {
        username,
        password,
      })
      .catch((e) => {
        console.log(e);
      });
    alert("signed up");
    navigate('/signin')
  };
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white  border min-w-48 p-8 rounded">
        <Input placeholder="Username" ref={usernameRef} />
        <Input placeholder="Password" ref={passwordRef} />
        <div className="flex items-center justify-center">
          <Button
            onClick={signup}
            variant="primary"
            text="Sign up"
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
