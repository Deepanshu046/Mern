import styles from "./Child.module.css"
const Child = (props)=>{
  return(
    <div className={styles.Container}>{props.children}</div>
  );
}
export default Child;