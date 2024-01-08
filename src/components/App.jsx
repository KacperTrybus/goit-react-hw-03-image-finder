import React, { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import './styles.css';
import PropTypes from 'prop-types';

const API_KEY = '39539383-c957f911c4d26df2837324ce8';
const BASE_URL = 'https://pixabay.com/api/';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleSubmit = async query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    fetchImages();
  };

  const fetchImages = async () => {
    const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setImages(prevImages => [...prevImages, ...data.hits]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    fetchImages();
  };

  const handleImageClick = imageUrl => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      <Button
        onClick={handleLoadMore}
        showButton={images.length > 0 && !isLoading}
      />
      <Loader loading={isLoading} />
      <Modal
        isOpen={showModal}
        imageUrl={selectedImage}
        onClose={handleCloseModal}
      />
    </div>
  );
};

App.propTypes = {
  images: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  selectedImage: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  fetchImages: PropTypes.func.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
  handleImageClick: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default App;
