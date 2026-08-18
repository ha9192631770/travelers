import React, { useState } from "react";
import { navigationLinks } from "../../constants/header";
import logo from "../../assets/images/CMS Travelers Logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="xl:w-[85.98%] md:w-[90%] w-[95%] bg-white justify-self-center">
            <nav className="hidden md:flex flex-row items-center  h-[104px] justify-between">
                <div className="flex-1">
                    <Link to="/">
                        <img src={logo} alt="CMS Travelers" className="w-[30%] md:w-[70%] xl:w-auto" />
                    </Link>
                </div>
                <div className="lg:w-[39.44%] md:w-[50%]">
                    <ul className="w-full flex flex-row justify-between">
                        {navigationLinks.map((link) => (
                            <li key={link.label} className="font-['Poppins'] text-[#6C7171] font-normal xl:text-[16px] md:text-[14px] leading-[100%] tracking-[2%]">
                                <NavLink
                                    to={link.href}
                                    end={link.href === "/"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-[#3F4579] font-['Work_Sans'] font-bold md:text-[14] xl:text-[15px] leading-[100%] tracking-[-2%] text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-3px] after:rounded-[13px] after:h-[3px] after:w-1/2 after:bg-[#3F4579]"
                                            : "text-[#6C7171]"
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-1 justify-end font-['Poppins'] xl:gap-[31px] md:gap-[16px] font-normal items-center xl:text-[16px] md:text-[14px] h-[49.19px] leading-[100%] tracking-[2%] content-end">
                    <Link to="login" className="w-[20.52%] text-[#6C7171] text-center">Login</Link>
                    <Link to="signUp" className="flex bg-[#3F4579] w-[35.57%] rounded-[6px] items-center justify-center text-center text-white h-full">Sign Up</Link>
                </div>
            </nav>

            <nav className="flex md:hidden flex-row h-[104px] items-center justify-between">
                <Link to="/">
                    <img src={logo} alt="CMS Travelers" className="w-[70%]" />
                </Link>

                <button
                    type="button"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    className="flex flex-col gap-1 md:hidden cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? (
                        <>
                            <span className="text-[#3F4579] text-[28px] leading-none">×</span>
                        </>
                    ) : (
                        <>
                            <span className="block h-[2px] w-[24px] bg-[#3F4579]"></span>
                            <span className="block h-[2px] w-[24px] bg-[#3F4579]"></span>
                            <span className="block h-[2px] w-[24px] bg-[#3F4579]"></span>
                        </>
                    )}
                </button>

            </nav>

            {isOpen && (
                <div className="flex flex-col md:hidden bg-white mb-8">
                    <div className="w-full">
                        <ul className="w-full flex flex-col gap-[2px] justify-between">
                            {navigationLinks.map((link) => (
                                <li key={link.label} className="font-['Poppins'] text-[#6C7171] font-normal xl:text-[16px] md:text-[14px] leading-[100%] tracking-[2%]">
                                    <Link to={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-end flex-col font-['Poppins'] gap-[2px] font-normal items-center xl:text-[16px] md:text-[14px] h-[100px] leading-[100%] tracking-[2%] content-end">
                        <Link to="login" className="flex w-[33%] h-[45px] text-[#6C7171] text-center items-center justify-center">Login</Link>
                        <Link to="signUp" className="flex bg-[#3F4579] h-[45px] w-[33%] rounded-[6px] items-center justify-center text-center text-white">Sign Up</Link>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header