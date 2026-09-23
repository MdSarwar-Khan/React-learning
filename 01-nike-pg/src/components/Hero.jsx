const Hero = () => {
    return (
        <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE YOU WITH OUR SHOES.
            </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">category</button>
            </div>
            <div className="web-available">
                <p>Also Available On</p>

                <div className="brand-icons">
                    <img src="src/assets/amazon.png" alt="amazon" />
                    <img src="src/assets/flipkart.png" alt="flipkart" />
                </div>
            </div>
        </div>
        <div className="hero-img">
            <img src="src/assets/shoe_image.png" alt="shoe-img" />
        </div>
        </main>
    );
};

export default Hero;