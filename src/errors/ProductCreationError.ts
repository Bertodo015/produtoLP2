import { ProductErrorMessages } from "../enums/ProductErrorMessages";

export class ProductCreationError extends Error {
    constructor(message: ProductErrorMessages) {
        super(message);
    }
}