import StartButton from "../components/StartButton";
import StopButton from "../components/StopButton";

function HeaderBar() {
  return (
    <header>
      <StartButton label="시작" />
      <StopButton label="멈춤" />
    </header>
  );
}

export default HeaderBar;
