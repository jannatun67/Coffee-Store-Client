import { useEffect,  } from "react";
import { Link } from "react-router-dom";
import "./PopularProducts.css"
import ProductCard from "../ProductCard/ProductCard";

const PopularProducts = ({LoadedCoffees,product,setProduct}) => {
    // console.log(Coffees);
  
    // console.log(product);
   useEffect(()=>{
        fetch('http://localhost:5000/coffees')
        .then(res=> res.json())
        .then(data=> setProduct(data))
   },[])

    return (
        <div className="products">
            <div className=" py-7 flex flex-col justify-center items-center space-y-3 w-10/12 mx-auto mt-7">
                <p className="text-[20px]">--- Sip & Savor ---</p>
                <h2 className="text-[55px] font-bold text-[#331A15]">Our Popular Products</h2>
              <Link to="/addCoffee">  <button  className="bg-[#c4a275] py-2 px-1 text-white"> Add Coffee</button></Link>
            </div>

            <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-3 mb-6">
                {
                  LoadedCoffees.map(coffee=> <ProductCard setProduct={setProduct} product={product} key={coffee._id} coffee={coffee}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default PopularProducts;