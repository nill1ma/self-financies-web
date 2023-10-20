import axios from "axios"
import { Expenses } from "../../models/expenses"

const BASE_URL = `http://localhost:3000`
const get = async (): Promise<Expenses[]> => {
    const response = await axios.get(`${BASE_URL}/find-expenses`)
    return response.data
}

const create = async () => {
    try {
        await axios.post(`${BASE_URL}/create-expenses`)   
    } catch (error) {
        throw new Error(`Error creating exepense!`)  
    }
}

export { get, create }