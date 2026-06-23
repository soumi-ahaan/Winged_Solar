
interface AdvantagesProps {
  title: string;
  description: string;
  image: string;
  benefits: string[];
}



export default function Advantages({
  title,
  description,
  image,
  benefits,
}: AdvantagesProps) {
  return (
    <section className="bg-[#F6F6F6]">
      <div className="max-w-[1440px] mx-auto relative px-4 md:px-6 lg:px-12 xl:px-[60px] py-[90px]">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
         
          {/* Left Image */}
          <div>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-[#0A2A52] text-3xl md:text-[35px] leading-snug font-heading">
              {title}
            </h2>

            <p className="mt-6 text-[#404040] text-base  leading-8 max-w-[650px]">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-2">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <span className="min-w-[16px] h-[16px] rounded-full bg-[#24A0D5] mt-1" />

                  <p className="text-[#172033] text-lg font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-[#F5A623] text-black font-semibold rounded-full px-7 py-5 cursor-pointer">
                  Explore EPC Advantages
                </button>
          </div>

        </div>
      </div>
    </section>
  );
}