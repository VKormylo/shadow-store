import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addToLibrary,
  addToWishlist,
  removeFromWishlist,
} from "../../../../redux/store-reducer";
import s from "./GamePage.module.css";
import { withTranslation } from "react-i18next";
import { compose } from "redux";
import Preloader from "../../../Preloader/Preloader";
import addToWishlistIcon from "../../../../assets/images/addToWishlist-icon.svg";
import removeFromWishlistIcon from "../../../../assets/images/removeFromWishlist-icon.svg";
import windowsLogo from "../../../../assets/images/windows-logo.svg";

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.location);
    this.state = {
      props: this.props.location.state,
      inLibrary: this.props.location.state.game.added,
      inWishlist: this.props.location.state.game.inWishlist,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  addToLibrary() {
    this.setState({ inLibrary: !this.state.inLibrary });
    this.props.addToLibrary(this.state.props.game.id);
  }

  addToWishlist() {
    this.setState({ inWishlist: !this.state.inWishlist });
    this.props.addToWishlist(this.state.props.game.id);
  }

  removeFromWishlist() {
    this.setState({ inWishlist: !this.state.inWishlist });
    this.props.removeFromWishlist(this.state.props.game.id);
  }

  render() {
    const { t } = this.props;
    let devIndex = this.state.props.game.developer.indexOf("|");

    return this.props.isLoading ? (
      <Preloader />
    ) : (
      <div className={s.main}>
        <div className={s.header}>
          <div className={s.back}>
            <span>
              {this.state.props.currentPlace === "store" ||
              this.state.props.currentPlace === "магазин" ? (
                <NavLink className={s.link} to="/store/main">
                  {t("game.back")} {t("game.currentPlace.store")}
                </NavLink>
              ) : (
                <NavLink className={s.link} to="/library">
                  {t("game.back")} {t("game.currentPlace.library")}
                </NavLink>
              )}
            </span>
          </div>
          <div className={s.name}>{this.state.props.game.gameName}</div>
        </div>
        <div className={s.gameName}>{this.state.props.game.gameName}</div>
        <div className={s.gamepage}>
          <div className={s.content}>
            <div className={s.contentFoto}>
              <img src={this.state.props.game.gamepage.foto} />
            </div>
            <div className={s.text}>{this.state.props.game.gamepage.descr}</div>
          </div>
          <div className={s.sidebar}>
            <div className={s.sidebarFoto}>
              <img src={this.state.props.game.gamepage.foto} />
            </div>
            {this.state.props.game.gamePrice === "Free" ? (
              <div className={s.price}>{t("price.free")}</div>
            ) : (
              <div className={`${s.price} ${s.uah}`}>
                {this.state.props.game.gamePrice} {t("price.currency")}
              </div>
            )}
            <div className={s.btns}>
              <div className={s.btnBuy}>
                {this.state.inLibrary ? (
                  <NavLink to="/library" className={`${s.btn} ${s.buy}`}>
                    {t("game.in")}
                  </NavLink>
                ) : (
                  <a
                    className={`${s.btn} ${s.buy}`}
                    onClick={this.addToLibrary.bind(this)}
                  >
                    {this.state.props.game.gamePrice === "Free"
                      ? t("game.get")
                      : t("game.buy")}
                  </a>
                )}
              </div>
              <div className={s.btnAdd}>
                {this.state.inWishlist ? (
                  <a
                    className={`${s.btn} ${s.add}`}
                    onClick={this.removeFromWishlist.bind(this)}
                  >
                    <img src={removeFromWishlistIcon} />
                    {t("game.remove")}
                  </a>
                ) : (
                  <a
                    className={`${s.btn} ${s.add}`}
                    onClick={this.addToWishlist.bind(this)}
                  >
                    <img src={addToWishlistIcon} />
                    {t("game.add")}
                  </a>
                )}
                <div
                  className={`${s.wish} + ${
                    this.props.languageReducer.language === "ru" ? s.ru : ""
                  }`}
                >
                  {this.state.inWishlist ? t("game.remove") : t("game.add")}
                </div>
              </div>
            </div>
            <div className={s.info}>
              <div className={s.item}>
                {t("game.developer")}{" "}
                <span>
                  {devIndex > 0
                    ? this.state.props.game.developer.slice(0, devIndex)
                    : this.state.props.game.developer}
                </span>
              </div>
              <div className={s.item}>
                {t("game.publisher")}{" "}
                <span>
                  {devIndex > 0
                    ? this.state.props.game.developer.slice(devIndex + 2)
                    : this.state.props.game.developer}
                </span>
              </div>
              <div className={s.item}>
                {t("game.platform")} <img src={windowsLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.storePage.isLoading,
    languageReducer: state.languageReducer,
  };
};

export default compose(
  withTranslation(),
  connect(mapStateToProps, { addToLibrary, addToWishlist, removeFromWishlist })
)(GamePage);
