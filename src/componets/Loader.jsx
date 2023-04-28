import { useContext, useEffect, useState } from "react";

import anime from "animejs";
import IconLoader from "./IconLoader";
import IsReadyContext from "@/contexts/IsReadyContext";

function Loader() {
  const [isFinalized1, setIsFinalized1] = useState(false);
  const [isFinalized2, setIsFinalized2] = useState(false);
  const { setIsReady } = useContext(IsReadyContext);

  const animateLogo = () => {
    const animation = anime.timeline({
      complete: () => {
        setIsFinalized1(true);
      },
    });

    animation
      .add({
        targets: "#logo path",
        duration: 2000,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        delay: 400,
        targets: "#logo #letter",
        duration: 600,
        easing: "easeInOutQuart",
        opacity: 1,
      });
  };

  const closeLoader = () => {
    const animation = anime.timeline({
      complete: () => {
        setIsFinalized2(true);
      },
    });

    animation.add({
      targets: "#loader",
      duration: 500,
      easing: "easeInOutQuart",
      opacity: 0,
    });
  };

  useEffect(() => {
    animateLogo();
  }, []);

  const clickHandler = () => {
    closeLoader();
    setIsReady(true);
  };

  return (
    <>
      <div id="loader" className={isFinalized2 ? "d-none" : ""}>
        <div className="logo-wrapper">
          <IconLoader />

          <div
            style={{
              transition: "0.7s",
              height: isFinalized1 ? "50px" : "0px",
            }}
          >
            <div
              style={{
                margin: 0,
                transition: "0.7s",
                opacity: isFinalized1 ? 1 : 0,
              }}
              className={"btn btn-primary mt-5"}
              onClick={clickHandler}
            >
              clickme!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Loader;
