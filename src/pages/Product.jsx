import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Product = () => {
  const initialProducts = [
    { id: 1, name: "Apple", category: "Fruit", qty: 50, price: "200" },
    { id: 2, name: "Carrot", category: "Vegetable", qty: 30, price: "500" },
    { id: 3, name: "Milk", category: "Grocery", qty: 20, price: "100" },
    { id: 4, name: "Banana", category: "Fruit", qty: 40, price: "250" },
    { id: 5, name: "Potato", category: "Vegetable", qty: 25, price: "200" },
    { id: 6, name: "Bread", category: "Grocery", qty: 15, price: "150" },
  ];

  const initialCategories = ["Fruit", "Vegetable", "Grocery"];

  const [products, setProducts] = useState(initialProducts);
  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [isAddCategoryVisible, setIsAddCategoryVisible] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: null,
    name: "",
    category: selectedCategory !== "All" ? selectedCategory : "",
    qty: 0,
    price: "",
  });
  const [newCategory, setNewCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm(""); // Reset search term when changing category
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

  const handleDeleteProduct = () =>  {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== selectedProduct.id)
    );
    setIsModalOpen(false);
  };

  const handleAddItemInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddNewItem = () => {
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      id: products.length + 1,
    }));
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setIsAddItemModalOpen(false);
  };

  const handleAddCategoryInputChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleAddNewCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories((prevCategories) => [...prevCategories, newCategory]);
      setNewCategory("");
    }
    setIsAddCategoryVisible(false);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const searchSuggestions = products.filter((product) =>
        product.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(searchSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    setSuggestions([]);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : products.filter(
          (product) =>
            product.category === selectedCategory &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className="min-h-screen p-2 bg-slate-300 text-slate-600">
      {/* nav bar */}
      <div className="border-b-2 flex items-center justify-between px-4 pb-2">
        <h3 className="font-semibold text-xl uppercase text-slate-800 cursor-default">
          Super
        </h3>
        <form className="relative flex items-center gap-4">
          <div className="relative w-72">
            <FaSearch className="absolute top-2 left-3 text-slate-500" />
            <input
              type="search"
              placeholder="Search by Product"
              value={searchTerm}
              onChange={handleSearchChange}
              className="py-1 px-3 rounded-md pl-10 w-full"
            />
            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border rounded mt-1 max-h-48 overflow-y-auto">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.id}
                    className="px-4 py-2 hover:bg-slate-200 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.name}
                  </li>
                ))}
              </ul>
            )}
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
          {categories.map((category) => (
            <button
              key={category}
              className="font-bold py-2 border-b-2 border-slate-700 bg-white px-2 hover:text-white hover:bg-slate-700 hover:border-white transition-all duration-300"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
          <button
            className="font-bold py-2 border-b-2 border-slate-700 bg-white px-2 hover:text-white hover:bg-slate-700 hover:border-white transition-all duration-300"
            onClick={() => setIsAddItemModalOpen(true)}
          >
            Add Item
          </button>
          <button
            className="font-bold py-2 border-b-2 border-slate-700 bg-white px-2 hover:text-white hover:bg-slate-700 hover:border-white transition-all duration-300"
            onClick={() => setIsAddCategoryVisible(true)}
          >
            Add Category
          </button>
        </div>
        {/* list view */}
        <div className="flex-grow p-4">
          {isAddCategoryVisible && (
            <div className="mb-4 p-4 bg-white border rounded">
              <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
              <input
                type="text"
                placeholder="Enter category name"
                value={newCategory}
                onChange={handleAddCategoryInputChange}
                className="w-full px-2 py-1 border rounded mb-4"
              />
              <div className="flex justify-end">
                <button
                  onClick={handleAddNewCategory}
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                >
                  Add
                </button>
                <button
                  onClick={() => setIsAddCategoryVisible(false)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Category</th>
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
                  <td className="py-2 px-4 border-b">{product.category}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleProductClick(product)}
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
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
      {/* Edit Modal */}
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
                onClick={() => handleProductClick(product)}
                className="bg-red-500 text-white px-2 py-1 rounded mr-2"
              >
                Delete
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Item Modal */}
      {isAddItemModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
            <label className="block mb-2">
              Name:
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleAddItemInputChange}
                className="w-full px-2 py-1 border rounded"
              />
            </label>
            <label className="block mb-2">
              Category:
              <select
                name="category"
                value={newProduct.category}
                onChange={handleAddItemInputChange}
                className="w-full px-2 py-1 border rounded"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label className="block mb-2">
              Quantity:
              <input
                type="number"
                name="qty"
                value={newProduct.qty}
                onChange={handleAddItemInputChange}
                className="w-full px-2 py-1 border rounded"
              />
            </label>
            <label className="block mb-2">
              Price:
              <input
                type="text"
                name="price"
                value={newProduct.price}
                onChange={handleAddItemInputChange}
                className="w-full px-2 py-1 border rounded"
              />
            </label>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleAddNewItem}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Add
              </button>
              <button
                onClick={() => setIsAddItemModalOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded ml-2"
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
