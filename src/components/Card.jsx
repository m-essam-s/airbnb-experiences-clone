import PropTypes from 'prop-types';
const Card = (props) => {
    let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img
                src={`/images/${props.card.coverImg}`}
                className="card--image"
                alt={props.card.title}
            />
            <div className="card--stats">
                <img
                    src="/icons/star.png"
                    className="card--star"
                    alt="Star icon."
                />
                <span>{props.card.stats.rating}</span>
                <span className="gray">({props.card.stats.reviewCount}) • </span>
                <span className="gray">{props.card.location}</span>
            </div>
            <p className="card--title">{props.card.title}</p>
            <p className="card--price"><span className="bold">From ${props.card.price}</span> / person</p>
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.shape({
        openSpots: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired,
        coverImg: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            rating: PropTypes.number.isRequired,
            reviewCount: PropTypes.number.isRequired,
        }).isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default Card;