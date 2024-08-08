import axios from "axios"

export async function getAulas(){
    const response = await axios.get("http://localhost:3000/aulas");
    return response.data;
}

export async function getAula(id){
    const response = await axios.get(`http://localhost:3000/aulas/${id}`);
    return response.data;
}

export async function addAula(data){
    const response = await axios.post("http://localhost:3000/aulas", data);
    return response.data;
}

export async function updateAula(id, data){
    const response = await axios.put(`http://localhost:3000/aulas/${id}`, data);
    return response.data;
}

export async function deleteAula(id){
    const response = await axios.delete(`http://localhost:3000/aulas/${id}`);
    return response.data;
}