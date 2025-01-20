import stars from '../../assets/images/star.svg'
import ticket from '../../assets/images/ticket.svg'

const Commits = () => {
    return (
        <div className=" container mx-auto max-w-[1280px] pt-10 mb-[80.42px]">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-center text-[32px] lg:text-[48px] lg:leading-[57px] mt-4 mb-4">
                    OUR HAPPY CUSTOMERS
                </h2>
            </div>
            <div className="commits flex flex-wrap gap-[20px]">
                {[
                    {
                        name: "Sarah M.",
                        comment: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
                    },
                    {
                        name: "Alex K.",
                        comment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
                    },
                    {
                        name: "James L.",
                        comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
                    },
                ].map((customer, index) => (
                    <div key={index} className=" lg:w-[400px] lg:h-[240px]">
                        <div className="li w-[300px] border rounded-[20px] px-[32px] py-[28px] flex flex-col gap-[18px]">
                            <div className="">
                                <img src={stars} alt="" />
                            </div>
                            <div className="flex gap-1">
                                <b>{customer.name}</b>
                                <img src={ticket} alt="" />
                            </div>
                            <div className="flex">
                                <p className="leading-[22px] text-[rgb(97,96,96)] line-clamp-6">
                                    "{customer.comment}"
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Commits;