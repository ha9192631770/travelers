import React, { useState } from "react";
import ActivityCard from "../common/ActivityCard";
import { activities } from "../../constants/activities";
import activitiesBGLine from "../../assets/icons/activitiesBGLine.svg";

const Activities = () => {
    const [activeDot, setActiveDot] = useState(0);

    return (
        <section className="relative overflow-hidden bg-[#EDEEF6]">
            <img
                src={activitiesBGLine}
                alt=""
                className="absolute max-md:hidden right-0 top-0 z-0"
            />

            <div className="relative z-10 mb-[50px] w-[90%] items-center justify-self-center pt-[47px] text-center lg:w-[73.5%]">
                <h2 className="font-['El_Messiri'] text-center text-[28px] md:text-[38px] lg:text-[48px] font-normal leading-[60px] capitalize">
                    Pick A Tour Activity
                </h2>

                <span className="font-['Inter'] text-center text-[21px] font-normal -mt-[8px] leading-[30px] text-[#3F4579] block">
                    Categories
                </span>
            </div>

            <div className="relative z-10 grid w-[90%] grid-cols-1 justify-items-center gap-y-[20px] lg:gap-[20px] md:gap-[10px] justify-self-center text-center sm:grid-cols-2 md:flex lg:w-[80.5%] xl:w-[73.5%] md:flex-row md:items-center md:justify-between">
                {activities.map((activity) => (
                    <ActivityCard
                        key={activity.id}
                        activity={activity}
                        className="aspect-square w-[50%] sm:w-[44%] md:w-[22.33%]"
                    />
                ))}
            </div>

            <div className="relative z-10 mt-[30px] flex justify-center gap-[8px] pb-[24px]">
                {[0, 1, 2].map((dot) => (
                    <button
                        key={dot}
                        type="button"
                        onClick={() => setActiveDot(dot)}
                        className={`flex h-[18px] w-[18px] items-center justify-center rounded-full ${activeDot === dot
                                ? "border-[2px] border-[#7F83A6]"
                                : ""
                            }`}
                    >
                        <span className="h-[10.11px] w-[10.11px] rounded-full bg-[#7F83A6]" />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Activities;