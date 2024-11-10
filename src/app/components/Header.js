import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faThreads,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => (
  <header
    style={{
      position: "sticky",
      top: 0,
      backgroundColor: "#333",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      padding: "10px",
      zIndex: 1000,
      maxHeight: "60px",
    }}
  >
    <div style={{ flex: 1 }}>Your Logo</div>
    <h1 style={{ flex: 2, textAlign: "center" }}>Find the Content</h1>
    <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
      <FontAwesomeIcon
        icon={faInstagram}
        style={{ margin: "0 10px", maxHeight: "40px", minHeight: "20px" }}
      />
      <FontAwesomeIcon
        icon={faXTwitter}
        style={{ margin: "0 10px", maxHeight: "40px", minHeight: "20px" }}
      />
      <FontAwesomeIcon
        icon={faThreads}
        style={{ margin: "0 10px", maxHeight: "40px", minHeight: "20px" }}
      />
      {/* <FontAwesomeIcon
        icon={faFacebook}
        style={{ margin: "0 10px", maxHeight: "40px", minHeight: "20px" }}
      /> */}
    </div>
  </header>
);

export default Header;
