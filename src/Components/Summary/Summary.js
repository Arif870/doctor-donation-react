import "./Summary.css";
let Summary = props => {
  return (
    <div className="summary">
      <i class="fas fa-user-md"></i>
      <h1>Total Number of Doctor Donated : 20</h1>
      <h3>Total amount : $240400</h3>
      <div className="doctor">
        <p>Margo Boyd</p>
        <i className="fas fa-times-circle"></i>
      </div>
    </div>
  );
};
export default Summary;
