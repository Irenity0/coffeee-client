import { Link } from 'react-router-dom';

const UpdateCoffee = () => {
    return (
        <div className="md:w-8/12 mx-auto">
        <h1 className="text-5xl font-bold text-center my-4">Update Exisiting Coffee</h1>
        <button className="btn my-4"><Link to={"/"}>Back to Home</Link></button>
        <form className="card-body space-y-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Enter Coffee Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <input type="text" placeholder="Enter Chef Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input type="text" placeholder="Enter Coffee Supplier" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input type="text" placeholder="Coffee Taste Level" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" placeholder="Enter Coffee Category" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" placeholder="Enter Coffee Details" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="Enter Coffee Photo" className="input input-bordered" required />
        </div>
        <button className="btn">Update Coffee</button>
      </form>
        </div>
    );
};

export default UpdateCoffee;