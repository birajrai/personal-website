let dateFns = require("date-fns");

let d = "31/10/2006"; // 10 Mar 1998
let date = dateFns.parse(d, "dd/MM/yyyy", new Date());
let age = dateFns.differenceInYears(new Date(), date);

const About = () => {
  return (
    <div className="about">
      {/* About Me Start */}
      <div>
        <div>
          <h1 className="about-title">About Me </h1>
        </div>
        <div className="about-p">
          <p>
            Hello, my name is Biraj. Usually called Neppixel ( at the internet
            ). Born and live in Nepal.
          </p>
          <p>
            I am a {age} year(s) old self-taught developer who is currently a
            student.
          </p>
          <p>
            I've worked with numberous techonlogies and projects, but I still
            think of myself as a humble beginner and I want to learn more and
            get better.
          </p>
          <p>
            Having weird obsession with{" "}
            <a className="link" href="https://www.kritika.tk/">
              felix
            </a>
            .
          </p>
        </div>
      </div>
      {/* About Me End */}
    </div>
  );
};

export default About;
