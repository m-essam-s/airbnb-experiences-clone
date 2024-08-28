import Photo from '/images/photo-grid.png';

const PhotoGrid = () => <img src={Photo} alt="Photo Grid" className="hero--photo" />

const Heading = () => <h1 className="hero--header">Online Experiences</h1>

const Text = () => {
    return <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>;
}

const Hero = () => {
    return (
        <section className="hero">
            <PhotoGrid />
            <Heading />
            <Text />
        </section>
    );
};

export default Hero;