import "./Main.css";
import { useState, useEffect } from "react";
import Summary from "../Summary/Summary";
import Doctor from "../Doctor/Doctor";
let Main = () => {
  const [state, setstate] = useState([]);
  const [drCount, setdrCount] = useState([]);
  useEffect(() => {
    fetch("./data.JSON")
      .then(res => res.json())
      .then(data => setstate(data));
  }, []);

  let clickHandler = doctor => {
    let newCount = [...drCount, doctor];
    setdrCount(newCount);
  };
  return (
    <div className="main">
      <div className="card-container">
        {state.map(doctor => (
          <Doctor
            key={doctor._id}
            clickHandler={clickHandler}
            doctor={doctor}
          />
        ))}
      </div>
      <div>
        <Summary count={drCount} />
      </div>
    </div>
  );
};
export default Main;
