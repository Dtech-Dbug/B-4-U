import CARD from "../Components/Ui-Elements/CARD";
import styles from "../styles/Home.module.css";
import { FaSearch } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { useEffect, useState } from "react";

function browse() {
  const [videoInfo, setVideoInfo] = useState([]);
  const [videoLoaded, setVideoLoaded] = useState(false);
  let host = "http://localhost:8000/";
  useEffect(() => {
    fetch(
      host + "videoInfo?videoURL=http://www.youtube.com/watch?v=aqz-KE-bpKQ"
    )
      .then((res) => res.json())
      .then((data) => {
        setVideoLoaded(false);
        console.log("read", data);
        console.log("link", data.videoDetails.embed.iframeUrl);
        setVideoInfo(data);
        setVideoLoaded(true);
        // videoInfo.push(data);
      })
      .catch((err) => {
        {
          console.log("Error while fetching", err.message);
        }
      });
  }, []);
  const icon = () => <FaSearch />;
  return (
    <>
      <header className={styles.headerContainer}>
        <h3 className={styles.header}>get #browsing!</h3>
      </header>

      {/* {console.log("load state", loading)} */}

      <div className={styles.searchInput}>
        <FaSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search Your State here"></input>
      </div>

      <div className={styles.cardGallery}>
        {videoLoaded && (
          <CARD
            data={videoInfo}
            link={videoInfo.videoDetails.embed.iframeUrl}
            formats={videoInfo.formats}
          />
        )}

        {/* <CARD info="Entertainment" />
       
        <CARD info="Comedy" /> */}
      </div>

      {/* {icon()} */}
    </>
  );
}

export default browse;
