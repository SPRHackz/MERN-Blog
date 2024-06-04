import { Link ,useLocation} from "react-router-dom"
import {Moon, Search} from "lucide-react"
import { Button, Navbar ,NavbarCollapse,NavbarLink,NavbarToggle,TextInput} from "flowbite-react"

const Header = () => {
  const path = useLocation().pathname;
  return (
  <Navbar className="border-b-2 ">
    <Link to="/" className="flex">
      <img src="/vite.svg" alt="SPR-Blog"  />
      <h2 className=" self-center whitespace-nowrap text-2xl sm:text-xl  px-1 font-bold text-blue-600 dark:text-white">SPR Blog</h2>
    </Link>
    <form>
      <TextInput className="hidden lg:inline" type="text" placeholder="Search..." rightIcon={Search} />
    </form>
    <Button className="w-12 h-12 lg:hidden "color="gray" pill>
      <Search/>
    </Button>
    <div className="flex gap-2 md:order-2">
      <Button className="w-12 h-12 hidden sm:inline" color="gray" pill>
        <Moon/>
      </Button>
      <Link to="/sign-in">
      <Button className="text-2xl font-bold" gradientDuoTone="purpleToBlue"outline >
       Sign In
      </Button>
      </Link>
      <NavbarToggle />
    </div>
      <NavbarCollapse className="">
        <NavbarLink  active={path=="/"} as={"div"}>
          <Link to="/">Home</Link>
        </NavbarLink>
        <NavbarLink active={path=="/about"} as={"div"}>
          <Link to="/about">About</Link>
        </NavbarLink>
        <NavbarLink active={path=="/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </NavbarLink>
      </NavbarCollapse>
  </Navbar>
    
  )
}

export default Header