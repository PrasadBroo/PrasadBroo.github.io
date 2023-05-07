import Navbar from "./components/Navbar";
import manOTableImg from "./assets/images/manOnTable.52be3144.svg";
import handImg from "./assets/images/hand.png";
import codingImg from "./assets/images/coding-gif.gif";
import teamCodingImg from "./assets/images/developer-team.svg";

function App() {
  return (
    <div className="App font-mono">
      <Navbar />
      <main className="  w-11/12 mx-auto md:mt-16 mt-8">
        <div className="landing flex items-center justify-between p-3 flex-col md:flex-row">
          <div className=" flex-1">
            <h1 className=" md:text-6xl font-extrabold text-3xl text-center md:text-left">
              Hi all, i'm Prasad{" "}
              <img
                className=" h-12 w-12 lg:h-16 lg:w-16 inline-block"
                src={handImg}
                alt="hand"
              />
            </h1>
            <p className=" text-gray-500 md:text-2xl text-xl text-center md:text-left mt-8">
              <i className="fas fa-laptop-code mr-3  text-purple-primary"></i>
              I'm Prasad, a MERN full-stack developer with experience building
              visually appealing and functional web applications. When I'm not
              coding, I enjoy playing games <i className="fas fa-gamepad"></i>{" "}
              and staying up-to-date with the latest web development trends.
              <i className="fas fa-lightbulb text-yellow-500"></i>
            </p>
            <div className="social-links flex items-center justify-between lg:w-2/5 mt-6">
              <div className=" h-10 w-10 rounded-full bg-[#333] text-white text-2xl flex items-center justify-center">
                <i className="fa-brands fa-github"></i>
              </div>
              <div className=" h-10 w-10 rounded-full bg-[#333] text-white text-2xl flex items-center justify-center">
                <i className="fa-brands fa-github"></i>
              </div>
              <div className=" h-10 w-10 rounded-full bg-[#333] text-white text-2xl flex items-center justify-center">
                <i className="fa-brands fa-github"></i>
              </div>
              <div className=" h-10 w-10 rounded-full bg-[#333] text-white text-2xl flex items-center justify-center">
                <i className="fa-brands fa-github"></i>
              </div>
            </div>
            <div className="btns mt-8 lg:w-2/5 flex items-center justify-between">
              <button className=" bg-purple-primary border-purple-primary border transition hover:bg-white hover:text-black  py-2 px-3 rounded-md uppercase text-white text-xl">
                Contact Me
              </button>
              <button className=" bg-purple-primary border-purple-primary border transition hover:bg-white  hover:text-black   py-2 px-3 rounded-md uppercase text-white text-xl">
                My Resume
              </button>
            </div>
          </div>
          <div className=" flex-1 mt-16 md:mt-0">
            <img src={manOTableImg} alt="man-on-table" />
          </div>
        </div>
        <div className="what-i-do mt-8 flex flex-col md:flex-row items-center justify-between  p-3">
          <div className="flex-1 order-2 md:order-none">
            <img src={codingImg} alt="coding" />
          </div>
          <div className="flex-1 self-start order-1 md:order-none">
            <h2 className=" text-5xl text-center md:text-left">What i do</h2>
            <p className="text-gray-500 md:text-2xl text-xl text-center md:text-left mt-8">
              Im Full Stack Developer,Focusing On Web Applications
            </p>
            <div className="skills-icons mt-6 flex items-center  flex-wrap justify-center">
              <div className=" text-6xl text-gray-500 mr-4">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className=" text-6xl text-gray-500 mr-4">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className=" text-6xl text-gray-500 mr-4">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className=" text-6xl text-gray-500 mr-4">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className=" text-6xl text-gray-500 mr-4">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className=" text-6xl text-gray-500 mr-4">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className=" text-6xl text-gray-500 mr-4">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className=" text-6xl text-gray-500 mr-4">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className=" text-6xl text-gray-500 mr-4">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className=" text-6xl text-gray-500 mr-4">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className=" text-6xl text-gray-500 mr-4">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className=" text-6xl text-gray-500 mr-4">
                <i className="fa-brands fa-html5"></i>
              </div>
            </div>
            <div className="points text-gray-500 text-xl">
              <p>
                <i className="fa-solid fa-bolt  mr-4 text-yellow-400"></i>
                Develope good looking User Interfaces For Wesites,Web
                Applications
              </p>
              <p>
                <i className="fa-solid fa-bolt mr-4 text-yellow-400"></i>Makes
                Web Applications Interactive,With Responsiveness
              </p>
              <p>
                <i className="fa-solid fa-bolt mr-4 text-yellow-400"></i>
                Integrates Third Party Api's In Websites, Web Application
              </p>
            </div>
          </div>
        </div>
        <div
          className="proficiency mt-8 flex flex-col md:flex-row items-center justify-between  p-3"
          id="skills"
        >
          <div className="flex-1 self-start">
            <div className="">
              <h2 className="text-5xl text-center md:text-left">Proficiency</h2>
              <div className="skill mt-6">
                <div className=" mb-4 text-2xl">Frontend/Design</div>
                <div className="w-full h-4 rounded-lg bg-gray-300">
                  <div className=" w-11/12 h-full rounded-lg bg-purple-light"></div>
                </div>
              </div>
              <div className="skill mt-6">
                <div className=" mb-4 text-2xl">Backend</div>
                <div className="w-full h-4 rounded-lg bg-gray-300">
                  <div className=" w-3/5 h-full rounded-lg bg-purple-light"></div>
                </div>
              </div>
              <div className="skill mt-6">
                <div className=" mb-4 text-2xl">Programming</div>
                <div className="w-full h-4 rounded-lg bg-gray-300">
                  <div className=" w-4/5 h-full rounded-lg bg-purple-light"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src={teamCodingImg} alt="coding" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
