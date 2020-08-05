import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllSubscribers } from "../../actions/subscribers.actions";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CAlert,
} from "@coreui/react";

const Subscribers = (props) => {
  useEffect(() => {
    props.onGetAllSubscribers(props.user.headers);
  });

  return (
    <>
      <CCard>
        <CCardHeader>All Subscribers</CCardHeader>
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
                fields={["id", "emil"]}
                itemsPerPage={15}
                pagination
              />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userData.user || "",
    error: state.subscribersData.error || "",
    subscribers: state.subscribersData.subscribers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllSubscribers: (headers) => {
      dispatch(getAllSubscribers(headers));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
