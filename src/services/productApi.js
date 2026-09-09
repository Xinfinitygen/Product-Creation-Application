const API_URL = "https://api.oluwasetemi.dev";

export async function createProduct(productData) {
    // POST request
    const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to create product");
    }


    return data;
}