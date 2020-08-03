import React from "react";
import {MDBBtn, MDBCard, MDBCol, MDBContainer, MDBIcon, MDBRow} from "mdbreact";
import phoneCase from "../assets/images/phoneCase.jpg"

export default function AddToCart() {
    return (
<MDBContainer className="pt-5 pl-5 pr-5">
    <MDBRow>
        <MDBCol md="12">
            <MDBCard
                className="card-image pt-5 pl-5 pr-5"
                style={{
                    backgroundImage: `url(${phoneCase})`,
                    height: "500px",
                    backgroundRepeat: " no-repeat",
                }}
            >
            </MDBCard>
        </MDBCol>
        <MDBCol md="5">
            <MDBRow>
                <MDBCol className="justify-content-center text-center" xl="6">

                </MDBCol>
            </MDBRow>
        </MDBCol>

    </MDBRow>
</MDBContainer>

    );
}
