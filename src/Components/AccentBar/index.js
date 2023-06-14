import "./AccentBar.scss";

const AccentBar = () => {
  return (
    <div className="accent-bar">
      <div className="line"></div>
      <div className="content">
        <ul>
          <li>💡 Ideation</li> <li>🔭 Learner</li> <li>💪 Achiever</li>{" "}
          <li>🧠 Intellection</li> <li>🔮 Futuristic</li>
        </ul>{" "}
      </div>
    </div>
  );
};

export default AccentBar;
