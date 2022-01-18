import { useState, useEffect } from "react";
import axios from "axios";

export const ApiGetEpisodes = () => {
  // 3 episodes
  const apiUrl ="https://api.json-generator.com/templates/Xzn7dTsRzMsd/data?access_token=6a76lvuqp3cwnx944w7p5w2e1mv7v7puos3rn15p";

  // 4 episodes
  // const apiUrl ="https://api.json-generator.com/templates/I5NfzXC17m5f/data?access_token=6a76lvuqp3cwnx944w7p5w2e1mv7v7puos3rn15p";

  const [apiEpisodes, setApiEpisodes] = useState([]);
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setApiEpisodes(res.data);
      })
      // errの場合
      .catch((err) => {
        console.log('err:', err);
      })    
  }, []);


  // return (
  //   <div>
  //     <ul>
  //       {apiEpisodes.map((episode, index) => (
  //         <li key={episode.epiNum}>{episode.title}</li>
  //       ))}
  //     </ul>
  //   </div>
  // )
  return {apiEpisodes};

}
