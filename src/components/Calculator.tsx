import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
    TextStyle,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../constants/colors";
import { OperationType } from "../types/calculator";
import { ButtonProps } from "../types/calculator";

const Calculator: React.FC = () => {
    const [currentNumber, setCurrentNumber] = useState<string>("");
    const [lastNumber, setLastNumber] = useState<string>("");
    const [operation, setOperation] = useState<OperationType>("");

    const handleNumber = (number: string): void => {
        setCurrentNumber(currentNumber + number);
    };

    const handleOperator = (operator: OperationType): void => {
        if (currentNumber === "") return;
        setOperation(operator);
        setLastNumber(currentNumber);
        setCurrentNumber("");
    };

    const clear = (): void => {
        setCurrentNumber("");
        setLastNumber("");
        setOperation("");
    };

    const getResult = (): void => {
        if (currentNumber === "" || lastNumber === "") return;

        const current = parseFloat(currentNumber);
        const last = parseFloat(lastNumber);

        let result = 0;
        switch (operation) {
            case "+":
                result = last + current;
                break;
            case "-":
                result = last - current;
                break;
            case "*":
                result = last * current;
                break;
            case "/":
                result = last / current;
                break;
            default:
                return;
        }

        setCurrentNumber(result.toString());
        setLastNumber("");
        setOperation("");
    };

    const buttons: string[][] = [
        ["C", "±", "%", "/"],
        ["7", "8", "9", "*"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["00", "0", ".", "="],
    ];

    const Button: React.FC<ButtonProps> = ({
        text,
        onPress,
        isOperator,
        isEquals,
    }) => {
        const buttonStyles = [
            styles.button,
            isOperator && styles.operatorButton,
            isEquals && styles.equalsButton,
            text === "C" && styles.clearButton,
        ];

        const textStyles = [
            styles.buttonText,
            isOperator && styles.operatorText,
            isEquals && styles.equalsText,
            text === "C" && styles.clearText,
        ];

        return (
            <TouchableOpacity
                style={buttonStyles}
                onPress={onPress}
                activeOpacity={0.7}
            >
                <Text style={textStyles}>{text}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.displayContainer}>
                <Text style={styles.previousNumber}>
                    {lastNumber} {operation}
                </Text>
                <Text style={styles.currentNumber}>{currentNumber || "0"}</Text>
            </View>

            <View style={styles.buttonsContainer}>
                {buttons.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((button) => {
                            const isOperator = [
                                "+",
                                "-",
                                "*",
                                "/",
                                "%",
                            ].includes(button);
                            const isEquals = button === "=";

                            let onPress: () => void;
                            if (button === "C") {
                                onPress = clear;
                            } else if (button === "=") {
                                onPress = getResult;
                            } else if (isOperator) {
                                onPress = () =>
                                    handleOperator(button as OperationType);
                            } else {
                                onPress = () => handleNumber(button);
                            }

                            return (
                                <Button
                                    key={button}
                                    text={button}
                                    onPress={onPress}
                                    isOperator={isOperator}
                                    isEquals={isEquals}
                                />
                            );
                        })}
                    </View>
                ))}
            </View>

            <Text style={styles.signature}>Calc by Pranav</Text>
        </SafeAreaView>
    );
};

interface Styles {
    container: ViewStyle;
    displayContainer: ViewStyle;
    previousNumber: TextStyle;
    currentNumber: TextStyle;
    buttonsContainer: ViewStyle;
    row: ViewStyle;
    button: ViewStyle;
    operatorButton: ViewStyle;
    clearButton: ViewStyle;
    equalsButton: ViewStyle;
    buttonText: TextStyle;
    operatorText: TextStyle;
    clearText: TextStyle;
    equalsText: TextStyle;
    signature: TextStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        backgroundColor: COLORS.darkGreen,
    },
    displayContainer: {
        flex: 1,
        justifyContent: "flex-end",
        padding: 20,
    },
    previousNumber: {
        color: COLORS.goldLight,
        fontSize: 30,
        textAlign: "right",
    },
    currentNumber: {
        color: COLORS.cream,
        fontSize: 60,
        textAlign: "right",
    },
    buttonsContainer: {
        paddingBottom: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.goldDark,
        borderRadius: 40,
        height: 80,
        width: 80,
    },
    operatorButton: {
        backgroundColor: COLORS.goldLight,
    },
    clearButton: {
        backgroundColor: COLORS.darkGreen,
        borderWidth: 1,
        borderColor: COLORS.goldLight,
    },
    equalsButton: {
        backgroundColor: "green", // Keeping green for equals as requested
    },
    buttonText: {
        color: COLORS.darkGreen,
        fontSize: 30,
        fontWeight: "600",
    },
    operatorText: {
        color: COLORS.darkGreen,
    },
    clearText: {
        color: COLORS.goldLight,
    },
    equalsText: {
        color: COLORS.cream,
    },
    signature: {
        color: COLORS.cream,
        textAlign: "center",
        padding: 10,
        position: "absolute",
        bottom: 0,
        width: "100%",
        fontSize: 16,
    },
});

export default Calculator;
