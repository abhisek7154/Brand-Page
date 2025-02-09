const HeroSection = () =>{
    return(
        <main className = "hero container">
            <div className = "Hero-content">
                <h1>
                   YOUR FEET<br/> 
                   DESERVE<br/>
                   THE BEST
                </h1>


                <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>


                <div className = "hero-btn">
                    <button>Shop Now</button>
                    <button className = "secondary-btn">Category</button>
                </div>

                <div className = "shopping">
                    <img src="/public/images/shop.png" alt="shop-image" />                    
                </div>


            </div>
            <div className = "heo-image">
                <img src = "/public/images/shoe_image.png" alt="shoe-image" />
            </div>
        </main>
    );
};
export default HeroSection;