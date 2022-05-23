import React from "react";
import ListItem from "./ListItem";

function Listing (props) {

  const items=props.items;

  return (
    <div className="item-list">
       {items.map((item) => <ListItem key={item.listing_id} item={item} />)}
    </div>
  )
}

export default Listing;
