import Navbar from "./components/Navbar";
import manOTableImg from "./assets/images/manOnTable.52be3144.svg";
import handImg from "./assets/images/hand.png";
import codingImg from "./assets/images/coding.png";
import buildingCodeImg from "./assets/images/building-code.png";
import Project from "./components/Project";
import prasadbroImg from "./assets/images/prasadbro.jpg";
import Footer from "./components/Footer";
import SocialLink from "./components/SocialLink";
import IconSkill from "./components/IconSkill";
import typescriptImg from "./assets/icons/icons8-typescript-48.png";

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
            <div className="social-links flex items-center justify-between lg:w-1/2 mt-6">
              <SocialLink href="https://github.com/PrasadBroo">
                <i className="fa-brands fa-github"></i>
              </SocialLink>

              <SocialLink
                className=" bg-pink-600 "
                href="https://www.instagram.com/prasad__bro/"
              >
                <i className="fa-brands fa-instagram"></i>
              </SocialLink>
              <SocialLink
                className=" bg-blue-700 "
                href="https://www.facebook.com/prasadshindebro"
              >
                <i className="fa-brands fa-facebook"></i>
              </SocialLink>

              <SocialLink
                className=" bg-orange-400"
                href="https://stackoverflow.com/users/12332711/prasadbro"
              >
                <i className="fa-brands fa-stack-overflow"></i>
              </SocialLink>
              <SocialLink
                className=" bg-blue-700 "
                href="https://www.linkedin.com/in/prasadbro/"
              >
                <i className="fa-brands fa-linkedin"></i>
              </SocialLink>
              <SocialLink
                className=" bg-red-500"
                href="mailto:https://sketchware7@gmail.com"
              >
                <i className="fa-solid fa-envelope"></i>
              </SocialLink>
            </div>
            <div className="btns mt-8 lg:w-1/2 flex items-center justify-between">
              <button className=" bg-purple-primary border-purple-primary border transition hover:bg-white hover:text-purple-primary  py-2 px-3 rounded-md uppercase text-white text-xl">
                Contact Me
              </button>
              <button className=" bg-purple-primary border-purple-primary border transition hover:bg-white  hover:text-purple-primary   py-2 px-3 rounded-md uppercase text-white text-xl">
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
            <img src={codingImg} alt="coding" className=" max-h-[500px]" />
          </div>
          <div className="flex-1 self-start order-1 md:order-none">
            <h2 className=" text-5xl text-center md:text-left">What i do</h2>
            <p className="text-gray-500 md:text-2xl text-xl text-center md:text-left mt-8">
              Im Full Stack Developer,Focusing On Web Applications
            </p>
            <div className="skills-icons mt-6 flex items-center  flex-wrap  justify-center">
              <IconSkill skillName="html-5">
                <i className="fa-brands fa-html5"></i>
              </IconSkill>
              <IconSkill skillName="css3">
                <i className="fa-brands fa-css3-alt"></i>
              </IconSkill>
              <IconSkill skillName="sass">
                <i className="fa-brands fa-sass"></i>
              </IconSkill>
              <IconSkill skillName="javascript">
                <i className="fa-brands fa-js"></i>
              </IconSkill>
              <IconSkill skillName="reactjs">
                <i className="fa-brands fa-react"></i>
              </IconSkill>
              <IconSkill skillName="nodejs">
                <i className="fa-brands fa-node-js"></i>
              </IconSkill>
              <IconSkill skillName="mongodb">
                <i className="fa-solid fa-database"></i>
              </IconSkill>
              <IconSkill skillName="firebase">
                <i className="fa-solid fa-fire"></i>
              </IconSkill>
              <IconSkill skillName="typescript">
                <img
                  src={typescriptImg}
                  alt="typescript"
                  className=" mx-auto my-0"
                />
              </IconSkill>
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
            <img
              src={buildingCodeImg}
              alt="coding"
              className=" max-h-[500px]"
            />
          </div>
        </div>
        <div className="open-source-projects mt-6">
          <h2 className=" capitalize text-5xl text-center md:text-left">
            Open source projects
          </h2>
          <div className="projects  mt-6 ">
            <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4">
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
            </div>

            <div className="mt-4 text-center">
              <button className=" bg-purple-primary border-purple-primary border transition hover:bg-white hover:text-purple-primary  py-2 px-3 rounded-md uppercase text-white text-xl">
                More Projects
              </button>
            </div>
          </div>
        </div>
        <div className="contact mt-12 md:flex md:items-center md:justify-between">
          <div className="flex-1  self-start">
            <h2 className="text-5xl text-center md:text-left">
              Reach Out to me!
            </h2>
            <div className=" uppercase mt-4 text-gray-600">
              DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
              ALL.
            </div>
            <address className=" text-gray-600 text-xl mt-2">
              <span className=" mr-2">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              Maharashtra , India
            </address>
            <span className=" text-2xl mt-2 block">
              Open for opportunities: Yes
            </span>
            <div className=" social md:w-1/2 my-4  md:flex-row flex items-center justify-between">
              <SocialLink href="https://github.com/PrasadBroo">
                <i className="fa-brands fa-github"></i>
              </SocialLink>

              <SocialLink
                className=" bg-pink-600 "
                href="https://www.instagram.com/prasad__bro/"
              >
                <i className="fa-brands fa-instagram"></i>
              </SocialLink>
              <SocialLink
                className=" bg-blue-700 "
                href="https://www.facebook.com/prasadshindebro"
              >
                <i className="fa-brands fa-facebook"></i>
              </SocialLink>

              <SocialLink
                className=" bg-orange-400"
                href="https://stackoverflow.com/users/12332711/prasadbro"
              >
                <i className="fa-brands fa-stack-overflow"></i>
              </SocialLink>
              <SocialLink
                className=" bg-blue-700 "
                href="https://www.linkedin.com/in/prasadbro/"
              >
                <i className="fa-brands fa-linkedin"></i>
              </SocialLink>
              <SocialLink
                className=" bg-red-500"
                href="mailto:https://sketchware7@gmail.com"
              >
                <i className="fa-solid fa-envelope"></i>
              </SocialLink>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={prasadbroImg}
              alt="prasad"
              className=" max-w-[350px] border-purple-primary  rounded-full border-4"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
