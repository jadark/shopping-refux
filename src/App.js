import React, { Component } from 'react';
import { Navbar, Grid, Row, Col} from 'react-bootstrap';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import  SearchInput from "./components/SearchInput";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a className="logo" href="/">
                <img src="https://vignette.wikia.nocookie.net/logopedia/images/c/cc/Funko.svg/revision/latest?cb=20160921113603" alt=""/>
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Col className="pull-right" sm={6}>
            <SearchInput />  
          </Col>  
        </Navbar> 

        <Grid>
          <Row className="box_wrapper">
            <Col className="layout" sm={8} xs={12}>
              <ProductList />
            </Col>
            <Col className="layout sidebar" sm={4} xs={12}>
              <ShoppingCart />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
