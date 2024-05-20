import axios from "axios"
import { Supplier } from "./interfaces";

export const getSuppliers = async () => {
  try {
    const response = await axios.get<Supplier[]>("http://localhost:3000/api/supplier");
    return response.data
  } catch (e) {
    console.error(e)
  }
}

export const postSupplier = async (data: Supplier) => {
  try {
    const response = await axios.post("http://localhost:3000/api/supplier", data);
    return response.data
  } catch (e) {
    console.error(e)
  }
}
