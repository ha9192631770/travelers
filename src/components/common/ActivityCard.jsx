import React from "react";
import { Link } from "react-router-dom";

const ActivityCard = ({ activity, className = "" }) => {
    return (
        <Link
            to={activity.href}
            className={`flex flex-col items-center justify-center rounded-[17.69px] bg-white ${className}`}
        >
            <div className="flex flex-col items-center md:gap-[18px] lg:gap-[36px]">
                <img
                    src={activity.icon}
                    alt={activity.name}
                />

                <span
                    className="font-['Inter'] text-[21px] font-normal leading-[30px]"
                    style={{ color: activity.color }}
                >
                    {activity.name}
                </span>
            </div>
        </Link>
    );
};

export default ActivityCard;