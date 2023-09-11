import React, { useState } from 'react';

function DataInput({ onAddData }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    gender: '', // Cinsiyet alanını ekleyin
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddData(formData);
    setFormData({
      firstName: '',
      lastName: '',
      birthDate: '',
      email: '',
      gender: '', 
    });
  };

  return (
    <div>
      <h2>Yeni Kişi Ekle</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Ad:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Soyad:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Doğum Tarihi:
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </label>
        <label>
          E-posta:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Cinsiyet: {/* Cinsiyet alanı */}
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Seçiniz</option>
            <option value="erkek">Erkek</option>
            <option value="kadın">Kadın</option>
            <option value="diğer">Diğer</option>
          </select>
        </label>
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
}

export default DataInput;
