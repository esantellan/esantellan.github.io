import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../../infrastructure/lotties/iam.json";
import useInterval from "../../../infrastructure/hooks/useInterval.hook";

import "./styles.css";

function TopSection() {
  const [title] = useState("hi, i'm Emiliano");
  const [subTitle] = useState("Software developer, self-taught, proactive, enthusiastic and always in search of the continuous learning.");
  const [index, setIndex] = useState(0);

  useInterval(() => {
    if (index < title.length + subTitle.length) {
      setIndex((prev) => prev + 1);
    }
  }, 100);

  return (
    <section className="topSection">
      {/* <img className="mate" src={Mate} alt="Imagen mate argentino" /> */}
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={300}
        width={300}
      />

      <span className="topTitle">{title.slice(0, index)}</span>
      <span className="topSubtitle">
        {index > title.length && subTitle.slice(0, index - title.length)}
      </span>
    </section>
  );
}

export default TopSection;
