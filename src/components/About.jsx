import React from 'react';

function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: '#1f2937',
        color: 'white',
        padding: '100px 20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '40px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {/* Foto kiri */}
        <img
          src="/rin.jpeg" 
          alt="Foto Rin"
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #00ffff',
          }}
          data-aos="zoom-in"
        />

        {/* Teks kanan */}
        <div style={{ maxWidth: '600px', textAlign: 'left' }}>
          <h2
            data-aos="fade-right"
            style={{ fontSize: '2.5rem', marginBottom: '20px' }}
          >
            About Me
          </h2>
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
            }}
          >
            Hai! Aku Syarifa Hadiatussobrina, seorang mahasiswa Teknik Elektro yang punya semangat besar di bidang IT. Aku senang belajar hal-hal baru, suka ngulik-ngulik proyek kreatif, dan ingin terus berkembang jadi developer yang bisa membawa dampak positif buat banyak orang.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
