import { useState } from "react";
import Coffee from "./coffee";

const Coffees = ({coffees}) => {

    const [loadedCoffees, setLoadedCoffees] = useState(coffees);

    return (
        <section className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {coffees.map(coffee => (
                <Coffee key={coffee._id} coffee={coffee} loadedCoffees={loadedCoffees} setLoadedCoffees={setLoadedCoffees}></Coffee>
            ))}
        </section>
    )
}

export default Coffees;