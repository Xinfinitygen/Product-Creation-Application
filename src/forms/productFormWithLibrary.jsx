import { useForm } from "react-hook-form";
import FormInput from "../components/FormInput";
import FormTextarea from "../components/FormTextarea";
import FormButton from "../components/FormButton";
import { createProduct } from "../services/productApi";

function ProductFormWithLibrary() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
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
        },
    });


    const onSubmit = async (data) => {
        try {
            // Convert the form values into the format expected by the API.
            const productData = {
                name: data.name.trim(),
                description: data.description.trim() || null,
                price: Number(data.price),
                compareAtPrice:
                    data.compareAtPrice === ""
                        ? null
                        : Number(data.compareAtPrice),
                sku: data.sku.trim() || null,
                quantity: Number(data.quantity),
                category: data.category.trim() || null,
                tags: data.tags.trim() || null,
                images: data.images.trim()
                    ? JSON.stringify([data.images.trim()])
                    : "[]",
                featured: data.featured,
                published: data.published,
            };

            // Send the product data to the API.
            const createdProduct = await createProduct(productData);

            console.log("Created product:", createdProduct);

            alert("Product created successfully!");

            // Clear the form after successful submission.
            reset();
        } catch (error) {
            // Display an error if the API request fails.
            alert(error.message);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                label="Product Name"
                name="name"
                placeholder="Enter product name"
                error={errors.name?.message}
                {...register("name", {
                    required: "Product name is required.",
                    maxLength: {
                        value: 500,
                        message: "Product name must not exceed 500 characters.",
                    },
                })}
            />

            <FormTextarea
                label="Description"
                name="description"
                placeholder="Enter product description"
                {...register("description")}
            />

            <FormInput
                label="Price"
                name="price"
                type="number"
                placeholder="Enter product price"
                error={errors.price?.message}
                {...register("price", {
                    required: "Price is required.",
                    min: {
                        value: 0,
                        message: "Price cannot be negative.",
                    },
                })}
            />

            <FormInput
                label="Compare-at Price"
                name="compareAtPrice"
                type="number"
                placeholder="Enter compare-at price"
                error={errors.compareAtPrice?.message}
                {...register("compareAtPrice", {
                    min: {
                        value: 0,
                        message: "Compare-at price cannot be negative.",
                    },
                })}
            />

            <FormInput
                label="SKU"
                name="sku"
                placeholder="Enter SKU"
                {...register("sku")}
            />

            <FormInput
                label="Barcode"
                name="barcode"
                placeholder="Enter barcode"
                {...register("barcode")}
            />

            <FormInput
                label="Quantity"
                name="quantity"
                type="number"
                placeholder="Enter quantity"
                error={errors.quantity?.message}
                {...register("quantity", {
                    min: {
                        value: 0,
                        message: "Quantity cannot be negative.",
                    },
                })}
            />

            <FormInput
                label="Category"
                name="category"
                placeholder="Enter category"
                {...register("category")}
            />

            <FormInput
                label="Tags"
                name="tags"
                placeholder="Enter product tags"
                {...register("tags")}
            />

            <FormInput
                label="Image URL"
                name="images"
                type="url"
                placeholder="Enter image URL"
                {...register("images")}
            />

            <div>
                <label>
                    <input
                        type="checkbox"
                        {...register("featured")}
                    />
                    Featured
                </label>

                <label>
                    <input
                        type="checkbox"
                        {...register("published")}
                    />
                    Published
                </label>
            </div>

            <FormButton disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Product"}
            </FormButton>
        </form>
    )
}

export default ProductFormWithLibrary;