import axios from "axios"

export async function getInstrutors(){
    const response = await axios.get("http://localhost:3000/instrutors");
    return response.data;
}

export async function getInstrutor(id){
    const response = await axios.get(`http://localhost:3000/instrutors/${id}`);
    return response.data;
}

export async function addInstrutor(data){
    const response = await axios.post("http://localhost:3000/instrutors", data);
    return response.data;
}

export async function updateInstrutor(id, data){
    const response = await axios.put(`http://localhost:3000/instrutors/${id}`, data);
    return response.data;
}

export async function deleteInstrutor(id){
    const response = await axios.delete(`http://localhost:3000/instrutors/${id}`);
    return response.data;
}