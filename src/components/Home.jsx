import React, { useEffect, useRef } from "react";
import pdf from "../pdf/RESUMEIT.pdf";
import hero from "./NEWDATA/hero.json";
import about from "./NEWDATA/about.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my Profile",
        "My Name is Narendra Shakya",
        " MANIT Bhopal",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="containerfind">
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/IMAGES/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
      {/* About Us Section */}
      <h2>About Me</h2>
      <div className="about-content"  data-aos="fade-up-right" data-aos-duration="1000">
        <div className="about left">
          <img
            src={`/IMAGES/${about.imgSrc}`}
            alt="About Us"
            className="about-home-image"
          />
        </div>
        <div className="about-right about-home-text">
          <p>
            Hello! I’m Narendra Shakya, an electrical engineering student
            passionate about integrating hardware and software. With a strong
            background in circuit design and power systems, I have honed my
            skills in understanding and creating complex electrical systems.
          </p>
          <p>
            In addition to my hardware knowledge, I am skilled in programming
            with C and C++. I find great satisfaction in coding, where I tackle
            intricate problems and develop innovative solutions, combining my
            software skills with my hardware expertise.
          </p>
          <p>
            My goal is to merge these disciplines to drive technological
            advancements. Whether designing circuits or developing software, I’m
            dedicated to exploring new tech solutions and making meaningful
            contributions to the field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
