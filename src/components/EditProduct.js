import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { editAsync } from "../redux/actions/actionProducts";
import "../styles/Modal.css"

// function EditProduct({ modal }) {
function EditProduct() {
  const popUp = document.getElementById("popUpBg");
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    // id: modal.id,
    // name: modal.name,
    // price: modal.price,
    // description: modal.description,
  });

  const handleClose = () => {
    popUp.classList.remove("show");
    popUp.classList.add("hide");
    reset();
  };

  const { id, name, price, description } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(editAsync(id, values));
    handleClose();
  };

  return (
    <div className="popUpBg">
      <div className="popUp">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
            //   value={name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="price">Precio</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
            //   value={price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="description">Descripcion</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
            //   value={description}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
