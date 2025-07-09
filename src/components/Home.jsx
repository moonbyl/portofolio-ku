import React from "react";
import Particles from "react-tsparticles";
import { loadBasic } from "tsparticles-basic";
import { FaLinkedin, FaGithub } from "react-icons/fa"; 

function Home() {
  const particlesInit = async (engine) => {
    await loadBasic(engine);
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#111827",
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#111827" } },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#00ffff" },
            links: {
              enable: true,
              color: "#00ffff",
              distance: 150,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              outModes: { default: "bounce" },
            },
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: { value: 4, random: true },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1
          data-aos="fade-up"
          style={{ fontSize: "3rem", marginBottom: "10px" }}
        >
          Syarifa Hadiatussobrina
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ fontSize: "1.2rem", marginBottom: "20px" }}
        >
          Mahasiswa Teknik Elektro yang tertarik pada web development dan teknologi masa depan 💡
        </p>

        <div data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://www.linkedin.com/in/syarifahadiatussobrina/"
            target="_blank"
            rel="noreferrer"
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#2563eb",
              color: "white",
              borderRadius: "5px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "bold",
            }}
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/moonbyl"
            target="_blank"
            rel="noreferrer"
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#10b981",
              color: "white",
              borderRadius: "5px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "bold",
            }}
          >
            <FaGithub size={20} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
