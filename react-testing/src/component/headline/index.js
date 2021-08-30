import PropTypes from "prop-types";
import "./styles.scss";

const Headline = (props) => {
  const { header, desc } = props;
  if (!header) {
    return null;
  }
  return (
    <div data-test="headlineComponent">
      <h1 data-test="header">{header}</h1>
      <p data-test="description">{desc}</p>
    </div>
  );
};

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      firtName: PropTypes.string,
      lastName: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
      email: PropTypes.string,
    })
  ),
};
export default Headline;
