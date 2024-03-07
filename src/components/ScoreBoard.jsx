const ScoreBoard = ({ currentScore, maxScore }) => {
  return (
    <div className="score-board">
      <h1>Score : {currentScore}</h1>
      <p>Max score : {maxScore}</p>
    </div>
  );
};

export default ScoreBoard;
