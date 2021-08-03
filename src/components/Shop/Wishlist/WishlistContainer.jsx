import React from "react";
import { connect } from "react-redux";
import { removeFromWishlist } from "../../../redux/store-reducer";
import Wishlist from "./Wishlist";

class WishlistContainer extends React.Component {
  render() {
    return <Wishlist {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    storePage: state.storePage,
  };
};

export default connect(mapStateToProps, {removeFromWishlist})(WishlistContainer);
