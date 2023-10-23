import axios from "axios"
import { Expenses, ExpensesDTO } from "../../models/expenses"

const BASE_URL = `http://localhost:3000`
const get = async (): Promise<Expenses[]> => {
    const response = await axios.get(`${BASE_URL}/find-expenses`)
    return response.data
}

const create = async (data: ExpensesDTO) => {
    try {
        await axios.post(`${BASE_URL}/create-expenses`, {...data, user_id: "54a46e0e-a80c-4656-a1c5-763cadce0e9f"}) 
    } catch (error) {
        throw new Error(`Error creating exepense!`)  
    }
}

export { get, create }