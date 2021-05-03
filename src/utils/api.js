import axios from 'axios';
const localhost = 'http://localhost:8085'

export async function getMedicine() {
    const { data } = await axios.get(`${localhost}/api/medicine/getAll`)
    return data;
}

export async function addNewMedicine(medicine) {
    const { data } = await axios.post(`${localhost}/api/medicine/add`, medicine)
    return data;
}

export async function deleteMedicine(id) {
    const { data } = await axios.delete(`${localhost}/api/medicine/delete/${id}`)
    return data;
}

export async function editMedicine(medicine) {
    const { data } = await axios.put(`${localhost}/api/medicine/update`, medicine)
    return data;
}
