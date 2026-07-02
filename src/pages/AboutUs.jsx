import HeroAboutus from "../assets/HeroAboutus.png";
import Paddy from "../assets/Paddy.png";
import Bluberryleft from "../assets/Bluberryleft.png";
import Bluberryright from "../assets/Blueberryright.png";
import ValueComitmen from "../assets/ValueComitmen.png";
import MarketMap from "../assets/MarketMap.png";
import Filosophy from "../assets/PadiFilosopi.png";
import Simplification from "../assets/Simplification.png";
import TrustTeam from "../assets/TrustTeam.png";
import PeoplePartner from "../assets/PeoplePartner.png";
import Quality from "../assets/Quality.png";
import AdabtabilityInovation from "../assets/AdabtabilityInovation.png";

import {
    Handshake,
    ShieldCheck,
    Users,
    BadgeCheck,
    Lightbulb
} from "lucide-react";

function PhilosophyCard({
  icon,
  title,
  description
}) {
  return (
    <div
      className="
relative

w-full
max-w-[429px]

min-h-[520px]

mb-6
lg:mb-0

rounded-[24px]
bg-[#F4EBDD]

px-[28px]
pt-[120px]
pb-[32px]

shadow-[0_10px_30px_rgba(0,0,0,0.12)]
"
    >
      <div
        className="
          absolute
          left-1/2
          top-0

          h-[170px]
          w-[170px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full
          border-[5px]
          border-[#FFB000]

          bg-[#F18B00]

          flex
          items-center
          justify-center

          shadow-[0_12px_24px_rgba(0,0,0,0.25)]
        "
      >
        <img
          src={icon}
          alt={title}
          className="h-[80px] w-[80px] object-contain"
        />
      </div>

      <h3
        className="
          mb-6
          text-[24px]
          font-bold
          text-[#A45A00]
        "
      >
        {title}
      </h3>

      <p
  className="
    w-full
    max-w-[365px]
    text-start
    lg:text-left
    text-[14px]
    leading-[1.6]
    text-[#A45A00]
    sm:text-[15px]
    lg:text-[16px]
  "
>
  {description}
</p>
    </div>
  );
}

function AboutUs() {
    return (
        <section
            className="
    w-screen
    ml-[calc(50%-50vw)]
    mr-[calc(50%-50vw)]
  "
        >
            {/* HERO SECTION */}
            <div className="relative overflow-hidden">
                <img
                    src={HeroAboutus}
                    alt="About Company"
                    className="
        block
        w-full
        h-auto
        object-cover
      "
                />

                {/* Overlay Content */}
                <div
                    className="
        absolute
        inset-0

        flex
        items-center
        justify-center

        px-6

        lg:px-[80px]
      "
                >
                    <div
                        className="
          w-full
          max-w-[1275px]
        "
                    >
                        <h2
                            className="
            text-white
            text-[32px]
            font-bold
            leading-[42px]

            md:text-[40px]

            lg:text-[48px]
          "
                        >
                            About-
                            <br />
                            Company.
                        </h2>
                    </div>
                </div>
            </div>

            {/* PADDY SECTION */}
            <div
                className="
      mx-auto
      flex
      max-w-[1440px]

      flex-col
      gap-10

      px-6
      py-12

      lg:flex-row
      lg:items-center
      lg:gap-[80px]
      lg:px-[80px]
      lg:py-[80px]
    "
            >
                {/* LEFT */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={Paddy}
                        alt="Paddy"
                        className="
          w-full
          rounded-[24px]
          object-cover
        "
                    />
                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <h3
                        className="
          sm:text-[28px]
          font-bold
          text-[#2D2D2D]
          lg:text-[32px]
        "
                    >
                        PT BestAgro Indo Sukses (BIS)
                    </h3>

                    <p
                        className="
                          lg:text-[20px]
                          sm:text-[16px]
                          leading-[1.5]
                          text-[#000]
                          text-justify
                          "
                        >
                        formerly known as <strong>PT Berkah Sumber Sukses (BSS)</strong>, is
                        an agrochemical company dedicated to supporting the advancement of
                        agriculture in Indonesia.
                    </p>
                </div>
            </div>

            <div
                className="
                mx-auto
                flex
                max-w-[1440px]
                flex-col
                gap-10
                px-6
                py-12
                lg:flex-row
                lg:items-center
                lg:gap-[80px]
                lg:px-[80px]
                lg:py-[80px]
                "
            >
                {/* LEFT (Text) */}
<div
  className="
    order-2
    w-full
    text-justify

    lg:order-1
    lg:w-1/2
  "
>
  <h3
    className="
      text-[24px]
      font-bold
      text-[#2D2D2D]

      sm:text-[28px]
      lg:text-[32px]
    "
  >
    PT BestAgro Indo Sukses (BIS)
  </h3>

  <p
    className="
      mt-4
      text-[16px]
      leading-[1.6]
      text-[#000]

      lg:text-[20px]
    "
  >
    Established in 2012, BIS has developed its own range of agrochemical
    products, including fungicides, herbicides, insecticides, and
    rodenticides. The company continuously strives to deliver high-quality
    products that are well accepted by the market while consistently
    expanding its product portfolio to meet the evolving needs of farmers.
  </p>

  <p
    className="
      mt-6
      text-[16px]
      leading-[1.6]
      text-[#000]

      lg:text-[20px]
    "
  >
    To ensure product reliability and effectiveness, BIS collaborates with
    reputable pesticide manufacturers in China and India, ensuring that
    Indonesian farmers receive trusted, market-proven solutions.
  </p>

  <p
    className="
      mt-6
      text-[16px]
      leading-[1.6]
      text-[#000]

      lg:text-[20px]
    "
  >
    BIS has also built strong business relationships with experienced main
    distributors across Indonesia to ensure efficient and reliable product
    distribution.
  </p>
</div>

{/* RIGHT (Images) */}
<div
  className="
    order-1
    flex
    w-full
    gap-[16px]
    mb-8

    lg:order-2
    lg:mb-0
    lg:w-1/2
  "
>
  <img
    src={Bluberryleft}
    alt="Blueberry Left"
    className="
      h-[300px]
      w-1/2

      -mt-[20px]

      rounded-[24px]

      object-cover

      transition-all
      duration-700

      hover:scale-[1.03]

      lg:h-[460px]
      lg:-mt-[30px]
    "
  />

  <img
    src={Bluberryright}
    alt="Blueberry Right"
    className="
      h-[300px]
      w-1/2

      rounded-[24px]

      object-cover

      transition-all
      duration-700

      hover:scale-[1.03]

      lg:h-[460px]
    "
  />
</div>
            </div>

            <div className="relative overflow-hidden">
                <img
                    src={ValueComitmen}
                    alt="About Company"
                    className="
        block
        w-full
        lg:h-auto
        h-[380px]
        md:[450px]
        object-cover
      "
                />

                {/* Overlay Content */}
                <div
                    className="
        absolute
        inset-0

        flex
        items-center
        justify-center

        px-6

        lg:px-[80px]
      "
                >
                    <div
                        className="
          w-full
          max-w-[1275px]
        "
                    >
                        <span className="lg:text-[20px] sm:text-[16px] text-white text-center block mb-4">
                            Guided by its commitment to quality and integrity,
                            <br />
                            BIS operates under the tagline:
                        </span>
                        <h2
                            className="
            text-white
            sm:text-[24px]
            font-bold
            leading-[42px]
            text-center
            md:text-[40px]
            lg:text-[48px]
          "
                        >
                            Your Values, Our Commitment
                        </h2>
                    </div>
                </div>
            </div>

            <div
                className="
    mx-auto
    flex
    w-full
    max-w-[1048px]
    p-12
    flex-col
    gap-6

    lg:flex-row
    lg:gap-[32px]
  "
            >
                {/* LEFT CARD */}
                <div
                    className="
      flex
      w-full
      flex-col
      items-start

      gap-[64px]

      rounded-[24px]

      bg-[#E87E06]

      p-[24px]

      lg:w-[484px]
    "
                >
                    {/* <div
      className="
        flex
        h-[72px]
        w-[72px]

        items-center
        justify-center

        rounded-full

        bg-white/20
      "
    >
      🌱
    </div> */}

                    <div className="flex flex-col gap-6">
                        <h3
                            className="
          text-[36px]
          font-bold
          text-white
        "
                        >
                            Our Vision
                        </h3>

                        {/* <div className="h-[2px] w-[72px] bg-white" /> */}

                        <p
                            className="
          text-[18px]
          leading-[1.8]
          text-white
        "
                        >
                            To provide sustainable farming solutions that are both profitable and supported by high-quality products.
                        </p>
                    </div>
                </div>

                {/* RIGHT CARD */}
                <div
                    className="
      flex
      w-full
      flex-col
      items-start

      gap-[64px]

      rounded-[24px]

      bg-[#FFA600]

      p-[24px]

      lg:w-[484px]
    "
                >
                    {/* <div
      className="
        flex
        h-[72px]
        w-[72px]

        items-center
        justify-center

        rounded-full

        bg-white/20
      "
    >
      🎯
    </div> */}

                    <div className="flex flex-col gap-6">
                        <h3
                            className="
          text-[36px]
          font-bold
          text-white
        "
                        >
                            Our Mission
                        </h3>

                        {/* <div className="h-[2px] w-[72px] bg-white" /> */}

                        <p
                            className="
          text-[18px]
          leading-[1.8]
          text-white
        "
                        >
                            To become the most trusted agrochemical company by delivering the highest level of commitment to all stakeholders.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex sm:w-[420px] lg:w-[1252px] mx-auto flex-col items-center">
                <h2
                    className="
    w-full
    text-center

    text-[#333333]
    text-[32px]
    font-semibold
    leading-[120%]

    md:text-[40px]
    lg:text-[48px]
  "
                >
                    Market Map
                </h2>
                <img
  src={MarketMap}
  alt="Market Map"
  className="
    block
    w-full
    p-2
    h-[336px]
    self-stretch
    object-cover

    md:h-[500px]
    lg:h-[980px]
    lg:aspect-[290/227]
  "
/>
            </div>

            {/* <div
                className="
        relative

        min-h-[440px]

        rounded-[24px]
        bg-[#F3E8DB]

        px-[28px]
        pb-[32px]
        pt-[120px]

        shadow-[0_10px_30px_rgba(0,0,0,0.12)]
      "
            >
            </div> */}

{/* <div
  className="
    relative
    rounded-[24px]
    bg-[#F3E8DB]
    px-8
    py-16
  "
> */}
  <div className="relative overflow-hidden">
  {/* Background Image */}
  <img
    src={Filosophy}
    alt="Our Philosophy"
    className="
      block
      w-full
      lg:h-auto
      h-[310px]
      object-cover
    "
  />

  {/* Overlay Title */}
  <div
    className="
      absolute
      inset-0

      flex
      items-center
      justify-center

      px-6
      -translate-y-[40px]
      lg:-translate-y-[60px]
      lg:px-[80px]
    "
  >
    <div
      className="
        w-full
        max-w-[1275px]
      "
    >
      <h2
        className="
          text-center
          text-white

          text-[32px]
          font-bold
          leading-[42px]

          md:text-[40px]
          lg:text-[48px]
        "
      >
        Our Philosophy
      </h2>
    </div>
  </div>
</div>

{/* Philosophy Cards */}
<div
  className="
  relative
  z-20
    mx-auto
    lg:-mt-[60px]
    -mt-[20px]
    w-full
    max-w-[1440px]
    px-6
    lg:px-[40px]
  "
>
  {/* Top Row */}
  <div
  className="
    grid
    gap-y-[90px]
    gap-x-[24px]
    md:grid-cols-2
    md:gap-[40px]
    lg:grid-cols-3
    lg:gap-[32px]
  "
>
    <PhilosophyCard
      icon={Simplification}
      title="Commitment & Continuity"
      description="Committed to give the best quality of Pesticide products to meet the needs of every farmers in Indonesia. This is a dedication which given continuously. The aim is to make sure that only the best products being used by Indonesian farmers in order to continue to advance the country’s agricultural products. Full commitment also given to the Distributors in order to create a long and good relationship with them."
    />

    <PhilosophyCard
      icon={TrustTeam}
      title="Trust & Team"
      description="Trust means that you rely on someone else, you believe in the person’s integrity and strength. Trust is essential to an effective team for it provides a sense of safety. When the team members feel safe with each other, they feel comfortable to open up, take appropriate risks, and expose vulnerabilities. Without trust there’s less innovation, collaboration, creative thinking, and productivity. So, if the team members trust one another, they’re far more likely to share knowledge, and communicate openly."
    />

    <PhilosophyCard
      icon={PeoplePartner}
      title="People & Partners"
      description="Always put the customers’ as top priority and consider them as Partners without any discrimination. Always try to reach all levels in the society, especially People in Indonesian Agriculture to be able to understand their needs and desires."
    />
  </div>

  {/* Bottom Row */}
  <div
    className="
      mt-[90px]
      md:mt-[110px]
      lg:mt-[120px]
      flex
      flex-col
      items-center

      gap-[32px]

      lg:flex-row
      lg:justify-center
    "
  >
    <PhilosophyCard
      icon={Quality}
      title="Quality"
      description="Only provide the best quality of each product offered to farmers in Indonesia with the hope that these products can meet their needs and expectations. In addition, efforts should also be made to ensure product quality is always maintained."
    />

    <PhilosophyCard
      icon={AdabtabilityInovation}
      title="Adaptability & Innovation"
      description="Adaptation and innovation help create a product that suits to the needs of consumers. A product must be able to adapt to the current conditions and situations. When the Indonesian economy is decreasing, purchasing ability also declines; it is necessary to have an innovation to be able to adapt to existing situations and conditions. For example, by launching products in small packages that are more affordable to the customers."
    />
  </div>
</div>

        </section>
    );
}


export default AboutUs;
