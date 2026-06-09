function Errormsg(items){

  // let foodItems = ["apple" , "mango" , "Litchi"]
  return(
   <>
     {items.length === 0 && <h3> I am still Hungry</h3>}
   </>
  );
}

export default Errormsg;