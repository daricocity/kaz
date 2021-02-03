import React from 'react';
import Footer from '../../components/private/footer';
import SideBar from '../../components/private/sidebar';
import Settings from '../../components/private/themeOption';

const DashboardView = (props) => {
    document.title = 'Dashboard';
    // document.ready = true;
    // document.onload = true;
    return (
        <React.Fragment>
            <SideBar/>
            <div className="tb-content tb-style1">
                <div className="tb-height-b30 tb-height-lg-b30"></div>
                <div className="container-fluid">
                    <div className="tb-height-b30 tb-height-lg-b30"></div>
                    <div className="row row-mt-30">
                        <div className="col-lg-3 col-sm-6">
                            <div className="tb-card tb-style1 text-center">
                            <div className="tb-card-body">
                                <div className="tb-height-b30 tb-height-lg-b30"></div>
                                    <div className="tb-iconbox tb-style1">
                                        <div className="tb-icon tb-icon-color1 tb-radious50 tb-flex">
                                            <i className="material-icons">shopping_cart</i>
                                        </div>
                                        <div className="tb-iconbox-text">
                                            <h3 className="tb-iconbox-heading">10</h3>
                                            <div className="tb-iconbox-sub-heading">Stock Product</div>
                                            <div className="tb-height-b25 tb-height-lg-b25"></div>
                                            <hr />
                                            <div className="tb-progress-lavel tb-style1 tb-success-color">
                                                <i className="material-icons">arrow_drop_up</i>5.5%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="tb-card tb-style1 text-center">
                                <div className="tb-card-body">
                                    <div className="tb-height-b30 tb-height-lg-b30"></div>
                                    <div className="tb-iconbox tb-style1">
                                        <div className="tb-icon tb-icon-color2 tb-radious50 tb-flex">
                                            <i className="material-icons">store</i>
                                        </div>
                                        <div className="tb-iconbox-text">
                                            <h3 className="tb-iconbox-heading">6.2k</h3>
                                            <div className="tb-iconbox-sub-heading">Revenue</div>
                                            <div className="tb-height-b25 tb-height-lg-b25"></div>
                                            <hr />
                                            <div className="tb-progress-lavel tb-style1 tb-style1 tb-success-color">
                                                <i className="material-icons">arrow_drop_up</i>5.5%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="tb-card tb-style1 text-center">
                                <div className="tb-card-body">
                                    <div className="tb-height-b30 tb-height-lg-b30"></div>
                                    <div className="tb-iconbox tb-style1">
                                        <div className="tb-icon tb-icon-color3 tb-radious50 tb-flex">
                                            <i className="material-icons">flag</i>
                                        </div>
                                        <div className="tb-iconbox-text">
                                            <h3 className="tb-iconbox-heading">0.4</h3>
                                            <div className="tb-iconbox-sub-heading">Conversion Rate</div>
                                            <div className="tb-height-b25 tb-height-lg-b25"></div>
                                            <hr />
                                            <div className="tb-progress-lavel tb-style1 tb-danger-color">
                                                <i className="material-icons">arrow_drop_down</i>5.5%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="tb-card tb-style1 text-center">
                                <div className="tb-card-body">
                                    <div className="tb-height-b30 tb-height-lg-b30"></div>
                                    <div className="tb-iconbox tb-style1">
                                        <div className="tb-icon tb-icon-color4 tb-radious50 tb-flex">
                                            <i className="material-icons">cloud</i>
                                        </div>
                                        <div className="tb-iconbox-text">
                                            <h3 className="tb-iconbox-heading">16k</h3>
                                            <div className="tb-iconbox-sub-heading">Sessions</div>
                                            <div className="tb-height-b25 tb-height-lg-b25"></div>
                                            <hr />
                                            <div className="tb-progress-lavel tb-style1 tb-success-color">
                                                <i className="material-icons">arrow_drop_up</i>5.5%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tb-height-b30 tb-height-lg-b30"></div>
                </div>
                <Footer/>
            </div>
            <Settings/>
        </React.Fragment>
    );
}

export default DashboardView

// New Change
// 1. Dashboard
// 2. table.js