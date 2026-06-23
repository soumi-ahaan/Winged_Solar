import eagle from "../../assets/eagle.png";
import hawk from "../../assets/hawk.png";
import sparrow from "../../assets/sparrow.png";


export default function Features() {
  return (
    <div className="max-w-[1440px] mx-auto relative">
        <div className="relative px-4  md:px-6 lg:px-12 xl:px-[60px] py-[90px]">
        <div className="relative justify-center items-center ">
            <h1 className="text-3xl md:text-4xl text-[#0B2744] leading-snug text-center font-heading">
             Built for Every <br/> Deployment Scenario</h1>
        </div>

          

          {/* Bottom Features */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-5 ">
            <BottomCard
              icon={eagle}
              title="Eagle"
              description="High-density solar infrastructure for C&I, EPCs, and land-constrained projects."
            />

            <BottomCard
              icon={hawk}
              title="Hawk"
              description="Mobile solar + storage for remote, temporary, and field power."
            />

            <BottomCard
              icon={sparrow}
              title="Sparrow"
              description="Compact deployable power for smaller loads, rural sites, and fast-response applications."
            />
          </div>
          <div className="flex justify-center mt-10">
  <button className="bg-[#F5A623] text-black font-semibold rounded-full px-7 py-5 cursor-pointer">
    View All Products
  </button>
</div>
        </div>
        </div>
  );
}



function BottomCard({
  icon,
  title,
  description
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className=" border border-[#24A0D580] rounded-[20px] p-5 flex flex-col items-start gap-5">
      <div className=" items-center justify-start text-white rounded-[20px]">
        <img
    src={icon}
    alt={title}
    className="w-full h-full object-contain"
  />
      </div>

      <h4 className="text-[#003374] text-3xl font-heading">
        {title}
        <sup className="relative -top-4 text-[10px]">
    TM
  </sup>
      </h4>
      <p className="text-[#0F172A] text-base">
        {description}
      </p>
      <button className="border border-[#0F172A]  text-[#0F172A] text-base font-semibold rounded-full px-7 py-3 cursor-pointer">
                  Learn More
                </button>
    </div>
  );
}