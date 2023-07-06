import { string } from "yup";

// react native props type
export type TButtonProps = {
    onPress: () => void,
    disabled?: boolean,
    loading?: boolean,
    style?: any,
    color?: string,
    mx?: number,
    my?: number,
    px?: number,
    py?: number,
    m?: number,
    p?: number,
    bgColor?: string,
    outlined?: boolean,
    bordered?: boolean,
    title?: string,
    children?: any,
}


export type TCustomTextInputProps = {
    placeholder: string;
    value: string;
    style ?: object;
    keyboardType ?: "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad";
    onChangeText: (text: string) => void;
    secureTextEntry ?: boolean;
    placeholderTextColor ?: string;
    right ?: React.ReactNode;
    left ?: React.ReactNode;
    textColor ?: string;
    theme ?: object;
    [key: string]: any;
}


export type TcustomHeaderProps = {
    title?: string;
    titleColor?: string;
    showBack?: boolean;
    hideScanner?: boolean;
    hasBg?: boolean;
    bgColor?: string;
    theme?: object;
    [key: string]: any;
}

export type TprofileTilesProps = {
    title: string,
    icon?: any,
    image?:string
}

export type TcreateAccount = { email : string, phoneNumber : string, firstName : string, lastName : string, password : string }
export type Tlogin = { email: string, password: string }
export type TplolicyById = { policyId: string }

