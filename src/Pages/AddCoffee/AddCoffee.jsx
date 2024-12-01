import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {

    const handelAddCoffee =e=>{
        e.preventDefault()
        const form= e.target;
        const name= form.name.value;
        const chef= form.chef.value;
        const supplier= form.supplier.value;
        const taste= form.taste.value;
        const category= form.category.value;
        const details= form.details.value;
        const photo= form.photo.value;
        const product= {name,chef,supplier,taste,category,details,photo}
        console.log(product);
        fetch('http://localhost:5000/coffee',{

            method: 'POST', 
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify(product)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: 'Successfully!',
                text: 'Coffee added successfully',
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
            <h1 className="text-5xl font-bold">Add New Coffee</h1>
            <p className="md:w-8/12 mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
          </div>
          <div className=" mt-7 px-10 pb-4">
            <form onSubmit={handelAddCoffee} className="">
                <div className=" md:flex gap-4  items-center mb-4">
              <div className="form-control md:w-1/2 ">
              <label className="label">
             <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee name"
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
                  placeholder="Enter coffee Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#c4a275] py-2 px-1">Add Coffee</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
