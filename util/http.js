import axios from "axios";

const BACKEND_RUL =
  "https://react-native-expense-439bc-default-rtdb.asia-southeast1.firebasedatabase.app";

export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_RUL + "/expenses.json",
    expenseData
  );
  const id = response.data.name; // firebase에서 데이터id는 name 으로 사용
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_RUL + "/expenses.json");

  const expenses = [];

  console.log(response.data);
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_RUL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_RUL + `/expenses/${id}.json`);
}
