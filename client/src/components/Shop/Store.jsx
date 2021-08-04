import React from "react";
import { NavLink } from "react-router-dom";
import Game from "./Game/Game";
import s from "./Shop.module.css";
import { withTranslation } from "react-i18next";
import Card from "./Cards/Card";
import Catalog from "./Catalog/Catalog";
import News from "./News/News";
import FreeGames from "./FreeGames/FreeGames";
import PopularGame from "./PopularGame/PopularGame";
import WishlistGames from "./Wishlist/WishlistGames/WishlistGames";
import Slider from "./Slider/Slider";
import Header from "./Header/Header";
import searchIcon from "../../assets/images/loupe.svg";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      width: window.innerWidth,
    };
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  setStatus(status) {
    this.props.changeStatus(status)
  }

  render() {
    console.log(this.props);
    let filteredGames = this.props.storePage.games.filter((game) => {
      return (
        game.gameName.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    const { t } = this.props;
    return (
      <div className={s.shopContent}>
        <Header
          {...this.props}
          updateSearch={this.updateSearch.bind(this)}
          setStatus={this.setStatus.bind(this)}
          search={this.state.search}
          width={this.props.width}
          status={this.props.storePage.status}
        />
        {this.props.storePage.status === "main" ? (
          <div>
            <Slider
              games={this.props.storePage.games}
              addToLibrary={this.props.addToLibrary}
              addToWishlist={this.props.addToWishlist}
            />
            <div className={s.section}>
              <News games={this.props.storePage.games} />
            </div>
            {this.props.storePage.games.filter((added) => added.inWishlist)
              .length >= 2 ? (
              <div className={s.section}>
                <WishlistGames games={this.props.storePage.games} />
              </div>
            ) : (
              ""
            )}
            <div className={s.section}>
              <FreeGames games={this.props.storePage.games} />
            </div>
            <div className={s.section}>
              <div className={s.text}>{t("store.mostPopular.title")}</div>
              <div className={s.filteredGames}>
                {this.state.width < 1370
                  ? this.props.storePage.games
                      .filter(
                        (popular) =>
                          popular.filterBy === "popular" ||
                          popular.filterBy === "top"
                      )
                      .slice(0, 4)
                      .map((game) => {
                        return (
                          <Game
                            class={"filtered"}
                            game={game}
                            key={game.id}
                            addToLibrary={this.props.addToLibrary}
                            removeFromLibrary={this.props.removeFromLibrary}
                          />
                        );
                      })
                  : this.props.storePage.games
                      .filter(
                        (popular) =>
                          popular.filterBy === "popular" ||
                          popular.filterBy === "top"
                      )
                      .slice(0, 5)
                      .map((game) => {
                        return (
                          <Game
                            game={game}
                            key={game.id}
                            addToLibrary={this.props.addToLibrary}
                            removeFromLibrary={this.props.removeFromLibrary}
                          />
                        );
                      })}
              </div>
            </div>
            <div className={s.section}>
              <div className={s.text}>{t("store.newAndTrending.title")}</div>
              <div className={s.cards}>
                <Card
                  games={this.props.storePage.games}
                  addToWishlist={this.props.addToWishlist}
                  removeFromWishlist={this.props.removeFromWishlist}
                  filter={"new"}
                  category={t("store.newAndTrending.items.new")}
                />
                <Card
                  games={this.props.storePage.games}
                  addToWishlist={this.props.addToWishlist}
                  removeFromWishlist={this.props.removeFromWishlist}
                  filter={"top"}
                  category={t("store.newAndTrending.items.top")}
                />
                <Card
                  games={this.props.storePage.games}
                  addToWishlist={this.props.addToWishlist}
                  removeFromWishlist={this.props.removeFromWishlist}
                  filter={"soon"}
                  category={t("store.newAndTrending.items.soon")}
                />
              </div>
            </div>
            <div className={s.section}>
              <PopularGame game={this.props.storePage.games[0]}/>
            </div>
            <div className={s.section}>
              <div className={s.text}>{t("store.freeGames.title")}</div>
              <div className={s.filteredGames}>
                {this.state.width < 1370
                  ? this.props.storePage.games
                      .filter((free) => free.gamePrice === "Free")
                      .slice(0, 4)
                      .map((game) => {
                        return (
                          <Game
                            class={"filtered"}
                            game={game}
                            key={game.id}
                            addToLibrary={this.props.addToLibrary}
                            removeFromLibrary={this.props.removeFromLibrary}
                          />
                        );
                      })
                  : this.props.storePage.games
                      .filter((free) => free.gamePrice === "Free")
                      .slice(0, 5)
                      .map((game) => {
                        return (
                          <Game
                            game={game}
                            key={game.id}
                            addToLibrary={this.props.addToLibrary}
                            removeFromLibrary={this.props.removeFromLibrary}
                          />
                        );
                      })}
              </div>
            </div>
            <div className={s.section}>
              <div className={s.text}>{t("store.catalog.title")}</div>
              <Catalog setStatus={this.setStatus.bind(this)} />
            </div>
          </div>
        ) : (
          <div className={s.games}>
            {filteredGames.map((game) => {
              return (
                <Game
                  game={game}
                  key={game.id}
                  name={game.gameName}
                  photo={game.gamePhoto}
                  developer={game.developer}
                  price={game.gamePrice}
                  added={game.added}
                  gamepage={game.gamepage}
                  addToLibrary={this.props.addToLibrary}
                  removeFromLibrary={this.props.removeFromLibrary}
                  addToWishlist={this.props.addToWishlist}
                  removeFromWishlist={this.props.removeFromWishlist}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default withTranslation()(Shop);
