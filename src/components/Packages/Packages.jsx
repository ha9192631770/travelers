import React from "react";
import DestinationCard from "../common/DestinationCard";
import { popularDestinations } from "../../constants/packages";

const Packages = () => {
    const [featured, grandPalace, cappadocia, padarIsland] =
        popularDestinations;

    return (
        <section className="w-[72.69%] justify-self-center pb-[107px] pt-[65px]">
            <div className="mb-[10px] md:mb-[20px] xl:mb-[33px]">
                <span className="font-['Inter'] text-[21px] text-[#3F4579] font-normal leading-[30px] tracking-normal align-middle">
                    Packages
                </span>
                <h2 className="font-['El_Messiri'] text-[16px] sm:text-[20px] md:text-[32px] xl:text-[48px] font-normal leading-[18px] sm:leading-[36px] lg:leading-[60px] tracking-normal align-middle capitalize text-[#2D3434]">
                    Popular Destinations
                </h2>
            </div>


            <div className="flex w-full flex-col gap-[10px] md:aspect-[1097/663.49] md:flex-row md:gap-[20px] lg:gap-[30px] xl:gap-[40px]">
                <DestinationCard
                    destination={featured}
                    className="w-full aspect-[644/663] shrink-0 md:w-[37.5%] md:aspect-auto"
                />

                <div className="flex w-full flex-col gap-[10px] md:h-full md:justify-between md:gap-0">
                
                    <div className="flex flex-col gap-[10px] md:flex-row md:gap-[20px] lg:gap-[30px] xl:gap-[40px]">
                        <DestinationCard
                            destination={grandPalace}
                            className="w-full aspect-[302/269] md:w-[45.89%]"
                        />

                        <DestinationCard
                            destination={cappadocia}
                            className="w-full aspect-[302/269] md:w-[45.89%]"
                        />
                    </div>

                    <DestinationCard
                        destination={padarIsland}
                        className="w-full aspect-[644.92/353.85]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Packages;