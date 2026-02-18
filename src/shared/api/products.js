export const productsApi = async () => {
    const response = await fetch('https://dummyjson.com/products');
    return response.json();
};

export const productId = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return response.json();
};