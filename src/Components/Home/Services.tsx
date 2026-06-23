
import { useEffect, useState } from "react";
import navigation from "../../assets/navigation.png";

interface Services {
  image: string;
  title: string;
}

interface Props {
  services: Services[];
}

export default function Services({
  services,
}: Props) {
  const [index, setIndex] = useState(0);

  const cards = [...services, ...services];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (index >= services.length) {
      const timeout = setTimeout(() => {
        setIndex(0);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [index, services.length]);

  return (
    <div className="bg-[#f6f6f6]">
        <div className="max-w-[1440px] mx-auto relative px-4  md:px-6 lg:px-12 xl:px-[60px] py-[90px]">
        <div className="relative justify-center items-center ">
            <h1 className="text-3xl md:text-4xl text-[#0B2744] leading-snug text-center font-heading">
              Proven Deployments<br/>
Across Critical Industries

            </h1>
            <p className="text-[#1a1f24] leading-snug text-base text-center mt-4 ">
              From commercial facilities and telecom networks to remote infrastructure and emergency response applications, <br/> Winged Solar solutions are engineered for rapid deployment and long-term performance.
            </p>
        </div>

          <div className="relative mt-12 overflow-hidden">

          <div
            className="flex gap-4 transition-transform duration-500 ease-linear"
            style={{
              transform: `translateX(-${
                index * (312 + 16)
              }px)`,
            }}
          >
            {cards.map((item, idx) => (
              <div
                key={idx}
                className="relative shrink-0 w-[312px] h-[412px] rounded-[20px] overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,51,116,0) 54.29%, #003374 100%)",
                  }}
                />

                {/* Glass Text Box */}

                <div className="absolute bottom-0 left-0 right-0 ">
                  <div className="bg-white/5 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)]   px-5 py-6">
                    <p className="text-white font-heading text-center text-lg">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}

          <button
            onClick={() =>
              setIndex((prev) =>
                prev === 0
                  ? services.length - 1
                  : prev - 1
              )
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-md z-10 flex items-center justify-center cursor-pointer"
          >
            <img src={navigation} alt="" className="rotate-180"/>
          </button>

          {/* Right Arrow */}

          <button
            onClick={() =>
              setIndex((prev) =>
                prev + 1 >= services.length
                  ? 0
                  : prev + 1
              )
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-md z-10 flex items-center justify-center cursor-pointer"
          >
            <img src={navigation} alt="" />
          </button>
        </div>

         
           <div className="flex justify-center mt-10">
  <button className="bg-[#F5A623] text-black font-semibold rounded-full px-7 py-5 cursor-pointer">
    View All Services
  </button>
  </div>
        </div>
        </div>
  );
}



