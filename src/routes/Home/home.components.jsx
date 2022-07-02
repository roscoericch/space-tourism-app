import "./home.style.scss";
const HOME = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h3 className="home-content-h3">So, you want to travel to</h3>
        <h1 className="home-content-h1">Space</h1>
        <p className="home-content-p">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="home-cta">
        <div className="home-cta-content">Explore</div>
      </div>
    </div>
  );
};
export default HOME;
