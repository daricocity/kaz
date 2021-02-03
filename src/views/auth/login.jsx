import {Formik} from 'formik';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { login } from '../../actions/user.actions';
import { Button, CircularProgress } from '@material-ui/core';

class LoginView extends Component {

    componentDidMount(){
        document.title = 'Login';
    }

    componentDidUpdate(){
        if (this.props.authentication.validToken) {
            this.props.history.push("/");
        }
    }
     
    render(){
        const dataBaseErro = this.props.errors !== null && this.props.errors !== undefined && this.props.errors;
        return(
            <section className="fxt-template-animation fxt-template-layout11">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-sm-12 col-12 fxt-bg-color">
                            <div className="fxt-content">
                                <div className="fxt-header">
                                    <Link to="/" className="fxt-logo">
                                        <img src="assets/img/logo.png" alt="logo"/>
                                    </Link>
                                </div>                            
                                <div className="fxt-form"> 
                                    <Formik
                                        initialValues={{ 
                                            username: '',
                                            password: '',
                                        }}
                                        validate={values => {
                                            const errors = {};
                                            if (!values.username) {
                                                errors.username = 'Required';
                                            } 
                                            if (!values.password) {
                                                errors.password = 'Required';
                                            } 
                                            return errors;
                                        }}
                                        onSubmit={(values, {setSubmitting}) => {
                                            setTimeout(() => {
                                                setSubmitting(false);
                                                this.props.login(values)
                                            }, 5000);
                                        }}
                                    >
                                        {({
                                            values,
                                            errors,
                                            touched,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            isSubmitting,
                                            submitForm,
                                        }) => (
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group"> 
                                                    <div className="fxt-transformY-50 fxt-transition-delay-1">
                                                        <input 
                                                            type="text"
                                                            id="username"
                                                            className="form-control"
                                                            name="username"
                                                            placeholder="Username"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.username}
                                                        />
                                                        <div className="invalid-feedback">
                                                            {errors.username && touched.username && errors.username}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">  
                                                    <div className="fxt-transformY-50 fxt-transition-delay-2">
                                                        <input 
                                                            id="password" 
                                                            type="password" 
                                                            className="form-control" 
                                                            name="password"  
                                                            placeholder="Password" 
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.password}
                                                        />
                                                        <i toggle="#password" className="fa fa-fw fa-eye toggle-password field-icon"></i>
                                                        <div className="invalid-feedback">
                                                            {errors.password && touched.password && errors.password}
                                                        </div>
                                                        {dataBaseErro.data && (
                                                            <div className="invalid-feedback">
                                                                {dataBaseErro.data.detail}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="fxt-transformY-50 fxt-transition-delay-4">  
                                                    <Button
                                                            size="small"
                                                            variant="contained"
                                                            color="primary"
                                                            disabled={isSubmitting}
                                                            onClick={submitForm}
                                                            className="fxt-btn-fill"
                                                        >
                                                            {isSubmitting ? (
                                                                <span>SIGNING <CircularProgress style={{marginLeft:'10px'}} size={20} /></span> 
                                                            ) : (
                                                                <span>LOGIN</span> 
                                                            )}
                                                    </Button>
                                                    </div>
                                                </div>
                                            </form>
                                        )}
                                    </Formik>            
                                </div>
                                <div className="fxt-footer">
                                    <div className="fxt-transformY-50 fxt-transition-delay-9">  
                                        <p>Don't have an account?<Link to="/register" className="switcher-text2 inline-text">Register</Link></p>
                                    </div> 
                                </div> 
                            </div>
                        </div>                    
                    </div>
                </div>
            </section>
        )
    }
}

LoginView.propTypes = {
    login: PropTypes.func.isRequired,
    errors: PropTypes.array.isRequired,
    authentication: PropTypes.object.isRequired,
};
  
const mapStateToProps = state => ({
    errors: state.errors,
    authentication: state.authentication,
});

const mapDispatchToProps = dispatch => ({
    login: (params) => dispatch(login(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);