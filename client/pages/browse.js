import CARD from "../Components/Ui-Elements/CARD";
import styles from "../styles/Home.module.css";

function browse() {
  return (
    <>
      <header className={styles.headerContainer}>
        <h3 className={styles.header}>get #browsing!</h3>
      </header>

      {/* <div className={styles.cardGallery}>
        <CARD info=" Education" />
        <CARD info="Entertainment" />
        <CARD info="Sports" />
        <CARD info="Comedy" />
      </div> */}

      <div className="state-search-input">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="Search Your State here"></input>
      </div>
    </>
  );
}

export default browse;
