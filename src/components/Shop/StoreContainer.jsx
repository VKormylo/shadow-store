import React from "react";
import Store from "./Store";
import { connect } from "react-redux";
import {
  addToLibrary,
  removeFromLibrary,
  addToWishlist,
  removeFromWishlist,
  changeStatus,
} from "../../redux/store-reducer";

class ShopContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Store {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    storePage: state.storePage,
  };
};

export default connect(mapStateToProps, {
  addToLibrary,
  removeFromLibrary,
  addToWishlist,
  removeFromWishlist,
  changeStatus,
})(ShopContainer);
