import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handelUpdateCoffee =e=>{
        e.preventDefault()
        const form= e.target;
        const name= form.name.value;
        const chef= form.chef.value;
        const supplier= form.supplier.value;
        const taste= form.taste.value;
        const category= form.category.value;
        const details= form.details.value;
        const photo= form.photo.value;
        const UpdatedProduct= {name,chef,supplier,taste,category,details,photo}
        console.log(UpdatedProduct);
        fetch(`http://localhost:5000/coffees/${_id}`,{

            method: 'PUT', 
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify(UpdatedProduct)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: 'Successfully!',
                text: 'Coffee Updated  successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
        })
    }


    return (
        <div className="w-10/12 mx-auto mt-9">
        <Link to="/"><h3 className="mb-4 font-semibold">Back to home</h3></Link>
          
        <div className=" bg-[#F4F3F0] p-6 px-3 ">
          <div className="">
            <div className="text-center space-y-3">
              <h1 className="text-4xl font-bold mb-6">Update Existing Coffee Details</h1>
              <p className="md:w-8/12 mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <div className=" mt-7 px-10 pb-4">
              <form onSubmit={handelUpdateCoffee} className="">
                  <div className=" md:flex gap-4  items-center mb-4">
                <div className="form-control md:w-1/2 ">
                <label className="label">
               <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter coffee name"
                    defaultValue={name}
                    name="name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2 ">
                <label className="label">
               <span className="label-text">Chef</span>
                  </label>
                  <input
                    type="text"
                    name="chef"
                    defaultValue={chef}
                    placeholder="Enter coffee Chef"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                </div>
                  <div className=" flex gap-4">
                <div className="form-control md:w-1/2">
                <label className="label">
               <span className="label-text">Supplier</span>
                  </label>
                  <input
                    type="text"
                    name="supplier"
                    defaultValue={supplier}
                    placeholder="Enter coffee Supplier"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                <label className="label">
               <span className="label-text">Taste</span>
                  </label>
                  <input
                    type="text"
                    name="taste"
                    defaultValue={taste}
                    placeholder="Enter coffee Taste"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                </div>
                <div className="flex gap-4">
                <div className="form-control md:w-1/2">
                <label className="label">
               <span className="label-text">Category</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    defaultValue={category}
                    placeholder="Enter coffee Category"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
               
                <div className="form-control md:w-1/2">
                <label className="label">
               <span className="label-text">Details</span>
                  </label>
                  <input
                    type="text"
                    name="details"
                    defaultValue={details}
                    placeholder="Enter coffee Details"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                </div>
                <div className="form-control">
                <label className="label">
               <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    defaultValue={photo}
                    placeholder="Enter coffee Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#c4a275] py-2 px-1">Update Coffee</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateCoffee;