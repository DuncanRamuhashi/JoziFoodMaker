import back from "../assets/Images/5.jpg";
import back2 from "../assets/Images/6.jpg";
import back3 from "../assets/Images/7.jpg";
import back4 from "../assets/Images/8.jpg";
import { useEffect,useState } from "react";
export const FoodFeatch = () => {
     const [product, setProducts ] = useState([]);

     useEffect( () => {
           const fetchData = async () => {
                         try{
                            const rep =  await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
                            const data =  await rep.json();
                            
                            setProducts(data.meals[0]);
                         
                          } catch (error) {
                            console.error('There was an error fetching data', error);
                          }
           }
            fetchData();
     },[]);
     console.log(product);
  return (
<div className=" h-full flex justify-center items-center  mt-20">
  <div className="flex w-full px-20 h-full bg-white shadow-lg  overflow-hidden">
    

    <div className="w-1/2 flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{product.strMeal}</h1>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">{product.strMeal}</h2>
        <p className="text-lg text-gray-600">{product.strCategory}</p>
        <p className="text-lg text-gray-600">Heritage: {product.strArea}</p>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What You Need to Make This</h2>
        <div className="flex justify-around">
          <div className="text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Ingredients</h3>
            <ul className="list-disc pl-4 text-gray-600">
              <li> {product.strIngredient1}</li>
              <li> {product.strIngredient2}</li>
              <li> {product.strIngredient3}</li>
              <li> {product.strIngredient4}</li>
              <li> {product.strIngredient5}</li>
              <li> {product.strIngredient6}</li>
              <li> {product.strIngredient7}</li>
              <li> {product.strIngredient8}</li>
              <li> {product.strIngredient9}</li>
              <li> {product.strIngredient10}</li>
              <li> {product.strIngredient11}</li>
              <li> {product.strIngredient12}</li>
             
            </ul>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Measures</h3>
            <ul className="list-disc pl-4 text-gray-600">
            <li> {product.strMeasure1}</li>
            <li> {product.strMeasure2}</li>
            <li> {product.strMeasure3}</li>
            <li> {product.strMeasure4}</li>
            <li> {product.strMeasure5}</li>
            <li> {product.strMeasure6}</li>
            <li> {product.strMeasure7}</li>
            <li> {product.strMeasure8}</li>
            <li> {product.strMeasure9}</li>
            <li> {product.strMeasure10}</li>
            <li> {product.strMeasure11}</li>
            <li> {product.strMeasure12}</li>

            </ul>
          </div>
        </div>
      </div>

      <div className="text-justify text-gray-700 mb-6 px-8">
        <p className="mb-4">
        {product.strInstructions}
        </p>
      </div>


      <div className="w-full flex justify-center mb-8 py-20">
        <div className="w-full max-w-4xl h-64 rounded-lg overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/rllQsUw1hFQ`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <a href={product.strYoutube}>
        <button  className="bg-yellow-400 text-gray-800 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-300 transition ease-in-out duration-300">
          Go to Video
        </button>
        </a>

      </div>
    </div>
     

    <div className="w-full flex justify-center items-center ">
      <div className=" rounded-full overflow-hidden shadow-lg">
        <img 
          src= {product.strMealThumb}
          alt="Cheese Burger" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
    
  </div>
  
</div>


  );
}
