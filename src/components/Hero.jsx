export default function Hero() {
  return (
    <main className="hero container">
      <div className="hero_content">
        <h1>YOUR FEET DESERVE</h1>
        <p>
          YOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BEST AND WE’RE HERE
          TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="hero_btn">
          <button> Shop Now</button>
          <button className="secondary_btn"> Category</button>
        </div>

        <div className="shopping">
          <p>Also Available on</p>
        </div>

        <div className="brand_icon">
          <img src="/Images/amazon.png" alt="amozon-logo" />
          <img src="/Images/flipkart.png" alt="flipkart-logo" />
        </div>
      </div>

      <div className="hero-image">
        <img src="/Images/shoe_image.png" alt="hero-image" />
      </div>
    </main>
  );
}
