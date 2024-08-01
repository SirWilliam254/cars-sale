import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit";
    containerStyles?: string;
    handleClick?: MouseEventHandler;
}


export interface searchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}