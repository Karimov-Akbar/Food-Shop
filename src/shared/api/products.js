export const productsApi = async () =>{
    const responce = await fetch("https://dummyjson.com/products");
    return responce.json();
};