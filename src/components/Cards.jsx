import Card from "./Card";
import data from "./data";

const Cards = () => {
    const cards = data.map((card)=>{
        return (
            <Card
                key={card.id}
                card={card}
                img={card.coverImg}
                title={card.title}
                rating={card.stats.rating}
                reviewCount={card.stats.reviewCount}
                country={card.location}
                price={card.price}
                openSpots={card.openSpots}
            />
        )
    })
    return (
        <section className="cards-list">
            {cards}
        </section>
    )
}

export default Cards;