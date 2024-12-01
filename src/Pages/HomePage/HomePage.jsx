import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import { useState } from "react";
import FollowUsNow from "../../Components/FollowUsNow/FollowUsNow";


const HomePage = () => {
    const LoadedCoffees = useLoaderData()
    const[product,setProduct]=useState(LoadedCoffees)
    return (
        <div>
           
           <Banner></Banner>
           <PopularProducts LoadedCoffees={LoadedCoffees} product={product} setProduct={setProduct}></PopularProducts>
           <FollowUsNow></FollowUsNow>
        </div>
    );
};

export default HomePage;