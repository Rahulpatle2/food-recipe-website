import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeTemplate from "../components/RecipeTemplate";

const Favroite = () => {
    const { fav ,setfav } = useContext(recipecontext);


    const favrender = fav.map((f) => (<RecipeTemplate key={f.id} recipe={f} />));

    return (
        <div className="flex flex-wrap ">
            {fav.length > 0 ? favrender : "Recipe Not found..."}
        </div>
    );
};

export default Favroite;