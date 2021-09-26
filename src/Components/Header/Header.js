import "./Header.css";
import logo from "../../Utilities/Images/logo.png";
let Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <h1>The Grand Donation fund from Doctor Sociaty</h1>
      <h2>Total funds $10000 Million</h2>
    </div>
  );
};

export default Header;
