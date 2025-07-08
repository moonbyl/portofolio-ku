import React from 'react';

function Resume() {
  return (
    <section
      id="resume"
      style={{
        backgroundColor: '#111827',
        color: 'white',
        padding: '100px 20px',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2
          data-aos="fade-up"
          style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#00ffff',
          }}
        >
          Resume
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
          }}
        >
          {/* Education Section */}
          <div data-aos="fade-right">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>📚 Education</h3>
            <div style={{ backgroundColor: '#1f2937', padding: '20px', borderRadius: '10px' }}>
              <h4 style={{ margin: 0 }}>Universitas Mataram – Teknik Elektro</h4>
              <p style={{ margin: '5px 0', fontStyle: 'italic' }}>2022 – Sekarang</p>
              <p>
                Mengambil konsentrasi di bidang Teknik Komputer, fokus pada pemrograman dan sistem cerdas. Mempelajari sistem digital, mikrokontroler, jaringan komputer, dan AI/IoT.
              </p>
              <p>
                Menguasai bahasa tingkat rendah (C/C++) dan tinggi (Python, JavaScript, React). Fokus utama: integrasi hardware & software untuk membangun sistem efisien dan terhubung.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div data-aos="fade-left">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>💼 Experience</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div style={expBoxStyle}>
                <h4 style={{ margin: 0 }}>Asisten Dosen: Dasar Pemrograman</h4>
                <p style={{ margin: '5px 0', fontStyle: 'italic' }}>2025</p>
                <p>
                  Membimbing praktikum bahasa C/C++, menjelaskan konsep dasar seperti variabel, kontrol alur, fungsi, array, dan pointer. Memberikan feedback serta mengevaluasi tugas.
                </p>
              </div>

              <div style={expBoxStyle}>
                <h4 style={{ margin: 0 }}>Pengembangan Game Edukasi Listrik 2D (Unity)</h4>
                <p style={{ margin: '5px 0', fontStyle: 'italic' }}>2025</p>
                <p>
                  Merancang game interaktif tentang rangkaian listrik seri dan paralel dengan fitur drag & drop, timer, level, dan sistem skor.
                </p>
              </div>

              <div style={expBoxStyle}>
                <h4 style={{ margin: 0 }}>Pembuatan Aplikasi Catatan Menggunakan React</h4>
                <p style={{ margin: '5px 0', fontStyle: 'italic' }}>2025</p>
                <p>
                  Membangun aplikasi untuk mencatat dan mengarsipkan catatan dengan fitur dark mode, validasi input, dan filter pencarian berbasis React.
                </p>
              </div>

              <div style={expBoxStyle}>
                <h4 style={{ margin: 0 }}>Pengembangan Web Portofolio Pribadi</h4>
                <p style={{ margin: '5px 0', fontStyle: 'italic' }}>2025</p>
                <p>
                  Membangun website portofolio dengan React & animasi partikel. Halaman interaktif menampilkan project, skill, dan kontak dalam desain modern & responsif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const expBoxStyle = {
  backgroundColor: '#1f2937',
  padding: '20px',
  borderRadius: '10px',
  border: '1px solid #334155',
};

export default Resume;
