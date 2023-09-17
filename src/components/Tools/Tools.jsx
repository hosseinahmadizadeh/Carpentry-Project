import "./Tools.css";

function Tools({ selectedTools, onToolsChange }) {
  const options = [
    "ورق فلزی",
    "ورق ام-دی-اف",
    "پیچ",
    "مهره",
    "سیم جوش",
    "قوطی فلزی",
    "یراق آلات",
  ];

  const handleOptionChange = (option) => {
    const updatedTools = selectedTools.includes(option)
      ? selectedTools.filter((item) => item !== option)
      : [...selectedTools, option];

    onToolsChange(updatedTools);
  };

  return (
    <div className="tools-wrapper">
      <h4 className="primaryText">به چه مصالحی نیاز دارید؟</h4>
      <div className="tOptions-container">
        {options.map((option, index) => (
          <div
            key={index}
            className={`tOption ${
              selectedTools.includes(option) ? "tSelected" : ""
            }`}
          >
            <label className="secondaryText">
              <input
                type="checkbox"
                value={option}
                checked={selectedTools.includes(option)}
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

export default Tools;
