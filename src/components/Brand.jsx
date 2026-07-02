import { useEffect, useState } from "react";
import { API_BASE_URL } from "../api";

function Brand() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/brands`
      );

      const data = await response.json();

      setBrands(data || []);
    } catch (error) {
      console.error(
        "Failed to load brands:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Title */}
        <h2
          className="
            mb-8
            text-center
            text-[28px]
            font-bold
            text-[#333333]

            md:text-[36px]
          "
        >
          Our Products
        </h2>

        {/* Brand Grid */}
        {loading ? (
          <div className="text-center">
            Loading brands...
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-2
              gap-x-8
              gap-y-8

              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              xl:grid-cols-6
            "
          >
            {brands.map((brand) => (
              <div
                key={brand.brandID}
                className="
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <img
                  src={brand.logoBrand}
                  alt={brand.brandName}
                  className="
                    h-auto
                    max-h-[80px]
                    w-auto
                    max-w-[160px]
                    object-contain
                  "
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Brand;