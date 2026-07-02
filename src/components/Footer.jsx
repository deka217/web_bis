import MenuButton from "./MenuButton";
import rocketLaunch from "../assets/RocketLaunch.svg";
import leafVector from "../assets/leafvectorright.png";
import fruitVector from "../assets/fruitvectorleft.png";

function Footer() {
  return (
    <footer
      className="
    relative

    mt-[350px]
h-[182px]

    ml-[calc(50%-50vw)]
    mr-[calc(50%-50vw)]

    flex
    w-screen
    flex-col
    justify-end

    bg-[#2D2D2D]

    text-white
  "
    >
      <div
        className="
    relative

    z-10

    mx-auto

    -mt-[140px]

    w-full
    max-w-[1440px]

    px-6

    lg:px-[134px]
  "
      >
        {/* <section className="relative overflow-hidden rounded-[28px] bg-[#FFA600] px-6 py-16 text-center text-[#231300] shadow-[0_30px_80px_rgba(0,0,0,0.12)] lg:h-[404px] lg:px-20 lg:py-[74px]"> */}
        <section
          className="
    relative
    overflow-hidden

    flex
    flex-col
    items-start

    gap-4

    rounded-[20px]

    bg-[#FFA600]

    px-6
    py-10

    text-[#231300]

    shadow-[0_20px_60px_rgba(0,0,0,0.12)]

    sm:px-8
    sm:py-12

    md:px-12
    md:py-14

    lg:w-full
    lg:max-w-[1170px]
    lg:gap-[10px]
    lg:rounded-[24px]
    lg:px-[80px]
    lg:py-[80px]
  "
        >
          {/* <div className="pointer-events-none absolute -bottom-[54px] left-[28px] h-[250px] w-[250px] rounded-full border-[4px] border-white/10" />
          <div className="pointer-events-none absolute bottom-[16px] left-[10px] h-[88px] w-[164px] rounded-b-[140px] border-x-[4px] border-b-[4px] border-white/10" /> */}
          <img
            src={fruitVector}
            alt="fruit decoration"
            // left-[-54.999px]
            // bottom-[-22.48px]
            className="
    absolute
    left-[-4.999px]
    bottom-[-2.48px]

    w-[250px]
    h-[250px]

    rotate-[9.962deg]

    opacity-90

    object-contain
    pointer-events-none
    select-none
  "
          />
          {/* <div className="pointer-events-none absolute right-[-28px] top-[-20px] h-[210px] w-[210px] rounded-[120px] border-[4px] border-white/10 rotate-[18deg]" />
          <div className="pointer-events-none absolute right-[78px] top-[12px] h-[140px] w-[78px] rounded-[60px] border-[4px] border-white/10 rotate-[-28deg]" /> */}

          <img
            src={leafVector}
            alt="leaf decoration"
            className="
  pointer-events-none
  absolute
  right-[-120px]
  top-[-80px]
  z-0
  hidden
  opacity-70
  md:block
  md:h-[260px]
  md:w-[260px]
  lg:right-[-67px]
  lg:top-[-67px]
  lg:h-[340px]
  lg:w-[340px]
"
            style={{
              padding: "48.473px 61.804px 47.809px 62.457px",
            }}
          />

          {/* <div className="relative z-10 mx-auto flex max-w-[940px] flex-col items-center"> */}
          <div
            className="
    relative
    z-10

    mx-auto

    flex
    w-full
    max-w-[940px]
    flex-col
    items-center

    text-center

    lg:items-start
    lg:text-left
  "
          >
            {/* <h2 className="text-[34px] font-bold leading-tight text-[#241100] lg:text-[58px]"> */}
            <h2
              className="
    text-[32px]
    font-bold
    leading-tight
    text-[#241100]
    mx-auto
    sm:text-[40px]

    md:text-[48px]

    lg:text-[58px]
  "
            >
              Ready to Grow Together?
            </h2>

            {/* <p className="mt-8 max-w-[990px] text-[18px] leading-[1.6] text-[#231300] lg:text-[18px]"> */}
            <p className="text-center mt-8 max-w-[990px] text-[18px] leading-[1.6] text-[#231300] lg:text-[18px]">
              We work with distributors and partners who value quality,
              reliability, and long-term collaboration. Let&apos;s discuss how
              PT BestAgro Indo Sukses can support your agricultural business.
            </p>

            <MenuButton
              variant="light"

              className="
    mt-8
mx-auto
    flex
    items-center
    justify-center
    gap-[10px]

    h-[48px]
    w-full
    max-w-[173px]

    rounded-[20px]

    bg-white

    px-[50px]
    py-[16px]

    text-[16px]
    font-semibold
    text-[#FFA600]

    flex-shrink-0

    sm:w-[173px]

    lg:mt-12
    lg:text-[18px]
  "

              icon={
                <img
                  src={rocketLaunch}
                  alt="rocket"

                  className="
      block

      h-[28px]
      w-[28px]

      object-contain
      shrink-0

      brightness-0

      saturate-100

      opacity-100
    "

                  style={{
                    filter: `
        brightness(0)
        saturate(100%)
        invert(67%)
        sepia(95%)
        saturate(2137%)
        hue-rotate(2deg)
        brightness(101%)
        contrast(103%)
        drop-shadow(0 1px 2px rgba(0,0,0,0.12))
      `
                  }}
                />
              }
            >
              Contact Us
            </MenuButton>
          </div>
        </section>
      </div>

      <div
        className="
    mx-auto

    flex
    mb-[-1.4rem]
    h-[182px]
    w-full
    max-w-[1440px]

    items-end
    justify-center

    bg-[#2D2D2D]

    px-6
    pb-[24px]
    pt-[60px]

    text-center

    lg:px-[60px]
  "
      >
        <p className="text-center text-[14px] font-normal text-white/90">
          © 2026 PT BestAgro Indo Sukses
        </p>
      </div>
    </footer>
  );
}

export default Footer;
