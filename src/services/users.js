import { apiURL } from "./config"

export const getUserById = async ({ id }) => {
	try {
		const response = await fetch(`${ apiURL }/users/${ id }`);
		const user = await response.json();
		return user;
	} catch (error) {
		// Enviar error a servicio de reporte de errores
		return [];
	}
}
export const getAllUsers = async () => {
	try {
		const response = await fetch(`${ apiURL }/users`);
		const users = await response.json();
		return users;
	} catch (error) {
		// Enviar error a servicio de reporte de errores
		return [];
	}
}