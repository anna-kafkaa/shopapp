// Etap 1-6: Pełna wersja komponentu Product

import styles from "./Product.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../../Button/Button";

const Product = (props) => {
  const { title, name, basePrice, colors, sizes } = props;

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(Object.keys(sizes)[0]);

  const getPrice = () => basePrice + sizes[currentSize];

  const prepareColorClassName = (color) => {
    return styles[
      "color" + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("--- SUMMARY ---");
    console.log("Name:", title);
    console.log("Price:", getPrice());
    console.log("Size:", currentSize);
    console.log("Color:", currentColor);
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/${name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {Object.keys(sizes).map((size) => (
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

          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color) => (
                <li key={color}>
                  <button
                    type="button"
                    className={clsx(
                      prepareColorClassName(color),
                      color === currentColor && styles.active
                    )}
                    onClick={() => setCurrentColor(color)}
                  />
                </li>
              ))}
            </ul>
          </div>

          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.object.isRequired,
};

export default Product;
