import React, { useState } from 'react';
import './styles/Inicio.css';
import PistaBackground from '../assets/PistaBackground.png';

const Inicio = () => {
  const [positions, setPositions] = useState(
    Array.from({ length: 11 }, (_, i) => ({
      x: 50 + i * 20,
      y: 50 + i * 20,
    }))
  );

  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleMouseDown = (index, event) => {
    setDraggingIndex(index);
  };

  const handleMouseMove = (event) => {
    if (draggingIndex === null) return;

    const clientX = event.clientX || event.touches?.[0].clientX;
    const clientY = event.clientY || event.touches?.[0].clientY;

    const newPositions = [...positions];
    newPositions[draggingIndex] = { x: clientX, y: clientY };
    setPositions(newPositions);
  };

  const handleMouseUp = () => {
    setDraggingIndex(null);
  };

  // Evita el arrastre de la imagen de fondo
  const preventDrag = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="background-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Imagen de fondo */}
      <img
        src={PistaBackground}
        alt="Pista de baloncesto"
        className="background-image"
        onDragStart={preventDrag} // Evita el arrastre de la imagen de fondo
      />
      
      {/* Fichas redondas */}
      {positions.map((pos, index) => (
        <div
          key={index}
          className={`ficha ${
            index === 0
              ? 'balon'
              : index <= 5
              ? 'azul'
              : 'verde'
          }`}
          style={{ left: pos.x - 25, top: pos.y - 25 }}
          onMouseDown={(event) => handleMouseDown(index, event)}
          onTouchStart={(event) => handleMouseDown(index, event)}
        >
          {index === 0 ? '' : index <= 5 ? index : index - 5}
        </div>
      ))}
    </div>
  );
};

export default Inicio;
