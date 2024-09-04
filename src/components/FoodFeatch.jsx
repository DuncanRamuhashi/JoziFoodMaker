import { useEffect, useState, useRef } from "react";

export const FoodFeatch = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideInterval = useRef(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productArray = [];
        for (let i = 0; i < 10; i++) {
          const rep = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
          const data = await rep.json();
          productArray.push(data.meals[0]);
        }
        setProducts(productArray);
      } catch (error) {
        console.error('There was an error fetching data', error);
      }
    };
    fetchData();
  }, []);

  const description = products[currentIndex]?.strInstructions || "";
  const truncatedDescription = description.substring(0, 500) + ".....";
  const shouldShowMoreButton = description.length > 500;

  useEffect(() => {
    if (products.length > 0 && !showFullDescription) {
      autoSlideInterval.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 8000);

      return () => clearInterval(autoSlideInterval.current);
    }
  }, [products, showFullDescription]);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + products.length) % products.length
    );
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-[80vh] flex justify-center items-center mt-20">
      <div className="w-full max-w-5xl bg-white shadow-lg overflow-hidden relative rounded-xl mb-20">
        <div
          className="carousel flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, width: "100%" }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-none w-full flex flex-col md:flex-row items-center p-8"
            >
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                <h1 className="text-6xl font-dancing text-gray-800 mb-4">
                  {product?.strMeal}
                </h1>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-700">
                    {product?.strMeal}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {product?.strCategory}
                  </p>
                  <p className="text-lg text-gray-600">
                    Heritage: {product?.strArea}
                  </p>
                </div>
                <div className="text-justify text-gray-700 mb-6 px-8">
                  <p className="mb-4">{showFullDescription ? description : truncatedDescription}</p>
                  {shouldShowMoreButton && (
                    <button
                      onClick={() => setShowFullDescription((prevState) => !prevState)}
                      className="text-yellow-400"
                    >
                      {showFullDescription ? "Less" : "More"}
                    </button>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden rounded-full shadow-lg">
                  <a href="#">
                  <img
                    src={product?.strMealThumb}
                    alt="Meal Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPreviousSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#8592;
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};
