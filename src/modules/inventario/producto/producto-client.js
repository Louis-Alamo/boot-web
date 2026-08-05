import * as apiClient from "../../../core/api-client.js";
import { ENDPOINTS } from "../../../core/config/endpoints.js";

export async function obtenerProductos() {

    return await apiClient.get(ENDPOINTS.PRODUCTOS + "/");

}