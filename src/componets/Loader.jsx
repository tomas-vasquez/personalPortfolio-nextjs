import { useEffect } from "react";
import anime from "animejs";
import IconLoader from "./IconLoader";

function Loader() {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => {
        // alert("comppete");
      },
    });

    loader
      .add({
        targets: "#logo path",
        delay: 300,
        duration: 2000,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: "#logo #letter",
        duration: 700,
        easing: "easeInOutQuart",
        opacity: 1,
      })
      .add({
        targets: "#logo",
        delay: 2000,
        duration: 300,
        easing: "easeInOutQuart",
        opacity: 0,
        scale: 0.1,
      });
  };

  useEffect(() => {
    // const timeout = setTimeout(() => setIsMounted(true), 10000``);
    animate();
    // return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="loader">
      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </div>
  );
}
export default Loader;
