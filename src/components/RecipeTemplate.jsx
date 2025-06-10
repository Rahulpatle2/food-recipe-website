import { Link } from "react-router-dom";

const RecipeTemplate = (props) => {
    const { id, image, tittle, chef, desc } = props.recipe;

    // console.log(title)
    // console.log(desc);
    return (
        <Link
            className="lg:block lg:w-[23vw] shadow flex w-full  pt-3 px-3 rounded-2xl lg:border-none bg-blue-100  lg:shadow-lg lg:mr-3 lg:mb-3"
            to={`/recipes/details/${id}`}
        >
            <div>
                <img className="w-full rounded-2xl h-[15vh] object-cover" src={image} alt="" /></div>
            <div>
                <h1 className="lg:text-5xl text-2xl font-black pl-2 mt-3">{tittle}</h1>
                <small className="pl-2 text-red-400 text-lg lg:text-xl mt-3">{chef}</small>
                <p className="pl-2 lg:mt-3 pb-10">
                    {desc.substring(4)}...{" "}
                    <small className="text-blue-400">more</small>
                </p>
            </div>
        </Link>
    );
};

export default RecipeTemplate;
