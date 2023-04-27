import { useEffect, useState } from "react";
import anime from "animejs";
import IconLoader from "./IconLoader";

function Loader() {
  const [isFinalized, setIsFinalized] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => {
        setIsFinalized(true);
      },
    });

    loader
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
      })
      .add({
        targets: "#loader",
        delay: 1000,
        duration: 500,
        easing: "easeInOutQuart",
        opacity: 0,
      });
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div id="loader" className={isFinalized ? "d-none" : ""}>
      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </div>
  );
}
export default Loader;
