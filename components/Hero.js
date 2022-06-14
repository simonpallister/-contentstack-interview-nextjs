function Hero({hero}) {

  return (
    <div className="container">
      <div className="hero">
        <div className="hero-copy">
          <h1>{hero.hero_header_one}</h1>
          <h1 className="purple">{hero.hero_header_two}</h1>
          <p>
            {hero.hero_copy}
          </p>
          <div className="nav-buttons">
            <button className="button-dark margin-0">Sign Up</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={hero.hero_image.url}></img>
        </div>
      </div>
    </div>
  );
}
export default Hero;
