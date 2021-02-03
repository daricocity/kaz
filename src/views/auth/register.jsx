import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import { register } from '../../actions/user.actions';
import { Button, CircularProgress } from '@material-ui/core';

class RegisterView extends Component {

    componentDidMount(){
        document.title = 'Register';
    }
   
    render(){
        const dataBaseErro = this.props.errors !== null && this.props.errors !== undefined && this.props.errors;
        return(
            <section className="fxt-template-animation fxt-template-layout11">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-sm-12 col-12 fxt-bg-color">
                            <div className="fxt-content" style={{paddingTop:'20px', paddingBottom:'20px'}}>
                                <div className="fxt-header">
                                    <Link to="/" className="fxt-logo">
                                        <img src="assets/img/logo.png" alt="logo"/>
                                    </Link>
                                </div>                            
                                <div className="fxt-form"> 
                                    <Formik
                                        initialValues={{
                                            username: '',
                                            full_name: '',
                                            email: '',
                                            password: '',
                                            confirm_password: '',
                                            referral_id: '',
                                        }}
                                        validate={values => {
                                            const errors = {};
                                            if (!values.username){
                                                errors.username = 'Required';
                                            } 
                                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                                                errors.email = 'Invalid email address';
                                            }
                                            if (!values.password){
                                                errors.password = 'Required';
                                            } 
                                            if (!values.confirm_password){
                                                errors.confirm_password = 'Required';
                                            }
                                            if (!values.referral_id){
                                                errors.referral_id = 'Required';
                                            }
                                            return errors;
                                        }}
                                        onSubmit={(values, {setSubmitting}) => {
                                            setTimeout(() => {
                                                setSubmitting(false);
                                                this.props.register(values, this.props.history)
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
                                                            name="username"
                                                            placeholder="Username *"
                                                            className="form-control"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.username}
                                                        />
                                                        <div className="invalid-feedback">{errors.username && touched.username && errors.username}</div>
                                                        {dataBaseErro.data && (
                                                            <div className="invalid-feedback">{dataBaseErro.data.username}</div>
                                                        )}
                                                    </div>
                                                </div>  

                                                <div className="form-group"> 
                                                    <div className="fxt-transformY-50 fxt-transition-delay-1">
                                                        <input 
                                                            type="text" 
                                                            id="fullname" 
                                                            className="form-control" 
                                                            name="full_name" 
                                                            placeholder="Full name" 
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.full_name}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group"> 
                                                    <div className="fxt-transformY-50 fxt-transition-delay-1">
                                                        <input 
                                                            type="email" 
                                                            id="email" 
                                                            className="form-control" 
                                                            name="email" 
                                                            placeholder="Email *"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.email}
                                                        />
                                                        <div className="invalid-feedback">{errors.email && touched.email && errors.email}</div>
                                                    </div>
                                                </div>

                                                <div className="form-group">  
                                                    <div className="fxt-transformY-50 fxt-transition-delay-2">
                                                        <input 
                                                            id="password" 
                                                            type="password" 
                                                            className="form-control" 
                                                            name="password"  
                                                            placeholder="Password *" 
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.password}
                                                        />
                                                        <i toggle="#password" className="fa fa-fw fa-eye toggle-password field-icon"></i>
                                                    </div>
                                                    <div className="invalid-feedback">{errors.password && touched.password && errors.password}</div>
                                                    {dataBaseErro.data && (
                                                        <div className="invalid-feedback">{dataBaseErro.data.password}</div>
                                                    )}
                                                </div>

                                                <div className="form-group">  
                                                    <div className="fxt-transformY-50 fxt-transition-delay-2">
                                                        <input 
                                                            id="cpassword" 
                                                            type="password" 
                                                            className="form-control" 
                                                            name="confirm_password"  
                                                            placeholder="Confirm Password *" 
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.confirm_password}
                                                        />
                                                        <i toggle="#cpassword" className="fa fa-fw fa-eye toggle-cpassword field-icon"></i>
                                                    </div>
                                                    <div className="invalid-feedback">{errors.confirm_password && touched.confirm_password && errors.confirm_password}</div>
                                                    {dataBaseErro.data && (
                                                        <div className="invalid-feedback">{dataBaseErro.data.password}</div>
                                                    )}
                                                </div>

                                                <div className="form-group"> 
                                                    <div className="fxt-transformY-50 fxt-transition-delay-1">
                                                        <input 
                                                            type="text" 
                                                            id="referalid" 
                                                            className="form-control" 
                                                            name="referral_id" 
                                                            placeholder="Referal Id"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.referral_id}
                                                        />
                                                    </div>
                                                    <div className="invalid-feedback">{errors.referral_id && touched.referral_id && errors.referral_id}</div>
                                                    {dataBaseErro.data && (
                                                        <div className="invalid-feedback">{dataBaseErro.data.referral_id}</div>
                                                    )}
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
                                                                <span>REGISTERING <CircularProgress size={20}/></span> 
                                                            ) : (
                                                                <span>REGISTER</span> 
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
                                        <p>Already have an account?<Link to="/login" className="switcher-text2 inline-text">Log in</Link></p>
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

RegisterView.propTypes = {
    errors: PropTypes.array.isRequired,
    register: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
    register: (params, history) => dispatch(register(params, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
