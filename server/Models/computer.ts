import { Product } from "./product";

export class Computer extends Product {

    brand: string;
    year: string;
    keyboardLayout: "qwerty" | "azerty" = "qwerty";

    constructor(title: string, description: string, price: number, brand: string, year: string, keyboardLayout: "qwerty" | "azerty") {
        super(title, description, price);
        this.brand = brand;
        this.year = year;
        this.keyboardLayout = keyboardLayout;


    }





}

