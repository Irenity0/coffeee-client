import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
        <div className="my-10">
          <div className="flex items-center flex-col space-y-3">
              <h1 className="text-5xl font-bold">Would you like a Cup of Coffee?</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <Link to={'/addcoffee'}><button className="btn btn-primary">Add Coffee</button></Link>
            </div>
        </div>
        </>
    );
};

export default Banner;