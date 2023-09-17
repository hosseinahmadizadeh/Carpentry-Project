import "./Products.css";

function Products({ selectedProducts, onProductsChange }) {
  const options = ["میز", "صندلی", "نیمکت", "کمد"];

  const handleOptionChange = (option) => {
    const updatedProducts = selectedProducts.includes(option)
      ? selectedProducts.filter((item) => item !== option)
      : [...selectedProducts, option];

    onProductsChange(updatedProducts);
  };

  return (
    <div className="products-wrapper">
      <h4 className="primaryText">محصول نهایی شما چه خواهد بود؟</h4>
      <div className="pOptions-container">
        {options.map((option, index) => (
          <div
            key={index}
            className={`pOption ${
              selectedProducts.includes(option) ? "pSelected" : ""
            }`}
          >
            <label className="secondaryText">
              <input
                type="checkbox"
                value={option}
                checked={selectedProducts.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
