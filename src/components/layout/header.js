import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CartIcon from '../cart/cartIcon';
import React, { Component } from 'react';
import IdleTimer from 'react-idle-timer';
import IdleTimeOutModal from '../../idleModal';
import CartDropdown from '../cart/cartDropdown';
import { logout } from '../../actions/user.actions';
import { selectCartHidden } from '../../selectors/cartSelector';
import { toggleCategoryHidden } from '../../actions/category.actions';
import { selectCategoryHidden } from '../../selectors/categorySelector';

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
        // Sort Alphabetically, filter category with product
        const { all_category, all_product } = this.props
        const productCategory = all_category !== null && all_category !== undefined && all_category.length > 0 &&
        all_category.sort((a, b) => a.title.localeCompare(b.title)).map((category, ind) => (
            <li key={ind}>
                {all_product.filter(pro => pro.category === category.id).length !== 0 ? (
                    <React.Fragment>
                        <Link to="#">
                            {category.title} ({all_product.filter(pro => pro.category === category.id).length})
                        </Link>
                        <ul>
                            {all_product !== null && all_product !== undefined && all_product.length > 0 && all_product.filter(pro => pro.category === category.id).map(proCat => (
                                <li key={proCat.id}>
                                    <Link to={`/shop/product/${proCat.id}`}>{proCat.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </React.Fragment>
                ) : null}
            </li>
        )).slice(0,16)
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
            <header className="header-area header-1">
                <div className="header-top">
                    <div className="box-container">
                        <div className="row">
                            <div className="col-12 mobile-menu-area">
                            	<div className="mobile-menu">
	                                <nav id="mobile-menu">
	                                    <ul>
	                                        <li><Link to="/">Home</Link></li>
	                                        <li><Link to="/shop/product">Shop</Link></li>
	                                        <li><Link to="/">contact</Link></li>
	                                        <li><Link to="/">About</Link></li>
	                                    </ul>
	                                </nav>   
	                            </div>                             	
                            </div>                        
                            <div className="col-12 col-md-6 d-none d-lg-block col-lg-6">
                                <div className="header-top-left-menu">
                                    <nav>
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/shop/product">Shop</Link></li>
                                            <li><Link to="/">contact</Link></li>
                                            <li><Link to="/">About</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6">
                                <div className="header-top-right-menu">
                                    <nav>
                                        <ul>
                                            {this.props.authentication.validToken === true ? (
                                                <React.Fragment>
                                                    <li><Link to="/user/dashboard">My Account</Link></li>
                                                    <li onClick={() => this.props.logout()}><Link>Logout</Link></li>
                                                </React.Fragment>
                                            ) : (
                                                <React.Fragment>
                                                    <li><Link to="/register">Register</Link></li>
                                                    <li><Link to="/login">Login</Link></li>
                                                </React.Fragment>
                                            )}
                                            <li className="currency-menu"><Link to="#">USD <i className="fa fa-angle-down"></i></Link> 
                                                <ul>
                                                    <li><Link to="#">Gbp</Link></li>
                                                    <li><Link to="#">Euro</Link></li>
                                                </ul>
                                            </li>
                                            {/* <li className="language-menu"><Link to="#">English <i className="fa fa-angle-down"></i></Link>
                                                <ul>
                                                    <li><Link to="#">Danish</Link></li>
                                                    <li><Link to="#">French</Link></li>
                                                    <li><Link to="#">Spanish</Link></li>
                                                </ul>
                                            </li> */}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className="header-bottom">
                    <div className="box-container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-2">
                            	<div className="logo">
                            		<Link to="/">
                            			<img src="/assets/img/logo.png" alt="logo"/>
                            		</Link>
                            	</div>
                            </div>
                            <div className="col-12 col-md-9 col-lg-8 d_f_ac clearfix">
                            	<div className="product-category">
									<div className="category-title">
										<h6 onClick={this.props.toggleCategoryHidden}><i className="material-icons">menu</i>All Categories</h6>
                                        {this.props.cathidden ? null : (
                                            <nav>
                                                <ul>
                                                    {productCategory}
                                                    <li className="more-cat"><span>More Categories</span></li>
                                                </ul>
                                            </nav>
                                        )}
									</div>                            	
                            	</div>
                            	<div className="product-search">
                            		<form action="#">
                            			<input type="text" placeholder="Search entire store here..." className="input-text"/>
                            			<input type="submit" value="Search" className="input-text submit-btn"/>
                            		</form>
                            	</div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-2 d_f_ac d_f_e clearfix">
                            	<div className="header-quick-links">
                            		<ul>
                            			<li><Link to="#"><i className="material-icons">autorenew</i></Link></li>
                            			<li><Link to="wishlist.html"><i className="material-icons">favorite_border</i></Link></li>
                                        <CartIcon/>
                                        {this.props.hidden ? null : <CartDropdown/>}
                            		</ul>
                            	</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            </>
        )
    }
}

Header.propTypes = {
    hidden: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    cathidden: PropTypes.bool.isRequired,
    authentication: PropTypes.object.isRequired,
    toggleCategoryHidden: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    hidden: selectCartHidden(state),
    authentication: state.authentication,
    cathidden: selectCategoryHidden(state),
});

const mapDispatchToProps = dispatch => ({
    logout: (history) => dispatch(logout(history)),
    toggleCategoryHidden: () => dispatch(toggleCategoryHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
