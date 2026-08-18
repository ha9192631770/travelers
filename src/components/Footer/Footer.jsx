import React from "react";
import {
    footerInfo,
    footerSocialLinks,
    footerLegalLinks,
    topDestinations,
    usefulLinks,
    hotTravelPackages,
} from "../../constants/footer";
import logo from "../../assets/images/CMS Travelers Footer Logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="flex flex-col bg-black w-full min-h-[476.28px] font-['Open_Sans']">
            <div className="pt-[96.9px] grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row flex-1 gap-[30px] md:gap-0 md:w-[95%] lg:w-[90%] xl:w-[70.31%] self-center items-start justify-between lg:px-[11.81px]">
                {/* About / Info */}
                <div className="flex-col">
                    <div className="md:mb-[33px] mb-[15px] ">
                        <Link to="/">
                            <img src={logo} alt="CMS Travelers" />
                        </Link>
                    </div>
                    <div className="flex flex-col text-[#DAEAEA]">
                        <address className="flex flex-col not-italic  gap-[14px]">
                            <div className="flex items-center gap-[14px]">
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    className="text-[#9DA7FF] w-[9px] h-[19px]"
                                />
                                <p className=" font-normal text-[12.6px] leading-[18.9px] tracking-normal align-middle">{footerInfo.address}</p>
                            </div>

                            <a
                                href={`tel:${footerInfo.phone}`}
                                className="flex items-center gap-[14px]"
                            >
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="text-[#9DA7FF]  -scale-x-100  w-[12px] h-[19px]"
                                />
                                <span className=" font-normal text-[12.6px] leading-[18.9px] tracking-normal align-middle">{footerInfo.phone}</span>
                            </a>

                            <a
                                href={`mailto:${footerInfo.email}`}
                                className="flex items-center gap-[14px]"
                            >
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="text-[#9DA7FF]  w-[13px] h-[19px]"
                                />
                                <span className=" font-normal text-[12.6px] leading-[18.9px] tracking-normal align-middle">{footerInfo.email}</span>
                            </a>
                        </address>
                    </div>
                    <div className="flex flex-row mt-[23px] gap-[4px]">
                        {footerSocialLinks.map((social) => (
                            <a key={social.name} href={social.href} aria-label={social.name}>
                                <img src={social.icon} alt="" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Top Destination */}
                <div>
                    <div className="text-[#E1F0F0] md:mb-[33px] mb-[15px]  font-normal text-[18.11px] leading-[23.62px] tracking-normal align-middle capitalize">Top Destination</div>

                    <ul className="flex flex-col gap-[14.18px]">
                        {topDestinations.map((destination) => (
                            <li key={destination.name} className="text-[#DAEAEA] text-[12.6px]">
                                <Link to={destination.href}>
                                    {destination.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-[#E1F0F0] font-normal text-[18.11px] leading-[23.62px] tracking-normal align-middle capitalize md:mb-[33px] mb-[15px] ">
                        Useful Links
                    </h3>

                    <ul className="flex flex-col gap-[14.18px]">
                        {usefulLinks.map((link) => (
                            <li
                                key={link.name}
                                className="text-[#E1F0F0] font-normal text-[12.6px] leading-[18.9px] tracking-normal align-middle capitalize"
                            >
                                <Link to={link.href}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Hot Travel Package */}
                <div>
                    <h3 className="text-[#E1F0F0] font-normal text-[18.11px] leading-[23.62px] tracking-normal align-middle capitalize md:mb-[33px] mb-[15px] ">
                        Hot Travel Package
                    </h3>

                    <div className="flex flex-col gap-[18.9px]">
                        {hotTravelPackages.map((travelPackage) => (
                            <Link
                                key={travelPackage.id}
                                to={travelPackage.href}
                                className="flex flex-row gap-3"
                            >
                                <img
                                    src={travelPackage.image}
                                    alt={travelPackage.title}
                                />

                                <div className="flex flex-col justify-between lg:w-[56.17%]">
                                    <span className="text-[#E1F0F0] font-normal text-[11.81px] leading-[17.32px] tracking-normal align-middle">
                                        {travelPackage.title}
                                    </span>

                                    <span className="text-[#E1F0F0] font-normal text-[11.02px] leading-[17.32px] tracking-normal align-middle">
                                        Start From <span className="text-[#9DA7FF]">{travelPackage.price}</span>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-row md:mt-0 mt-8 w-[70.31%] self-center items-start px-[11.81px] gap-[30.51px] pb-[50.93px]">
                {footerLegalLinks.map((legalLink) => (
                    <Link
                        key={legalLink.name}
                        to={legalLink.href}
                        className="text-[#DAEAEA] font-normal text-[12.6px] leading-[18.9px] tracking-normal align-middle capitalize"
                    >
                        {legalLink.name}
                    </Link>
                ))}
            </div>
        </footer>
    );
};

export default Footer;