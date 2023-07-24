import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

//Se crea el nombre del contexto
const ModalContext = createContext();

//Se crea el provider a continuacion
const ModalProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)

    function toogleModal() {
        setIsOpen(!isOpen)
    }

    const modalValues = {
        isOpen,
        toogleModal
    }


    //Se retorna el provider con sus metodos como values
    return (
        <ModalContext.Provider value={modalValues}>
            {children}
        </ModalContext.Provider>
    )
}

ModalProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export { ModalProvider };

export default ModalContext;