import '../styles.css';

const Button = ({ onClick, showButton }) => {
  return (
    showButton && (
      <button type="button" className="btn" onClick={onClick}>
        Load More
      </button>
    )
  );
};

export default Button;
