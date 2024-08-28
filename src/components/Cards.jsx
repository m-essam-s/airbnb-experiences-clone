import Card from "./Card";
import data from "./data";

const Cards = () => {
    const cards = data.map((card) => {
        return (
            <Card
                key={card.id}
                {...card}
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