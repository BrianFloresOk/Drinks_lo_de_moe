import { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { filterDrinksServices, getRecipeService} from '../services/drink.service';

const DrinksContext = createContext();

const DrinksProvider = ({children}) => {
    const [drinks, setDrinks] = useState([]);
    const [modal, setModal] = useState(false);
    const [drinkId, setDrinkId] = useState(null);
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(false);

    function handleModalClick() {
        //Cambia el estado de modal
        setModal(!modal)
    }

    function handleDrinkIdClick(id) {
        setDrinkId(id)
    }

    async function getRecipe() {
        if(!drinkId) return;

        try {
            setLoading(true);
            const recipeData = await getRecipeService(drinkId);
            setRecipe(recipeData);
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }

    async function getDrink(data) {
        try {
            setLoading(true);
            const drinksData = await filterDrinksServices(data.name, data.category)
            //Agregando precios a las bebidas
            const drinksWithPrice = drinksData.map((drink) => {
                return {
                    ...drink,
                    price: Math.floor(Math.random() * 101)
                }
            })
            
            setDrinks(drinksWithPrice);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    }

    //Por cada vez que el ID de la beb
    useEffect(() => {
        getRecipe()
    }, [drinkId])


    const contextValues = { 
        drinks,
        modal,
        recipe,
        loading,
        handleModalClick,
        handleDrinkIdClick,
        getDrink
    };

    return (
        <DrinksContext.Provider 
            value={contextValues}
        >
            {children}
        </DrinksContext.Provider>
    )
}

DrinksProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export { DrinksProvider };
export default DrinksContext;