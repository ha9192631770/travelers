import React from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../../assets/icons/packageArrowIcon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const DestinationCard = ({ destination, className = "", showArrow = true }) => {
    return (
        <Link
            to={destination.href}
            className={`relative overflow-hidden rounded-[17.69px] ${className}`}
        >
            <img
                src={destination.image}
                alt={destination.name}
                className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-[20px] left-[10px] right-[55px] lg:left-[20px] lg:right-[75px] z-10">
                <h3 className="truncate font-['El_Messiri'] text-[10px] font-semibold max-md:leading-[8px] xl:leading-[30px] lg:leading-[20px] md:leading-[18px] text-white md:text-[14px] lg:text-[18px] xl:text-[24.77px]">
                    {destination.name}
                </h3>

                <p
                    className={`truncate font-['Karla'] text-[8px] font-normal leading-[20px] text-white/70 md:text-[10px] xl:text-[14px] ${
                        !showArrow ? "flex items-center gap-[4px]" : ""
                    }`}
                >
                    {!showArrow && (
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className="text-white/70 h-[8px] w-[8px] xl:h-[11px] xl:w-[11px] shrink-0"
                        />
                    )}
                    {destination.location}
                </p>
            </div>

            {showArrow ? (
                <div className="absolute bottom-[20px] right-[20px] z-10 flex h-[20px] w-[20px] md:h-[25px] md:w-[25px] lg:h-[35px] lg:w-[35px] xl:h-[51px] xl:w-[51px] items-center justify-center rounded-full border border-white">
                    <img
                        src={ArrowIcon}
                        alt="Go to destination"
                        className="h-[10px] w-[10px] md:h-[10px] md:w-[10px] lg:h-[17px] lg:w-[17px] xl:h-[27px] xl:w-[27px]"
                    />
                </div>
            ) : (
                destination.price && (
                    <div className="absolute bottom-[20px] right-[10px] lg:right-[20px] z-10 text-right">
                        <p className="font-['Karla'] text-[7px] font-normal leading-[16px] text-white/70 md:text-[9px] xl:text-[12px]">
                            Start From
                        </p>
                        <p className="xl:mt-[8px] mt-[4px] font-['El_Messiri'] text-[10px] font-semibold leading-[18px] text-white md:text-[13px] xl:text-[20px]">
                            {destination.price}
                        </p>
                    </div>
                )
            )}
        </Link>
    );
};

export default DestinationCard;