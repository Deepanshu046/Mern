import style from "./Prop.module.css"
function Prop({ raj }) {
  console.log(raj);

  return (
    <div className={style.hi}>
      Hello {raj}
    </div>
  );
}

export default Prop;