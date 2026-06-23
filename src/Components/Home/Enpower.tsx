import quality from "../../assets/quality.png";

export default function Enpower() {
    const labels = [
        {
            text: "Rapid Deployment",
            className: "top-16 -left-10",
        },
        {
            text: "Factory-Built Systems",
            className: "top-8  -right-20",
        },
        {
            text: "Integrated Energy Storage",
            className: "top-48 -left-10",
        },
        {
            text: "Remote Site Ready",
            className: "top-60  -right-10",
        },
        {
            text: "Mission-Critical Reliability",
            className: "bottom-8 -left-10",
        },
        {
            text: "Scalable Infrastructure",
            className: "bottom-16  -right-20",
        },
    ];

    return (
        <section className="bg-[#F6F6F6] py-[90px]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[60px]">
                <div className="grid lg:grid-cols-2 gap-5 items-center">

                    {/* Left Side */}

                    <div className="flex justify-center">
                        <div className="relative w-fit">

                            <img
                                src={quality}
                                alt="EnPower Star"
                                className="rounded-[20px] w-full max-w-[424px]"
                            />

                            {labels.map((label, index) => (
                                <div
                                    key={index}
                                    className={`absolute ${label.className}
                  bg-[#EADFD4] text-[#1A1F24]
                  p-5
                  rounded-lg
                  shadow-sm
                  whitespace-nowrap`}
                                >
                                    <p className="text-[#1A1F24] text-base font-medium">
                                        {label.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side */}

                    <div>
                        <h2 className="font-heading text-[#01122E] text-2xl  md:text-[35px] leading-tight">
                            Brought to you by
                        </h2>

                        <h3 className="font-heading text-[#EA8D23] text-3xl  md:text-[55px] mt-1">
                            EnPower Star.
                        </h3>

                        <p className="mt-6 text-[#1A1F24] text-base">
                            Winged Solar is backed by renewable-energy project experience from EnPower<br /> Star, including solar, battery storage, EV charging, design, installation, permitting,<br /> and project execution.
                        </p>

                        <button className="mt-8 bg-[#F5A623] text-black font-semibold rounded-full px-7 py-5 cursor-pointer">
                            Explore Our Platforms
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}