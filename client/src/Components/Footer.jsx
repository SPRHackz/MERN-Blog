import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { Codepen, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const FooterCom = () => {
    return (
        <Footer className="border border-t-8 border-teal-500 rounded-none ">
            <div className="w-full max-w-7xl mx-auto px-20 mb-10">
                <div className=" grid w-full justify-between sm:flex md:grid-col-1">
                    <div className="mt-5">
                        <Link to="/" className="flex m-3">
                            <img src="/vite.svg" alt="SPR-Blog" />
                            <h2 className=" self-center whitespace-nowrap text-xl sm:text-2xl  px-2 font-bold text-blue-600 dark:text-white">SPR Blog</h2>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <FooterTitle title="ABOUT" />
                            <FooterLinkGroup col>
                                <FooterLink href="#" rel="noopener noreferrer">Github</FooterLink>
                                <FooterLink href="#" rel="noopener noreferrer">Instgram</FooterLink>
                                <FooterLink href="#" rel="noopener noreferrer">Facebook</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle title="Follow us" />
                            <FooterLinkGroup col>
                                <FooterLink href="#" rel="noopener noreferrer">LinkedIn</FooterLink>
                                <FooterLink href="#" rel="noopener noreferrer">LeetCode</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle title="legal" />
                            <FooterLinkGroup col>
                                <FooterLink href="#" rel="noopener noreferrer">Privacy Policy</FooterLink>
                                <FooterLink href="#" rel="noopener noreferrer">Tems &amp; Conditions</FooterLink>
                            </FooterLinkGroup>
                        </div>
                    </div>
                </div>
                <FooterDivider />
                <div className="w-full sm:flex sm:items-center  sm:justify-between ">
                    <FooterCopyright href="#" by="SPRHackz" year={new Date().getFullYear()}/>
                    <div className="flex  gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <FooterIcon href="#" icon={Linkedin}/>
                        <FooterIcon href="#" icon={Github}/>
                        <FooterIcon href="#" icon={Codepen}/>
                        <FooterIcon href="#" icon={Twitter}/>
                        <FooterIcon href="#" icon={Facebook}/>
                        <FooterIcon href="#" icon={Instagram}/>
                    </div>
                </div>
            </div>


        </Footer>

    )
}

export default FooterCom