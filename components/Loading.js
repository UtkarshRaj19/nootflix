
import classes from "../styles/styles.module.css"


export default function Loading() {
  return (
  <>

      <div>

     <div className=" w-full flex justify-center items-center pt-20"> 
     <div className={classes.customspin}>
      <img src="/nootfilix.png" className="h-[300px] w-[300px] sm:w-[500px] sm:h-[500px]" alt="Nootfilix"/>
      </div>
      </div>
      </div></>
  );
}