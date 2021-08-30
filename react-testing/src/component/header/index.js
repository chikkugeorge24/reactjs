import "./styles.scss";
import logo from "../../assets/graphics/hoodie.svg";

const Header = () => {
  return (
    <header data-test="headerComponent">
      <div className="wrapper">
        <div className="logo">
          <img data-test="logoIMG" src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};
export default Header;
