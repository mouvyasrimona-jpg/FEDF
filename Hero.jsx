import airplane from "../assets/airplane.jpg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>Your Feedback Helps Us Fly Better</h1>

        <p>
          Share your travel experience and help us
          improve airline services for every passenger.
        </p>

        <div className="hero-buttons">
          <button>Give Feedback</button>
          <button>View Analytics</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={airplane}
          alt="Airplane"
          className="hero-plane"
        />
      </div>

    </section>
  );
}

export default Hero;