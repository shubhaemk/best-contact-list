import { ReactComponent as LoadingSVG } from 'assets/rolling.svg';

const LoadingScreen = ({ type }: { type: string }) => {
  return (
    <div className={`loading-screen loading-screen-${type}`}>
      <LoadingSVG className={`loading-screen-value-${type}`} />
    </div>
  );
};

export default LoadingScreen;
