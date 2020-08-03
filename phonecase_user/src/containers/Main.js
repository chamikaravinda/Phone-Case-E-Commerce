import {connect} from 'react-redux'
import MainView from "../components/MainView";
import {
    dispatchError,
    invalidUser,
    login,
    logout,
    pageNavigation,
    redirectHome,
    signIn,
    signUp,
    signUpSuccess
} from "../actions";


const mapStateToProps = state => ({
    config: state.configReducer,
    token: state.authReducer,

});

const mapDispatchToProps = (dispatch) => ({
    loginClick: () => dispatch(login()),
    signUp: () => dispatch(signUp()),
    dispatchError: (message) => dispatch(dispatchError((message) )),
    redirectHome: (status,user) => dispatch(redirectHome(status,user)),
    invalidUser: () => dispatch(invalidUser()),
    logoutClick: () => dispatch(logout()),
    pageNavigation: (type) => dispatch(pageNavigation(type)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainView)