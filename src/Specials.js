import food2 from './greeksalad.jpg'
import food3 from './bruchetta.png'
import food4 from './lemon-dessert.jpg'
function Specials() {
    return (
<section className="specials">
            <h2>This weeks specials!</h2>
            <button>Online Menu</button>
            <div className="cards">
            <article>
                <img src={food2} alt ="salad"/>
                <h3>Greek salad</h3>
                <span>$12.99</span>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <p>Order a delivery</p>
            </article>
            <article>
                <img src={food3} alt ="bruchetta"/>
                <h3>Bruchetta</h3>
                <span>$5.99</span>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                <p>Order a delivery</p>
            </article>
            <article>
                <img src={food4} alt ="dessert"/>
                <h3>Lemon Dessert</h3>
                <span>$5.00</span>
                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
                <p>Order a delivery</p>
            </article>
            </div>
        </section>
    )
}
export default Specials;