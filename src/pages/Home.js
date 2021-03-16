import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn, popUp } from "../animations";

const Home = props => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { newGames, upcoming, popular, searched } = useSelector(state => state.games);
  // Get game data
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>{pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
        {searched.length && (
          <div className="searched">
            <h2>Searched</h2>
            <Games>{searched && searched.map(game => <Game game={game} key={game.id} />)}</Games>
          </div>
        )}
        <h2>Upcoming Games</h2>
        <Games>{upcoming && upcoming.map(game => <Game game={game} key={game.id} />)}</Games>
        <h2>Popular Games</h2>
        <Games>{popular && popular.map(game => <Game game={game} key={game.id} />)}</Games>
        <h2>New Games</h2>
        <Games>{newGames && newGames.map(game => <Game game={game} key={game.id} />)}</Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
