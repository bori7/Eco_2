import axios from "axios";

export function storeData(formData){
    axios.post('https://ecoboard-fe627-default-rtdb.firebaseio.com/form.json', formData),
}