import React from 'react';

class Modal extends React.Component {
  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickOutside = e => {
    if (e.target.classList.contains('overlay')) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('click', this.handleClickOutside);
  }

  render() {
    const { isOpen, imageUrl } = this.props;

    return (
      isOpen && (
        <div className="overlay" onClick={this.handleClickOutside}>
          <div className="modal">
            <img src={imageUrl} alt="" />
          </div>
        </div>
      )
    );
  }
}

export default Modal;
