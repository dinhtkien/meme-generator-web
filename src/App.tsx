
import TextBoxBar from "./components/TextBoxBar";
import TopBar from "./components/TopBar";
import React from "react"
import Meme from "./components/Meme";
function App() {
  const [textBoxInput, setTextBoxInput] = React.useState({
    topInputText: "",
    bottomInputText: "",
  })
  const [memeImage, setMemeImage] = React.useState({
    name: "Drake Hotline Bling",
    url: "https://i.imgflip.com/30b1gx.jpg"
  })
  const [memeData, setMemeData] = React.useState({
    success: true,
    data: {
      memes: [
        {
          name: "Drake Hotline Bling",
          url: "https://i.imgflip.com/30b1gx.jpg",
        },
      ]
    }
  });

  function AppStateHandler(event: any) {
    if (event.target.name === "topInputText" || event.target.name === "bottomInputText") {
      setTextBoxInput((prevTextBoxInput) => {
        return {
          ...prevTextBoxInput,
          [event.target.name]: event.target.value
        }
      })
      return;
    }
    if (event.target.name === "memeButton") {
      setMemeImage((preMemeImage) => {
        if (memeData.success === false) {
          return preMemeImage;
        }
        let index: number = Math.round(Math.random() * memeData.data.memes.length);
        return {
          name: memeData.data.memes[index].name,
          url: memeData.data.memes[index].url
        }
      })
      return;
    }
  }
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(data => setMemeData(data));
  }, []);
   return (
    <>
      <TopBar />
      <TextBoxBar
        stateHandler={AppStateHandler}
        topInputText={textBoxInput.topInputText}
        bottomInputText={textBoxInput.bottomInputText}
      />
      <Meme
        stateHandler={AppStateHandler}
        name={memeImage.name}
        url={memeImage.url}
        topMemeText = {textBoxInput.topInputText}
        bottomMemeText = {textBoxInput.bottomInputText}
      />
    </>

  );
}

export default App;
