// Base URL
const baseUrl = "https://api.rawg.io/api/";

//Getting date
const getCurrentMonth = () => {
  const month = new Date().getMonth();
  if (month < 10) {
    return `0${month}`;
  } else {
    return `${month}`;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return `${day}`;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
// Popular Games

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${baseUrl}${popular_games}`;
export const upcomingGamesURL = () => `${baseUrl}${upcoming_games}`;
export const newGamesURL = () => `${baseUrl}${new_games}`;

// Game details
export const gameDetailsURL = game_id => `${baseUrl}games/${game_id}`;

// Game Screenshots
export const gameScreenShotURL = game_id => `${baseUrl}games/${game_id}/screenshots`;

// Searched game
export const searchGameURL = game_name => `${baseUrl}games?search=${game_name}&page_size=9`;
