import {connect} from 'react-redux'
import MainView from "../components/MainView";
import {login, logout, signUp} from "../actions";


const mapStateToProps = state => ({
    config: state.configReducer,
    token: state.authReducer,

});

const mapDispatchToProps = (dispatch) => ({
    loginClick: () => dispatch(login()),
    signUp: () => dispatch(signUp()),
    logoutClick: () => dispatch(logout()),


});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainView)