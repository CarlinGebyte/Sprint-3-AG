
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { baseDato } from "../../firebase/firebaseConfig";
import { typesProducts } from "../types/types";

// ===========> Edit <=============

export const editAsync = (codigo, product) => {
  console.log(codigo, product);
  return async (dispatch) => {
    const getCollection = collection(baseDato, "AmazonasBD");
    const q = query(getCollection, where("id", "==", codigo));
    const getDataQuery = await getDocs(q);
    let id;
    getDataQuery.forEach((doc) => {
      id = doc.id;
    });
    console.log(getDataQuery);
    console.log(id);
    const documentRef = doc(baseDato, "AmazonasBD", id);
    await updateDoc(documentRef, product)
      .then((result) => {
        dispatch(editSync(product));
        dispatch(listAsync());
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const editSync = (product) => {
  return {
    type: typesProducts.edit,
    payload: product,
  };
};

// ===========> Delete <=============

export const deleteAsync = (codigo) => {
  return async (dispatch) => {
    const getCollections = collection(baseDato, "AmazonasBD");
    const q = query(getCollections, where("id", "==", codigo));
    const getDataQuery = await getDocs(q);
    console.log(getDataQuery);
    getDataQuery.forEach((docu) => {
      deleteDoc(doc(baseDato, "AmazonasBD", docu.id));
    });
    dispatch(deleteSync(codigo));
    dispatch(listAsync());
  };
};

export const deleteSync = (codigo) => {
  return {
    type: typesProducts.delete,
    payload: codigo,
  };
};

// ===========> List <=============

export const listAsync = () => {
  return async (dispatch) => {
    const getCollections = await getDocs(collection(baseDato, "AmazonasBD"));
    let products = [];
    getCollections.forEach((doc) => {
      products.push({
        ...doc.data(),
      });
    });
    dispatch(listSync(products));
  };
};

export const listSync = (products) => {
  return {
    type: typesProducts.list,
    payload: products,
  };
};

// ===========> add <=============

export const addAsync = (product) => {
  return (dispatch) => {
    addDoc(collection(baseDato, "AmazonasBD"), product)
      .then((result) => {
        dispatch(addSync(product));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addSync = (product) => {
  return {
    type: typesProducts.add,
    payload: product,
  };
};
