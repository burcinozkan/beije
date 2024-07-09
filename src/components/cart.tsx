import React, { useState } from 'react';
import '../styles/Cart.module.css';

const CustomPackage: React.FC = () => {
  const [standartPed, setStandartPed] = useState<number>(0);
  const [superPed, setSuperPed] = useState<number>(0);
  const [superPlusPed, setSuperPlusPed] = useState<number>(0);

  const updatePackageContent = () => {
    let content = [];
    if (standartPed > 0) {
      content.push(`${standartPed} Standart Ped`);
    }
    if (superPed > 0) {
      content.push(`${superPed} Süper Ped`);
    }
    if (superPlusPed > 0) {
      content.push(`${superPlusPed} Süper+ Ped`);
    }
    return content;
  };

  return (
    <div className="CustomPackage">
      <div className="slider-section">
        <h2>beije Ped</h2>
        <div className="slider-container">
          <label htmlFor="standartPed">Standart Ped</label>
          <input
            type="range"
            id="standartPed"
            name="standartPed"
            min="0"
            max="60"
            value={standartPed}
            onChange={(e) => setStandartPed(Number(e.target.value))}
          />
          <span>{standartPed}</span>
        </div>
        <div className="slider-container">
          <label htmlFor="superPed">Süper Ped</label>
          <input
            type="range"
            id="superPed"
            name="superPed"
            min="0"
            max="60"
            value={superPed}
            onChange={(e) => setSuperPed(Number(e.target.value))}
          />
          <span>{superPed}</span>
        </div>
        <div className="slider-container">
          <label htmlFor="superPlusPed">Süper+ Ped</label>
          <input
            type="range"
            id="superPlusPed"
            name="superPlusPed"
            min="0"
            max="60"
            value={superPlusPed}
            onChange={(e) => setSuperPlusPed(Number(e.target.value))}
          />
          <span>{superPlusPed}</span>
        </div>
      </div>
      <div className="package-content">
        <h2>Paket İçeriği</h2>
        <ul>
          {updatePackageContent().map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomPackage;
