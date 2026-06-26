import footerlogo from "../../assets/footerlogo.png"; 
import fb from "../../assets/fb.png"; 
import link from "../../assets/link.png"; 
import ut from "../../assets/ut.png"; 
import insta from "../../assets/insta.png"; 
export default function Footer() {
  return (
    <footer className="bg-[#0B2744] rounded-t-[32px] m-2.5">
        <div className="max-w-[1440px] mx-auto relative px-4 md:px-6 lg:px-10 xl:px-[45px] pt-[50px]">
      <div className=" overflow-hidden">

        {/* CTA Section */}


        <div className="rounded-[32px] relative overflow-hidden px-4 xl:px-[38px] py-[45px] bg-white/5 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)]">

            {/* Watermark Logo */}

            <img
              src={footerlogo}
              alt=""
              className="absolute right-0 -top-20 h-[550px] opacity-100 pointer-events-none"
            />

            <div className="relative z-10">
              <h2 className="font-heading text-white text-2xl md:text-5xl lg:text-[64px] leading-snug">
                Bring Your Site
                <br className="hidden md:block"/>
                Online Faster.
              </h2>

              <p className="mt-6 text-white text-sm md:text-lg">
                Tell us about your site, load profile, land constraints, timeline, and deployment <br className="hidden md:block"/> goals. We will help identify whether Eagle, Hawk, Sparrow, or a Power + Water <br className="hidden md:block"/> configuration is the right fit.
              </p>

              <div className="mt-8 flex flex-wrap gap-2 md:gap-4">
                <button className="rounded-full bg-[#F5A623] px-5 xl:px-7 py-3 xl:py-4 text-xs md:text-sm font-semibold text-black cursor-pointer hover:bg-transparent hover:border hover:border-[#F5A623] hover:text-[#F5A623] ">
                  Request a Deployment Consultation
                </button>

                <button className="rounded-full border border-white px-5 xl:px-7 py-3 xl:py-4 text-xs md:text-sm font-semibold text-white backdrop-blur-xl cursor-pointer border-flow overflow-hidden">
                  Download Platform Overview
                </button>
              </div>
            </div>
          </div>

        {/* Footer Menu */}

        <div className="xl:px-2.5 pt-[50px] pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 xl:gap-[200px]">

            <FooterColumn
              title="Company"
              links={[
                "About Us",
                "Resources",
                "Why Winged Solar",
                "Contact",
              ]}
            />

            <FooterColumn
              title="Platforms"
              links={[
                "Eagle",
                "Hawk",
                "Sparrow",
              ]}
            />

            <FooterColumn
              title="Solutions"
              links={[
                "Commercial & Industrial",
                "Critical Infrastructure",
                "Power + Water",
                "EPC Advantage",
              ]}
            />

            <div>
              <h4 className="text-white text-2xl mb-3 ">
                Legal Links
              </h4>

               <div className="w-1/4 lg:w-full h-[2px] bg-white/20 mb-4" /> 

              <ul className="space-y-7">
                <li>
                  <a
                    href="#"
                    className="text-white text-base"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-white text-base"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>

              <h4 className="text-white text-2xl mt-8 mb-3">
                Social Links
              </h4>

              <div className="w-1/4 lg:w-full h-[2px] bg-white mb-4" />

              <div className="flex gap-2">
                <SocialIcon>
                <img src={fb} alt="Facebook" />
                </SocialIcon>

                <SocialIcon>
                <img src={link} alt="Facebook" />
                </SocialIcon>

                <SocialIcon>
            <img src={ut} alt="Facebook" />
                </SocialIcon>

                <SocialIcon>
                  <img src={insta} alt="Facebook" />
                </SocialIcon>
              </div>
            </div>

          </div>
        </div>



          

      </div>
      </div>
      <div className="bg-[#002E68]">
          <div className="max-w-[1440px] mx-auto relative py-6">
            <h1 className="font-heading text-center text-white text-xl  min-[375px]:text-2xl  sm:text-[42px] md:text-[50px] lg:text-[66px] xl:text-[94px] border-b-2 lg:border-b-6 border-white  leading-none whitespace-nowrap overflow-hidden">
              Winged Solar Solutions
            </h1>
            <p className="text-white text-xs text-center md:text-base mt-4">
            © 2026 Winged Solar Solutions. All Rights Reserved.
          </p>
          </div>
        </div>     
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: string[];
}

function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>
      <h4 className="text-white text-2xl mb-3">
        {title}
      </h4>

      <div className="w-1/4 lg:w-full h-[2px] bg-white/20 mb-4" />

      <ul className="space-y-7">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-white text-base hover:text-white transition"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="w-8 h-8 rounded-full bg-[#003374] border border-white/30 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform duration-300">
      {children}
    </button>
  );
}