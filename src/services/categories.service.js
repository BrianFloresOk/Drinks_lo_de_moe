import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const getCategoriesServices = async () => {
    try {
        const url = `${apiUrl}/list.php?c=list`;
        const { data } = await axios.get(url);
        return data.drinks || [];
    } catch (error) {
        console.log(error.message)
        throw new Error("Ocurrió un error: " + error.message);
    }
}