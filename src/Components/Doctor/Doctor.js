import "./Doctor.css";
let Doctor = props => {
  let { _id, picture, name, phone, company, balance, email } = props.doctor;
  return (
    <div>
      <div className="card" key={_id}>
        <img src={picture} alt="" />
        <h2>{name}</h2>
        <small>{phone}</small>
        <p>Company : {company}</p>
        <p>Balance : ${balance}</p> <p> {email}</p>
        <button onClick={() => props.clickHandler(props.doctor)}>
          <i className="fas fa-hand-holding-medical"></i> Donate
        </button>
      </div>
    </div>
  );
};

export default Doctor;
