import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

export const DishDetail = props => {
  const comments = props.selectedComment.map((comment) => {
    return (
      <ul style={{ listStyleType: "none" }} key={comment.id}>
        <li>{comment.comment}</li>
        <li>
          --{comment.author}, {comment.date}
        </li>
      </ul>
    );
  });

 
  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        {renderDish(props.selectedDish)}
      </div>
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
            {comments}
      </div>
    </div>
  );
};


const renderDish = dish => {
  if (dish != null)
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  else {
    return <div />;
  }
};
