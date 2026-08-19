import React from "react";
import HeroImage from "../../assets/images/HeroImage.jpg";
import Button from "../common/Button";
import HeroFB from "../../assets/icons/heroFB.svg";
import HeroTwitter from "../../assets/icons/heroTwitter.svg";
import HeroV from "../../assets/icons/heroV.svg";
import HeroArrow from "../../assets/icons/heroArrow.svg";
import HeroSearchIcon from "../../assets/icons/heroSearchIcon.svg";
import HeroLocationIcon from "../../assets/icons/heroLocationIcon.svg";
import HeroCalendarIcon from "../../assets/icons/heroCalendarIcon.svg";
import HeroGuestIcon from "../../assets/icons/heroGuestIcon.svg";

const Hero = () => {
    return (
        <section>
            
            <div className="my-[107px] max-md:bg-transparent xl:w-[85.98%] md:w-[90%] w-[95%] justify-self-center">
            
                <div className="relative aspect-[1316.21/630] rounded-[40px]">
                    <img
                        src={HeroImage}
                        alt="Explore Asia"
                        className="h-full w-full rounded-[40px] object-cover"
                    />

                    
                    <div
                        className="absolute inset-0 rounded-[40px]"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(0, 0, 0, 0.61) 0%, rgba(0, 0, 0, 0.28) 100%)",
                        }}
                    />

                    <div className="absolute left-[20px] md:left-[50px] lg:left-[96] xl:left-[118px] [@media(min-width:1450px)]:top-[79px] top-[20px] lg:top-[40px] z-10 flex w-[45%] flex-col">
                        <Button
                            className="lg:mb-[25px] sm:mb-[10px] mb-[4px] flex  sm:h-[40px] h-[30px] lg:h-[46px]  [@media(min-width:1450px)]:w-[29.5%] md:w-[40%] sm:w-[70%] w-[75%] items-center justify-center rounded-[50px] border border-[#FFFFFF36] bg-[#FFFFFF0D] font-['Karla'] text-center text-[10px] sm:text-[12px] lg:text-[16px] font-medium leading-[24px] tracking-[-0.2px] text-white"
                        >
                            Feel The Experience
                        </Button>

                        <h1 className="font-['El_Messiri'] text-[16px] sm:text-[38px]  md:text-[36px] lg:text-[56px] xl:text-[62px] [@media(min-width:1400px)]:text-[74px] font-semibold leading-[16px] sm:leading-[28px] md:leading-[40px] lg:leading-[56px] xl:leading-[74px] text-white">
                            Explore The
                            <br />
                            Majestic Asia
                            <br />
                            Landscape Now
                        </h1>

                        <Button
                            className="flex mt-[4px] sm:mt-[10px] lg:mt-[20px] xl:mt-[40px] xl:h-[53px] md:h-[36px] h-[30px] lg:w-[27%]  md:w-[35%] sm:w-[65%] w-[65%]  items-center justify-center rounded-[50px] border border-white bg-white font-['Karla'] xl:text-[16px] lg:text-[14px] sm:text-[12px]  text-[10px] font-medium leading-[24px] tracking-[-0.2px] text-black"
                        >
                            GET STARTED
                        </Button>
                    </div>

                    <div className="absolute xl:right-[35.25px] right-[15px] [@media(min-width:1450px)]:top-[154.5px]  top-[20px] lg:top-[50px] xl:top-[100px] z-10 flex flex-col items-center gap-[8px] xl:gap-[20px]">
                        <img src={HeroFB} alt="Facebook" className="max-sm:w-7 max-sm:h-7" />

                        <img src={HeroTwitter} alt="Twitter" className="max-sm:w-7 max-sm:h-7" />

                        <img src={HeroV} alt="V" className="max-sm:w-7 max-sm:h-7" />

                        <div className="relative max-sm:hidden max-lg:h-[100px] mt-[8px] xl:mt-[20px] flex justify-center">
                            <img src={HeroArrow} alt="Scroll down" />

                            <span className="absolute right-[calc(100%+4px)] top-1/2 -translate-y-1/2 font-['Karla'] text-[12px] font-[400] tracking-[1px] text-white [writing-mode:vertical-rl] [transform:rotate(180deg)]">
                                SCROLL
                            </span>
                        </div>
                    </div>

                    <div className="relative  max-md:py-4  max-md:mt-4 md:absolute md:left-1/2 md:top-full z-20 flex md:flex-row flex-col md:h-[172px] w-full md:w-[83.3%] md:-translate-x-1/2 md:-translate-y-1/2 items-center justify-between rounded-[24px] bg-[#FFFFFFDE] px-[44px] shadow-[0px_2px_4px_0px_#00000040] backdrop-blur-[40.13px]">

                        <div className="flex w-[90%] sm:w-[50%] md:w-[18.96%] flex-col">
                            <label className="mb-[10px] font-['Inter'] text-[18.52px] font-normal text-[#2D3434] leading-[24.69px] tracking-normal align-middle">
                                Destination
                            </label>

                            <div className="relative h-[66.67px] w-full">
                                <div className="flex h-full w-full items-center justify-between rounded-[13px] border-[1.23px] border-solid border-[#00000026] bg-white px-[9.5%]">
                                    <span className="font-['Open_Sans'] text-[17.29px] font-normal leading-[100%] text-[#A8B1B5]">
                                        Where to go?
                                    </span>

                                    <img
                                        src={HeroLocationIcon}
                                        alt=""
                                        className="h-[20px] w-[20px]"
                                    />
                                </div>

                                <input
                                    type="text"
                                    className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                                />
                            </div>
                        </div>

                
                        <div className="flex max-md:mt-4 w-[90%] sm:w-[50%] md:w-[18.96%] flex-col">
                            <label className="mb-[10px] font-['Inter'] text-[#2D3434] text-[18.52px] font-normal leading-[24.69px] tracking-normal align-middle">
                                Check In
                            </label>

                            <div className="relative h-[66.67px] w-full">
                                <div className="flex h-full w-full items-center justify-between rounded-[13px] border-[1.23px] border-solid border-[#00000026] bg-white px-[9.5%]">
                                    <span className="font-['Open_Sans'] text-[17.29px] font-normal leading-[100%] text-[#A8B1B5]">
                                        Check In
                                    </span>

                                    <img
                                        src={HeroCalendarIcon}
                                        alt=""
                                        className="h-[20px] w-[20px]"
                                    />
                                </div>

                                <input
                                    type="date"
                                    className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                                />
                            </div>
                        </div>

            
                        <div className="flex  max-md:mt-4 w-[90%] sm:w-[50%] md:w-[18.96%] flex-col">
                            <label className="mb-[10px] font-['Inter'] text-[#2D3434] text-[18.52px] font-normal leading-[24.69px] tracking-normal align-middle">
                                Check Out
                            </label>

                            <div className="relative h-[66.67px] w-full">
                                <div className="flex h-full w-full items-center justify-between rounded-[13px] border-[1.23px] border-solid border-[#00000026] bg-white px-[9.5%]">
                                    <span className="font-['Open_Sans'] text-[17.29px] font-normal leading-[100%] text-[#A8B1B5]">
                                        Check Out
                                    </span>

                                    <img
                                        src={HeroCalendarIcon}
                                        alt=""
                                        className="h-[20px] w-[20px]"
                                    />
                                </div>

                                <input
                                    type="date"
                                    className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                                />
                            </div>
                        </div>

                        <div className="flex  max-md:mt-4 w-[90%] sm:w-[50%] md:w-[18.96%] flex-col">
                            <label className="mb-[10px] font-['Inter']  text-[#2D3434] text-[18.52px] font-normal leading-[24.69px] tracking-normal align-middle">
                                Guests
                            </label>

                            <div className="relative h-[66.67px] w-full">
                                <div className="flex h-full w-full items-center justify-between rounded-[13px] border-[1.23px] border-solid border-[#00000026] bg-white px-[9.5%]">
                                    <span className="font-['Open_Sans'] text-[17.29px] font-normal leading-[100%] text-[#A8B1B5]">
                                        Guests
                                    </span>

                                    <img
                                        src={HeroGuestIcon}
                                        alt=""
                                        className="h-[20px] w-[20px]"
                                    />
                                </div>

                                <input
                                    type="number"
                                    min="1"
                                    className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                                />
                            </div>
                        </div>

                    
                        <button
                            type="button"
                            className="flex h-[50px] md:h-[59.88%] md:w-[5.20%] w-[40%] max-md:my-4 items-center justify-center rounded-[8.31px] bg-[#3F4579] transition-opacity hover:opacity-90"
                        >
                            <img
                                src={HeroSearchIcon}
                                alt="Search"
                                className="h-[20px] w-[20px]"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;