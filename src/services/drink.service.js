import axios from 'axios';
//             Asi se hace la llamada de variables de entorno con VITE
const apiUrl = import.meta.env.VITE_API_URL;

const getRecipeService = async (id) => {
    try {
        const url = `${apiUrl}lookup.php?i=${id}`;
        const { data } = await axios.get(url);
        return data.drinks[0];
    } catch (error) {
        console.log(error.message)
        throw new Error("Ocurrió un error al obtener la receta");
    }
};

const filterDrinksServices = async (name,category) => {
    try {
        const url = `${apiUrl}filter.php?i=${name}&c=${category}`;
        const { data } = await axios.get(url);
        return data.drinks;
    } catch (error) {
        console.log(error.message)
        throw new Error("Ocurrió un error las bebidas");
    }
};

export { getRecipeService, filterDrinksServices }