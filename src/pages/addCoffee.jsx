import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const AddCoffee = () => {

  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, quantity, supplier, taste, category, details, photo };
    console.log(newCoffee);

    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
        'content-type' : "application/json"
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Coffeee added',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
      else{
        Swal.fire({
          title: 'Error!',
          text: `Coffeee wasn't added`,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    })
  }

    return (
        <div className="md:w-8/12 mx-auto">
        <h1 className="text-5xl font-bold text-center my-4">Add Coffee</h1>
        <button className="btn my-4"><Link to={"/"}>Back to Home</Link></button>
        <form onSubmit={handleAddCoffee} className="card-body space-y-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="Enter Coffee Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input name="quantity" type="text" placeholder="Enter Quantity" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input name="supplier" type="text" placeholder="Enter Coffee Supplier" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input name="taste" type="text" placeholder="Coffee Taste Level" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input name="category" type="text" placeholder="Enter Coffee Category" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input name="details" type="text" placeholder="Enter Coffee Details" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input name="photo" type="text" placeholder="Enter Coffee Photo" className="input input-bordered" required />
        </div>
        <button className="btn">Add Coffee</button>
      </form>
        </div>
    );
};

export default AddCoffee;