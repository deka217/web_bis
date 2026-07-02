import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_BASE_URL } from "../api";

function ProductDetailPage() {
  const { id } = useParams();

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [id]);

const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [otherProducts, setOtherProducts] = useState([]);
const navigate = useNavigate();

useEffect(() => {
  async function loadProduct() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/products/${id}`
      );

      const data = await response.json();

      setProduct(data);

      const productsResponse = await fetch(
        `${API_BASE_URL}/products`
      );

      const products = await productsResponse.json();

      setOtherProducts(
        products.filter(
          (item) => item.productID !== Number(id)
        )
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  loadProduct();
}, [id]);

if (loading) {
    return <div className="py-32 text-center text-xl">Loading...</div>;
  }

  if (!product) {
    return <div className="py-32 text-center text-xl">Product not found.</div>;
  }

  return (
    <>
    <section
      className="
        mx-auto
        max-w-[1440px]

        px-6
        py-[60px]

        xl:px-[80px]
      "
    >
      {/* Breadcrumb */}

      <div
        className="
          mb-10

          flex
          flex-wrap

          items-center

          gap-2

          text-[15px]
        "
      >
        <Link to="/products" className="text-[#8D99AE]">
          Category
        </Link>

        <span className="text-[#8D99AE]">/</span>

        <span className="text-[#8D99AE]">{product.categoryName}</span>

        <span className="text-[#8D99AE]">/</span>

        <span className="font-semibold text-[#FFA600]">
          {product.productName}
        </span>
      </div>

      {/* Content */}

      <div
        className="
          grid

          gap-14

          xl:grid-cols-[minmax(420px,560px)_minmax(0,1fr)]
        "
      >
        {/* LEFT */}

        <div
          className="
            flex

            h-[560px]

            items-center
            justify-center

            rounded-[24px]

            bg-[#F4EBDD]

            p-10
          "
        >
          <img
            src={product.imageURL}
            alt={product.productName}
            className="
              max-h-full
              max-w-full

              object-contain

              transition-all
              duration-500

              hover:scale-105
            "
          />
        </div>

        {/* RIGHT */}

        <div
          className="
            flex
            flex-col

            min-w-0
            gap-8
          "
        >
          {/* Title */}

          <div>
            <h1
              className="
                text-[34px]
                font-bold

                break-words
                text-[#1F2937]

                lg:text-[58px]
              "
            >
              {product.productName}
            </h1>

            <div
              className="
                mt-3

                flex
                flex-wrap

                gap-8

                text-[22px]
              "
            >
              <span className="font-semibold text-[#FFA600]">
                {product.categoryName}
              </span>

              <span className="font-semibold text-[#333]">
                {product.volume || "-"}
              </span>
            </div>
          </div>

          {/* Active Ingredient */}

          <div>
            <h3
              className="
                text-[26px]
                font-semibold

                text-[#2D3748]
              "
            >
              Active Ingredient:
            </h3>

            <p
              className="
                mt-2

                text-[22px]

                text-[#444]
              "
            >
              {product.activeIngredient || "No active ingredient"}
            </p>
          </div>

          <hr className="border-[#D9D9D9]" />

          {/* Description */}

          <p
            className="
              max-w-[760px]

              text-[18px]

              leading-[34px]

              text-[#444]
            "
          >
            {product.description || "No description available."}
          </p>

          {/* Instruction Header */}

          <div
            className="
              flex

              h-[58px]

              items-center
              justify-center

              rounded-full

              border-[3px]
              border-[#E5E7EB]

              text-[22px]
              font-semibold

              text-[#2D3748]
            "
          >
            Instructions for Use
          </div>

          {/* TABLE */}

          <div
  className="
    w-full

    overflow-x-auto
    overflow-y-hidden

    touch-pan-x
    [-webkit-overflow-scrolling:touch]

    scrollbar-thin
    scrollbar-thumb-[#FFA600]
    scrollbar-track
  "
>
            <table
  className="
    min-w-[920px]
      w-full

      table-fixed
      border-collapse

      lg:min-w-full
  "
>
              <colgroup>
                <col className="w-[32%] lg:w-[20%]" />
                <col className="w-[68%] lg:w-[34%]" />
                {/* <col className="hidden lg:table-column lg:w-[18%]" />
                <col className="hidden lg:table-column lg:w-[28%]" /> */}
              </colgroup>
              <thead>
                <tr
                  className="
          border-b-2
          border-[#FFA600]
        "
                >
                  <th
                    className="
            py-4
            pr-3
            text-left
            text-[15px]
            font-semibold
            leading-snug
            text-[#333]
            lg:text-[16px]
            2xl:text-[18px]
          "
                  >
                    Crop
                  </th>

                  <th
                    className="
            py-4
            pr-3
            text-left
            text-[15px]
            font-semibold
            leading-snug
            text-[#333]
            lg:text-[16px]
            2xl:text-[18px]
          "
                  >
                    Pest
                  </th>

                  <th
  className="
    hidden
    lg:table-cell

    py-4
    pr-3
    text-left
    text-[15px]
    font-semibold
    leading-snug
    text-[#333]

    lg:text-[16px]
    2xl:text-[18px]
  "
>
  Dosage
</th>

                  <th
                    className="
                      hidden
                      lg:table-cell
                      py-4
                      text-left
                      text-[15px]
                      font-semibold
                      leading-snug
                      text-[#333]
                      lg:text-[16px]
                      2xl:text-[18px]
                      "
                    >
                      Application Method
                  </th>
                </tr>
              </thead>

              <tbody>
                {product.productDetails?.length > 0 ? (
                  product.productDetails.map((detail) => (
                    <tr
                      key={detail.detailID}
                      className="
              border-b
              border-[#E5E7EB]
              align-top
            "
                    >
                      {/* Crop */}
                      <td
                        className="
  py-4
  pr-4

  text-[14px]
  font-medium
  leading-7
  text-[#333]

  break-words

  lg:py-5
  lg:pr-5
  lg:text-[16px]

  2xl:text-[18px]
"                     >
                        {detail.crop}
                      </td>

                      {/* Pest */}
                      <td
                        className="
  py-4

  text-[14px]
  leading-7
  text-[#333]

  break-words

  lg:py-5
  lg:pr-8
  lg:text-[16px]

  2xl:text-[18px]
"                    >
                        {detail.pest}
                      </td>

                      {/* Dosage */}
                      <td
  className="
    hidden
    lg:table-cell

    py-5
    pr-6

    break-words

    text-[16px]
    text-[#333]
  "
>
  <span className="underline underline-offset-4">
    {detail.dosage}
  </span>
</td>

                      {/* Application */}
                      <td
  className="
    hidden
    lg:table-cell

    py-5

    break-words

    text-[16px]
    leading-7
    text-[#6B7280]
  "
>
  {detail.applicationMethod}
</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="
              py-10
              text-center
              text-gray-400
            "
                    >
                      No instruction available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div
  className="
    mb-3
    flex
    items-center
    justify-end

    text-[13px]
    text-gray-500

    lg:hidden
  "
>
  ← Swipe left / right →
</div>
        </div>
      </div>
    </section>

    <section
  className="
    mt-[48px]
    lg:mt-[60px]
  "
>
  <h2
  className="
    mb-8

    text-center

    text-[28px]
    font-semibold
    text-[#333]

    sm:text-[32px]

    lg:mb-[48px]
    lg:text-[42px]
  "
>
    Other Products
  </h2>

  <div
  className="
    grid

    grid-cols-2

    justify-items-center

    gap-x-4
    gap-y-8

    px-4

    lg:grid-cols-3
    xl:grid-cols-4

    lg:px-0
    lg:gap-y-10
    lg:gap-x-6
    xl:gap-x-8
  "
>
    {otherProducts.slice(0, 4).map((item) => (
  <div
  key={item.productID}
  className="block cursor-pointer"
  onClick={() => {
    navigate(`/products/${item.productID}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
>
    <div
      className="
  group

  flex
  flex-col

  w-full
  max-w-[300px]

  h-auto

  cursor-pointer

  overflow-hidden

  rounded-[16px]

  bg-white

  transition-all
  duration-300

  hover:-translate-y-2

  lg:h-[400px]
  lg:rounded-none
  lg:bg-transparent
"
    >
      {/* Image */}
      <div
        className="
  flex
  items-center
  justify-center

  w-full

  aspect-square

  overflow-hidden

  rounded-t-[16px]

  bg-[#F4EBDD]

  lg:h-[323px]
"
      >
        <img
          src={item.imageURL}
          alt={item.productName}
          className="
  w-[82%]
  h-[82%]

  object-contain

  transition-transform
  duration-500

  group-hover:scale-110

  lg:w-full
  lg:h-full
"
        />
      </div>

      {/* Text */}
      <div
        className="
  flex
  flex-col
  justify-center
  items-start

  w-full

  px-4
  py-3

  bg-white

  lg:h-[77px]
"
      >
        <h3
          className="
            text-[14px]
            sm:text-[16px]
            font-bold
            text-black
          "
        >
          {item.productName}
        </h3>

        <p
          className="
            text-[12px]
            sm:text-[14px]
            text-black/50
          "
        >
          {item.categoryName}
        </p>
      </div>
    </div>
  </div>
))}
  </div>

  <Link
    to="/products"
    className="
  mt-10

  flex
  h-[56px]
  w-full

  items-center
  justify-center

  rounded-[18px]

  border
  border-[#FFA600]

  text-[16px]
  font-semibold

  text-[#FFA600]

  transition-all
  duration-300

  hover:bg-[#FFA600]
  hover:text-white

  lg:mt-[56px]
  lg:h-[60px]
  lg:rounded-[20px]
  lg:text-[18px]
"
  >
    See All Products
  </Link>
    </section>
</>
  );
}

export default ProductDetailPage;
