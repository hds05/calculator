import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import Button from "./Button";

function Home() {
  const [res, setRes] = useState("");

  const buttons = [
    "c", "Del", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", "."
  ];

  const findval = () => {
    try {
      const result = eval(res);
      setRes(result.toString());
    } catch (error) {
      console.error("Error evaluating expression:", error);
    }
  };

  const handler = (arg) => {
    if (arg === "c") setRes("");
    else if (arg === "=") findval();
    else if (arg === "Del") {
      let n = res.length;
      if (n > 0) setRes(res.slice(0, n - 1));
    } else setRes(res.concat(arg));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      const validKeys = buttons.concat(["Backspace", "Enter"]);
      if (validKeys.includes(key)) {
        if (key === "Backspace") handler("Del");
        else if (key === "Enter") handler("=");
        else handler(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [res]);

  return (
    <div className={classes.home}>
      <div className={classes.inner}>
        <div className={classes.result}>
          <div className={classes.resbox}>{res}</div>
        </div>
        <div className={classes.btns}>
          {buttons.map((ele, index) => (
            <Button handler={handler} value={ele} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
