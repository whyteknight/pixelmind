import React, { useState } from "react";
import Draggable from "react-draggable";

export function Drag({ children, onStop, ...rest }) {
  const initial = { x: 0, y: 0 };
  const [pos, setPos] = useState(initial);

  const handleStop = () => {
    setPos(initial); // Reset position when drag stops
  };

  return (
    <Draggable position={pos} onStop={handleStop} {...rest}>
      {children}
    </Draggable>
  );
}
