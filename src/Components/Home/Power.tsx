
interface PowerProps {
  title1: string;
  description1: string;
  title2: string;
  description2: string;
  image: string;
  
}



export default function Power({
  title1,
  title2,
  description1,
  description2,
  image,

}: PowerProps) {
  return (

      <div className="max-w-[1440px] mx-auto relative px-4 md:px-6 lg:px-12 xl:px-[60px] py-[90px]">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
          <div>
            <h2 className="text-[#0A2A52] text-3xl md:text-[35px] font-heading leading-snug">
              {title1}

            </h2>
            <h2 className="text-[#0A2A52] text-3xl md:text-[45px] font-heading leading-snug">
              {title2}

            </h2>

            <p className="mt-6 text-[#404040] text-base md:text-lg leading-8 max-w-[650px]">
              {description1}
            </p>
            <p className="mt-6 text-[#404040] text-base md:text-lg leading-8 max-w-[650px]">
              {description2}
            </p>

            <button className="mt-10 bg-[#F5A623] text-black font-semibold rounded-full px-7 py-5 cursor-pointer">
                  Learn About Power + Water
                </button>
          </div>
         
          {/* Right Image */}
          <div>
            <img
              src={image}
              alt={title1}
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>         

        </div>
      </div>
  
  );
}