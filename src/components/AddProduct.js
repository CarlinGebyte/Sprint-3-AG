import React from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { useForm } from "../hooks/useForm";
import { addAsync } from "../redux/actions/actionProducts";
import { FileUp } from "../utils/fileUp";

function AddProduct() {
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    id: "",
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const { name, price, description, category } = values;

  const handleSubmit = (e) => {
    values.id = uuid();
    e.preventDefault();
    dispatch(addAsync(values));
    reset();
    e.target.reset();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    FileUp(file)
      .then((result) => {
        console.log(result);
        values.image = result;
      })
      .catch((err) => {
        console.log(err);
      });
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //   values.image = reader.result;
    // };
    // reader.onerror = (error) => {
    //   console.log("Error: ", error);
    // };
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={category}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Agregar
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
