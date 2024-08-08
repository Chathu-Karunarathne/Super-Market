import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Product = () => {
  const initialProducts = [
    { id: 1, name: "Apple", category: "Fruit", qty: 50, price: "200/=" },
    { id: 2, name: "Carrot", category: "Vegetable", qty: 30, price: "500/=" },
    { id: 3, name: "Milk", category: "Grocery", qty: 20, price: "100/=" },
    { id: 4, name: "Banana", category: "Fruit", qty: 40, price: "250/=" },
    { id: 5, name: "Potato", category: "Vegetable", qty: 25, price: "200/=" },
    { id: 6, name: "Bread", category: "Grocery", qty: 15, price: "150/=" },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === selectedProduct.id ? selectedProduct : product
      )
    );
    setIsModalOpen(false);
  };

  const handleDeleteProduct = () => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== selectedProduct.id)
    );
    setIsModalOpen(false);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen p-2 bg-slate-300 text-slate-600">
      {/* nav bar */}
      <div className="border-b-2 flex items-center justify-between px-4 pb-2">
        <h3 className="font-semibold text-xl uppercase text-slate-800 cursor-default">
          Super
        </h3>
        <form className="flex items-center gap-4">
          <div className="relative w-72">
            <FaSearch className="absolute top-2 left-3 text-slate-500" />
            <input
              type="search"
              placeholder="Search by Product"
              className="py-1 px-3 rounded-md pl-10 w-full"
            />
          </div>
          <button className="border-2 border-slate-700 bg-white px-2 rounded-lg hover:text-white hover:bg-slate-700 hover:border-white transition-all duration-300">
            Search
          </button>
        </form>
      </div>
      {/* main content */}
      <div className="flex min-h-screen">
        {/* side bar */}
        <div className="flex flex-col w-[15%] border">
          <button
            className="font-bold py-2 border-b-2 border-slate-700 bg-white px-2 hover:text-white hover:bg-slate-700 hover:border-white transition-all duration-300"
            onClick={() => handleCategoryClick("All")}
          >
            All Products
          </button>
          <button
            className="font-bold py-2 border-b-2 border-slate-700 bg-white px-2 hover:text-white hover:bg-slate-700 hover:border-white transition-all duration-300"
            onClick={() => handleCategoryClick("Fruit")}
          >
            Fruit
          </button>
          <button
            className="font-bold py-2 border-b-2 border-slate-700 bg-white px-2 hover:text-white hover:bg-slate-700 hover:border-white transition-all duration-300"
            onClick={() => handleCategoryClick("Vegetable")}
          >
            Vegetable
          </button>
          <button
            className="font-bold py-2 border-b-2 border-slate-700 bg-white px-2 hover:text-white hover:bg-slate-700 hover:border-white transition-all duration-300"
            onClick={() => handleCategoryClick("Grocery")}
          >
            Grocery
          </button>
          <button className="font-bold py-2 border-b-2 border-slate-700 bg-white px-2 hover:text-white hover:bg-slate-700 hover:border-white transition-all duration-300">
            Add Item
          </button>
          <button className="font-bold py-2 border-b-2 border-slate-700 bg-white px-2 hover:text-white hover:bg-slate-700 hover:border-white transition-all duration-300">
            Add Category
          </button>
        </div>
        {/* list view */}
        <div className="flex-grow p-4">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className="py-2 px-4 border-b">{product.id}</td>
                  <td className="py-2 px-4 border-b">{product.name}</td>
                  <td className="py-2 px-4 border-b">{product.qty}</td>
                  <td className="py-2 px-4 border-b">{product.price}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleProductClick(product)}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
            <label className="block mb-2">
              Name:
              <input
                type="text"
                name="name"
                value={selectedProduct.name}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded"
              />
            </label>
            <label className="block mb-2">
              Quantity:
              <input
                type="number"
                name="qty"
                value={selectedProduct.qty}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded"
              />
            </label>
            <label className="block mb-2">
              Price:
              <input
                type="text"
                name="price"
                value={selectedProduct.price}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded"
              />
            </label>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleSaveChanges}
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={handleDeleteProduct}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Delete
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
