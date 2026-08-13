import food from './food.png';
function CallToAction() {
    return (
        <section className="hero">
            <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button aria-label="On Click">Reserve a Table</button>
            </div>
            <img src={food} alt="food"/>
        </section>
    );
}
export default CallToAction;