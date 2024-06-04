import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
  const [formData,setFormData] = useState({})
  const [errormsg,setErrorMsg]=useState(null) 
  const [Loading,setLoading]=useState(null) 
  const navigate = useNavigate()

  const handleChange =(e)=>{
   setFormData({...formData,[e.target.id]:e.target.value.trim()}) 

  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(!formData.username || !formData.password ||!formData.email){
      return setErrorMsg("Please fill out all fields")
    }
    try{
      setLoading(true)
      setErrorMsg(null)
      const res = await fetch("/api/auth/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData),
      });
      const data = await res.json()
      if (data.success === false){
        return setErrorMsg(data.message)
      }
      setLoading(false)
      if(res.ok){
        navigate("/sign-in")
      }
    }catch(error){
      setErrorMsg(error.message)
      setLoading(false);
    }
  }
  
  return (
    <div className="min-h-screen mt-14 ">
      <div className="flex p-5 max-w-3xl mx-auto flex-col md:flex-row gap-5 ">
        {/* left */}
        <div className="flex-1   m-auto">
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
          <form  className="flex flex-col gap-4 " onSubmit={handleSubmit}>
            {/* username */}
              <div>
                <Label value="Your username"/>
                <TextInput type="text" placeholder="Username"
                 id="username" onChange={handleChange}/>
              </div>
              {/* Email */}
              <div>
                <Label value="Your Email"/>
                <TextInput type="email" placeholder="example@gmail.com"
                 id="email" onChange={handleChange}/>
              </div>
              {/* Password */}
              <div>
                <Label value="Your Password"/>
                <TextInput type="password" placeholder="Password"
                 id="password" onChange={handleChange}/>
              </div>
              <Button  gradientDuoTone="purpleToBlue"type="submit" disabled={Loading} >
                {
                  Loading ? (
                    <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                    </>
                    
                  ):"Sign Up"
                }
              </Button>

          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an Account? </span>
            <Link to="/sign-in" className="text-blue-500">Sign In</Link>
          </div>
          {errormsg && (
            <Alert className="mt-5 bg-red-300" color="failure">
              {errormsg}
            </Alert>
          )}
        </div>

      </div>
    </div>
  )
}

export default SignUp