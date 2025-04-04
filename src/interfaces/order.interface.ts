export interface OrderInput {
    address: {
        addressLine1: string;
        addressLine2: string;
        city: string;
        state: string;
        postalCode?: string;
        country: string;
    };

    cartItems: {
        variantId: string;
        quantity: number;
        price: number;
    }[];
    totalAmount: number;
}