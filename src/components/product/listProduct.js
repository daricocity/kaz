import { Link } from 'react-router-dom';
import { baseUrl } from '../../utils/setupUtils';

const ListProduct = (props) => {
    const { title, regular_price, description, images, id } = props
    return(
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6  col-lg-5 col-xl-4">
                <div className="grid-product-image">
                    <span className="sale">-35%</span>
                    <Link to="product-details.html"><img src={`${baseUrl}${images[0]}`} alt="product grid"/></Link>
                    <div className="product-action">
                        <Link to="#"><i className="material-icons">favorite_border</i></Link>
                        <Link to="#"><i className="material-icons">autorenew</i></Link>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6  col-lg-7 col-xl-8">
                <div className="list-product-info">
                    <Link to={`/shop/product/${id}`}>{title}</Link>
                    <div className="price-box">
                        <span className="regular-price">&#8358;{regular_price}</span>
                    </div>
                    <div className="product-review">
                        <i className="material-icons">grade</i>
                        <i className="material-icons">grade</i>
                        <i className="material-icons">grade</i>
                        <i className="material-icons">grade</i>
                        <i className="material-icons">grade</i>
                    </div>		
                    <p>{description}</p>
                    <Link className="learn-more-btn" to="#">Learn More</Link>	 
                    <div className="default-button">
                        <Link to="#">ADD TO CART</Link>
                    </div>
                </div>	
            </div>
        </div>
    )
}

export default ListProduct