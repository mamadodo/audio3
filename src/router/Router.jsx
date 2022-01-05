import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "../components/Top";
import { Program } from "../components/Program";
import { Episode } from "../components/Episode";
import { episodes } from "../components/episodes";


export const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={ <Top /> } />
          <Route path="radiohistory">
            {/* <Route path={episodes.epiNum} element={ <EpisodePage /> } /> */}
            <Route index element={ <Program /> } />
            <Route path=":id" element={ <Episode /> } />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

