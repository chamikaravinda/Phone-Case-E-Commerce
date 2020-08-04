import React, { useState } from "react";
import { connect } from "react-redux";
import { newsLetter } from "../../actions/newsletter.action";

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
  CAlert,
} from "@coreui/react";

const NewsLetter = (props) => {
  const [mailSubject, setMailSubject] = useState("");
  const [htmlBody, setHtmlBody] = useState("");
  const [textBody, setTextBody] = useState("");

  const handleSubmit = async (e) => {
    const data = {
      mailSubject: mailSubject,
      htmlBody: htmlBody,
      textBody: textBody,
    };
  };

  return (
    <>
      <CCard>
        <CCardHeader>News Letter</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="12">
              {props.message ? (
                <div>
                  <CAlert color="danger">{props.message}</CAlert>
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
                  <CLabel htmlFor="mailSubject">Email Subject</CLabel>
                  <CInput
                    id="mailSubject"
                    name="mailSubject"
                    placeholder="Enter the Email Subject"
                    value={mailSubject}
                    onChange={(e) => setMailSubject(e.target.value)}
                    required
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="12" md="12" className="pb-3">
                <CLabel htmlFor="textBody">Text Body</CLabel>
                <CTextarea
                  name="textBody"
                  id="textBody"
                  rows="5"
                  placeholder="Text Body..."
                  value={textBody}
                  onChange={(e) => setTextBody(e.target.value)}
                  required
                />
              </CCol>
              <CCol sm="12" md="12">
                <CLabel htmlFor="htmlBody">HTML Body</CLabel>
                <CTextarea
                  name="htmlBody"
                  id="htmlBody"
                  rows="5"
                  placeholder="HTML Body..."
                  value={htmlBody}
                  onChange={(e) => setHtmlBody(e.target.value)}
                  required
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CButton type="submit" color="primary" className="mt-2">
                  Send Letter
                </CButton>
              </CCol>
            </CRow>
          </form>
        </CCardBody>
      </CCard>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.newsLetterData.message || "",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSendLetter: (product, token) => {
      dispatch(newsLetter(product, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsLetter);
