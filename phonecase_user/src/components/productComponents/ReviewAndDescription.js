import React, {useState} from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    MDBModal,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter, MDBInput
} from "mdbreact";
import Avatar from "@material-ui/core/Avatar";
import StarRatingComponent from "react-star-rating-component";
import ReactStars from "react-rating-stars-component";
import {history} from "../../index";
import {userSignUp} from "../../actions/user.actions";
import {connect} from "react-redux";
import {addReview} from "../../actions/reviews.actions";


const goToAllReviews = () => {
    history.push("/customer-reviews");
};

const  ReviewAndDescription = (props) => {
    const [isDescription, setIsDescription] = useState(null);
    const isDescriptionDisplay = Boolean(isDescription);

    const [modal, setmodal] = React.useState(false);

    function handleOpenModal() {
        setmodal(!modal);
    };

    function handleCloseModal() {
        setmodal(modal);
    };

    const [email, setEmail] = React.useState(undefined);
    React.useEffect(() => {
    }, [setEmail]);

    const [name, setName] = React.useState(undefined);
    React.useEffect(() => {
    }, [setName]);

    const [review, setReview] = React.useState(undefined);
    React.useEffect(() => {
    }, [setReview]);

    const [rate, setRate] = React.useState(undefined);
    React.useEffect(() => {
    }, [setReview]);

    const handleEmailChange = (text) => setEmail(text.target.value);
    const handleNameChange = (text) => setName(text.target.value);
    const handleReviewChange = (text) => setReview(text.target.value);

    const ratingBar = {
        size: 30,
        isHalf: true,
        char: "★",
        value: 2,
        onChange: newValue => {
           setRate(newValue);
        }
    };


    const handleAddReview = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            name: name,
            review: review,
            rate: rate,
        };
        props.onAddReview(data);
    };


    return (
        <MDBContainer className="pt-5 pl-5 pr-5">
            <MDBRow className="justify-content-center">
                {isDescriptionDisplay ? (
                    <div>
                        <MDBBtn
                            outline
                            color="amber"
                            style={{borderRadius: 25}}
                            value="true"
                            onClick={() => setIsDescription(true)}
                            className="m-5"
                        >
                            DESCRIPTION
                        </MDBBtn>{" "}
                        <a
                            style={{color: "gray"}}
                            onClick={() => setIsDescription(false)}
                        >
                            {" "}
                            REVIEWS (2)
                        </a>
                    </div>
                ) : (
                    <div>
                        <a style={{color: "gray"}} onClick={() => setIsDescription(true)}>
                            {" "}
                            DESCRIPTION (2)
                        </a>
                        <MDBBtn
                            outline
                            color="amber"
                            style={{borderRadius: 25}}
                            value="false"
                            onClick={() => setIsDescription(false)}
                            className="m-5"
                        >
                            REVIEWS (2)
                        </MDBBtn>
                    </div>
                )}
            </MDBRow>
            <MDBRow>
                {isDescriptionDisplay ? (
                    <MDBRow className="justify-content-center text-center">
                        <MDBCol className="col-md-6 col-lg-6 col-xl-6">
                            <MDBIcon
                                far
                                icon="file-alt"
                                size="4x"
                                style={{color: "gray"}}
                                className="p-3"
                            />
                            <h5 className="font-weight-bold p-2">
                                Details and product description
                            </h5>
                            <p>{props.review.desc}</p>
                        </MDBCol>
                        <MDBCol className="col-md-6 col-lg-6 col-xl-6">
                            <MDBIcon
                                icon="pencil-ruler"
                                size="4x"
                                style={{color: "gray"}}
                                className="p-3"
                            />
                            <h5 className="font-weight-bold p-2">Material(s) and care</h5>
                            <p>{props.review.desc}</p>
                        </MDBCol>
                    </MDBRow>
                ) : (
                    <MDBRow className="col-md-12 col-lg-12 col-xl-12">
                        <MDBCol className="col-md-5 col-lg-5 col-xl-5">
                            <MDBRow>
                                <MDBCol className="justify-content-center text-center" xl="6">
                                    <h1 className="font-weight-bold" style={{fontSize: "70px"}}>
                                        4.5
                                    </h1>
                                    <p style={{color: "gray"}}>81 all opinios</p>
                                </MDBCol>
                                <MDBCol xl="6">


                                    <MDBRow className="justify-content-start pb-1">
                                        <MDBCol size="3">
                                            <MDBIcon icon="star" style={{color: "#ffc107"}}/>
                                            {" 5 "}
                                        </MDBCol>
                                        <MDBCol size="9">
                                            <div
                                                className="progress"
                                                style={{height: "4px", marginTop: "6px"}}
                                            >
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{width: "75%"}}
                                                    aria-valuenow="75"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className="justify-content-start pb-1">
                                        <MDBCol size="3">
                                            <MDBIcon icon="star" style={{color: "#ffc107"}}/>
                                            {" 4 "}
                                        </MDBCol>
                                        <MDBCol size="9">
                                            <div
                                                className="progress"
                                                style={{height: "4px", marginTop: "6px"}}
                                            >
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{width: "55%"}}
                                                    aria-valuenow="75"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className="justify-content-start pb-1">
                                        <MDBCol size="3">
                                            <MDBIcon icon="star" style={{color: "#ffc107"}}/>
                                            {" 3 "}
                                        </MDBCol>
                                        <MDBCol size="9">
                                            <div
                                                className="progress"
                                                style={{height: "4px", marginTop: "6px"}}
                                            >
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{width: "35%"}}
                                                    aria-valuenow="75"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className="justify-content-start pb-1">
                                        <MDBCol size="3">
                                            <MDBIcon icon="star" style={{color: "#ffc107"}}/>
                                            {" 2 "}
                                        </MDBCol>
                                        <MDBCol size="9">
                                            <div
                                                className="progress"
                                                style={{height: "4px", marginTop: "6px"}}
                                            >
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{width: "25%"}}
                                                    aria-valuenow="75"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className="justify-content-start pb-1">
                                        <MDBCol size="3">
                                            <MDBIcon icon="star" style={{color: "#ffc107"}}/>
                                            {" 1 "}
                                        </MDBCol>
                                        <MDBCol size="9">
                                            <div
                                                className="progress"
                                                style={{height: "4px", marginTop: "6px"}}
                                            >
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{width: "15%"}}
                                                    aria-valuenow="75"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="justify-content-center">
                                <MDBBtn
                                    color="amber"
                                    style={{borderRadius: 25}}
                                    value="false"
                                    onClick={() => handleOpenModal()}
                                    className="m-5"
                                >
                                    ADD OPINION
                                </MDBBtn>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol
                            className="col-md-1 col-lg-1 col-xl-1"
                            className="d-none d-md-block"
                        ></MDBCol>
                        <MDBCol className="col-md-6 col-lg-6 col-xl-6">
                            <MDBRow className="justify-content-start">
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                                <MDBCol className="md-11 text-start">
                                    <h6 className="font-weight-bold p-2">John Doe</h6>
                                    <StarRatingComponent
                                        name="rate1"
                                        editing={false}
                                        starCount={5}
                                        value={4.5}
                                    />
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="justify-content-start">
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                                <MDBCol className="md-11 text-start">
                                    <h6 className="font-weight-bold p-2">Eveline Gosok</h6>
                                    <StarRatingComponent
                                        name="rate1"
                                        editing={false}
                                        starCount={5}
                                        value={4.5}
                                    />
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="justify-content-end">
                                <MDBBtn
                                    outline
                                    color="blue-grey"
                                    style={{borderRadius: 25}}
                                    value="false"
                                    onClick={() => goToAllReviews()}
                                    className="m-5"
                                    size="sm"
                                >
                                    SHOW MORE (2)
                                </MDBBtn>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                )}
            </MDBRow>


            <MDBModal isOpen={modal} centered>
                <form className="needs-validation" onSubmit={handleAddReview}>
                <MDBModalHeader>Rate and Review</MDBModalHeader>
                <MDBModalBody>
                    How would you rate this product ?
                    <ReactStars {...ratingBar} />
                    <MDBInput label="Your name" icon="user" group type="text"  required validate error="wrong"
                              success="right"/>
                    <MDBInput label="Your email" icon="envelope" group type="email"  required  validate error="wrong"
                              success="right"/>
                    <MDBInput type="textarea" rows="2"  required label="Your review" icon="pencil-alt"/>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn className="btn btn-outline-purple" onClick={() => handleOpenModal()}
                            style={{borderRadius: 25}}>
                        ClOSE
                    </MDBBtn>
                    <MDBBtn color="amber" type="submit"
                            style={{borderRadius: 25}}>POST</MDBBtn>
                </MDBModalFooter>
                </form>
            </MDBModal>
        </MDBContainer>
    );
};
const mapStateToProps = (state) => {
    return {
        error: state.reviewData.error || "",
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddReview: (object) => {
            dispatch(addReview(object));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewAndDescription);
