import MenuButton from "./MenuButton";
import backgroundLeaf from "../assets/Background_leaff.png";
import backgroundColor from "../assets/Background_color.png";
import backgroundCircle from "../assets/Background_circle.png";
import produk from "../assets/Produk.png";

// function Hero() {
//   return (
//     <section
//       className="relative isolate ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] flex min-h-[564px] w-screen items-center overflow-hidden max-[1100px]:min-h-[760px] max-[1100px]:items-start max-md:min-h-[720px] max-[520px]:min-h-[660px]"
//       aria-label="Hero"
//     >
//       <div className="absolute inset-0 z-0" aria-hidden="true">
//         <img className="absolute inset-0 block h-full w-full object-cover" src={backgroundColor} alt="" />
//         <img className="absolute inset-0 block h-full w-full object-cover opacity-68" src={backgroundLeaf} alt="" />
//         <img
//           className="absolute right-[-18px] top-[-28px] block w-[min(60%,860px)] max-w-none max-[1100px]:right-[-170px] max-[1100px]:top-[82px] max-[1100px]:w-[760px] max-md:right-[-260px] max-md:top-[160px] max-md:w-[620px] max-[520px]:right-[-220px] max-[520px]:top-[190px] max-[520px]:w-[480px]"
//           src={backgroundCircle}
//           alt=""
//         />
//         <img
//           className="absolute bottom-[52px] right-[86px] z-10 block w-[min(39%,560px)] max-[1100px]:bottom-6 max-[1100px]:right-7 max-[1100px]:w-[min(62%,520px)] max-md:bottom-6 max-md:right-1/2 max-md:w-[min(92%,430px)] max-md:translate-x-1/2 max-[520px]:bottom-[18px] max-[520px]:w-[min(96%,360px)]"
//           src={produk}
//           alt=""
//         />
//       </div>

//       <div className="relative z-10 mx-auto w-full max-w-[1392px] px-[92px] py-[72px] max-[1100px]:px-11 max-[1100px]:py-[60px] max-md:px-6 max-md:py-10 max-[520px]:px-[18px] max-[520px]:py-8">
//         <div className="flex max-w-[720px] flex-col items-start gap-[38px] max-[1100px]:max-w-[560px] max-md:max-w-full max-md:gap-7">
//           <h2 className="max-w-[700px] text-[clamp(38px,4vw,58px)] leading-[1.15] font-extrabold text-white max-md:max-w-[420px] max-md:text-[42px] max-[520px]:max-w-[320px] max-[520px]:text-[34px]">
//             Sustainable Farming.
//             <br />
//             Profitable Results. Premium Quality.
//           </h2>

//           <MenuButton
//             className="w-44 shadow-[0_14px_36px_rgba(122,77,9,0.14)]"
//             variant="light"
//           >
//             Products
//           </MenuButton>
//         </div>
//       </div>
//     </section>
//   );
// }

/*
Legacy class-based version kept for reference:
*/
function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__media" aria-hidden="true">
        <img className="hero__color" src={backgroundColor} alt="" />
        <img className="hero__leaf" src={backgroundLeaf} alt="" />
        <img className="hero__circle" src={backgroundCircle} alt="" />
        <img className="hero__product" src={produk} alt="" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <h2 className="hero__title">
            Sustainable Farming.
            <br />
            Profitable Results. Premium Quality.
          </h2>

          <MenuButton className="hero__cta" variant="light">
            Products
          </MenuButton>
        </div>
      </div>
    </section>
  );
}


export default Hero;
