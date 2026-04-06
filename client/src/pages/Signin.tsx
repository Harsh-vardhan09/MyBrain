import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

const Signin = () => {
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white  border min-w-48 p-8 rounded">
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <div className="flex items-center justify-center">
          <Button variant="primary" text="Sign in" fullWidth={true}/>
        </div>
      </div>
    </div>
  )
}

export default Signin
