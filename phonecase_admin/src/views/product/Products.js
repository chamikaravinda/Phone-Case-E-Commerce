import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllProducts, deleteProduct } from "../../actions/product.actions";
import { history } from "../../index";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CAlert,
} from "@coreui/react";
const Products = (props) => {
  const deleteProduct = (id) => {
    props.deleteProduct(id, props.user.headers);
  };

  const editProduct = (id) => {
    history.push("/product/edit-product/" + id);
  };

  useEffect(() => {
    props.onGetAllProduct(props.user.headers);
  });

  return (
    <div>
      <CCard>
        <CCardHeader>All Product</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="12">
              {props.error ? (
                <div>
                  <CAlert color="danger">{props.error}</CAlert>
                  <br></br>
                </div>
              ) : (
                ""
              )}
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <CDataTable
                items={[]}
                fields={["brand", "model", "price", "action"]}
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  action: (product) => (
                    <td>
                      <CButton
                        color="primary"
                        size="sm"
                        onClick={() => editProduct(product)}
                      >
                        Remove
                      </CButton>
                      <CButton
                        color="danger"
                        size="sm"
                        onClick={() => deleteProduct(product)}
                      >
                        Remove
                      </CButton>
                    </td>
                  ),
                }}
              />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userData.user || "",
    error: state.productData.error || "",
    products: state.productData.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllProduct: (headers) => {
      dispatch(getAllProducts(headers));
    },
    onDeleteProduct: (id, headers) => {
      dispatch(deleteProduct(id, headers));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
