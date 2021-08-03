import React from "react";
import LibraryGame from "./LibraryGame";
import s from "./Library.module.css";
import { withTranslation } from "react-i18next";
import searchIcon from "../../assets/images/loupe.svg";
import closeIcon from "../../assets/images/close.svg";

class Library extends React.Component {
  constructor(props) {
    super(props);
    const { t } = this.props;
    this.state = {
      search: "",
      sorted: false,
      showsort: false,
      filtered: false,
      showfilter: false,
      filterText: t("library.filter.all"),
      sortText: t("library.sort.normal"),
      view: "card",
      isSearch: false,
    };
  }

  showSearch() {
    this.setState({ isSearch: !this.state.isSearch });
  }

  componentDidMount() {
    this.props.getView();
  }

  setSort(text) {
    this.setState({
      sorted: !this.state.sorted,
      sortText: [text],
      showsort: !this.state.showsort,
    });
  }

  changeView(text) {
    this.setState({ view: text });
    this.props.changeView(text);
  }

  setFilter(text) {
    this.setState({
      filtered: !this.state.filtered,
      filterText: [text],
      showfilter: !this.state.showfilter,
    });
  }

  showFilter() {
    this.setState({
      showfilter: !this.state.showfilter,
      filtered: !this.state.filtered,
    });
  }

  showSort() {
    this.setState({
      showsort: !this.state.showsort,
      sorted: !this.state.sorted,
    });
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    let filteredGames = this.props.storePage.games.filter((game) => {
      return (
        game.gameName.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    const { t } = this.props;
    return (
      <div className={s.shopContent}>
        <div className={s.header}>
          <div className={s.sorting}>
            <div className={s.item}>
              <div>{t("library.sort.sort")}:</div>
              <a
                className={`${s.filter} + ${
                  this.state.sorted ? s.clicked : ""
                }`}
                onClick={this.showSort.bind(this)}
              >
                {this.state.sortText}
              </a>
              <div className={this.state.showsort ? s.show : s.info}>
                <ul className={s.items}>
                  <li>
                    <a
                      className={
                        this.state.sortText == t("library.sort.normal")
                          ? s.active
                          : ""
                      }
                      onClick={this.setSort.bind(
                        this,
                        t("library.sort.normal")
                      )}
                    >
                      {t("library.sort.normal")}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        this.state.sortText == t("library.sort.byalphabet")
                          ? s.active
                          : ""
                      }
                      onClick={this.setSort.bind(
                        this,
                        t("library.sort.byalphabet")
                      )}
                    >
                      {t("library.sort.byalphabet")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.item}>
              <div>{t("library.filter.filter")}:</div>
              <a
                className={`${s.filter} + ${
                  this.state.filtered ? s.clicked : ""
                }`}
                onClick={this.showFilter.bind(this)}
              >
                {this.state.filterText}
              </a>
              <div className={this.state.showfilter ? s.show : s.info}>
                <ul className={s.items}>
                  <li>
                    <a
                      className={
                        this.state.filterText == t("library.filter.all")
                          ? s.active
                          : ""
                      }
                      onClick={this.setFilter.bind(
                        this,
                        t("library.filter.all")
                      )}
                    >
                      {t("library.filter.all")}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        this.state.filterText == "Downloaded" ? s.active : ""
                      }
                      onClick={this.setFilter.bind(
                        this,
                        t("library.filter.downloaded")
                      )}
                    >
                      {t("library.filter.downloaded")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={s.right}>
            <div className={s.view}>
              <div
                className={`${s.item} ${s.card} + ${
                  this.props.storePage.view === "card" ? s.active : ""
                }`}
                onClick={this.changeView.bind(this, "card")}
              >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div
                className={`${s.item} ${s.string} + ${
                  this.props.storePage.view === "line" ? s.active : ""
                }`}
                onClick={this.changeView.bind(this, "line")}
              >
                <div className={s.line}>
                  <div className={s.firstBlock}></div>
                  <div className={s.lastBlock}></div>
                </div>
                <div className={s.line}>
                  <div className={s.firstBlock}></div>
                  <div className={s.lastBlock}></div>
                </div>
                <div className={s.line}>
                  <div className={s.firstBlock}></div>
                  <div className={s.lastBlock}></div>
                </div>
              </div>
            </div>
            <div className={s.search}>
              <div className={s.searchIcon}>
                <img src={searchIcon} />
              </div>
              <input
                placeholder={t("placeholder")}
                type="text"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
              />
            </div>
            <div className={s.showSearch}>
              <div className={s.icon} onClick={this.showSearch.bind(this)}>
                <img src={searchIcon} />
              </div>
              <div
                className={`${s.searchBlock} ${
                  this.state.isSearch ? s.showed : ""
                }`}
              >
                <div className={s.search}>
                  <div className={s.searchIcon}>
                    <img src={searchIcon} />
                  </div>
                  <input
                    placeholder={t("placeholder")}
                    type="text"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                  />
                </div>
                <div className={s.close} onClick={this.showSearch.bind(this)}>
                  <img src={closeIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={s.games}>
            {this.state.filterText == t("library.filter.downloaded")
              ? filteredGames
                  .filter((add) => add.added)
                  .filter((downloaded) => downloaded.isDownloaded)
                  .map((game) => {
                    return (
                      <LibraryGame
                        lib="true"
                        view={this.props.storePage.view}
                        game={game}
                        key={game.id}
                        name={game.gameName}
                        photo={game.gamePhoto}
                        foto={game.gamepage.foto}
                        developer={game.developer}
                        price={game.gamePrice}
                        removeFromLibrary={this.props.removeFromLibrary}
                        downloadGame={this.props.downloadGame}
                        deleteGame={this.props.deleteGame}
                      />
                    );
                  })
              : this.state.sortText == t("library.sort.byalphabet")
              ? filteredGames
                  .filter((add) => add.added)
                  .sort(function (a, b) {
                    if (a.gameName.toLowerCase() < b.gameName.toLowerCase())
                      return -1;
                    if (a.gameName.toLowerCase() > b.gameName.toLowerCase())
                      return 1;
                    return 0;
                  })
                  .map((game) => {
                    return (
                      <LibraryGame
                        lib="true"
                        view={this.props.storePage.view}
                        game={game}
                        key={game.id}
                        name={game.gameName}
                        photo={game.gamePhoto}
                        foto={game.gamepage.foto}
                        developer={game.developer}
                        price={game.gamePrice}
                        removeFromLibrary={this.props.removeFromLibrary}
                        downloadGame={this.props.downloadGame}
                        deleteGame={this.props.deleteGame}
                      />
                    );
                  })
              : this.state.sortText == t("library.sort.byalphabet") &&
                this.state.filterText == t("library.filter.downloaded")
              ? filteredGames
                  .filter((add) => add.added)
                  .filter((downloaded) => downloaded.isDownloaded)
                  .sort(function (a, b) {
                    if (a.gameName.toLowerCase() < b.gameName.toLowerCase())
                      return -1;
                    if (a.gameName.toLowerCase() > b.gameName.toLowerCase())
                      return 1;
                    return 0;
                  })
                  .map((game) => {
                    return (
                      <LibraryGame
                        lib="true"
                        view={this.props.storePage.view}
                        game={game}
                        key={game.id}
                        name={game.gameName}
                        photo={game.gamePhoto}
                        foto={game.gamepage.foto}
                        developer={game.developer}
                        price={game.gamePrice}
                        removeFromLibrary={this.props.removeFromLibrary}
                        downloadGame={this.props.downloadGame}
                        deleteGame={this.props.deleteGame}
                      />
                    );
                  })
              : filteredGames
                  .filter((add) => add.added)
                  .map((game) => {
                    return (
                      <LibraryGame
                        lib="true"
                        view={this.props.storePage.view}
                        game={game}
                        key={game.id}
                        name={game.gameName}
                        photo={game.gamePhoto}
                        foto={game.gamepage.foto}
                        developer={game.developer}
                        price={game.gamePrice}
                        removeFromLibrary={this.props.removeFromLibrary}
                        downloadGame={this.props.downloadGame}
                        deleteGame={this.props.deleteGame}
                      />
                    );
                  })}
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Library);
