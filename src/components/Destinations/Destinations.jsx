import React, { useState } from "react";
import DestinationCard from "../common/DestinationCard";
import {
    destinationsSectionInfo,
    destinationTabs,
    destinations,
} from "../../constants/destinations";

const Destinations = () => {
    const [activeTab, setActiveTab] = useState(destinationTabs[0].id);

    return (
        <section className="w-[72.95%] justify-self-center pb-[107px] pt-[105px] text-center">

            <div className="mb-[33px] justify-self-center sm:w-[70%] lg:w-[40.32%]">
                <span className="font-['Inter'] text-[21px] font-normal leading-[30px] tracking-normal text-[#0E0700]">
                    {destinationsSectionInfo.eyebrow}
                </span>

                <h2 className="font-['El_Messiri'] text-[16px] font-normal capitalize leading-[30px] lg:leading-[60px] tracking-normal text-[#0E0700] sm:text-[24px] md:text-[32px] xl:text-[48px]">
                    {destinationsSectionInfo.title}
                </h2>

                <p className="mx-auto max-w-[560px] font-['Inter'] text-[16px] font-normal leading-[26px] text-[#7A7A7A]">
                    {destinationsSectionInfo.description}
                </p>
            </div>


            <div className="mb-[40px] inline-flex flex-wrap items-center justify-center rounded-full border border-[#333333] p-[4px] sm:p-[6px]">
                {destinationTabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`rounded-full px-[6px] py-[6px] font-['Inter'] text-[10px] font-medium uppercase tracking-wide transition-colors sm:px-[18px] sm:py-[8px] sm:text-[10px] lg:px-[24px] lg:py-[10px] lg:text-[13px] ${activeTab === tab.id
                                ? "bg-[#EDEEF6] text-black"
                                : "text-black/50"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-[10px] text-left sm:gap-[16px] md:grid-cols-4 md:gap-[35px]">
                {destinations.map((item) => (
                    <DestinationCard
                        key={item.id}
                        destination={item}
                        showArrow={false}
                        className="aspect-[252/356] w-full"
                    />
                ))}
            </div>
        </section>
    );
};

export default Destinations;