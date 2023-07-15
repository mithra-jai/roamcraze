import Image from "next/image";

export default function AboutPage({ detail }) {
  const { whoWeAre, whatWeOffer, ourMission, slug } = detail.fields;

  return (
    <>
    <div class="image-container">
      <img src="abt2.jpg" alt="Image" />
      <div class="overlay-text">
        <span className="abt-span">
          ABOUT
          <br />
          US
        </span>
      </div>
    </div>
     
      <div className="about-main-div">
        {/* div-1 */}
        <div className="about-outer">
          <div className="about-img">
           
            <img className="abt-img-r" src="/travellers2.jpg" alt="abt"/>
          </div>
          <div className="about-content">
            <h2 className="abt-h2">Who We Are</h2>
            <p className="abt-p">{whoWeAre}</p>
          </div>
        </div>
        {/* div-2 */}
        <div className="about-outer">
          <div className="about-img">
          <img className="abt-img-r" src="/travellers1.jpg" alt="abt"/>
           
          </div>
          <div className="about-content">
           
          <h2 className="abt-h2">What We Offer</h2>
            <p className="abt-p">{whatWeOffer}</p>
          </div>
        </div>
        {/* div-3 */}
        <div className="about-outer">
          <div className="about-img">
            
            <img className="abt-img-r" src="/about-grp-photo.jpg" alt="abt"/>
          </div>
          <div className="about-content">
            <h2 className="abt-h2">Our Mission</h2>
            <p className="abt-p">{ourMission}</p>
          </div>
        </div>
      </div>
    </>
  );
}