import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.styles.scss";
import { connect } from "react-redux";
const Directory = props => {
  const renderMenuItem = () => {
    return props.sections.map(section => (
      <MenuItem key={section.id} {...section} />
    ));
  };

  return <div className="directory-menu">{renderMenuItem()}</div>;
};
const mapStateToProps = state => {
  return {
    sections: state.sections
  };
};
export default connect(mapStateToProps)(Directory);
