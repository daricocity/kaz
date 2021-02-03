import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../../../components/private/footer';
import SideBar from '../../../components/private/sidebar';
import Settings from '../../../components/private/themeOption';
import { getReferral } from '../../../actions/referral.actions';
import PaginationActionsTable from '../../../components/table/table';

const ReferralView = (props) => {
    
    const isReferral = true
    document.title = 'Referral';
    const dispatch = useDispatch();

    const { id } = props.match.params !== null && props.match.params !== undefined && props.match.params;

    useEffect(() => {
        dispatch(getReferral(id,  props.history));
    }, [dispatch, id,  props.history]);

    const { referrals } = useSelector(state => state.referral)
    const Ref = referrals !== null && referrals !== undefined && referrals

    const { user } = useSelector(state => state.authentication)
    const authUser = user !== null && user !== undefined && user

    const Pa_20_count = Ref !== null && Ref !== undefined && Ref.filter(pac => parseInt(pac.package) === 20).length
    const Pa_50_count = Ref !== null && Ref !== undefined && Ref.filter(pac => parseInt(pac.package) === 50).length
    const Pa_100_count = Ref !== null && Ref !== undefined && Ref.filter(pac => parseInt(pac.package) === 100).length

    return (
        <React.Fragment>
            <SideBar/>
            <div className="tb-content tb-style1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tb-sectin-heading tb-style1 tb-uikits-heading">
                                <div className="tb-sectin-heading-left tb-uikits-heading-2">
                                    <h2 className="tb-uikits-title">Referral</h2>
                                    <ul className="tb-breadcamb tb-style1 tb-mp0">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/user/dashboard">Dashboard</Link></li>
                                        <li>Referral</li>
                                    </ul>
                                </div>
                                <div className="tb-sectin-heading-right">
                                    <div className="tb-button-group tb-style1">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tb-height-b30 tb-height-lg-b30"></div>
                    <div className="row row-mt-30">
                        <div className="col-lg-6">
                            <div className="tb-card tb-style1">
                                <div className="tb-card-body">
                                    <div className="tb-iconbox tb-style2">
                                        <div className="tb-icon tb-icon-color1 tb-radious50 tb-flex">
                                            <i className="material-icons">person</i>
                                        </div>
                                        <div className="tb-iconbox-text">
                                            <h3 className="tb-iconbox-heading">{Ref.length}</h3>
                                            <div className="tb-iconbox-sub-heading">Downline Member</div>
                                        </div>
                                        <div className="tb-progressbar-wrap tb-style1 tb-color1">
                                            <div className="tb-single-progress">
                                                <div className="tb-progressbar" data-progress-percentage="60">
                                                    <div className="tb-progressbar-in"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tb-card tb-style1">
                                <div className="tb-card-body">
                                    <div className="tb-iconbox tb-style2">
                                        <div className="tb-icon tb-icon-color2 tb-radious50 tb-flex">
                                            <i className="material-icons">attach_money</i>
                                        </div>
                                        <div className="tb-iconbox-text">
                                            {parseInt(id) === 1 ? (
                                                <React.Fragment>
                                                    {parseInt(authUser.package) === 20 ? (
                                                        <h3 className="tb-iconbox-heading">
                                                            {(20 * 0.2 * Pa_20_count) + (50 * 0.2 * Pa_50_count) + (100 * 0.2 * Pa_100_count)}
                                                        </h3>
                                                    ) : (
                                                        <h3 className="tb-iconbox-heading">
                                                            {(20 * 0.25 * Pa_20_count) + (50 * 0.25 * Pa_50_count) + (100 * 0.25 * Pa_100_count)}
                                                        </h3>
                                                    )}
                                                </React.Fragment>
                                            ): null}
                                            {parseInt(id) === 2 ? (
                                                <React.Fragment>
                                                    {parseInt(authUser.package) === 20 ? (
                                                        <h3 className="tb-iconbox-heading">
                                                            {(20 * 0.1 * Pa_20_count) + (50 * 0.1 * Pa_50_count) + (100 * 0.1 * Pa_100_count)}
                                                        </h3>
                                                    ) : (
                                                        <h3 className="tb-iconbox-heading">
                                                            {(20 * 0.125 * Pa_20_count) + (50 * 0.125 * Pa_50_count) + (100 * 0.125 * Pa_100_count)}
                                                        </h3>
                                                    )}
                                                </React.Fragment>
                                            ): null}
                                            {parseInt(id) === 3 ? (
                                                <React.Fragment>
                                                    {parseInt(authUser.package) === 20 ? (
                                                        <h3 className="tb-iconbox-heading">
                                                            {(20 * 0.05 * Pa_20_count) + (50 * 0.05 * Pa_50_count) + (100 * 0.05 * Pa_100_count)}
                                                        </h3>
                                                    ) : (
                                                        <h3 className="tb-iconbox-heading">
                                                            {(20 * 0.1 * Pa_20_count) + (50 * 0.1 * Pa_50_count) + (100 * 0.1 * Pa_100_count)}
                                                        </h3>
                                                    )}
                                                </React.Fragment>
                                            ): null}
                                            {parseInt(id) === 4 ? (
                                                <React.Fragment>
                                                    {parseInt(authUser.package) === 20 ? (
                                                        <h3 className="tb-iconbox-heading">
                                                            {(20 * 0.03 * Pa_20_count) + (50 * 0.03 * Pa_50_count) + (100 * 0.03 * Pa_100_count)}
                                                        </h3>
                                                    ) : (
                                                        <h3 className="tb-iconbox-heading">
                                                            {(20 * 0.05 * Pa_20_count) + (50 * 0.05 * Pa_50_count) + (100 * 0.05 * Pa_100_count)}
                                                        </h3>
                                                    )}
                                                </React.Fragment>
                                            ): null}
                                            {parseInt(id) === 5 ? (
                                                <h3 className="tb-iconbox-heading">
                                                    {(20 * 0.02 * Pa_20_count) + (50 * 0.02 * Pa_50_count) + (100 * 0.02 * Pa_100_count)}
                                                </h3>
                                            ): null}
                                            {parseInt(id) === 6 || parseInt(id) === 7 || parseInt(id) === 8 ? (
                                                <h3 className="tb-iconbox-heading">
                                                    {(20 * 0.01 * Pa_20_count) + (50 * 0.01 * Pa_50_count) + (100 * 0.01 * Pa_100_count)}
                                                </h3>
                                            ): null}
                                            <div className="tb-iconbox-sub-heading">Earn Amount</div>
                                        </div>
                                        <div className="tb-progressbar-wrap tb-style1 tb-color2">
                                            <div className="tb-single-progress">
                                                <div className="tb-progressbar" data-progress-percentage="60">
                                                <div className="tb-progressbar-in"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tb-card tb-style1">
                                <div className="tb-card-body">
                                    <div className="tb-iconbox tb-style2">
                                        <div className="tb-icon tb-icon-color3 tb-radious50 tb-flex">
                                            <i className="material-icons">person</i>
                                        </div>
                                        <div className="tb-iconbox-text">
                                            <h3 className="tb-iconbox-heading">0</h3>
                                            <div className="tb-iconbox-sub-heading">Downline Member this Week</div>
                                        </div>
                                        <div className="tb-progressbar-wrap tb-style1 tb-color3">
                                            <div className="tb-single-progress">
                                                <div className="tb-progressbar" data-progress-percentage="60">
                                                <div className="tb-progressbar-in"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tb-card tb-style1">
                                <div className="tb-card-body">
                                    <div className="tb-iconbox tb-style2">
                                        <div className="tb-icon tb-icon-color4 tb-radious50 tb-flex">
                                            <i className="material-icons">attach_money</i>
                                        </div>
                                        <div className="tb-iconbox-text">
                                            <h3 className="tb-iconbox-heading">0</h3>
                                            <div className="tb-iconbox-sub-heading">Earn Amount this Week</div>
                                        </div>
                                        <div className="tb-progressbar-wrap tb-style1 tb-color4">
                                            <div className="tb-single-progress">
                                                <div className="tb-progressbar" data-progress-percentage="60">
                                                <div className="tb-progressbar-in"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tb-height-b30 tb-height-lg-b30"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tb-card tb-style1">
                                <div className="tb-card-heading">
                                    <div className="tb-card-heading-left">
                                        {parseInt(id) === 1 ? (
                                            <h2 className="tb-card-title">{id}st Generation Downlines</h2>
                                        ): null}
                                        {parseInt(id) === 2 ? (
                                            <h2 className="tb-card-title">{id}nd Generation Downlines</h2>
                                        ): null}
                                        {parseInt(id) === 3 ? (
                                            <h2 className="tb-card-title">{id}rd Generation Downlines</h2>
                                        ) : null}
                                        {parseInt(id) === 4 ? (
                                            <h2 className="tb-card-title">{id}th Generation Downlines</h2>
                                        ): null}
                                        {parseInt(id) === 5 ? (
                                            <h2 className="tb-card-title">{id}th Generation Downlines</h2>
                                        ): null}
                                        {parseInt(id) === 6 ? (
                                            <h2 className="tb-card-title">{id}th Generation Downlines</h2>
                                        ) : null}
                                        {parseInt(id) === 7 ? (
                                            <h2 className="tb-card-title">{id}th Generation Downlines</h2>
                                        ): null}
                                        {parseInt(id) === 8 ? (
                                            <h2 className="tb-card-title">{id}th Generation Downlines</h2>
                                        ) : null}

                                    </div>
                                    {/* <div className="tb-card-heading-right">
                                        <form action="#" className="tb-search tb-style2">
                                            <input type="text" placeholder="Search..." className="tb-search-input"/>
                                            <button type="submit"><i className="material-icons">search</i></button>
                                        </form>
                                        <Link to="#" className="tb-btn tb-style1 tb-small">View All</Link>
                                    </div> */}
                                </div>
                                <PaginationActionsTable
                                    tableHead={["S/N", "Downline Names", "Referral Id", "Date Activated"]}
                                    tableData={Ref}
                                    paginateColSpan={4}
                                    isReferral={isReferral}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            <Settings/>
        </React.Fragment>
    );
}

export default ReferralView

// if(parseInt(authUser.package) === 20){
//     const first_percentage = 0.2    //20%
//     const second_percentage = 0.1   //10%
//     const third_percentage = 0.05   //5%
//     const fourth_percentage = 0.03  //3%
//     const fifth_percentage = 0.02   //2%
//     const sixth_percentage = 0.01   //1%
//     const seventh_percentage = 0.01 //1%
//     const eigth_percentage = 0.01   //1%
// } else {
//     const first_percentage = 0.2    //20%
//     const second_percentage = 0.1   //10%
//     const third_percentage = 0.05   //5%
//     const fourth_percentage = 0.03  //3%
//     const fifth_percentage = 0.02   //2%
//     const sixth_percentage = 0.01   //1%
//     const seventh_percentage = 0.01 //1%
//     const eigth_percentage = 0.01   //1%
// }

// if(parseInt(authUser.package) === 20){
//     const first_percentage = 0.2    //20%

//     const first_gen_20_total_earn = 20 * first_percentage * Package_20_count
//     const first_gen_50_total_earn = 50 * first_percentage * Package_50_count
//     const first_gen_100_total_earn = 100 * first_percentage * Package_100_count

//     const first_total_earn = first_gen_20_total_earn + first_gen_50_total_earn + first_gen_100_total_earn
//     console.log(first_total_earn)
// } else {
//     const first_percentage = 0.25    //20%

//     const first_gen_20_total_earn = 20 * first_percentage * Package_20_count
//     const first_gen_50_total_earn = 50 * first_percentage * Package_50_count
//     const first_gen_100_total_earn = 100 * first_percentage * Package_100_count

//     const first_total_earn = first_gen_20_total_earn + first_gen_50_total_earn + first_gen_100_total_earn
//     console.log(first_total_earn)
// }