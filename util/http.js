import axios from "axios";

const BACKEND_RUL =
  "https://react-native-expense-439bc-default-rtdb.asia-southeast1.firebasedatabase.app";

export function storeExpense(expenseData) {
  axios.post(BACKEND_RUL + "/expenses.json", expenseData);
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
