export const productsApi = async (limit = 30, skip = 0) => {
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    return response.json();
};

export const productId = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return response.json();
};

export const searchProducts = async (query, limit = 30, skip = 0) =>{
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`);
    return response.json();
}