import React from "react";

function ListItem (props) {

  const item = props.item;
  const title = item.title;

  function showCurrency (currency) {
    switch (currency) {
      case "USD":
        return "$";
      case "EUR":
        return (<span>&euro;</span>);
      default:
        return (currency);
    }
  }

  function showClass (quantity) {
    if (quantity<=10) {
      return ("item-quantity level-low");
    }
    if (quantity<=20) {
      return ("item-quantity level-medium");
    }
    if (quantity>20) {
      return ("item-quantity level-high");
    }
  }

  if (item.title !== undefined) { 
    return (
      <div className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} alt={item.title} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title.length>50 ? ((title.slice(0, 50)) + '...') : item.title}</p>
          <p className="item-price">{showCurrency(item.currency_code)} {item.price}</p>
          <p className={showClass(item.quantity)}>{item.quantity} left</p>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default ListItem;
