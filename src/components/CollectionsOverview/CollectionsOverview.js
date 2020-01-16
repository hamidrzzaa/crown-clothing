import React from "react";
import "./CollectionsOverview.styles.scss";
import { connect } from "react-redux";
import PreviewCollection from "../PreviewCollection/PreviewCollection";

const CollectionsOverview = props => {
  const renderCollectionsPreview = () => {
    return props.collections.map(collection => (
      <PreviewCollection key={collection.id} {...collection} />
    ));
  };
  return (
    <div className="collection-overview">{renderCollectionsPreview()}</div>
  );
};

const mapStateToProps = state => {
  return {
    collections: state.shopData
  };
};

export default connect(mapStateToProps)(CollectionsOverview);
