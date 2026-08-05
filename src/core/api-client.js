import { CONFIG } from "./config/config.js";

export async function get(endpoint) {
    
    console.log("ENPOINT GET => " + `${CONFIG.API_URL}${endpoint}`)

    const response = await fetch(
        `${CONFIG.API_URL}${endpoint}`
    );

    
    const body = await response.json();

    if (!response.ok) {
        throw new Error(body.message);
    }

    if (body.statusCode !== 200) {
        throw new Error(body.message);
    }

    return body.data;
}