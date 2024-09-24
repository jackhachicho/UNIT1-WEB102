import React from 'react';

import burgerShopImage from '../src/assets/burger-shop-image.jpg';
import kingOfTheHatImage from '../src/assets/king-of-the-hat-image.jpg';
import kingdomRushImage from '../src/assets/kingdom-rush-image.jpg';
import itTakesTwoImage from '../src/assets/it-takes-two-image.jpg';
import celesteImage from '../src/assets/celeste-image.jpg';
import pacManImage from '../src/assets/pac-man-image.jpg';
import neonWhiteImage from '../src/assets/neon-white-image.jpg';
import chickenInvadersImage from '../src/assets/chicken-invaders-image.jpg';
import ufo50Image from '../src/assets/ufo-50-image.jpg';
import octopathTravelerImage from '../src/assets/octopath-traveler-image.jpg';
import crossCodeImage from '../src/assets/cross-code-image.jpg';
import yakuza0Image from '../src/assets/yakuza-0-image.jpg';
import stardewValleyImage from '../src/assets/stardew-valley-image.jpg';
import hadesImage from '../src/assets/hades-image.jpg';
import hollowKnightImage from '../src/assets/hollow-knight-image.jpg';


const GameCard = ({ title, genre, imageUrl, steamLink }) => {
  return (
    <div className="game-card">
      <img className="game-image" src={imageUrl} alt={title} />
      <div className="game-info">
        <div className="game-text">
          <h1 className="game-title" title={title}>{title}</h1>
          <h2 className="game-genre">{genre}</h2>
        </div>
        <a href={steamLink} target="_blank" rel="noopener noreferrer" className="view-game-button">
          View Game
        </a>
      </div>
    </div>
  );
};

const GameList = () => {
  const gameImages = [
    burgerShopImage,
    kingOfTheHatImage,
    kingdomRushImage,
    itTakesTwoImage,
    celesteImage,
    pacManImage,
    neonWhiteImage,
    chickenInvadersImage,
    ufo50Image,
    octopathTravelerImage,
    crossCodeImage,
    yakuza0Image,
    stardewValleyImage,
    hadesImage,
    hollowKnightImage
  ];

  const games = [
    { title: "Burger Shop 3", genre: "Simulation", steamLink: "https://store.steampowered.com/app/741730/Burger_Shop_2/" },
    { title: "King of the Hat", genre: "Party", steamLink: "https://store.steampowered.com/app/837330/King_of_the_Hat/" },
    { title: "Kingdom Rush", genre: "Tower Defense", steamLink: "https://store.steampowered.com/app/246420/Kingdom_Rush___Tower_Defense/" },
    { title: "It Takes Two", genre: "Co-op Adventure", steamLink: "https://store.steampowered.com/app/1426210/It_Takes_Two/" },
    { title: "Celeste", genre: "Platformer", steamLink: "https://store.steampowered.com/app/504230/Celeste/" },
    { title: "Pac-Man Championship Edition DX", genre: "Arcade", steamLink: "https://store.steampowered.com/app/236450/PACMAN_Championship_Edition_DX/" },
    { title: "Neon White", genre: "First-Person Shooter", steamLink: "https://store.steampowered.com/app/1533420/Neon_White/" },
    { title: "Chicken Invaders Universe", genre: "Shoot 'em up", steamLink: "https://store.steampowered.com/app/1510460/Chicken_Invaders_Universe/" },
    { title: "UFO 50", genre: "Retro Collection", steamLink: "https://store.steampowered.com/app/809480/UFO_50/" },
    { title: "Octopath Traveler II", genre: "JRPG", steamLink: "https://store.steampowered.com/app/1971650/OCTOPATH_TRAVELER_II/" },
    { title: "CrossCode", genre: "Action RPG", steamLink: "https://store.steampowered.com/app/368340/CrossCode/" },
    { title: "Yakuza 0", genre: "Action Adventure", steamLink: "https://store.steampowered.com/app/638970/Yakuza_0/" },
    { title: "Stardew Valley", genre: "Farming Simulation", steamLink: "https://store.steampowered.com/app/413150/Stardew_Valley/" },
    { title: "Hades", genre: "Roguelike", steamLink: "https://store.steampowered.com/app/1145360/Hades/" },
    { title: "Hollow Knight", genre: "Metroidvania", steamLink: "https://store.steampowered.com/app/367520/Hollow_Knight/" }
  ];

  return (
    <div className="game-list">
      {games.map((game, index) => (
        <GameCard
          key={index}
          title={game.title}
          genre={game.genre}
          imageUrl={gameImages[index]}
          steamLink={game.steamLink}
        />
      ))}
    </div>
  );
};

export default GameList;