/* 
    1- Importar axios
    2- crear la funcion
    3- exportar la funcion
*/

import axios from 'axios';

const baseUrl = import.meta.env.VITE_USER_URL;

export const userRegister = async (body) => {
    try {
        const url = `${baseUrl}/register`;
                                    //post(url, body o data)
        const { data } = await axios.post(url, body)
        console.log(data);
        return data;

    } catch (error) {
        console.log(error.message)
        throw new Error("Ocurrió un error al registrar un usuario");
    }
}

export const userLogin = async (body) => {
    try {
        const url = `${baseUrl}/login`;
                                    //post(url, body o data)
        const { data } = await axios.post(url, body)
        return data;

    } catch (error) {
        console.log(error.message)
        throw new Error("Ocurrió un error al iniciar sesion");
    }
}