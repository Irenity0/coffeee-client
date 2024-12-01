import { useLoaderData } from "react-router-dom";
import Coffees from "../components/coffees";
import Banner from "../components/Banner";
const Root = () => {

    const coffees = useLoaderData();

    return (
        <>
        <Banner></Banner>
        <Coffees coffees={coffees}></Coffees>
        </>
    );
};

export default Root;