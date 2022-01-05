import React from "react";
import { useParams, useLocation } from "react-router-dom";
import programImg from "../radireki_thumbnail.jpeg";

export const Episode = () => {
  // const { id } = useParams();
  const {state} = useLocation();
  console.log(state);

  const onClickAdd = () => {
    console.log('クリックしたよ');
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
          </div>
        </div>
      </div>


      {/* <p>これはエピソードページです。</p>
      <p>パラメーターは{ id }です</p> */}
    </>
  );

};
