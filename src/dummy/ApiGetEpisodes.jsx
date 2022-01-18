import { useState, useEffect } from "react";
import axios from "axios";
import episode1 from "../audio/20210806_102244_222_radiohistory_ep0544.mp3";
import episode2 from "../audio/20210430_113621_533_radiohistory_ep0518.mp3";
import episode3 from "../audio/20210424_105237_279_radiohistory_ep0517.mp3";
import episode4 from "../audio/20210424_105226_180_radiohistory_ep0516.mp3";
import episodeImg from "../img/radireki_thumbnail.jpeg";

export const ApiGetEpisodes = () => {
  // 3 episodes
  // const apiUrl ="https://api.json-generator.com/templates/Xzn7dTsRzMsd/data?access_token=6a76lvuqp3cwnx944w7p5w2e1mv7v7puos3rn15p";

  // 4 episodes
  const apiUrl ="https://api.json-generator.com/templates/I5NfzXC17m5f/data?access_token=6a76lvuqp3cwnx944w7p5w2e1mv7v7puos3rn15p";

  const [apiEpisodes, setApiEpisodes] = useState([]);
  const [addEpisodes, setAddEpisodes] = useState([]);
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setApiEpisodes(res.data);
        setAddEpisodes(res.data);
      })
      // errの場合
      .catch((err) => {
        console.log('err:', err);
      })
  }, []);

  for (let i = 0; i < apiEpisodes.length; i++) {
    const obj = apiEpisodes[i];
    obj.thumbnail = episodeImg;
    if (obj.epiNum === "epi544") {
      obj.src = episode1;
    } else if (obj.epiNum === "epi518") {
      obj.src = episode2;
    } else if (obj.epiNum === "epi517") {
      obj.src = episode3;
    } else if (obj.epiNum === "epi516") {
      obj.src = episode4;
    }
  }


  // return (
  //   <div>
  //     <ul>
  //       {apiEpisodes.map((episode, index) => (
  //         <li key={episode.epiNum}>{episode.title}</li>
  //       ))}
  //     </ul>
  //   </div>
  // )
  return {apiEpisodes, addEpisodes};

}
