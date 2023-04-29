import { tracks } from "../../config";
import { useContext, useEffect, useState } from "react";
import Player from "./Player";
import Icons from "../Icons";
import IsReadyContext from "@/contexts/IsReadyContext";

function Audio(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { isReady } = useContext(IsReadyContext);

  useEffect(() => {
    Player.tracks = tracks;
    Player.autoplay = true;
    Player.init();
    if (isReady && !isPlaying) {
      setIsPlaying(true);
      const playButton = document.querySelector(".play");
      playButton.click();
    }
  }, [isReady]);

  return (
    <div className="Audio mx-auto">
      <div className="player">
        <canvas id="player-canvas"></canvas>
        <div className="song">
          <div className="artist">Kavinsky</div>
          <div className="name">Odd Look ft. The Weeknd</div>
        </div>
        <div className="controls">
          <div className="prevSong">
            <Icons
              icon="prev"
              style={{
                fontSize: "60px",
                color: "var(--colorText)",
                margin: "1rem",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="play" style={{ display: "none" }}>
            <Icons
              icon="play"
              style={{
                fontSize: "60px",
                color: "var(--colorText)",
                margin: "1rem",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="pause">
            <Icons
              icon="pause"
              style={{
                fontSize: "60px",
                color: "var(--colorText)",
                margin: "1rem",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="nextSong">
            <Icons
              icon="next"
              style={{
                fontSize: "60px",
                color: "var(--colorText)",
                margin: "1rem",
                cursor: "pointer",
              }}
            />
          </div>
        </div>

        {/* <p className="soundControl">
          <Icons
            className="btn-mute"
            icon="mute"
            style={{ cursor: "pointer" }}
          />
          <Icons
            className="btn-volumeUp"
            icon="volumeUp"
            style={{ cursor: "pointer" }}
          />
        </p> */}
        <div className="time">00:00</div>
      </div>
    </div>
  );
}

export default Audio;
