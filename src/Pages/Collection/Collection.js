import React from "react";
import "./Collection.styles.scss";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { connect } from "react-redux";
const Collection = props => {
  const collections = props.collection.items;

  return (
    <div className="collection-page">
      <h1 className="title">{props.collection.title}</h1>

      <div className="items">
        {collections.map(col => (
          <CollectionItem key={col.id} item={col} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { collectionName } = ownProps.match.params;
  const collection = state.shopData.find(
    collection =>
      collection.title.toLowerCase() === collectionName.toLowerCase()
  );

  return { collection };
};

export default connect(mapStateToProps)(Collection);
