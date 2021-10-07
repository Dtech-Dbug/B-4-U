import styles from "../../styles/Home.module.css";
import ICON from "../Icons/awards.png";
import test from "../../public/vercel.svg";
import { BsCloudDownloadFill } from "react-icons/bs";

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
        <div className={styles.cardVideoQualityListDiv}>
          <select className={styles.selectListMenu} name="cars" id="cars">
            {formats &&
              formats.map((data) => {
                return <option value="volvo">{data.qualityLabel}</option>;
              })}
          </select>
        </div>

        <div className={styles.cardVideoQualityListDiv}>
          <button className={styles.downloadBtn}>
            Download <BsCloudDownloadFill />
          </button>
        </div>

        <h3 className={styles.cardInfo}>h</h3>
      </div>
    </>
  );
}

export default CARD;
