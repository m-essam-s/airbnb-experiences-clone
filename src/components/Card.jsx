import PropTypes from 'prop-types';
const Card = (props) => {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img
                src={`/images/${props.coverImg}`}
                className="card--image"
                alt={props.title}
            />
            <div className="card--stats">
                <img
                    src="/icons/star.png"
                    className="card--star"
                    alt="Star icon."
                />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

Card.propTypes = {
    openSpots: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        rating: PropTypes.number.isRequired,
        reviewCount: PropTypes.number.isRequired,
    }).isRequired,
    price: PropTypes.number.isRequired,
};

export default Card;