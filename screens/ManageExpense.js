import { useLayoutEffect } from "react";
import { Text } from "react-native";

function MangeExpense({ route, navigation }) {
  // ? 는 파라미터로 넘어오는 객체가 있거나 없거나 적용하기 위함
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return <Text>MangeExpense Screen</Text>;
}

export default MangeExpense;
