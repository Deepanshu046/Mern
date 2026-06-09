import Item from "./Item";

function Fooditems(items) {
  // let foodItems = ["apple" , "mango" , "Litchi"]
  return(
    <ul className="list-group">
    {items.map((item) => (
      <Item key = {items} foodItems = {items}></Item>
    ))}
  </ul>
  );
}
export default Fooditems;
