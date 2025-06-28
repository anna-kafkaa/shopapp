import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {Object.keys(sizes).map(size => (
          <li key={size}>
            <button
              type="button"
              className={clsx(size === currentSize && styles.active)}
              onClick={() => setCurrentSize(size)}
            >
              {size}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.object.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;
