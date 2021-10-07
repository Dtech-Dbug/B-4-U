import styles from "../../styles/Home.module.css";
import ICON from "../Icons/awards.png";
import test from "../../public/vercel.svg";

function CARD({ link, title, desc }) {
  return (
    <>
      <div className={styles.cardContainer}>
        {/* <img src="" height={150} width={150} alt="oop" /> */}
        <iframe
          src="https://www.youtube.com/embed/aqz-KE-bpKQ"
          frameborder="0"
        ></iframe>
        <h3 className={styles.cardInfo}>{info}</h3>
      </div>
    </>
  );
}

export default CARD;
