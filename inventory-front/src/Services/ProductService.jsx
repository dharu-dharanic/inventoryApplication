const BASE_URL = import.meta.env.VITE_API_URL;

const PRODUCT_URL = `${BASE_URL}/inventory/product`;
const ID_URL = `${BASE_URL}/inventory/id-gen`;
 
export const addProduct = (product) => {
    return axios.post(PRODUCT_URL,product);
}
export const productIdGenerate = () => {
    return axios.get(ID_URL);
}
export const getProductById = (id) => {
    return axios.get(PRODUCT_URL+ '/' + id);
}
export const getAllProducts = () => {
    return axios.get(PRODUCT_URL);
}
export const deleteProduct = (id) => {
    return axios.delete(PRODUCT_URL+ '/' + id);
}
export const stockUpdate = (product,qty,flag) => {
    return axios.put(PRODUCT_URL+'/'+qty+'/'+flag, product);
}
export const priceUpdate = (product) => {
    return axios.put(PRODUCT_URL, product);
}
export const getProductsByVendor = (vendorId) => {
    return axios.get(PRODUCT_URL+'/vendor/'+vendorId);
}

