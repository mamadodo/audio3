import React from "react";
import { Link } from "react-router-dom";
import programImg from "../img/radireki_thumbnail.jpeg";
// import { episodes } from "../dummy/episodes";
import { ApiGetEpisodes } from "../dummy/ApiGetEpisodes";

export const Program = () => {
  const { apiEpisodes } = ApiGetEpisodes();
  console.log(apiEpisodes);
  return (
    <>
      <div id="container" className="chl-mvContainer row700">
        <div className="chl-mvContainer__box is_black">
          <div className="chl-mvContainer__box__img">
            <img src={programImg} width="360" height="360" alt="ラジレキ 〜ラジオ歴史小話〜 " />
          </div>
          <div className="chl-mvContainer__box__desc">
            <h1 className="chl-mvContainer__box__desc__title">ラジレキ 〜ラジオ歴史小話〜 </h1>
          </div>
        </div>
      </div>

      <div>
      <ul className="allContents-list">
        {apiEpisodes.map((episode, index) => (

        <li className="contentItem episodeContent" key={episode.epiNum}>
          <Link to={episode.epiNum} state={ apiEpisodes[index] }>
            <div className="content-inner1">
              <div className="content-text">
                <div className="content-ttl-wrap">
                  <h2 className="content-ttl">
                    {episode.title}
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        </li>
        ))}
      </ul>
    </div>

    </>
  );

};
