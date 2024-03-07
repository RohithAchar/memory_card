import { useEffect, useState } from "react";
import ScoreBoard from "./ScoreBoard";
import PictureCard from "./PictureCard";
import Lost from "./Lost";
import Spinner from "./Spinner";

let images = [];

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  // const [images, setImages] = useState([]);
  const [showImage, setShowImage] = useState([]);
  const [lost, setLost] = useState(false);
  const [loading, setLoding] = useState(true);
  // let processed = [];

  if (currentScore > maxScore) setMaxScore(currentScore);
  // const updateCurrentScore = () => {
  //   setCurrentScore((currentScore) => currentScore + 1);
  // };
  // const resetCurrentScore = () => {
  //   setCurrentScore(0);
  // };
  // Fetching
  const fetchData = async () => {
    const res = await fetch("https://dragonball-api.com/api/characters");
    const data = await res.json();

    const res1 = await fetch(data.links.next);
    const data1 = await res1.json();
    setLoding(false);
    processData([...data.items, ...data1.items]);
  };

  const processData = (data) => {
    images = data.map((item) => ({
      id: item.id,
      cName: item.name,
      url: item.image,
      isClicked: false,
    }));
    // setImages([...processed]);
    shuffle();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const shuffle = () => {
    let randomNums = [];
    for (let i = 0; i < 4; i++) {
      let num = Math.floor(Math.random() * 20);
      while (randomNums.includes(num)) {
        num = Math.floor(Math.random() * 20);
      }
      randomNums.push(num);
    }
    let temp = [];
    randomNums.forEach((i, index) => {
      temp[index] = images[i];
    });
    setShowImage([...temp]);
  };

  // handling click
  const handleClick = (id) => {
    if (images[id - 1].checked === true) {
      setCurrentScore(0);
      images.map((ele) => (ele.checked = false));
      shuffle();
      setLost(true);
      setTimeout(() => setLost(false), 3000);
      return;
    }
    setCurrentScore((prev) => prev + 1);
    images[id - 1].checked = true;
    shuffle();
  };

  return (
    <>
      {lost ? <Lost /> : null}
      <ScoreBoard currentScore={currentScore} maxScore={maxScore} />
      <div className="flex-container">
        {loading && <Spinner />}
        {showImage.map((img) => {
          return (
            <PictureCard key={img.id} data={img} clickHandler={handleClick} />
          );
        })}
      </div>
    </>
  );
};

export default App;
