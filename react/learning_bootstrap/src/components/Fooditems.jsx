import Item from "./Item";

function Fooditems() {
  let foodItems = ["apple" , "mango" , "Litchi"]
  return(
    <ul className="list-group">
    {foodItems.map((item) => (
      <Item foodItems = {item}></Item>
    ))}
  </ul>
  );
}
export default Fooditems;
