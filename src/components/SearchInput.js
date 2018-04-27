import React, { Component } from 'react';
 import { Form, FormControl, FormGroup, Glyphicon } from 'react-bootstrap';
import { searchFilter } from "../actionCreator";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchInput extends Component{
    render() {
        const {searchFilter, value} = this.props;
        return (
            <Form className="boxSearch">
                <FormGroup>
                <FormControl
                    type="text"
                    placeholder="Buscar un producto..."
                    onChange={(e) => searchFilter(e.target.value)}
                    // value={value}
                />
                <FormControl.Feedback>
                    <Glyphicon glyph="search" />
                </FormControl.Feedback>
                </FormGroup>
            </Form>
        )
    }
}

function mapStateToProps({productsList}) {
  return {value: productsList};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({searchFilter}, dispatch);
}

// const mapStateToProps = state => {
//     return {
//         value: state.value
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         searchFilter(value) {
//             dispatch(searchFilter(value));
//       }
//     }
//   }

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);