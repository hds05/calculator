import React from 'react'
import classes from "./Button.module.css"

function Button({value, handler}) {
  return (
    // <div className={classes.calcBtns}>
    <div className={value =="c" || value =="=" ? `${classes.calcBtns} ${classes.res}`: `${classes.calcBtns}`} onClick={()=>handler(value)} style={{border: "1px solid grey" }} >
        {value}
    </div>
  )
}

export default Button