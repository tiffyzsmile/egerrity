import AccentBar from "../../Components/AccentBar";
import Button from "../../Components/Button";
import "./Home.scss";
import Flower from "../../Components/Icons/Flower";

const Home = () => {
  return (
    <>
      <div className="home ">
        <div className="content-max">
          <div className="content">
            <h1>👋 Hi! I'm Emily.</h1>
            <p>
              I'm a <strong>Design Systems Designer</strong> with 9 years of
              experience in the design field. I am...
            </p>
            <ul>
              <li>
                💕 Passionate about empowering designers and engineers to build
                experiences without friction
              </li>
              <li>👨‍💻 Experienced in end-to-end product design</li>
              <li>
                🔨 The person you want helping you building your Figma libraries
              </li>
              <li>
                🧑‍🤝‍🧑 A proponent of nurturing better relationships between
                engineering and design
              </li>
              <li>📈 Empathetic, analytical, and forward thinking</li>
            </ul>
            <Button href="/portfolio">
              <Flower color="white" className="start" />
              Portfolio
            </Button>
            <Button
              type="secondary"
              target="_blank"
              href="/emily-gerrity-resume-0322.pdf"
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
      <AccentBar />
    </>
  );
};

export default Home;
