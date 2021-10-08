import styles from "../../styles/Home.module.css";
import ICON from "../Icons/awards.png";
import test from "../../public/vercel.svg";
import { BsCloudDownloadFill } from "react-icons/bs";

function CARD({ data, link, formats, handleDownload }) {
  return (
    <>
      {console.log("LINK", data)}
      <div className={styles.cardContainer}>
        {/* <img src="" height={150} width={150} alt="oop" /> */}
        <iframe
          className={styles.cardVideo}
          src={link}
          frameBorder="0"
        ></iframe>

        <figcaption>
          <h3 className={styles.cardInfo}>
            CATEGORY :{" "}
            <span className={styles.infoAnimation}>
              {data.videoDetails.category}
            </span>
          </h3>
          <h3 className={styles.cardInfo}>TITLE : {data.videoDetails.title}</h3>
        </figcaption>

        <div className={styles.actions}>
          <div className={styles.cardVideoQualityListDiv}>
            <select className={styles.selectListMenu} name="cars" id="cars">
              {formats &&
                formats.map((data, index) => {
                  return (
                    <option key={index} value="volvo">
                      {data.qualityLabel}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className={styles.cardVideoQualityListDiv}>
            <button onClick={handleDownload} className={styles.downloadBtn}>
              Download <BsCloudDownloadFill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CARD;
