import { useState } from "react";
import FormInput from "../components/FormInput";
import FormTextarea from "../components/FormTextarea";
import FormButton from "../components/FormButton";
import { createProduct } from "../services/productApi";

function ProductFormWithoutLibrary() {

    // Store all values entered into the product form.
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        compareAtPrice: "",
        sku: "",
        barcode: "",
        quantity: 0,
        category: "",
        tags: "",
        images: "",
        featured: false,
        published: true,
    });

    // Stores vaidation errors for individual fields
    const [errors, setErrors] = useState({});

    // Tracks whether the product is currently being submitted
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Stores success and API error messages.
    const [successMessage, setSuccessMessage] = useState("");
    const [apiError, setApiError] = useState("");

    // Update the form state whenever the user changes an input.
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));

        // Remove the error for the field once the user starts correcting it.
        setErrors((previousErrors) => ({
            ...previousErrors,
            [name]: "",
        }))
    };

    // Check the form data against the API's requirement
    // before allowing the request to be sent.
    const validateForm = () => {
        const newErrors = {};

        // Requires product name and shouldn't exceed 500 characters
        if (!formData.name.trim()) {
            newErrors.name = "Product name is required.";
        } else if (formData.name.trim().length > 500) {
            newErrors.name = "Product name must not exceed 500 characters";
        }

        // Price is required and cannot be negative.
        if (formData.price === "") {
            newErrors.price = "Price is required.";
        } else if (Number(formData.price) < 0) {
            newErrors.price = "Price cannot be nagative.";
        }

        // Compare-at price is optional, but cannot be negative when provided.
        if (
            formData.compareAtPrice !== "" &&
            Number(formData.compareAtPrice) < 0
        ) {
            newErrors.compareAtPrice = "Compare-at price cannot be negative.";
        }
        // Quantity is optional, but cannot be negative.
        if (formData.quantity !== "" && Number(formData.quantity) < 0) {
            newErrors.quantity = "Quantity cannot be negative.";
        }

        return newErrors;
    };

    // Handle form submission and send valid data to the API.

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate the form before making the API request.
        const validationErrors = validateForm();

        setErrors(validationErrors);
        setSuccessMessage("");
        setApiError("");


        // Stop submission if the validation errors exist.
        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Convert the form values into the format expected by the API.
            const productData = {
                name: formData.name.trim(),
                description: formData.description.trim() || null,
                price: Number(formData.price),
                compareAtPrice:
                    formData.compareAtPrice === ""
                        ? null
                        : Number(formData.compareAtPrice),
                sku: formData.sku.trim() || null,
                barcode: formData.barcode.trim() || null,
                quantity: Number(formData.quantity),
                category: formData.category.trim() || null,
                tags: formData.tags.trim() || null,
                images: formData.images.trim()
                    ? JSON.stringify([formData.images.trim()])
                    : "[]",
                featured: formData.featured,
                published: formData.published,
            };

            // Send the product data to the API.
            const createdProduct = await createProduct(productData);

            console.log("created product:", createdProduct);

            setSuccessMessage("Product created successfully!");

            // Reset the form after successful submission.
            setFormData({
                name: "",
                description: "",
                price: "",
                compareAtPrice: "",
                sku: "",
                barcode: "",
                quantity: 0,
                category: "",
                tags: "",
                images: "",
                featured: false,
                published: true,
            });
        } catch (error) {
            // Display an error is the API request fails.
            setApiError(error.message);
        } finally {
            // Re-enable the submit button after the request finishes.
            setIsSubmitting(false);
        }

        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {successMessage && (
                <p className="success-message">{successMessage}</p>
            )}

            {apiError && (
                <p className="form-error">{apiError}</p>
            )}
            <FormInput
                label="Product Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
                error={errors.name}
            />

            <FormTextarea
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter product description"
            />

            <div className="form-row">
                <FormInput
                    label="Price"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter product price"
                    error={errors.price}
                />

                <FormInput
                    label="Compare-at Price"
                    name="compareAtPrice"
                    type="number"
                    value={formData.compareAtPrice}
                    onChange={handleChange}
                    placeholder="Enter compare-at price"
                    error={errors.compareAtPrice}
                />

            </div>

            <div className="form-row">
                <FormInput
                    label="SKU"
                    name="sku"
                    value={formData.sku}
                    onChange={handleChange}
                    placeholder="Enter SKU"
                />

                <FormInput
                    label="Barcode"
                    name="barcode"
                    value={formData.barcode}
                    onChange={handleChange}
                    placeholder="Enter barcode"
                />

            </div>

            <div className="form-row">
                <FormInput
                    label="Quantity"
                    name="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Enter quantity"
                    error={errors.quantity}
                />

                <FormInput
                    label="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Enter category"
                />

            </div>

            <FormInput
                label="Tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Enter product tags"
            />

            <FormInput
                label="Image URL"
                name="images"
                type="url"
                value={formData.images}
                onChange={handleChange}
                placeholder="Enter image URL"
            />

            <div className="checkbox-group">
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="featured"
                        checked={formData.featured}
                        onChange={(event) =>
                            setFormData((previousData) => ({
                                ...previousData,
                                featured: event.target.checked,
                            }))
                        }
                    />
                    Featured
                </label>

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="published"
                        checked={formData.published}
                        onChange={(event) =>
                            setFormData((previousData) => ({
                                ...previousData,
                                published: event.target.checked,
                            }))
                        }
                    />
                    Published
                </label>
            </div>

            <FormButton disabled={isSubmitting}>
                {isSubmitting ? "creating..." : "Create Product"}
            </FormButton>
        </form>
    );
}

export default ProductFormWithoutLibrary;