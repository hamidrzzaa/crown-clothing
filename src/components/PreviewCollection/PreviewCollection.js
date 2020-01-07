import React from "react";
import "./PreviewCollection.styles.scss";
import CollectionItem from "../CollectionItem/CollectionItem";
const PreviewCollection = ({ title, items }) => {
  //just for item pre collection to render
  const renderCollectionItem = function() {
    return items
      .slice(0, 4)
      .map(item => <CollectionItem key={item.id} {...item} />);
  };
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">{renderCollectionItem()}</div>
    </div>
  );
};

export default PreviewCollection;
