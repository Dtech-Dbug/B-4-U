import CARD from "../Components/Ui-Elements/CARD";
import styles from "../styles/Home.module.css";
import { FaSearch } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { useEffect, useState } from "react";

function Browse() {
  const [videoInfo, setVideoInfo] = useState([]);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [query, setQuery] = useState("");

  let host = "https://downloadmodule.herokuapp.com/api/";

  const fetchData = (e) => {
    e.preventDefault();
    console.log(host + "videoInfo?videoURL=" + query);
    fetch(host + "videoInfo?videoURL=" + query)
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
  };

  const handleDownload = () => {
    console.log("hello");
    console.log("QRy:", query);
    fetch(host + "download?videoURL=" + query)
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
  };

  return (
    <>
      <header className={styles.headerContainer}>
        <h3 className={styles.header}>get #browsing!</h3>
      </header>

      {/* {console.log("load state", loading)} */}

      <div className={styles.searchInput}>
        <form className={styles.searchInput} onSubmit={fetchData}>
          <FaSearch className={styles.searchIcon} />
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            placeholder="Paste the link here "
          ></input>
        </form>
      </div>

      <div className={styles.cardGallery}>
        {videoLoaded && (
          <CARD
            handleDownload={handleDownload}
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

export default Browse;
