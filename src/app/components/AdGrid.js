import React from "react";
import Ad from "./Ad";
import "./AdGrid.css";

const AdGrid = () => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "10px",
          padding: "20px",
          width: "100%",
        }}
      >
        <Ad slotId='3535750518' layout='vertical' />
        <Ad slotId='5427416684' layout='horizontal' />
        <Ad slotId='8217231559' layout='vertical' />
        <Ad slotId='4581238872' layout='horizontal' />
        <Ad slotId='4070965389' layout='square' />
      </div>
      <div>content</div>
      <div class='wrapper'>
        <div class='one'>One</div>
        <div class='two'>Two</div>
        <div class='three'>Three</div>
        <div class='four'>Four</div>
        <div class='five'>Five</div>
        <div class='six'>Six</div>
      </div>
    </div>
  );
};

export default AdGrid;
