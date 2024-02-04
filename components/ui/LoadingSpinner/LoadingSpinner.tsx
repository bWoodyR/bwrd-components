import "./loadingSpinner.scss";

type LoadingSpinnerProps = {
  circleSize?: number | null;
  strokeWidth?: number;
  color?: string | undefined;
};

const LoadingSpinner = ({ circleSize = null, strokeWidth = 4, color = undefined }: LoadingSpinnerProps) => {
  const loadingSpinnerStyles = {
    width: `${circleSize}px` || "80px",
  };

  return (
    <div className="spinner" style={loadingSpinnerStyles}>
      <svg viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" strokeWidth={strokeWidth} style={{ stroke: color || "orange" }}></circle>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
