import React from "react";
import img1 from "../../assets/images/men1.png";
import img2 from "../../assets/images/men2.png";
import img3 from "../../assets/images/men3.png";
import img4 from "../../assets/images/men4.png";

const Dress = () => {
    return (
        <section>
            <div className="container mx-auto max-w-[1280px]">
                <div className="bg-[#F0F0F0] px-3 pb-4 pt-8 min-[550px]:px-5 lg:px-10 lg:pb-16 lg:pt-12 xl:px-14 rounded-xl">
                    <h2 className="text-3xl text-center lg:text-5xl font-bold mb-5">
                        BROWSE BY DRESS STYLE
                    </h2>
                    <div className="grid grid-cols-1 gap-y-5 min-[800px]:grid-cols-3 min-[800px]:gap-x-3 lg:gap-y-7 lg:gap-x-7">
                        <div className="relative w-full rounded-xl xl:h-80 bg-white">
                            <img
                                className="w-full h-full object-cover rounded-xl hover:scale-105 transition-all"
                                src={img1}
                                alt=""
                            />
                            <p className="text-2xl font-bold absolute top-[16px] left-[24px]">
                                Casual
                            </p>
                        </div>
                        <div className="relative rounded-xl xl:h-80 bg-white col-span-2 hover:scale-105 transition-all">
                            <img
                                className="ml-auto w-10/12 h-full rounded-xl"
                                src={img2}
                                alt=""
                            />
                            <p className="text-2xl font-bold absolute top-[16px] left-[24px]">
                                Formal
                            </p>
                        </div>
                        <div className="relative rounded-xl xl:h-80 bg-white col-span-2 hover:scale-105 transition-all">
                            <img
                                className="ml-auto w-10/12 h-full rounded-xl"
                                src={img3}
                                alt=""
                            />
                            <p className="text-2xl font-bold absolute top-[16px] left-[24px]">
                                Party
                            </p>
                        </div>
                        <div className="relative w-full rounded-xl xl:h-80 bg-white hover:scale-105 transition-all">
                            <img
                                className="w-full h-full object-cover rounded-xl"
                                src={img4}
                                alt=""
                            />
                            <p className="text-2xl font-bold absolute top-[16px] left-[24px]">
                                Gym
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dress;