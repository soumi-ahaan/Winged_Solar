import footerlogo from "../../assets/footerlogo.png"; 
import fb from "../../assets/fb.png"; 
import link from "../../assets/link.png"; 
import ut from "../../assets/ut.png"; 
import insta from "../../assets/insta.png"; 
export default function Footer() {
  return (
    <footer className="bg-[#0B2744] rounded-t-[32px] m-2.5">
        <div className="max-w-[1440px] mx-auto relative px-4 md:px-6 lg:px-12 xl:px-[45px] pt-[50px]">
      <div className="rounded-[32px] overflow-hidden">

        {/* CTA Section */}


        <div className="relative overflow-hidden px-[38px] py-[45px] bg-white/5 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)]">

            {/* Watermark Logo */}

            <img
              src={footerlogo}
              alt=""
              className="absolute right-0 -top-20 h-[550px] opacity-100 pointer-events-none"
            />

            <div className="relative z-10">
              <h2 className="font-heading text-white text-4xl md:text-5xl lg:text-[64px] leading-[1.05]">
                Bring Your Site
                <br />
                Online Faster.
              </h2>

              <p className="mt-6 text-white text-sm md:text-lg">
                Tell us about your site, load profile, land constraints, timeline, and deployment <br/> goals. We will help identify whether Eagle, Hawk, Sparrow, or a Power + Water <br/> configuration is the right fit.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-full bg-[#F5A623] px-7 py-4 text-sm font-semibold text-black cursor-pointer">
                  Request a Deployment Consultation
                </button>

                <button className="rounded-full border border-white px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl cursor-pointer">
                  Download Platform Overview
                </button>
              </div>
            </div>
          </div>

        {/* Footer Menu */}

        <div className="px-[50px] py-[50px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

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
              <h4 className="text-white text-xl mb-3">
                Legal Links
              </h4>

              <div className="w-full h-px bg-white/20 mb-4" />

              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white/80 text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-white/80 text-sm"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>

              <h4 className="text-white text-xl mt-8 mb-3">
                Social Links
              </h4>

              <div className="w-full h-px bg-white/20 mb-4" />

              <div className="flex gap-3">
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
          <div className="max-w-[1440px] mx-auto relative px-4 md:px-10 py-6">
            <h1 className="font-heading text-center text-white text-[48px] md:text-[80px] xl:text-[88px] border-b-6 border-white  leading-none whitespace-nowrap overflow-hidden">
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
      <h4 className="text-white text-xl mb-3">
        {title}
      </h4>

      <div className="w-full h-px bg-white/20 mb-4" />

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-white/80 text-sm hover:text-white transition"
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
    <button className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white cursor-pointer">
      {children}
    </button>
  );
}