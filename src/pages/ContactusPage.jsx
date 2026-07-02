import ContactUsbackground from "../assets/ContactUsbackground.png";
import Headquarters from "../assets/Headquarters.png";
import Warehouse from "../assets/Warehouse.png";
import { useState } from "react";
import { API_BASE_URL } from "../api";

function ContactusPage() {
    const warehouseImages = [
        Warehouse,
        Warehouse,
        Warehouse,
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const  prevSlide = () => {
        setCurrentSlide((prev) => prev === 0 ? warehouseImages.length - 1 : prev - 1
        );
};
    const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % warehouseImages.length);
    };
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    });
    const handleChange = (e) => {
        setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch(`${API_BASE_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send message.");
    }

    alert("Message sent successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  } finally {
    setLoading(false);
  }
};

const [loading, setLoading] = useState(false);
  return (
    <section
      className="
        relative
        w-screen
        min-h-screen
        ml-[calc(50%-50vw)]
        mr-[calc(50%-50vw)]
        overflow-hidden
      "
    >
      {/* Background */}
      <img
        src={ContactUsbackground}
        alt="Contact Background"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#8A5D23]/75" />

      {/* Content */}
      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1440px]
          px-8
          py-10
          sm:px-8
          lg:px-[60px]
          lg:py-[120px]
          xl:px-[80px]
          md:px-[40px]
          2xl:px-[100px]
        "
      >
        {/* <div
          className="
            flex
            flex-col
            gap-2

            lg:flex-row
            lg:items-start
            lg:justify-between
          "
        > */}
            <div
  className="
    flex
    flex-col
    gap-10

    lg:flex-row
    lg:items-stretch
    lg:justify-between
    lg:gap-10

    xl:gap-12
  "
>
          {/* LEFT SIDE */}
          {/* <div className="w-full lg:max-w-[565px] lg:max-h-[585px]"> */}
          <div
            className="
            order-1
            flex
            flex-col
            w-full
            lg:order-1
            lg:w-1/2
            "
          >
            <div className="flex flex-col gap-[20px]">
            <h2
              className="
                text-white
                text-[28px]
leading-tight
sm:text-[34px]
lg:text-[64px]
                font-bold
                leading-tight
              "
            >
              Let's talk with us
            </h2>

            <p
              className="
                xxl:mt-6
                max-w-[500px]
                sm:mt-2
                text-white/90
                text-[15px]
leading-7
lg:text-[16px]
lg:leading-[26px]
              "
            >
              Questions, comments, or suggestions? Simply fill in the
              form and we'll be in touch shortly.
            </p>
</div>
            {/* Contact Info */}
            <div
className="
    mt-5
    grid
    grid-cols-2
    gap-4
    lg:flex
    lg:flex-col
    lg:gap-4
"
>
              <div className="flex items-center gap-4">
                <span className="text-[22px] lg:text-[28px] text-[#FFA600]">☎</span>

                <span className="text-[14px] sm:text-[15px] lg:text-[20px] font-semibold text-white">
                  +62 21 2452 5959
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[22px] lg:text-[28px] text-[#FFA600]">✉</span>

                <span className="text-[14px] sm:text-[15px] lg:text-[20px] font-semibold text-white">
                  info@bss-pt.com
                </span>
              </div>
            </div>

            {/* Location Cards */}
            {/* <div
              className="
                mt-12
                grid
                gap-[30px]
                md:grid-cols-2
              "
            > */}

        {/* <div
          className="
            order-3
            mt-8
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:order-none
            lg:mt-10
            "
          > */}

            <div
              className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
              "
            >
              <div
                className="
                  rounded-[16px]
                  bg-white/10
                  p-[8px]
                  backdrop-blur-md
                  border
                  border-white/20
                  w-full
                  lg:max-w-[287px] 
                  min-h-[285px]
                  xxl:max-h-[384px]
                  sm:max-h-[354px]
                "
              >
                {/* <div className="h-[200px] rounded-[16px] bg-white/20" /> */}
                <img
                    src={Headquarters}
                    alt="Headquarters"
                    className="
                        h-[190px]
                        lg:h-[200px]
                        w-full
                        rounded-[12px]
                        object-cover
                        transition-transform
                        duration-500
                        hover:scale-105
                        "
                    />

                <div className="mt-4 text-white">
                  <h3 className="font-bold">
                    Headquarters:
                  </h3>

                  <p className="mt-2 text-[14px] leading-[1.7]">
                    Citi Hub Harton Tower 5th Floor,
                    Unit G Jl. Sentra Bisnis Artha
                    Gading Blok D, Kav. No.3,
                    Jakarta Utara 14240 Indonesia
                  </p>
                </div>
              </div>

              <div
  className="
    rounded-[16px]
    border
    border-white/20
    bg-white/10
    p-[8px]
    backdrop-blur-md
    lg:max-w-[287px] 
    min-h-[285px]
    xxl:max-h-[384px]
    sm:max-h-[354px]
  "
>
  {/* Slider */}
  <div className="relative overflow-hidden rounded-[12px]">
    <img
      src={warehouseImages[currentSlide]}
      alt="Warehouse"
      className="
        h-[190px]
        lg:h-[200px]
        w-full
        rounded-[12px]
        object-cover
        transition-all
        duration-500
      "
    />

    {/* Previous */}
    <button
      onClick={prevSlide}
      className="
        absolute
        left-[10px]
        top-1/2
        -translate-y-1/2

        flex
        h-[44px]
        w-[44px]
        items-center
        justify-center

        rounded-full
        bg-white
        text-[#FFA600]

        shadow-lg

        transition
        hover:scale-110
      "
    >
      ❮
    </button>

    {/* Next */}
    <button
      onClick={nextSlide}
      className="
        absolute
        right-[10px]
        top-1/2
        -translate-y-1/2

        flex
        h-[44px]
        w-[44px]
        items-center
        justify-center

        rounded-full
        bg-white
        text-[#FFA600]

        shadow-lg

        transition
        hover:scale-110
      "
    >
      ❯
    </button>

    {/* Dots */}
    <div
      className="
        absolute
        bottom-[12px]
        left-1/2
        -translate-x-1/2

        flex
        gap-2
      "
    >
      {warehouseImages.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`h-[10px] w-[10px] rounded-full transition-all ${
            currentSlide === index
              ? "bg-white w-[22px]"
              : "bg-white/60"
          }`}
        />
      ))}
    </div>
  </div>

  {/* Text */}
  <div className="mt-4 text-white">
    <h3 className="text-[18px] font-bold">
      Warehouse:
    </h3>

    <p className="mt-2 text-[14px] leading-[1.7] text-white/90">
      Green Sedayu Biz Park,
      <br />
      Jl. Raya Cakung Cilincing,
      <br />
      KM. 2 Blok GS 9A No. 11,
      <br />
      Cakung, Jakarta Timur,
      Indonesia
    </p>
  </div>
              </div>
            </div>
          {/* </div> */}
        </div>

          {/* RIGHT SIDE FORM */}
          {/* <div
            className="
              w-full

              rounded-[24px]
              bg-white

              p-6

              shadow-[0_20px_60px_rgba(0,0,0,0.18)]

              lg:max-w-[565px] 
              lg:max-h-[585px]
              lg:p-12
            "
          > */}
          <div
            className="
                order-2
    flex
    flex-col
    w-full
    lg:order-2
    lg:w-1/2 
                rounded-[24px]
                bg-white
                p-4
sm:p-5
lg:p-10
xl:p-12
                shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                lg:h-full
                lg:p-10
                xl:p-12
                "
            >
            {/* <div className="grid gap-5 md:grid-cols-2"> */}
            <form
                    onSubmit={handleSubmit}
                    className="flex flex-col h-full"
                    >
            <div
                className="
                    grid
                    grid-cols-1
                    gap-5
                    sm:grid-cols-2
                    "
            >
                
              <input
  type="text"
  name="firstName"
  value={formData.firstName}
  onChange={handleChange}
  placeholder="First Name*"
  className="
    h-[48px]
    lg:h-[50px]
    w-full
    rounded-[12px]
    border
    border-[#D9D9D9]
    px-5
    outline-none
  "
/>

              <input
  type="text"
  name="lastName"
  value={formData.lastName}
  onChange={handleChange}
  placeholder="Last Name*"
  className="
    h-[48px]
    w-full
    rounded-[12px]
    border
    border-[#D9D9D9]
    px-5
    outline-none
  "
/>
            </div>

            <input
                type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email*"
  className="
    mt-5
    h-[48px]
    lg:h-[50px]
    w-full
    rounded-[12px]
    border
    border-[#D9D9D9]
    px-5
    outline-none
  "
            />

            <input
                type="text"
  name="phoneNumber"
  value={formData.phoneNumber}
  onChange={handleChange}
  placeholder="Phone Number*"
  className="
    mt-5
    h-[48px]
    lg:h-[50px]
    w-full
    rounded-[12px]
    border
    border-[#D9D9D9]
    px-5
    outline-none
  "
            />

            <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="
                    mt-5
                    w-full
                    rounded-[12px]
                    border
                    border-[#D9D9D9]
                    p-5
                    outline-none
                    resize-none
                    "
            />

            <button
            type="submit"
            disable={loading}
              className="
                mt-6
                lg:mt-8
                h-[48px]
                w-full
                rounded-[12px]
                bg-[#FFA600]
                text-[18px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#e69600]
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
        </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactusPage;