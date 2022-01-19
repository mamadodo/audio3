import React, { useContext, memo } from "react";
import { useLocation, Link } from "react-router-dom";
// import { useParams } from "react-router"; 
import programImg from "../img/radireki_thumbnail.jpeg";
import { TrackContext } from "../providers/TrackProvider";
import axios from "axios";

export const Episode = memo(() => {
  // const { id } = useParams();
  // console.log("id" , id);
  
  const { tracks, setTracks, isPlay, setIsPlay, trackIndex, setTrackIndex } = useContext(TrackContext);
  // console.log(isPlay);
  const {state} = useLocation(); // current episode
  const currentEpisode = [state];
  // console.log(currentEpisode);

  // 効かない？？なぜ？？
  const isDuplicate = () => {
    if(tracks.some(el => el.title === currentEpisode[0].title)){
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }
  
  const onClickAdd = () => {

    const url ="https://api.json-generator.com/templates/I5NfzXC17m5f/data?access_token=6a76lvuqp3cwnx944w7p5w2e1mv7v7puos3rn15p";
    axios.get(url).then((res) => {
    console.log(res.data);
    });
  

    // 重複チェック
    if(isDuplicate()) {
      //  console.log("重複");
    } else {
      // console.log("重複なし");
      const newTracks = [...tracks, ...currentEpisode];
      setTracks(newTracks);
      console.log(tracks);  
    }
  };

  const onClickPlay = () => {
  
    if(isPlay) { // 再生中にクリック
      if(tracks[trackIndex].src !== currentEpisode[0].src) {
        const changeTrack = async () => {
          await new Promise((resolve) => {
            setIsPlay(false); //pause
            setTimeout(() => {
              resolve(1);
            }, 300);
          });
          const stopTrack = tracks[trackIndex];
          stopTrack.playing = false;
          console.log(stopTrack);
          console.log(trackIndex);

          // 重複チェック
          if(tracks.some(el => el.title === currentEpisode[0].title)) {
            const targetIndex = tracks.findIndex((v) => v.title === currentEpisode[0].title);
            const currentTrack = tracks[targetIndex];
            setTrackIndex(targetIndex);
            currentTrack.playing = true;
            setIsPlay(true);
          } else {
            const playTracks = [...currentEpisode, ...tracks];
            setTracks(playTracks);
            setTrackIndex(0);
            const currentTrack = playTracks[0];
            // console.log(currentTrack);
            currentTrack.playing = true;
            setIsPlay(true);
          }
        }
        changeTrack();
      }
      currentEpisode.playing = true;

    } else { //停止時にクリック
      // 重複チェック
      if(tracks.some(el => el.title === currentEpisode[0].title)) {
        //  console.log("重複");
        const targetIndex = tracks.findIndex((v) => v.title === currentEpisode[0].title );
        const currentTrack = tracks[targetIndex];
        setIsPlay(true);
        currentTrack.playing = true;
        currentEpisode.playing = true;
        console.log("tracks " + tracks);

      } else {
        // console.log("重複なし");
        const playTracks = [ ...currentEpisode, ...tracks ];
        setTracks(playTracks);
        setTrackIndex(0);

        const currentTrack = playTracks[0];
        setIsPlay(true);
        currentTrack.playing = true;
        currentEpisode.playing = true;
      }
    }
  };

  let currentPlayFlg = false;
  if(isPlay) {
    if(tracks[trackIndex].title === state.title) {
      currentPlayFlg = true;
    } else {
      currentPlayFlg = false;
    }
  }

  return (
    <>
      <div id="container" className="chl-mvContainer row700">
        <div className="chl-mvContainer__box is_black">
          <div className="chl-mvContainer__box__img">
            <img src={programImg} width="360" height="360" alt="ラジレキ 〜ラジオ歴史小話〜 " />
          </div>
          <div className="chl-mvContainer__box__desc">
            <h1 className="chl-mvContainer__box__desc__title episode-title">{state.title} </h1>
          <div className="content-listItem addBtn" onClick={onClickAdd} >
            {/* <span className="material-icons ico-listen">play_circle_outline</span> */}
            <span className="play-text listen">プレイリストに追加</span>
          </div>
            {currentPlayFlg === false ?
          <button className="content-listItem addBtn" onClick={onClickPlay} >
            <span className="play-text listen">再生</span>
            </button> :
          <button className="content-listItem addBtn"  disabled onClick={onClickPlay} >

            <span className="play-text listen">再生</span></button>
            }
          </div>
        </div>
        <Link to="/radiohistory">
          <div className="toProgram-btn">
            すべてのエピソード
          </div>
        </Link>
      </div>

    </>
  );

});
