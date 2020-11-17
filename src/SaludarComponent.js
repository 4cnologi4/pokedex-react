import React, { useState, useEffect } from "react";

export default function Saludar(props) {
  console.log(props);

  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log("Total de clicks " + contar);
  }, [contar]);

  // let { name = "Anonimo", age } = props.userInfo;
  let saludar = props.saludar;

  // const onOff = () => setStateCar(!stateCar);
  // const onOff = () => setStateCar(prevState => !prevState);
  const onOff = () => {
    setStateCar(!stateCar), setContar(contar + 1);
  };

  return (
    <div>
      <h2>El auto está {stateCar ? "Encendido" : "Apagado"} </h2>
      <button className="btn btn-primary" onClick={onOff}>
        On / Off
      </button>
      <h4>Clicks {contar}</h4>
    </div>
  );
}

// return (
//   <div>
//     <h2>
//       Hola {name} tiene {age} años
//     </h2>
//     <button className="btn btn-primary" onClick={onOff}>
//       Saludar
//     </button>
//   </div>
// );

// <button className="btn btn-primary" onClick={() => saludar(name)}>
//   Saludar
// </button>
