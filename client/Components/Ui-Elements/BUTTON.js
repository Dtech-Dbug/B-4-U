import styles from "../../styles/Home.module.css";
function BUTTON() {
  return (
    <>
      <div className={styles.buttonWrapper}>
        <button className={styles.wrappedContent}>
          <p className={styles.btnTextContent}>Start</p>
        </button>
      </div>
    </>
  );
}

export default BUTTON;
