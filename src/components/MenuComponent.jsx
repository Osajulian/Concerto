import React, { Component } from "react";
import { DishDetail } from "./DishDetailComponent";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
      selectedComment: []
    };
  }

  onDishSelect = dish => {
    let selectedComments = [];
    for (let comment of dish.comments) {
      selectedComments.push(comment);
      this.setState({
        selectedDish: dish,
        selectedComment: selectedComments 
      });
    }
  };

  render() {
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
         <DishDetail
              selectedDish={this.state.selectedDish}
              selectedComment={this.state.selectedComment}
            />
          </div>
    );
  }
}

export default Menu;
