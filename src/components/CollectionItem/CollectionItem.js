import React from "react";
import "./CollectionItem.styles.scss";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import CustomButton from "../CustomButton/CustomButton";

const CollectionItem = ({ item, addToCart }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>

      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <CustomButton inverted onClick={() => addToCart(item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default connect(null, { addToCart })(CollectionItem);
