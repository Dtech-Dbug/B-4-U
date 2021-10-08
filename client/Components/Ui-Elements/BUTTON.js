import styles from "../../styles/Home.module.css";
function BUTTON({ handleDownload }) {
  return (
    <>
      <div
        onClick={(e) => console.log(e.target)}
        className={styles.buttonWrapper}
      >
        <button className={styles.wrappedContent}>
          <p className={styles.btnTextContent}>Start</p>
        </button>
      </div>
    </>
  );
}

export default BUTTON;
