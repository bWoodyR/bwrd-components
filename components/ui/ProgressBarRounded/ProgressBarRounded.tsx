import { CSSProperties, useEffect, useState } from "react";

type ProgressBarRoundedProps = {
  value: number;
  backgroundColor?: string;
  circleColor?: string;
  fillCircleColor?: string;
  circleSize?: number;
  showValue?: boolean;
  animation?: boolean;
};

const ProgressBarRounded = ({ value = 78, backgroundColor = "#242424", circleColor = "black", fillCircleColor = "orange", circleSize = 100, showValue = true, animation = true }: ProgressBarRoundedProps) => {
  const [progressValue, setProgressValue] = useState(0);

  const hideProgressElement: CSSProperties = {
    visibility: "hidden",
    width: 0,
    height: 0,
  };

  const progressBarRoundedStyles: CSSProperties = {
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    borderRadius: "50%",
    background: `radial-gradient(closest-side, ${backgroundColor} 79%, transparent 80% 100%), conic-gradient(${fillCircleColor} ${progressValue}%, ${circleColor} 0)`,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    fontWeight: "bold",
    letterSpacing: "0.05rem",
    fontSize: "18px",
  };

  useEffect(() => {
    if (!animation && value <= 100) setProgressValue(value);
    if (animation && value <= 100 && progressValue !== value) {
      const timeout = setTimeout(() => {
        setProgressValue((prev) => {
          if (progressValue < value) {
            return prev + 1;
          } else return prev - 1;
        });
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [progressValue, value, animation]);

  return (
    <div style={progressBarRoundedStyles}>
      <progress max={100} value={progressValue} style={hideProgressElement}>
        {progressValue}%
      </progress>
      {showValue && <p>{progressValue}%</p>}
    </div>
  );
};

export default ProgressBarRounded;
