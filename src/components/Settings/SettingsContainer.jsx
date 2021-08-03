import React from "react";
import { connect } from "react-redux";
import { changeLanguage } from "../../redux/language-reducer";
import Settings from "./Settings";

class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.hideNavbar();
  }

  componentWillUnmount() {
    this.props.hideNavbar();
  }

  render() {
    return <Settings {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    languageReducer: state.languageReducer,
  };
};

export default connect(mapStateToProps, { changeLanguage })(SettingsContainer);
