import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
    console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee updated successfully!',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          form.reset();
        } else {
          Swal.fire({
            title: 'Error!',
            text: `Coffee wasn't updated.`,
            icon: 'error',
            confirmButtonText: 'Try Again',
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred while updating the coffee.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        console.error(error);
      });

  };

  return (
    <div className="md:w-8/12 mx-auto">
      <h1 className="text-5xl font-bold text-center my-4">
        Update Existing Coffee: {name}
      </h1>
      <button className="btn my-4">
        <Link to="/">Back to Home</Link>
      </button>
      <form onSubmit={handleUpdateCoffee} className="card-body space-y-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            placeholder="Enter Coffee Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="text"
            name="quantity"
            defaultValue={quantity}
            placeholder="Enter Quantity"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input
            type="text"
            name="supplier"
            defaultValue={supplier}
            placeholder="Enter Coffee Supplier"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input
            type="text"
            name="taste"
            defaultValue={taste}
            placeholder="Coffee Taste Level"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            name="category"
            defaultValue={category}
            placeholder="Enter Coffee Category"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input
            type="text"
            name="details"
            defaultValue={details}
            placeholder="Enter Coffee Details"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="text"
            name="photo"
            defaultValue={photo}
            placeholder="Enter Coffee Photo URL"
            className="input input-bordered"
            required
          />
        </div>
        <button className="btn">Update Coffee</button>
      </form>
    </div>
  );
};

export default UpdateCoffee;
