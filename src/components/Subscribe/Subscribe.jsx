import React, { useState } from "react";
import { subscribeInfo } from "../../constants/subscribe";
import SendIcon from "../../assets/icons/sendIcon.svg";

const Subscribe = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Subscribed:", email);
    };

    return (
        <section className="relative mb-[107px] w-[90%] md:w-[72.85%] justify-self-center overflow-hidden rounded-[20px]">
            <img
                src={subscribeInfo.backgroundImage}
                alt=""
                className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute w-[93.7%] justify-self-center inset-0 z-10 flex flex-col justify-center gap-[16px] lg:flex-row lg:items-center lg:justify-between ">

                <div className="text-left w-full lg:w-[35%]">
                    <p className="font-['El_Messiri'] text-[10px] text-white sm:text-[16px] lg:text-[20px]">
                        {subscribeInfo.eyebrow}
                    </p>
                    <h2 className="font-['Inter'] text-[14px] font-bold leading-[20px] text-white sm:text-[24px] sm:leading-[26px] lg:text-[36px] lg:leading-[44px]">
                        {subscribeInfo.title}
                    </h2>
                </div>


                <form
                    onSubmit={handleSubmit}
                    className="flex h-[40px] sm:h-[55px] lg:h-[73.27px] w-full items-center justify-between rounded-[18.63px] border border-[#9DA7FF] bg-white/95 px-[16px] py-[10px] sm:px-[24px] sm:py-[14px] lg:w-[54.57%]"
                >
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={subscribeInfo.placeholder}
                        className="w-full bg-transparent px-[12px] font-['Inter'] text-[12px] text-[#2D3434] focus:outline-none sm:px-[16px] sm:text-[14px] placeholder:font-['Work_Sans'] placeholder:font-normal md:placeholder:text-[20.59px] placeholder:text-[16.59px] placeholder:leading-[100%] placeholder:tracking-[-0.41px] placeholder:text-[#AAB0B7]"
                    />

                    <button
                        type="submit"
                        aria-label="Submit email"
                        className="flex shrink-0 items-center justify-center"
                    >
                        <img src={SendIcon} alt="" className="lg:h-[31px] lg:w-[31px] w-[20px] h-[20px]" />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;