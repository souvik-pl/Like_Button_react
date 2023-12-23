import { useState } from "react";
import styles from "./App.module.css";
import LikeButton from "./LikeButton/LikeButton";

function App() {
  const [errorMessage, setErrorMessage] = useState("");

  function errorHandler(message: string) {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage("");
    }, 2500);
  }

  return (
    <div className={styles.container}>
      <LikeButton errorHandler={errorHandler} />
      <p className={styles.error}>{errorMessage}</p>
    </div>
  );
}

export default App;
