import { Product } from "./Produto";

describe("Tests over Product class", () => {
    it("should create a product with valid inputs", () => {
        const descriptionValue = "Arroz Tipo 1 Japonês";
        const amountValue = 67;
        const priceValue = 25.5;
        const codeValue = "YFT-1234";
        const entryDateValue = new Date("2024-10-15");

        const product = new Product();
        product.description = descriptionValue;
        product.amount = amountValue;
        product.price = priceValue;
        product.code = codeValue;
        product.entryDate = entryDateValue;

        expect(product.description).toBe(descriptionValue);
        expect(product.amount).toBe(amountValue);
        expect(product.price).toBe(priceValue);
        expect(product.code).toBe(codeValue);
        expect(product.entryDate).toBe(entryDateValue);
    });
});