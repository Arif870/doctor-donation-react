import "./Summary.css";
let Summary = props => {
  const { count } = props;
  let amount = 0;
  let name = "";

  for (const dr of count) {
    amount = amount + dr.balance;
    name = dr.name + " | " + name;
  }
  return (
    <div className="summary">
      <i className="fas fa-user-md"></i>
      <h1>Total Number of Doctor Donated : {props.count.length}</h1>
      <h3>Total amount : ${amount.toFixed(2)}</h3>
      <div className="doctor">
        <p>{name}</p>
        <i className="fas fa-times-circle"></i>
      </div>
    </div>
  );
};
export default Summary;
