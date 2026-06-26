import Header from "../Layouts/Header";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png"; 
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";


import hero from "../../assets/hero.png";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center overflow-hidden m-2 rounded-[10px] "
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      

      <div className="relative z-20">
        <Header />
        <div className="max-w-[1440px] mx-auto relative">
        <div className="relative px-4  md:px-6 lg:px-10 xl:px-[50px] pt-48 md:pt-[250px]">
          <div className="grid xl:grid-cols-2 gap-4 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center rounded-full border border-[#147BB7] px-4 py-2 text-xs text-[#147BB7]">
                DEPLOYABLE SOLAR INFRASTRUCTURE
              </div>

              <h1 className="mt-6 text-white font-bold leading-tight text-lg min-[375px]:text-xl sm:text-3xl lg:text-[40px]  font-heading animate-reveal">
                Deployable Solar <br/> Infrastructure for C&I, <br/> EPCs, and Critical Power
              </h1>

              <p className="mt-6  text-gray-300 leading-relaxed text-xs sm:text-md lg:text-lg ">
               Winged Solar™ delivers factory-built solar, storage, and power + water <br className="hidden sm:block"/> platforms that deploy faster, use less land, reduce field construction, and <br className="hidden sm:block"/> create new options for commercial, industrial, public works, and remote <br className="hidden sm:block"/> infrastructure projects.

              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-row gap-6 lg:items-end">
            </div>
          </div>

          <div className="grid xl:grid-cols-2 gap-4 items-center mt-4">
            {/* LEFT */}
            <div>
              <div className="flex flex-wrap gap-4 ">
                <button className="bg-[#F5A623] text-black font-semibold rounded-full px-5 py-3 text-sm xl:text-sm xl:px-7 xl:py-5 cursor-pointer hover:bg-transparent hover:border hover:border-[#F5A623] hover:text-[#F5A623]">
                  Explore the Platforms
                </button>

                <button className="border border-white/40 backdrop-blur-xl text-white rounded-full px-5 py-3 text-sm xl:text-sm xl:px-7 xl:py-5 cursor-pointer border-flow overflow-hidden">
                  Request A Deployment Consultation
                </button>
              </div>
              <p className="mt-2  text-lg md:text-2xl text-white ">Brought to you by 
                <span className="font-heading text-[#F5A623]"> EnPower Star.</span>
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col sm:flex-row gap-6 lg:items-end animate-float">
              <FeatureBox
                icon={icon1}
                title="Approximately 1 MW"
                desc="in roughly 1.3 acres"
              />

              <FeatureBox
                icon={icon2}
                title="U.S. Fabricated Steel"
                desc="options available"
              />
            </div>
          </div>

          

          {/* Bottom Features */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-5 pb-12 animate-float">
            <BottomCard
              icon={icon3}
              title="Factory-built structure"
            />

            <BottomCard
              icon={icon4}
              title="Reduced field construction"
            />

            <BottomCard
              icon={icon5}
              title="Solar + battery storage"
            />

            <BottomCard
              icon={icon6}
              title="Water from air integration"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

type FeatureProps = {
  icon: string;
  title: string;
  desc: string;
};

function FeatureBox({ icon, title, desc }: FeatureProps) {
  return (
    <div className="w-full max-w-md flex items-center gap-4 bg-white/10
backdrop-blur-sm
border
border-white/20
shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-lg p-2 md:rounded-2xl md:p-4">
      <div className="h-16 w-16 rounded-xl bg-[#24A0D5] flex items-center justify-center text-white">
        <img
    src={icon}
    alt={title}
    className="w-8 h-8 object-contain"
  />
      </div>

      <div>
        <h4 className="text-white text-xs md:text-base font-semibold">
          {title}
        </h4>

        <p className="text-gray-300 text-xs md:text-sm">
          {desc}
        </p>
      </div>
    </div>
  );
}

function BottomCard({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className=" bg-white/10
backdrop-blur-sm
border
border-white/20
shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#24A0D5] rounded-lg p-2 md:rounded-2xl md:p-4 flex items-center gap-4">
      <div className="h-14 w-14 bg-[#24A0D5] rounded-xl flex items-center justify-center text-white">
        <img
    src={icon}
    alt={title}
    className="w-8 h-8 object-contain"
  />
      </div>

      <h4 className="text-white text-xs md:text-base font-medium">
        {title}
      </h4>
    </div>
  );
}