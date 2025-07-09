import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  // STATE buat menyimpan isi form
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: '',
  });

  // HANDLE perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // HANDLE submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesan terkirim!\n\nNama: ${formData.nama}\nEmail: ${formData.email}\nPesan: ${formData.pesan}`);
    
    // Reset form
    setFormData({ nama: '', email: '', pesan: '' });
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#111827',
        color: 'white',
        padding: '100px 20px 40px',
        textAlign: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <h2 data-aos="fade-up" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>
        Contact Me
      </h2>

      {/* Info Kontak */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        style={{ marginBottom: '40px', lineHeight: '2' }}
      >
        <p>📍 Alamat: Mataram, NTB</p>
        <p>📧 Email: syarifasobrina04@email.com</p>
        <p>📞 No HP: 081-330-704-680</p>
      </div>

      {/* Formulir Pesan */}
      <form
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-delay="300"
        style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}
      >
        <label>Nama</label>
        <input
          name="nama"
          type="text"
          value={formData.nama}
          onChange={handleChange}
          placeholder="Masukkan namamu"
          style={inputStyle}
          required
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Masukkan email"
          style={inputStyle}
          required
        />
        <label>Pesan</label>
        <textarea
          name="pesan"
          value={formData.pesan}
          onChange={handleChange}
          placeholder="Tulis pesanmu..."
          rows="5"
          style={{ ...inputStyle, resize: 'vertical' }}
          required
        ></textarea>
        <button
          type="submit"
          style={{
            marginTop: '15px',
            padding: '10px 20px',
            backgroundColor: '#10b981',
            border: 'none',
            color: 'white',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Kirim Pesan
        </button>
      </form>

      {/* Footer Sosial Media */}
      <footer
        style={{
          marginTop: '60px',
          paddingTop: '20px',
          borderTop: '1px solid #334155',
          display: 'flex',
          justifyContent: 'center',
          gap: '25px',
        }}
      >
        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#f472b6' }}>
          <FaInstagram size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#60a5fa' }}>
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: '#a78bfa' }}>
          <FaGithub size={24} />
        </a>
      </footer>
    </section>
  );
}

// Style input
const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  backgroundColor: '#1e293b',
  border: '1px solid #334155',
  color: 'white',
  borderRadius: '5px',
  outline: 'none',
};

export default Contact;
