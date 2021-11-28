import { Product } from "./product";

export class Jewelry extends Product {
	type: string;
	material: string;

	constructor(
		title: string,
		description: string,
		price: number,
		type: string,
		material: string
	) {
		super(title, description, price);
		this.type = type;
		this.material = material;
	}
}
