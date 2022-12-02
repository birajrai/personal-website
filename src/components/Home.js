let dateFns = require("date-fns")

let d = '31/01/2006'; // 10 Mar 1998
let date = dateFns.parse(d, 'dd/MM/yyyy', new Date());
let age = dateFns.differenceInYears(new Date(), date);

const Home = () => {
  return (
    <div className="section">
      {/* About Me Start */}
      <div>
        <div>
          <h1>About Me </h1>
        </div>
        <div>
          <p>
            Hello, my name is Biraj. Usually called Neppixel ( at the internet
            ). Born and live in Nepal.
          </p>
          <p>I am a {age} year(s) old self-taught programmer who is currently a student.</p>
          <p>
            I've worked with numberous techonlogies and projects, but I still
            think of myself as a humble beginner and I want to learn more and
            get better.
          </p>
          <p>Having weird obsession with Discord.</p>
        </div>
      </div>
      {/* About Me End */}

      {/* Skills Start */}
      <div>
        {/* Skills Languages Start */}
        <div id="languages">
          <h1>Languages</h1>
          <p>Javascript</p>
          <p>Java</p>
          <p>TypeScript</p>
          <p>YAML</p>
        </div>
        {/* Skills Languages End */}

        {/* Skills Tools Start */}
        <div id="languages">
          <h1>Tools</h1>
          <p>Visual Studio Code</p>
          <p>Intellij IDEA (aka JetBrain)</p>
          <p>Git</p>
          <p>Vim & Neovim</p>
          <p>Figma ( no-idea )</p>
        </div>
        {/* Skills Tools End */}
      </div>
      {/* Skills End */}
    </div>
  );
};

export default Home;
