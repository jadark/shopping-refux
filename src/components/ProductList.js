import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { addToCart } from "../actionCreator";
import { connect } from 'react-redux';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  }
};

const ProductList = ({ products, addToCart }) => {  
  const viewStock = (product) => {
    if (product.stock <= 0) {
      return <div><p><Button bsStyle="primary" role="button" disabled> Sin Stock</Button></p></div>;
    } else {
      return <div><h5>Stock: <strong>{product.stock}</strong></h5><p><Button bsStyle="primary" onClick={() => addToCart(product)} role="button" disabled={product.stock <= 0}>Precio: <strong>{product.price} PEN</strong> <Glyphicon glyph="shopping-cart" /></Button></p></div>;
    }
  }
  if (products.length) {
    return (
      <div style={styles.products}>
        {products.map(product =>  
          <div className="thumbnail" key={product.id}>
            <div className="boxImg">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="caption">
              <h4>{product.name}</h4>
              {viewStock(product)}
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="loadingBox text-center">
        <h3>Cargando productos...</h3>
        <img src='https://media.giphy.com/media/l3HXhGvYiNRKM/giphy.gif' alt=""/>
      </div>
    );
  }
  // addToCart(product) {
  //   store.dispatch(addToCart(product))
  // }
};

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart(product) {
      dispatch(addToCart(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
