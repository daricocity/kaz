import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import IdleTimer from 'react-idle-timer';
import IdleTimeOutModal from '../../idleModal';
import { logout } from '../../actions/user.actions';

class Header extends Component {

    constructor(props){
        super(props)
        this.state = {
            timeout: 1000 * 480 * 1,
            remaining: 1000 * 120 *1,
            elapsed: 1000 * 600 * 1,
            showModal: false,
            userLoggedIn: false,
            isTimedOut: false,
        }
        this.idleTimer = null
        this.onAction = this._onAction.bind(this)
        this.onActive = this._onActive.bind(this)
        this.onIdle = this._onIdle.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    _onAction(){
        this.setState({isTimedOut: false})
    }
  
    _onActive(){
        this.setState({isTimedOut: false})
    }
  
    _onIdle(){
        const isTimedOut = this.state.isTimedOut
        if(isTimedOut){
            this.props.logout();
        } else {
            this.setState({showModal: true})
            this.idleTimer.reset();
            this.setState({isTimedOut: true})
        }
    }

    handleClose(){
        this.setState({showModal: false})
    }

    handleLogout(){
        this.setState({showModal: false})
        this.props.logout();
    }

    render(){
        return(
            <>
            <IdleTimer
                ref={ref => {this.idleTimer = ref}}
                element={document}
                onActive={this.onActive}
                onIdle={this.onIdle}
                onAction={this.onAction}
                debounce={250}
                timeout={this.state.timeout}
                getRemainingTime={this.state.remaining}
                getElapsedTime={this.state.elapsed}
            />

            <IdleTimeOutModal
                showModal={this.state.showModal} 
                handleLogout={this.handleLogout} 
                handleClose={this.handleClose}
                remainingTime={this.state.remaining}
            />
            <header className="tb-header tb-style1 tb-sticky-menu">
                <div className="tb-main-header">
                    <div className="tb-main-header-in">
                        <div className="tb-main-header-left">
                            <Link to="/" className="tb-logo-link tb-light-logo">
                                {/* <img src="/assets/admin/img/logo-light.svg" alt="logo-light"/> */}
                                <img src="/assets/img/logo.png" alt="logo"/>
                            </Link>
                            <Link to="/" className="tb-logo-link tb-dark-logo">
                                {/* <img src="/assets/admin/img/logo-dark.svg" alt="logo-dark"/> */}
                                <img src="/assets/img/logo.png" alt="logo"/>
                            </Link>
                        </div>
                        <div className="tb-main-header-right">
                            <div className="tb-nav-wrap tb-fade-up">
                            {/* {authUser.has_paid_activation === true ? (
                                <p></p>
                            )} */}
                            </div>
                            <ul className="tb-ex-nav tb-style1 tb-flex tb-mp0">
                                <li>
                                    <div className="tb-toggle-body tb-search-area tb-style1">
                                        <span className="tb-toggle-btn tb-ex-nav-btn tb-search-btn">
                                            <i className="material-icons">search</i>
                                        </span>
                                        <div className="tb-dropdown tb-search-dropdown">
                                            <form action="#" className="tb-search tb-style1">
                                                <input type="text" placeholder="Search..." className="tb-search-input"/>
                                                <div className="tb-toggle-cross">
                                                    <i className="material-icons">close</i>
                                                </div>
                                                <button className="tb-search-submit"><i className="material-icons">search</i></button>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="tb-toggle-body tb-profile-nav tb-style1">
                                        <div className="tb-toggle-btn tb-profile-nav-btn">
                                            <div className="tb-profile-nav-text">
                                                <span>Welcome,</span>
                                                {this.props.authUser ? (
                                                    <h4>{this.props.toFirstCharUppercase(this.props.authUser.username)}</h4>
                                                ) : (
                                                    <h4>Anonymous</h4>
                                                )}
                                            </div>
                                            <div className="tb-profile-nav-img">
                                                <img src="/assets/admin/img/profile-pic.png" alt="profile"/>
                                            </div>
                                        </div>
                                        <ul className="tb-dropdown tb-style1">
                                            <li>
                                                <Link to="/user/profile"><i className="material-icons">account_circle</i>Profile</Link>
                                            </li>
                                            <li>
                                                <Link to={`/user/${this.props.authUser.username}/change_password`}>
                                                    <i className="material-icons">settings</i>Settings
                                                </Link>
                                            </li>
                                            <li className="tb-dropdown-cta">
                                                <Link onClick={() => this.props.logout()} to="/">
                                                    <i className="material-icons">power_settings_new</i>Sign Out
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            </>
        )
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    authentication: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    authentication: state.authentication,
});

const mapDispatchToProps = dispatch => ({
    logout: (history) => dispatch(logout(history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);