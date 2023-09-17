import { useState } from "react";
import Tools from "./components/Tools/Tools";
import Products from "./components/Products/Products";

import "./App.css";

function App() {
  const [selectedTools, setSelectedTools] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleToolsChange = (tools) => {
    setSelectedTools(tools);
    setShowMessage(false);
  };

  const handleProductsChange = (products) => {
    setSelectedProducts(products);
    setShowMessage(false);
  };

  const handleSubmit = () => {
    if (selectedTools.length === 0 && selectedProducts.length === 0) {
      setErrorMessage("لطفا مصالح و محصول مورد نیاز را انتخاب کنید !");
      setShowMessage(true);
    } else {
      setErrorMessage("");
      setShowMessage(true);
    }
  };

  return (
    <div className="flexColCenter app-wrapper">
      <Tools selectedTools={selectedTools} onToolsChange={handleToolsChange} />
      <Products
        onProductsChange={handleProductsChange}
        selectedProducts={selectedProducts}
      />
      <button onClick={handleSubmit}>ثبت کردن</button>
      <div className="flexCenter message-container">
        {showMessage && (
          <p
            className={`message ${
              showMessage && errorMessage ? "message-red" : "message-white"
            }`}
          >
            {errorMessage ||
              `مصالح ${selectedTools.join(
                ", "
              )} برای محصول ${selectedProducts.join(", ")}
            انتخاب شدند`}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
