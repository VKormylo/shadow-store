import React from "react";
import { connect } from "react-redux";
import {
  getView,
  deleteGame,
  downloadGame,
  removeFromLibrary,
  changeView,
} from "../../redux/store-reducer";
import Library from "./Library";

class LibraryContainer extends React.Component {
  
  render() {
    return <Library {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    storePage: state.storePage,
  };
};

export default connect(mapStateToProps, {
  removeFromLibrary,
  downloadGame,
  deleteGame,
  getView,
  changeView
})(LibraryContainer);
