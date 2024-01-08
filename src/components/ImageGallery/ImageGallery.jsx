import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import '../styles.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          onClick={() => onImageClick(image.largeImageURL)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
