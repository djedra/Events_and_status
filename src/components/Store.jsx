import React, { Component } from 'react';
import products from '../data/products.json';
import './Store.css';

class IconSwitch extends Component {
  render() {
    const { icon, onSwitch } = this.props;
    return (
      <div className="icon-switch">
        <span className="material-icons" onClick={onSwitch}>
          {icon}
        </span>
      </div>
    );
  }
}

class ShopCard extends Component {
  render() {
    const { card } = this.props;
    return (
      <div className="shop-card">
        <div className="card-header">
          <h3>{card.name.toUpperCase()}</h3>
          <span className="card-color">{card.color}</span>
        </div>
        <div className="card-image">
          <img src={card.img} alt={card.name} />
        </div>
        <div className="card-footer">
          <span className="card-price">${card.price}</span>
          <button className="add-to-cart">ADD TO CART</button>
        </div>
      </div>
    );
  }
}

class CardsView extends Component {
  render() {
    const { cards } = this.props;
    return (
      <div className="cards-view">
        {cards.map((card, index) => (
          <ShopCard key={index} card={card} />
        ))}
      </div>
    );
  }
}

class ShopItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="shop-item">
        <div className="item-image">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="item-name">{item.name.toUpperCase()}</div>
        <div className="item-color">{item.color}</div>
        <div className="item-price">${item.price}</div>
        <button className="add-to-cart">ADD TO CART</button>
      </div>
    );
  }
}

class ListView extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="list-view">
        {items.map((item, index) => (
          <ShopItem key={index} item={item} />
        ))}
      </div>
    );
  }
}

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'cards',
      products: products
    };
  }

  handleSwitchView = () => {
    this.setState(prevState => ({
      view: prevState.view === 'cards' ? 'list' : 'cards'
    }));
  };

  render() {
    const { view, products } = this.state;
    const icon = view === 'cards' ? 'view_list' : 'view_module';

    return (
      <div className="store">
        <IconSwitch 
          icon={icon} 
          onSwitch={this.handleSwitchView} 
        />
        {view === 'cards' ? (
          <CardsView cards={products} />
        ) : (
          <ListView items={products} />
        )}
      </div>
    );
  }
}

export default Store;