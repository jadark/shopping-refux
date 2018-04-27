import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { removeFromCart } from "../actionCreator";
import { connect } from 'react-redux';

const styles = {
  footer: {
    fontWeight: 'bold'
  },
  smile: {
    fontSize: '60px'
  },
  empty: {
    opacity:'0.5'
  }
}

const ShoppingCart = ({ cart, removeFromCart }) => {
  if (cart.length) {
    return (
      <Panel className="shoppingCard" header="Shopping Cart">
        <Table fill>
          <tbody>
            {cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    )
  } else {
    return (
      <div className="emptyCard text-center">
        <h2 style={styles.smile}><strong>:(</strong></h2>
        <h3>Tu cesta está vacía</h3>
        <img style={styles.empty} src="https://www.404informatika.net/wp-content/themes/theshopier/images/empty-cart.png" alt="empty-cart"/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product) {
      dispatch(removeFromCart(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
