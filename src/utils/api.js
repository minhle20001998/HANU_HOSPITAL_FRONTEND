import axios from 'axios';
const localhost = 'http://localhost:8085'

export async function register(info) {
    const { data } = await axios.post(`${localhost}/auth/signup`, info)
    return data;
}

export async function login(info) {
    try {
        const { data } = await axios.post(`${localhost}/auth/signin`, info)
        return data;
    } catch (err) {
        return err.response.status;
    }
}


// MEDICINE

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

//RECORDS

export async function getAllRecords() {
    const { data } = await axios.get(`${localhost}/api/record/getAll`)
    return data;
}


//PATIENTS

export async function getAllPatients() {
    const { data } = await axios.get(`${localhost}/patients/all`)
    return data;
}

export async function addPatient(info) {
    const { data } = await axios.post(`${localhost}/add_patient`, info)
    return data;
}

export async function getPatientByID(id) {
    const { data } = await axios.get(`${localhost}/patients/${id}`)
    return data;
}

export async function editPatient(id, info) {
    const { data } = await axios.put(`${localhost}/patients/${id}`, info)
    return data;
}

export async function deletePatient(id) {
    const { data } = await axios.delete(`${localhost}/patients/${id}`)
    return data;
}

//DOCTORS

export async function getDoctors() {
    const { data } = await axios.get(`${localhost}/api/doctor/getAll`)
    return data;
}

//RECEPTIONIST

export async function getReps() {
    const { data } = await axios.get(`${localhost}/api/Receptionist/getAll`)
    return data;
}