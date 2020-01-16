import React from "react";
import CollectionOverview from "../../components/CollectionsOverview/CollectionsOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../Collection/Collection";
const ShopPage = props => {
  const { match } = props;
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        path={`${match.path}/:collectionName`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
