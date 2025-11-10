import axios from "axios";

const TRANSACTION_URL = "http://localhost:9898/inventory/transaction";
const ANA_URL="http://localhost:9898/inventory/analysis";

export const saveTransaction = (transaction) => {
  return axios.post(TRANSACTION_URL, transaction);
};

export const showAllTransactions = () => {
  return axios.get(TRANSACTION_URL);
};

export const findTransactionById = (id) => {
  return axios.get(`${TRANSACTION_URL}/${id}`);
};

export const removeTransaction = (id) => {
  return axios.delete(`${TRANSACTION_URL}/${id}`);
};

export const findTransactionsByType = (type) => {
  return axios.get(`${TRANSACTION_URL}/type/${type}`);
};

export const generateTransactionId = () => {
  return axios.get(`${TRANSACTION_URL}/id-gen`);
};

export const getProductWiseTotalSale = () => {
  return axios.get(ANA_URL);
};

export const getDemandByProduct = (id) => {
  return axios.get(ANA_URL+'/'+id);
};