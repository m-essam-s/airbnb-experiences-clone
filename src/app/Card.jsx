import PropTypes from 'prop-types';
const Card = (props) => {
    console.log(props);
    return (
        <div className="card">
            <img
                src={`/assets/images/${props.img}`}
                className="card--image"
                alt="Main card image."
            />
            <div className="card--stats">
                <img
                    src="/assets/icons/star.png"
                    className="card--star"
                    alt="Star icon."
                />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default Card;