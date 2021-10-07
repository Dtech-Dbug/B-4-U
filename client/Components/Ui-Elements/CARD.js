import styles from "../../styles/Home.module.css";
import ICON from "../Icons/awards.png";
import test from "../../public/vercel.svg";

function CARD({ data, link, formats }) {
  return (
    <>
      {console.log("LINK", data)}
      <div className={styles.cardContainer}>
        {/* <img src="" height={150} width={150} alt="oop" /> */}
        <iframe
          className={styles.cardVideo}
          src={link}
          frameborder="0"
        ></iframe>
        <div className={styles.cardVideoQualityList}>
          <select name="cars" id="cars">
            {formats &&
              formats.map((data) => {
                return <option value="volvo">{data.qualityLabel}</option>;
              })}
          </select>
        </div>

        <h3 className={styles.cardInfo}>h</h3>
      </div>
    </>
  );
}

export default CARD;
