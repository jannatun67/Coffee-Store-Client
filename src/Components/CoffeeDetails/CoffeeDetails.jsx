import { useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {
    const coffee = useLoaderData()
    console.log(coffee);
    const {_id, name, chef, supplier, taste, category, details, photo } = coffee;
    return (
        <div>
        <div className="card card-side bg-[#F5F4F1] p-4 shadow-xl">
          <figure>
            <img src={coffee. photo} alt="Movie" />
          </figure>
          <div className="flex justify-between items-center w-full">
          <div>
          <h2 className="card-title">
              Name: <span className="text-gray-500">{name}</span>
            </h2>
            <p>
              Chef:<span className="text-gray-500">{chef}</span>
            </p>
            <p>
              Price: <span className="text-gray-500">890 Taka</span>
            </p>
          </div>
            
          </div>
        </div>
      </div>
    );
};

export default CoffeeDetails;