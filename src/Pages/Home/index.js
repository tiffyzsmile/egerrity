import AccentBar from "../../Components/AccentBar";
import Button from "../../Components/Button";
import "./Home.scss";

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
              <li> 👨‍💻 Experienced in end-to-end product design</li>
              <li>
                🔨 The person you want helping you building your Figma libraries
              </li>
              <li>
                🧑‍🤝‍🧑 A proponent of nurturing better relationships between
                engineering and design
              </li>
              <li> 📈 Empathetic, analytical, and forward thinking</li>
            </ul>
            <Button href="/portfolio">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.87002 4.38748C5.38187 3.89932 5.38187 3.10787 5.87002 2.61971L8.11288 0.376859C8.60103 -0.111297 9.39249 -0.111297 9.88064 0.376859L12.1218 2.61806C12.61 3.10621 12.61 3.89767 12.1218 4.38582L9.87899 6.62868C9.39083 7.11683 8.59937 7.11683 8.11122 6.62868L5.87002 4.38748ZM8.99676 1.26074L6.75391 3.5036L8.9951 5.74479L11.238 3.50194L8.99676 1.26074Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8708 9.38748C10.3826 8.89932 10.3826 8.10787 10.8708 7.61971L13.1136 5.37686C13.6018 4.8887 14.3933 4.8887 14.8814 5.37686L17.1226 7.61806C17.6108 8.10621 17.6108 8.89767 17.1226 9.38582L14.8797 11.6287C14.3916 12.1168 13.6001 12.1168 13.112 11.6287L10.8708 9.38748ZM13.9975 6.26074L11.7547 8.5036L13.9959 10.7448L16.2387 8.50194L13.9975 6.26074Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.870023 9.38041C0.381867 8.89225 0.381867 8.1008 0.870023 7.61264L3.11288 5.36979C3.60103 4.88163 4.39249 4.88163 4.88064 5.36979L7.12184 7.61099C7.61 8.09914 7.61 8.8906 7.12184 9.37875L4.87899 11.6216C4.39083 12.1098 3.59938 12.1098 3.11122 11.6216L0.870023 9.38041ZM3.99676 6.25367L1.75391 8.49653L3.9951 10.7377L6.23796 8.49487L3.99676 6.25367Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.87079 14.3804C5.38263 13.8923 5.38263 13.1008 5.87079 12.6126L8.11364 10.3698C8.6018 9.88163 9.39325 9.88163 9.88141 10.3698L12.1226 12.611C12.6108 13.0991 12.6108 13.8906 12.1226 14.3788L9.87975 16.6216C9.39159 17.1098 8.60014 17.1098 8.11198 16.6216L5.87079 14.3804ZM8.99752 11.2537L6.75467 13.4965L8.99587 15.7377L11.2387 13.4949L8.99752 11.2537Z"
                  fill="white"
                />
              </svg>
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
