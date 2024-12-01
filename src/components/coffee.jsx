import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee, loadedCoffees, setLoadedCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              // Update the state to reflect the deletion
              const remaining = loadedCoffees.filter((cof) => cof._id !== _id);
              setLoadedCoffees(remaining); // This updates the UI in real time
            }
          });
      }
    });
  };

  return (
    <div className="card lg:card-side border-primary border">
      <figure>
        <img className="h-44 object-cover object-center" src={photo} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Quantity: {quantity}</p>
        <p>Supplier: {supplier}</p>
        <p>Taste: {taste}</p>
        <p>Category: {category}</p>
        <p>Details: {details}</p>
      </div>
      <div className="card-body">
        <div className="card-actions flex lg:flex-col items-end">
          <button className="btn btn-primary">View</button>
          <Link to={`/updatecoffee/${_id}`}>
            <button className="btn btn-primary">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
