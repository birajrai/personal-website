let dateFns = require("date-fns");

let d = "31/10/2006"; // 10 Mar 1998
let date = dateFns.parse(d, "dd/MM/yyyy", new Date());
let age = dateFns.differenceInYears(new Date(), date);
let p = "21/04/2018"; // 10 Mar 1998
let pdate = dateFns.parse(p, "dd/MM/yyyy", new Date());
let ptime = dateFns.differenceInYears(new Date(), pdate);

const About = () => {
  return (
    <div className="about">
      {/* About Me Start */}
      <div>
        <div>
          <h1 className="about-title">About Me</h1>
        </div>
        <div className="about-p">
          <p>
            Hi 👋,I'm <span className="name-span">Biraj Rai</span>
          </p>
          <p>Hello I'm {age}year(s) old, full-stacked developer based in Nepal.</p>
          <p>I have been coding from past {ptime} year(s)</p>
        </div>
      </div>
      {/* About Me End */}
    </div>
  );
};

export default About;
