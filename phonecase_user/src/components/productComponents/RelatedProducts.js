import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import {
    MDBCol,
    MDBRow,
} from "mdbreact";
import ItemCard from "./ItemCard";

export default function RelatedProducts() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <main>
                <div className="pb-5 pt-5 pl-5 pr-5">
                    <MDBRow className="pb-5 pt-5" between>
                        <MDBCol className="col-xs-7  col-lg-3">
                            <h3 className="font-weight-bold">You might also like</h3>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className="col-12 col-sm-12 col-md-4">
                            {" "}
                            <ItemCard/>
                        </MDBCol>
                        <MDBCol className="col-12 col-sm-12 col-md-4">
                            {" "}
                            <ItemCard/>
                        </MDBCol>
                        <MDBCol className="col-12 col-sm-12 col-md-4">
                            {" "}
                            <ItemCard/>
                        </MDBCol>
                    </MDBRow>
                </div>
            </main>
        </React.Fragment>
    );
}
