import field1 from "../../assets/field1.png";
import field2 from "../../assets/field2.png";
import field3 from "../../assets/field3.png";
import field4 from "../../assets/field4.png"; 
import field5 from "../../assets/field5.png";
import field6 from "../../assets/field6.png";

export default function Features() {
  return (
    <div className="max-w-[1440px] mx-auto relative">
        <div className="relative px-4  md:px-6 lg:px-12 xl:px-[60px] py-[90px]">
        <div className="relative justify-center items-center ">
            <h1 className="text-3xl md:text-4xl text-[#0B2744] leading-snug text-center font-heading">
              Traditional solar takes too much land,<br/>
too much field labor, and too much time.
            </h1>
            <p className="text-[#1a1f24] leading-snug text-base text-center mt-4 ">
              Commercial and public-sector solar projects often stall before they start. Land is limited. Civil work is expensive. Prevailing-<br/>wage labor can crush the budget. Trenching, foundations, racking, fencing, mobilization, and utility coordination can stretch <br/> timelines and inflate risk.
            </p>
        </div>

          

          {/* Bottom Features */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-5 ">
            <BottomCard
              icon={field1}
              title="Land-constrained C&I sites"
            />

            <BottomCard
              icon={field2}
              title="High-cost labor markets"
            />

            <BottomCard
              icon={field3}
              title="Prevailing wage sensitive public works projects"
            />

            <BottomCard
              icon={field4}
              title="Remote or difficult terrain"
            />
            <BottomCard
              icon={field5}
              title="Grid system EV charging and industrial loads
"
            />

            <BottomCard
              icon={field6}
              title="Critical infrastructure with time requirements"
            />
          </div>
          
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
    <div className=" bg-white border border-[#003374] rounded-md p-5 flex flex-col items-start gap-6">
      <div className=" items-center justify-start text-white">
        <img
    src={icon}
    alt={title}
    className="w-24 h-24 object-contain"
  />
      </div>

      <h4 className="text-[#003374]  text-[23.5px] font-heading">
        {title}
      </h4>
    </div>
  );
}