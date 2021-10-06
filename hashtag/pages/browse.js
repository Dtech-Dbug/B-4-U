import CARD from "../Components/Ui-Elements/CARD";
import styles from "../styles/Home.module.css";

function browse() {
  return (
    <>
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
