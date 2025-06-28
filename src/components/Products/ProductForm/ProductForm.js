import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../../Button/Button';

const ProductForm = ({
  title,
  getPrice,
  sizes,
  currentSize,
  setCurrentSize,
  colors,
  currentColor,
  setCurrentColor,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('--- SUMMARY ---');
    console.log('Name:', title);
    console.log('Price:', getPrice());
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  };

  return (
    <form onSubmit={handleSubmit}>
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />
      <OptionColor
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  title: PropTypes.string.isRequired,
  getPrice: PropTypes.func.isRequired,
  sizes: PropTypes.object.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default ProductForm;
