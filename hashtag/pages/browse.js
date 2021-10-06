import CARD from "../Components/Ui-Elements/CARD";
import styles from "../styles/Home.module.css";

function browse() {
  return (
    <>
      <header>
        <h3 className={styles.header}>get #browsing!</h3>
      </header>

      <div className={styles.cardGallery}>
        <CARD info=" Education" />
        <CARD info="Entertainment" />
        <CARD info="Sports" />
        <CARD info="Comedy" />
      </div>
    </>
  );
}

export default browse;
