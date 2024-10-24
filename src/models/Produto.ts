import { ProductErrorMessages } from "../enums/ProductErrorMessages";
import { ProductCreationError } from "../errors/ProductCreationError";

export class Product {
    private _description : string = "";
    private _amount : Number;
    private _price : Number;
    private _code : string = "";
    private _entryDate : Date;

    set description(description: string) {
        if (description.trim().length >= 10) {
            this._description = description;
        } else {
            throw new ProductCreationError(ProductErrorMessages.DESCRIPTION_ERROR_MESSAGE);
        }
    }
    
    get description(): string {
        return this._description;
    }


    set amount(amount: Number) {
        if (Number(amount) >= 0 && Number(amount) <= 99) {
            this._amount = amount;
        } else {
            throw new ProductCreationError(ProductErrorMessages.AMOUNT_ERROR_MESSAGE);
        }
    }

    get amount(): Number {
        return this._amount;
    }


    //if (/^\d+([.,]\d{2})?$/.test(price)) {
    set price(price: Number) {
        if (Number(price) >= 1) {
            this._price = price;
        } else {
            throw new ProductCreationError(ProductErrorMessages.PRICE_ERROR_MESSAGE);
        }
    }

    get price(): Number {
        return this._price;
    }


    set code(code: string) {
        if (/^[A-Z]{3}-\d{4}$/.test(code)) {
            this._code = code;
        } else {
            throw new ProductCreationError(ProductErrorMessages.CODE_ERROR_MESSAGE);
        }
    }

    get code(): string {
        return this._code;
    }


    set entryDate(entryDate: Date) {
        if (entryDate < new Date()) {
            this._entryDate = entryDate;
        } else {
            throw new ProductCreationError(ProductErrorMessages.ENTRY_DATE_ERROR_MESSAGE);
        }
    }

    get entryDate(): Date {
        return this._entryDate;
    }
}