/* import { apiURL } from "./config"
import {APP} from "../../../api/src/index"

export const getUserById = async ({ id }) => {
	try {
		const response = await APP.getUserById(id) //fetch(`${ apiURL }/users/${ id }`);
		const user = await response.json();
		return user;
	} catch (error) {
		// Enviar error a servicio de reporte de errores
		return [];
	}
}
export const getAllUsers = async () => {
	try {
		const response = await APP.getAllUsers//fetch(`${ apiURL }/users`);
		const users = await response.json();
		console.log('users ' + users)
		return users;
	} catch (error) {
		// Enviar error a servicio de reporte de errores
		return [];
	}
} */