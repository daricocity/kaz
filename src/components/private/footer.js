import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div>
            <div className="tb-height-b60 tb-height-lg-b60"></div>
            <div className="tb-footer tb-style1">
                <div className="container-fluid">
                    <div className="tb-footer-content">
                        <div className="tb-copyride">
                            &copy; 2020 <Link to="/">OrganicWorld </Link>Inc. All Rights Reserved.
                        </div>
                        {/* <ul className="tb-footer-nav tb-mp0 tb-flex">
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Sitemap</Link></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer