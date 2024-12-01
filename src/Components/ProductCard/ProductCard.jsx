import { FaPen } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ coffee,setProduct,product }) => {
  const {_id, name, chef, supplier, taste, category, details, photo } = coffee;

const handelDelete = _id =>{
  // console.log(_id);
 
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
     console.log(result);
      fetch(`http://localhost:5000/coffees/${_id}`,
        {
          method:"delete"
        }
      )
      
      .then(res=> res.json())
      .then(data =>{
        console.log(data);
        // setProduct(updateProduct)
        if (data.deletedCount > 0) {
  
           Swal.fire({
        title: "Deleted!",
        text: "Your Coffee has been deleted.",
        icon: "success",
    
      });
      const updateProduct=product.filter(cof => cof._id !== _id);
      setProduct(updateProduct)
        }
      })

    }
  });
}


  return (
    <div>
      <div className="card card-side bg-[#F5F4F1] p-4 ">
        <figure>
          <img src={photo} alt="Movie" />
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
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-3">
              <Link to={`/coffee/${_id}`}>
              <button className="btn join-item bg-[#D2B48C] text-2xl text-white"><IoEyeOutline /></button>
              </Link>
              <Link to={`/updateCoffee/${_id}`}> <button className="btn join-item bg-[#3C393B] text-2xl text-white"><FaPen /></button></Link>
             
              <button 
              onClick={()=> handelDelete(_id)}
              className="btn  bg-[#EA4744] text-2xl text-white"><MdDelete /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
