function Errormsg(props){

  let foodItems = ["apple" , "mango" , "Litchi"]
  return(
   <>
     {foodItems.length === 0 && <h3> I am still Hungry</h3>}
   </>
  );
}

export default Errormsg;