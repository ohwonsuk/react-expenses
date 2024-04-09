import { View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountCahngedHandler() {}

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keboardType: "decimal-pad",
          onChangeText: amountCahngedHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'none',
          // autoCorrect: false // default is true
        }}
      />
    </View>
  );
}

export default ExpenseForm;
