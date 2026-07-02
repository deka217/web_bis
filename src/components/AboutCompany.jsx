import MenuButton from "./MenuButton";
import Tomato from "../assets/Tomato.png";
import Vegetable from "../assets/Vegetable.png";
import Leaf from "../assets/Leaf.png";
import Strawberry from "../assets/Strawberry.png";

function AboutCompany() {
    return (
        <section className="-mt-[18px] relative ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] w-screen overflow-hidden bg-[#F4F4F4]">
            <div className="mx-auto flex h-auto w-full max-w-[1440px] flex-col items-center justify-between gap-14 px-6 py-10 lg:h-[628px] lg:flex-row lg:px-[72px] lg:py-[64px]">

                {/* LEFT IMAGE SECTION */}
                <div className="flex flex-col gap-4">

                    {/* TOP ROW */}
                    <div className="flex gap-4">

                        {/* TOMATO */}
                        <div className="rounded-[28px] overflow-hidden">
                            <img
                                src={Tomato}
                                alt="Tomato"
                                className="w-[240px] h-[210px] object-cover"
                            />
                        </div>

                        {/* VEGETABLE */}
                        <div className="rounded-[28px] overflow-hidden">
                            <img
                                src={Vegetable}
                                alt="Vegetables"
                                className="w-[420px] h-[210px] object-cover"
                            />
                        </div>
                    </div>

                    {/* BOTTOM ROW */}
                    <div className="flex gap-4">

                        {/* PLANT */}
                        <div className="rounded-[28px] overflow-hidden">
                            <img
                                src={Leaf}
                                alt="Leaf"
                                className="w-[390px] h-[210px] object-cover"
                            />
                        </div>

                        {/* STRAWBERRY */}
                        <div className="rounded-[28px] overflow-hidden">
                            <img
                                src={Strawberry}
                                alt="Strawberry"
                                className="w-[240px] h-[210px] object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="max-w-[520px] text-justify">

                    {/* <p className="text-[#F7A600] text-[18px] font-semibold mb-3 tracking-wide uppercase">
                        About Company
                    </p> */}

                    <h2 className="text-[42px] leading-[52px] font-bold text-black mb-6">
                        About Company
                    </h2>

                    <p className="text-[#4B4B4B] text-[16px] leading-[24px] font-normal mb-8">
                        PT BestAgro Indo Sukses (BIS) is an Indonesian agrochemical company
                        committed to supporting agricultural progress through high-quality
                        pesticide solutions. Established in 2012 (formerly PT Berkah Sumber
                        Sukses), BIS develops and supplies fungicides, herbicides,
                        insecticides, and rodenticides trusted by farmers nationwide.
                    </p>

                    <p className="text-[#4B4B4B] text-[16px] leading-[24px] font-normal mb-10">
                        By collaborating with international partners and experienced local
                        distributors, BIS ensures reliable, effective, and market-proven
                        products that help farmers achieve better yields sustainably and
                        profitably.
                    </p>

                    {/* BUTTON */}
                    <MenuButton
                        style={{
                            display: 'flex',
                            width: '173px',
                            height: '60px',
                            padding: '16px 50px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '8px',
                            flexShrink: 0,
                            borderRadius: '20px',
                            background: '#FFA600',
                            color: '#FFF',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '18px',
                            fontWeight: 600
                        }}
                    >
                        More About Us
                    </MenuButton>
                </div>

            </div>
        </section>
    );
}


export default AboutCompany;
