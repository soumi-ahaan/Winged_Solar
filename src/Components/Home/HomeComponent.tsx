import Hero from "./Hero";
import Features from "./Features";
import Advantages from "./Advantages";
import Power from "./Power";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/slide4.png"; 
import ad1 from "../../assets/ad1.png";
import ad2 from "../../assets/ad2.png";
import Factory from "./Factory";
import Deployment from "./Deployment";
import Services from "./Services";
import Enpower from "./Enpower"

export default function HomeComponent() {

  const benefits = [
    "Higher land-use efficiency than conventional ground-mount layouts",
    "Reduced field construction and mobilization risk",
    "Factory-built structure options",
    "Potentially lower on-site labor exposure",
    "Domestic-content strategy support through U.S.-fabricated steel options",
    "Grid optional or grid supportive depending on design",
  ];

  const services = [
  {
    image: slide1,
    title: "Commercial & Industrial",
  },
  {
    image: slide2,
    title: "Solar EV Charging Depots",
  },
  {
    image: slide3,
    title: "Municipal Water & Emergency Hubs",
  },
  {
    image: slide4,
    title: "Remote Construction & Mining",
  },
];
  return (
    <div>
      <Hero />
      <Features />
      <Factory />
      <Deployment />
      <Advantages
        image={ad1}
        title="Built for projects where land, labor, and time matter."
        description="Winged Solar is designed for EPCs, developers, municipalities, and commercial customers who need a faster, denser, lower-disruption path to solar and storage."
        benefits={benefits}
      />
      <Power
        title1="Solar-powered"
        title2="water from air."
        description1="Winged Solar platforms can power atmospheric water generation systems that pull moisture from the air, condense it into water, and treat it for use. This creates a deployable power + water option for remote sites, disaster response, island communities, resorts, clinics, and infrastructure teams.
Water production depends on humidity, temperature, available power, operating hours, filtration, and storage design. Winged Solar sizes each system around real site conditions."

        description2="Water production depends on humidity, temperature, available power, operating hours, filtration, and storage design. Winged Solar sizes each system around real site conditions."
        image={ad2}
      />
      <Services services={services} />
      <Enpower/>
    </div>
  )
};