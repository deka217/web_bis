import { useEffect, useState } from "react";
import { API_BASE_URL } from "../api";
import MenuButton from "./MenuButton";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);

      const data = await response.json();

      setProducts(data || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="
    py-12
    sm:py-14
    lg:py-16
  ">
      <div className="mx-auto max-w-[1340px] px-6">
        {/* Title */}
        {/* <div className="mb-12 text-center">
          <h2
            className="
              text-[32px]
              font-bold
              text-[#2D2D2D]

              md:text-[42px]
            "
          >
            Our Products
          </h2>
        </div> */}

        {loading ? (
          <div className="text-center">Loading products...</div>
        ) : (
          <div
            className="
              grid
    grid-cols-2
    gap-5

    md:grid-cols-2

    lg:grid-cols-4
    lg:gap-8
            "
          >
            {/* {products.map((product) => (
              <div
                key={product.productID}
                className="
                  group
                  cursor-pointer
                "
              >
                <div
                  className="
                    flex
                    h-[260px]
                    items-center
                    justify-center

                    rounded-[8px]

                    bg-[#FFF0E1]

                    transition-all
                    duration-300

                    group-hover:shadow-xl
                  "
                >
                  <img
                    src={product.imageURL}
                    alt={product.productName}
                    className="
                      max-h-[220px]
                      max-w-[180px]
                      object-contain

                      transition-transform
                      duration-300

                      group-hover:scale-105
                    "
                  />
                </div>

                <div className="mt-4">
                  <h3
                    className="
                      text-[24px]
                      font-bold
                      text-[#1E1E1E]
                    "
                  >
                    {product.productName}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[14px]
                      text-[#8C8C8C]
                    "
                  >
                    {product.categoryName}
                  </p>
                </div>
              </div>
            ))} */}

            {products.map((product) => (
              <div
  key={product.productID}
  className="
    group
    w-full
    flex
    flex-col
    overflow-hidden
    transition-all
    duration-300
  "
>
                {/* IMAGE */}

                <div
                  className="
      w-full

      h-[170px]

      bg-[#EFE5DA]

      flex
      items-center
      justify-center

      overflow-hidden

      sm:h-[260px]

      md:h-[250px]
h-[170px]
sm:h-[210px]
      lg:h-[323px]
    "
                >
                  <img
                    src={product.imageURL}
                    alt={product.productName}
                    className="
        w-full
        h-full

        object-contain

        p-3

        sm:p-3

        lg:p-5

        transition-transform
        duration-500

        group-hover:scale-110
      "
                  />
                </div>

                {/* TEXT */}

                <div
                  className="
      flex

      min-h-[67px]

      w-full

      items-center

      gap-[3px]

      px-[16px]
      py-[15px]

      transition-all
      duration-300

      group-hover:shadow-lg
    "
                >
                  <div className="flex flex-col">
                    <h3
                      className="
          text-black

          text-[14px]
          font-bold

          sm:text-[15px]

          lg:text-[16px]
        "
                    >
                      {product.productName}
                    </h3>

                    <p
                      className="
          text-black/50

          text-[12px]

          sm:text-[13px]

          lg:text-[14px]
        "
                    >
                      {product.categoryName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <MenuButton
        variant="accent"
        className="
    !flex

    !w-full
    lg:!max-w-[1272px]

    !h-[60px]

    !items-center
    !justify-center

    !gap-[8px]

    !rounded-[20px]

    !border
    !border-[#FFA600]

    !bg-white

    !px-[50px]
    !py-[16px]

    !text-[#FFA600]

    !mx-auto
  "
      >
        View All Products
      </MenuButton>
    </section>
  );
}

export default Products;
