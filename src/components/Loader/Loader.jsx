import React from 'react';
import { Audio } from 'react-loader-spinner';
import '../styles.css';

const Loader = ({ loading }) => {
  return loading ? (
    <div className="loader-container">
      <Audio type="Oval" color="#00BFFF" height={50} width={50} />
    </div>
  ) : null;
};

export default Loader;
