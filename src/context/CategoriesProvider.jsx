import { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCategoriesServices } from '../services/categories.service';

//Se crea el nombre del contexto
const CategoriesContext = createContext();

//Se crea el provider a continuacion
const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = async () => {
        try {
            const categoriesData = await getCategoriesServices();
            if(categoriesData) {
                setCategories(categoriesData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    //Se retorna el provider con sus metodos como values
    return (
        <CategoriesContext.Provider value={{categories}}>
            {children}
        </CategoriesContext.Provider>
    )
}

CategoriesProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export { CategoriesProvider };

export default CategoriesContext;