import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import LibraryContainer from "./components/Library/LibraryContainer";
import Navbar from "./components/Navbar/Navbar";
import Game from "./components/Shop/Game/Game";
import StoreContainer from "./components/Shop/StoreContainer";
import WishlistContainer from "./components/Shop/Wishlist/WishlistContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import Preloader from "./components/Preloader/Preloader.jsx";
import GamePage from "./components/Shop/Game/GamePage/GamePage";
import { getStore, getView, getStatus } from "./redux/store-reducer";
import { connect } from "react-redux";
import { getLanguage } from "./redux/language-reducer";
import FreeGamesContainer from "./components/Shop/FreeGamesPage/FreeGamesContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      showNavbar: true,
    };
  }

  componentDidMount() {
    this.props.getStore();
    this.props.getLanguage();
    this.props.getView();
    this.props.getStatus();
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  hideNavbar() {
    this.setState({ showNavbar: !this.state.showNavbar });
    console.log(this.state.showNavbar);
  }
  render() {
    return (
      <div className="app-wrapper">
        <Suspense fallback={"..."} />
        <Route
          path="/settings"
          render={() => (
            <SettingsContainer hideNavbar={this.hideNavbar.bind(this)} />
          )}
        />
        {this.state.showNavbar ? <Navbar /> : null}
        <div className="app-wrapper-content">
          {this.props.storePage.isLoading ? (
            <Preloader />
          ) : (
            <div>
              <Route
                path="/store"
                render={() => <StoreContainer width={this.state.width} />}
              />
              <Route path="/library" render={() => <LibraryContainer />} />
              <Route
                path="/wishlist"
                render={() => <WishlistContainer width={this.state.width} />}
              />
              <Route
                path="/freegames"
                render={() => <FreeGamesContainer />}
              />
              <Route
                path="/gamepage"
                render={(props) => <GamePage {...props} />}
              />
              <Route path="/game" render={() => <Game />} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  storePage: state.storePage,
});

export const AppContainer = connect(mapStateToProps, {
  getStore,
  getLanguage,
  getView,
  getStatus,
})(App);

export default App;
