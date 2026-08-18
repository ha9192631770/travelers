// NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="flex min-h-[60vh] flex-col items-center justify-center gap-[16px] text-center px-[24px]">
            <h1 className="font-['El_Messiri'] text-[64px] font-bold text-[#2D3434]">404</h1>
            <p className="font-['Inter'] text-[18px] text-[#7A7A7A]">
                Oops! The page you're looking for doesn't exist yet.
            </p>
            <Link
                to="/"
                className="rounded-full bg-[#9DA7FF] px-[24px] py-[10px] font-['Inter'] text-white"
            >
                Back to Home
            </Link>
        </section>
    );
};

export default NotFound;