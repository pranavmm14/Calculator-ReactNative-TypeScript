export type OperationType = "+" | "-" | "*" | "/" | "";

export interface ButtonProps {
    text: string;
    onPress: () => void;
    isOperator?: boolean;
    isEquals?: boolean;
}
