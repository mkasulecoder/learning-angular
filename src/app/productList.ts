//Custom Product List to add items in list

export interface ProductList {
    id: number;
    title: string;
    text: string;
}
export const productList: ProductList[] = [
    {
        id: 1,
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 2,
        title: 'Shakespeare',
        text: 'To be, or not to be: that is the question.',
    },
];
