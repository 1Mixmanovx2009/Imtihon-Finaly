import React from "react";
import calvin from "../../assets/images/calvinKlein.svg";
import gucci from "../../assets/images/gucci.svg";
import prada from "../../assets/images/prada.svg";
import zara from "../../assets/images/zara.svg";
import ver from "../../assets/images/versace.svg";

const Animate = () => {
    return (
        <>
            <div className="bg-black logos overflow-x-auto">
                <div className="logos-slide container flex gap-x-4 mr-[200px] py-[40px] items-center justify-between ">
                    <img className="imagess block" src={ver} alt="" />
                    <img className="imagess block" src={zara} alt="" />
                    <img className="imagess block" src={gucci} alt="" />
                    <img className="imagess block" src={prada} alt="" />
                    <img className="imagess block" src={calvin} alt="" />
                </div>
                <div className="logos-slide container flex gap-x-4  py-[40px] items-center justify-between ">
                    <img className="imagess" src={ver} alt="" />
                    <img className="imagess" src={zara} alt="" />
                    <img className="imagess" src={gucci} alt="" />
                    <img className="imagess" src={prada} alt="" />
                    <img className="imagess" src={calvin} alt="" />
                </div>
            </div>
        </>
    );
};

export default Animate;