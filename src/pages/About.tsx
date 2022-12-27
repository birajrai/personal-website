let dateFns = require("date-fns");

// let d = "31/10/2006"; // 10 Mar 1998
// let date = dateFns.parse(d, "dd/MM/yyyy", new Date());
// let age = dateFns.differenceInYears(new Date(), date);
let p = "21/04/2018"; // 10 Mar 1998
let pdate = dateFns.parse(p, "dd/MM/yyyy", new Date());
let ptime = dateFns.differenceInYears(new Date(), pdate);

// let thatime = "31/10/2006"; // 2022 Aug 1st
// let thatdate = dateFns.parse(d, "dd/MM/yyyy", new Date());
// let lost = dateFns.differenceInYears(new Date(), thatdate);
const About = () => {
  return (
    <div className="about">
      {/* About Me Start */}
      <div>
        <div>
          <span className="subtitle">WELCOME TO MY WORLD</span>
        </div>
        <div className="about-section">
          <h1>
            Hi, I'm <span className="name">Biraj Rai</span>
            <br></br>
          </h1>
          <h1>
            <span>a</span> <span>Developer</span>
            <br></br>
          </h1>
          <p className="description">
            Usually called Neppixel (at the internet). Born and live in Nepal.
          </p>
          {/* <br></br> */}
          <p className="description">
            I am currently studying ARSS (Adhunik Secondary School).
          </p>
          <br></br>
          <p className="description">
            I started learning stuffs {ptime}yrs ago. And now i spend more time
            to explore Web development using React & Typescript.
          </p>
          <br></br>
        </div>
        
      </div>
      {/* About Me End */}
    </div>
  );
};

export default About;
