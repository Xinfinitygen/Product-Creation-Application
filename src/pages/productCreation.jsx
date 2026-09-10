import { useState } from "react";
import ProductFormWithLibrary from "../forms/productFormWithLibrary";
import ProductFormWithoutLibrary from "../forms/productFormWithoutLibrary";

function ProductCreation() {
    const [useLibrary, setUseLibrary] = useState(true);

    return (
        <main className="product-page">
            <div className="product-container">
                <div className="product-header">
                    <p className="eyebrow">Product Management</p>

                    <h1>Create Product</h1>

                    <p>
                        Add a new product by providing the information below.
                    </p>
                </div>

                <div className="form-switcher">
                    <button
                        type="button"
                        className={useLibrary ? "active" : ""}
                        onClick={() => setUseLibrary(true)}
                    >
                        React Hook Form
                    </button>

                    <button
                        type="button"
                        className={!useLibrary ? "active" : ""}
                        onClick={() => setUseLibrary(false)}
                    >
                        Without Library
                    </button>
                </div>

                <section className="product-card">
                    {useLibrary ? (
                        <ProductFormWithLibrary />
                    ) : (
                        <ProductFormWithoutLibrary />
                    )}
                </section>
            </div>
        </main>
    );
}

export default ProductCreation;