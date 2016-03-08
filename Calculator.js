var Calculator = {

    Calculate: function (selectedValue, firstNumber, secondNumber) {
        var result = "Invalid Result";

        switch (selectedValue) {
            case Operation.Add:
                result = firstNumber + secondNumber;
                break;
            case Operation.Subtract:
                result = firstNumber - secondNumber;
                break;
            case Operation.Multiply:
                result = firstNumber * secondNumber;
                break;
            case Operation.Divide:
                result = firstNumber / secondNumber;
                break;
        }

        return result;
    }
};

var Operation = { "Add": 1, "Subtract": 2, "Multiply": 3, "Divide": 4 }