import { BASE_URL } from "../config/constants.ts";
/**
 * fetchToItself
 * @param {string} url 
 * @param {RequestInit | undefined} options 
 * @returns 
 */
export function fetchToItself(url, options) {
	const verifiendUrl = url[0] === "/" ? url : `/${url}`;
	return fetch(BASE_URL + verifiendUrl, options);
}
