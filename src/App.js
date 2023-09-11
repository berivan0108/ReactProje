import React, { useState } from 'react';
import './App.css';
import DataInput from './DataInput';
import DataList from './DataList';

function App() {
  const initialData = [
    {
      firstName: 'Berivan',
      lastName: 'Dağcı',
      birthDate: '08/01/2002',
      email: 'berivandagci@gmail.com',
      gender: 'kadın',
    },
    {
      firstName: 'Orçun',
      lastName: 'Özşen',
      birthDate: '25/12/2002',
      email: 'orcun12@gmail.com',
      gender: 'erkek',
    },
  ];

  const [dataList, setDataList] = useState(initialData);

  function handleAddData(newData) {
    // Veri eklemeye çalışmadan önce boş alanları kontrol et
    if (
      newData.firstName === '' ||
      newData.lastName === '' ||
      newData.birthDate === '' ||
      newData.email === '' ||
      newData.gender === ''
    ) {
      alert("Tüm alanları doldurun!"); // Hata mesajı göster
      return; // Devam etmeyi durdur
    }

    // Tüm alanlar dolu ise veriyi ekle
    setDataList((prevData) => [...prevData, newData]);
  }

  function handleDeleteData(index) {
    setDataList((prevData) => prevData.filter((_, i) => i !== index));
  }

  return (
    <div className="App">
      <h1>Kişilerin Bilgileri</h1>
      <DataInput onAddData={handleAddData} />
      <DataList data={dataList} onDeleteData={handleDeleteData} />
    </div>
  );
}

export default App;
