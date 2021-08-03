import React from "react";
import { connect } from "react-redux";
import FreeGamesPage from "./FreeGamesPage";
import { addToWishlist, removeFromWishlist } from "../../../redux/store-reducer.js";

class FreeGamesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <FreeGamesPage {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    storePage: state.storePage,
  };
};

export default connect(mapStateToProps, {addToWishlist, removeFromWishlist})(FreeGamesContainer);
