export default function AboutPage({ detail }) {
  const { welcome, whoWeAre, whatWeOffer, ourMission, slug} = detail.fields;

  return (
    <>
    <h1 className="about-title">About Us</h1>
    <div className="about-main">
      
      <div className="about-outer">
        <h2 className="about-subhead">Welcome</h2>
        <div className="about-content">
          <p className="about-p">{welcome}</p>
        </div>
        <h2 className="about-subhead">Who We Are</h2>
        <div className="about-content">
          <p className="about-p">{whoWeAre}</p>
        </div>
        <h2 className="about-subhead">What We Offer</h2>
        <div className="about-content">
            <p className="about-p">{whatWeOffer}</p>
        </div>
        <h2 className="about-subhead">Our Mission</h2>
        <div className="about-content">
            <p className="about-p">{ourMission}</p>
            </div>
      </div>
      </div>
    </>
  );
}
