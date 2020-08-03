import React, { useState } from "react";
import { storage } from "../../firebaseConfig";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLabel,
  CInput,
  CFormGroup,
  CTextarea,
  CDataTable,
  CInputFile,
  CAlert,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const AddProduct = () => {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const [productName, setProductName] = useState("");

  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [models, setModels] = useState([]);

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const [description, setDescription] = useState("");
  const [specification, setSpecification] = useState("");

  const addColor = () => {
    if (color !== "") {
      let tempColorArray = colors;
      let tempId = 0;

      tempColorArray.length === 0
        ? (tempId = 1)
        : (tempId = parseInt(tempColorArray[tempColorArray.length - 1].id) + 1);

      let tempColor = { id: tempId, color: color };
      tempColorArray.push(tempColor);
      setColors(tempColorArray);
      setColor("");
    }
  };

  const removeColor = (id) => {
    let tempColorArray = colors;
    for (var i = 0; i < tempColorArray.length; i++) {
      if (tempColorArray[i].id === id) {
        tempColorArray.splice(i, 1);
      }
    }
    setColors(tempColorArray);
    forceUpdate();
  };

  const addModel = () => {
    let tempModelsArray = models;
    let tempId = 0;
    tempModelsArray.length === 0
      ? (tempId = 1)
      : (tempId = parseInt(tempModelsArray[tempModelsArray.length - 1].id) + 1);

    let tempModel = {
      id: tempId,
      brand: brand,
      model: model,
      price: price,
      action: "",
    };
    tempModelsArray.push(tempModel);
    setModels(tempModelsArray);
    setBrand("");
    setModel("");
    setPrice("");
  };

  const removeModel = (id) => {
    let tempModelsArray = models;
    for (var i = 0; i < tempModelsArray.length; i++) {
      if (tempModelsArray[i].id === id) {
        tempModelsArray.splice(i, 1);
      }
    }
    setModels(tempModelsArray);
    forceUpdate();
  };

  //Photo Upload---------------------------------------------
  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file["type"];
      const validImageTypes = ["image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setError("");
        setImage(file);
      } else {
        setError("Please select an jpeg or png");
      }
    } else {
      setError("Please select an image");
    }
  };

  const handleUpload = () => {
    if (image) {
      const uploadTask = storage.ref(`product_images/${image.name}`).put(image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          setError("Error in uploading the file");
        },
        () => {
          storage
            .ref("product_images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
              setProgress(0);
              console.log(url);
            });
        }
      );
    } else {
      setError("Please select an image to upload");
    }
  };
  //---------------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    if (models.length === 0) {
      setError("Add models of the item before submit");
      return;
    }

    if (colors.length === 0) {
      setError("Add colors of the item befor submit");
      return;
    }

    let priceStart = 0;
    let priceEnd = 0;

    models.forEach(function (mod) {
      if (priceStart == 0) priceStart = mod.price;
      if (priceStart > mod.price) priceStart = mod.price;
      if (priceEnd < mod.price) priceEnd = mod.price;
    });

    const data = {
      itemName: productName,
      colors: colors,
      imgs: [url],
      models: models,
      desc: description,
      specs: specification,
      priceStartAt: priceStart,
      priceEndAt: priceEnd,
    };

    console.log(data);
  };

  return (
    <>
      <CCard>
        <CCardHeader>Add New Product</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="12">
              {error ? (
                <div>
                  <CAlert color="danger">{error}</CAlert>
                  <br></br>
                </div>
              ) : (
                ""
              )}
            </CCol>
          </CRow>
          <form onSubmit={handleSubmit}>
            <CRow>
              <CCol xs="12" sm="6">
                <CFormGroup>
                  <CLabel htmlFor="name">Product Name</CLabel>
                  <CInput
                    id="productName"
                    name="productName"
                    placeholder="Enter the product name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12" sm="6">
                <CFormGroup>
                  <CLabel htmlFor="file-input">File input</CLabel>
                  <CInputFile
                    id="file-input"
                    name="file-input"
                    onChange={handlePhoto}
                    required
                  />
                  {progress > 0 ? <progress value={progress} max="100" /> : ""}
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12" sm="5">
                <CFormGroup>
                  <CLabel htmlFor="name">Colors</CLabel>
                  <CInput
                    id="color"
                    name="color"
                    placeholder="Enter the product name"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="4" sm="2">
                <br></br>
                <CButton color="primary" className="mt-2" onClick={addColor}>
                  Add
                </CButton>
              </CCol>
              <CCol xs="8" sm="5" className="mt-1">
                <br></br>
                {colors.map((color) => {
                  return (
                    <CButton
                      size="sm"
                      id={color.id}
                      key={color.id}
                      className="btn-behance btn-brand ml-1 mt-1"
                      onClick={() => removeColor(color.id)}
                    >
                      <CIcon name="cil-x" />
                      <span> {color.color}</span>
                    </CButton>
                  );
                })}
              </CCol>
            </CRow>
            <hr></hr>
            <br></br>
            <CRow>
              <CCol xs="12" sm="4">
                <CFormGroup>
                  <CLabel htmlFor="name">Brand</CLabel>
                  <CInput
                    id="brand"
                    name="brand"
                    placeholder="Enter the product name"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12" sm="4">
                <CFormGroup>
                  <CLabel htmlFor="name">Model</CLabel>
                  <CInput
                    id="model"
                    name="model"
                    placeholder="Enter the product name"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12" sm="3">
                <CFormGroup>
                  <CLabel htmlFor="name">Price</CLabel>
                  <CInput
                    id="price"
                    name="price"
                    type="number"
                    placeholder="Enter the product name"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="4" sm="1">
                <br></br>
                <CButton
                  block
                  color="primary"
                  className="mt-2"
                  onClick={() => addModel()}
                >
                  Add
                </CButton>
              </CCol>
            </CRow>
            <br></br>
            <CRow>
              <CCol>
                <CDataTable
                  items={models}
                  fields={["brand", "model", "price", "action"]}
                  itemsPerPage={5}
                  pagination
                  scopedSlots={{
                    action: (model) => (
                      <td>
                        <CButton
                          color="danger"
                          size="sm"
                          onClick={() => removeModel(model.id)}
                        >
                          Remove
                        </CButton>
                      </td>
                    ),
                  }}
                />
              </CCol>
            </CRow>
            <br></br>
            <hr></hr>
            <br></br>
            <CRow>
              <CCol sm="12" md="6">
                <CLabel htmlFor="name">Description</CLabel>
                <CTextarea
                  name="description"
                  id="description"
                  rows="5"
                  placeholder="Description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </CCol>
              <CCol sm="12" md="6">
                <CLabel htmlFor="name">Specification</CLabel>
                <CTextarea
                  name="specification"
                  id="specification"
                  rows="5"
                  placeholder="Specification..."
                  value={specification}
                  onChange={(e) => setSpecification(e.target.value)}
                  required
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CButton type="submit" color="primary" className="mt-2">
                  Add Item
                </CButton>
              </CCol>
            </CRow>
          </form>
        </CCardBody>
      </CCard>
    </>
  );
};

export default AddProduct;
