import back4 from "../assets/Images/4.jpg";

export const FoodFeatch = () => {
  return (
    <div className="h-[60vh] w-full flex justify-center items-center">
      <div className="flex w-full h-full">
        <div className="w-[50%] flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">LUNCH SPECIALS</h1>
          <div className="mt-5">
          <p>2 SLICES OF CHEESE PIZZA</p>
          <p>wITH A A DRINK R45.50 </p>
          <p>+ taxes(toppings are extra)</p>
          <p>Please see menu</p>
          </div>

           <div className="mt-5">
           <p>1 SLICE OF CHEESE PIZZA WITH A SMALL</p>
            <p>HOUSE SALAD & A DRINK R6.50</p>
            <p>+ TAXES (Toppings are extra)</p>

           </div>
          <div className="mt-5">    
            <p>AVAILABLE MONDAY-SATURDAY 11AM-3PM</p>
            <p>DINE INOR CARRY OUT ONLLY</p>
          </div>

            <h3>Limited time offers</h3>
           
           <div>
            <button className="bg-yellow-300  p-3 mt-5 rounded-2xl ">ALL SPECIALS</button>
           </div>
            
        </div>
ss
        <div className="w-[50%] h-full flex justify-center items-center">
          <div className="w-[500px] h-[500px] rounded-full overflow-hidden flex justify-center items-center">
            <img 
              src={back4} 
              alt="Image" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
