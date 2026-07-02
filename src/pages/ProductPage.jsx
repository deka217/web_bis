import ProductpageHero from "../assets/ProductpageHero.png";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductPage() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();

useEffect(() => {
  fetch(`${API_BASE_URL}/categories`)
    .then((res) => res.json())
    .then((data) => {
      setCategories(data);
    })
    .catch((err) => {
      console.error(
        "Failed to load categories:",
        err
      );
    });
}, []);

useEffect(() => {
  fetch(`${API_BASE_URL}/products`)
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    })
    .catch((err) => {
      console.error("Failed to load products:", err);
    });
}, []);

useEffect(() => {
  if (!selectedCategory) {
    setFilteredProducts(products);
    return;
  }

  setFilteredProducts(
    products.filter(
      (product) =>
        String(product.categoryID) === String(selectedCategory)
    )
  );
}, [selectedCategory, products]);

const handleClear = () => {
  setSelectedCategory("");
  setFilteredProducts(products);
};

useEffect(() => {
  console.log("selectedCategory =", selectedCategory);
}, [selectedCategory]);

console.log("Selected Category:", selectedCategory);
console.log("Filtered Products:", filteredProducts);

return (
    <>
<section
  className="
    relative
    w-screen
    h-[320px]
    sm:h-[360px]
    lg:h-[380px]
    ml-[calc(50%-50vw)]
    mr-[calc(50%-50vw)]
    overflow-hidden
  "
>
  {/* Background */}
  <img
    src={ProductpageHero}
    alt="Our Products"
    className="
      absolute
      inset-0

      h-full
      w-full

      object-cover
    "
  />

  {/* Orange Overlay */}
  <div
    className="
      absolute
      inset-0

      bg-[#D89200]/70
    "
  />

  {/* Content */}
  <div
    className="
      relative
      z-10
      mx-auto
      flex
      h-full
      w-full
      max-w-[1440px]
      items-end
      lg:items-center
      px-6
      pb-8
      lg:px-[80px]
      lg:pb-0
      lg:px-[80px]
    "
  >
    <div
      className="
        flex
        w-full
        max-w-[740px]

        flex-col

        gap-6
      "
    >
      {/* Title */}
      <h1
        className="
          text-white
          text-[24px]
          leading-tight
          sm:text-[30px]
          lg:text-[56px]
          font-bold
          uppercase
          md:text-[48px]
        "
      >
        OUR PRODUCTS
      </h1>

      {/* Filter */}
      <div className="flex flex-col gap-2">
        <label
          className="
            text-white
            text-[18px]
            lg:text-[20px]
            font-medium
          "
        >
          Filter
        </label>

        <div
          className="
            flex
            flex-col
            items-start
            gap-4
            lg:flex-row
            lg:items-center
          "
        >
          {/* Select */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="
              h-[48px]
              text-[16px]
              lg:h-[42px]
              lg:w-[480px]
              lg:text-[20px]
              w-full
              rounded-[12px]
              bg-white
              px-4
              text-[#999]
              outline-none
            "
          >
            <option value="">Select Category...</option>

            {categories.map((category) => (
                <option
                    key={category.categoryID}
                    value={category.categoryID}
                >
                    {category.categoryName}
                </option>
            ))}
          </select>

          {/* Button */}
          <button
          onClick={handleClear}
            className="
              h-[40px]
w-[110px]
text-[18px]
lg:h-[42px]
lg:w-[240px]
lg:text-[24px]

              rounded-[12px]
              bg-white
              text-[24px]
              font-semibold
              text-[#FFA600]
              transition-all
              duration-300
              hover:bg-[#fff7ea]
              lg:w-[240px]
            "
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  </div>


</section>

<section
    className="
      mx-auto
      w-full
      max-w-[1440px]
      py-[24px]
      px-6
      sm:px-8
      md:px-10
      lg:py-[35px]
      lg:px-[60px]
      xl:py-[55px]
      xl:px-[90px]
      xxl:px=[90px]
    "
  >
<div
  className="
    mx-auto
    max-w-[1440px]
  "
>
  <div
    className="
      grid

      grid-cols-2
      gap-x-6
      gap-y-8
      lg:grid-cols-4
      lg:gap-[40px]
    "
  >
    {filteredProducts.map((product) => (
  <Link
    key={product.productID}
    to={`/products/${product.productID}`}
    className="block"
  >
    <div
      className="
        group
        flex
        h-auto
        lg:h-[400px]
        w-full
        cursor-pointer
        flex-col
        items-center
        overflow-hidden
        transition-all
        duration-300

        hover:-translate-y-1
      "
    >
      {/* Image */}
      <div
        className="
          flex
          aspect-square
          lg:h-[323px]
          w-full

          items-center
          justify-center

          overflow-hidden

          rounded-t-[16px]
          bg-[#F4EBDD]
        "
      >
        <img
          src={product.imageURL}
          alt={product.productName}
          className="
            h-full
            w-full

            object-contain

            transition-transform
            duration-500

            group-hover:scale-110
          "
        />
      </div>

      {/* Text */}
      <div
        className="
          flex
          h-[67px]
          w-full

          flex-col
          items-start
          justify-center

          gap-[3px]

          rounded-b-[16px]
          bg-white

          px-[16px]
          py-[15px]

          transition-shadow
          duration-300

          group-hover:shadow-lg
        "
      >
        <h3
          className="
            text-[14px]
            font-bold
            lg:text-[16px]
            font-bold
            text-black
          "
        >
          {product.productName}
        </h3>

        <p
          className="
            text-[12px]
            lg:text-[14px]
            font-normal
            text-black/50
          "
        >
          {product.categoryName}
        </p>
      </div>
    </div>
  </Link>
))}
  </div>
</div>
</section>
</>
    );
}

export default ProductPage;