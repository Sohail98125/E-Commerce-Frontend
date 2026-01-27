import axios from "axios";

const API_URL = "http://localhost:4000/api/products";

// 🟩 1. Get all products
export const getAllProducts = async (allproducts) => {
  try {
    const response = await axios.get(`${API_URL}/${allproducts}`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// 🟩 2. Get product by ID
export const getProductById = async () => {
  try {
    const { _id } = useParams();
    // const id = Number(productId);

    const response = await axios.get(`http://localhost:4000/api/products/product/${_id}`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

// 🟩 3. Get popular products (men or women)
export const getPopularProducts = async (gender) => {
  try {
    const response = await axios.get(`${API_URL}/${gender}/popular`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching popular products:", error);
    throw error;
  }
};

// 🟩 4. Get products by category
export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/${category}`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching category products:", error);
    throw error;
  }
};

// export const getRelatedProducts = async (id) => {
//   try {
//     const response = await axios.get(`${API_URL}/related/${id}`);
//   return response.data.products;
//   } catch (error) {
//     console.error("Error fetching related products")
//     throw error;
//   }
// }

// POST product add to cart
export const addToCart = async (userId, productId, quantity = 1) => {
  try {
    const response = await axios.post('http://localhost:4000/cart', {
      userId,
      productId,
      quantity,
    });
    return response.data; // returns { success, message, cart }
  } catch (error) {
    console.error("Error adding to cart:", error.response?.data || error.message);
    throw error;
  }
};

// POST order
export const handleOrder = async (orderData) => {
  try {
    const response = await axios.post('http://localhost:4000/checkout', orderData)
    return response.data;
  } catch (error) {
    console.error("error to fetch the order", error.response.data || error.message);
    throw error;
  }
}