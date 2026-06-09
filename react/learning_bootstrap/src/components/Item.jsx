function Item(props){
  return(
    <li key={props.foodItems}>{props.foodItems}</li>
  );
};
export default Item;