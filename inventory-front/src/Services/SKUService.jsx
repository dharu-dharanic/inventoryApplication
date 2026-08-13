import axios from 'axios';
 
const BASE_URL = process.env.REACT_APP_API_URL;

const SKU_URL = `${BASE_URL}/inventory/SKU`;
const ID_URL = `${BASE_URL}/inventory/all-ids`;
export const save = (sku) => {
    return axios.post(SKU_URL, sku);
}

export const findSKUById = (id) => {
    return axios.get(SKU_URL+"/"+id);
}

export const removeSKU = (id) => {
    return axios.delete(SKU_URL+"/"+id);
}

export const showAllSKUs = () => {
    return axios.get(SKU_URL);
}

export const update = (sku) => {
    return axios.put(SKU_URL, sku);
}

export const getSkuIdList = () => {
  return axios.get(ID_URL);
};
