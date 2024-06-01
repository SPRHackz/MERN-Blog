import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20  ">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-5">
        {/* left */}
        <div className="flex-1">
        <Link to="/" className="flex ">
          <img src="/vite.svg" alt="SPR-Blog"  />
          <h2 className=" text-4xl  px-1 font-bold text-blue-600  dark:text-white">SPR Blog</h2>
        </Link>
        <p className="text-sm mt-5 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, distinctio.
        </p>
        </div>
        {/* right */}
        <div className="flex-1 ">
          <form  className="flex flex-col gap-4 ">
            {/* username */}
              <div>
                <Label value="Your username"/>
                <TextInput type="text" placeholder="Username"
                 id="username"/>
              </div>
              {/* Email */}
              <div>
                <Label value="Your Email"/>
                <TextInput type="text" placeholder="example@gmail.com"
                 id="email"/>
              </div>
              {/* Password */}
              <div>
                <Label value="Your Password"/>
                <TextInput type="text" placeholder="Password"
                 id="password"/>
              </div>
              <Button className="bg-blue-600" type="submit">
                Sign Up
              </Button>

          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an Account? </span>
            <Link to="/sign-in" className="text-blue-500">Sign In</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SignUp