import React, {Component, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCol, MDBRow,
} from "mdbreact";
import StarRatingComponent from "react-star-rating-component";
import Avatar from "@material-ui/core/Avatar";
import {getBestSellers, getJustForYouProduct} from "../../actions/product.actions";
import {connect} from "react-redux";
import {getAllReviews} from "../../actions/reviews.actions";


const AllReviews = (props) => {
    useEffect(() => {
        props.onGetAllReviews();
    }, []);
    return (
        <div>
            <section className="team-section text-center my-5">
                <h2 className="h1-responsive font-weight-bold my-5">
                    Customer Reviews
                </h2>
                <MDBCol style={{maxWidth: "25rem"}}>
                    <MDBCardBody>
                        <MDBRow style={{paddingLeft: "10rem"}}>
                            <Avatar alt="Remy Sharp" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"/>
                        </MDBRow>
                        <MDBCardTitle className='card-title'>
                            <strong>Alice Mayer</strong>
                        </MDBCardTitle>
                        <p className='font-weight-bold blue-text'>Photographer</p>

                        <MDBCardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s</MDBCardText>
                        <StarRatingComponent
                            name="rate1"
                            editing={false}
                            starCount={5}
                            value={4.5}
                            size={25}
                        />

                    </MDBCardBody>
                </MDBCol>
            </section>
        </div>
    );

};

const mapStateToProps = (state) => {
    return {
        allReviews: state.reviewData.reviews || [],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetAllReviews: () => {
            dispatch(getAllReviews());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllReviews);
