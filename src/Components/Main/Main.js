import "./Main.css";
import { useState, useEffect } from "react";
let Main = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    fetch("./data.JSON")
      .then(res => res.json())
      .then(data => setstate(data));
  }, []);

  return (
    <div className="main">
      <div className="card-container">
        {state.map(doctor => (
          <div className="card" key={doctor._id}>
            <img src={doctor.picture} alt="" />
            <h2>{doctor.name}</h2>
            <small>{doctor.phone}</small>
            <p>Company : {doctor.company}</p>
            <p>Balance : {doctor.balance}</p> <p> {doctor.email}</p>
            <button>
              <i className="fas fa-hand-holding-medical"></i> Donate
            </button>
          </div>
        ))}
      </div>
      <div>Aside part</div>
    </div>
  );
};
export default Main;
