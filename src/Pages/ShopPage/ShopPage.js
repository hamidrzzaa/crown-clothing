import React from "react";
import shopData from "./shop.data";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopData
    };
  }
  renderCollectionsPreview() {
    return this.state.collections.map(collection => (
      <PreviewCollection key={collection.id} {...collection} />
    ));
  }
  render() {
    return <div className="shop-page">{this.renderCollectionsPreview()}</div>;
  }
}

export default ShopPage;
