import { connect } from 'react-redux'
import MainView from "../components/MainView";
import {login} from "../actions";



const mapStateToProps = state => ({
    token: state.authReducer
});

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(login())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainView)