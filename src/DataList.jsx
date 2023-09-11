

import React from 'react';

function DataList({ data, onDeleteData }) {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <div>
            <span>Ad: {item.firstName}</span>
            <span>Soyad: {item.lastName}</span>
            <span>Doğum Tarihi: {item.birthDate}</span>
            <span>E-posta:{item.email}</span>
            <span>Cinsiyet:{item.gender}</span>
            
          </div>
          <button onClick={() => onDeleteData(index)}>Sil</button>
        </li>
      ))}
    </ul>
  );
}

export default DataList;