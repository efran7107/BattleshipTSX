import "../styles/logo-component.css";
import bschDark from "../assets/bs-ch-dark.svg";
import bschLight from "../assets/bs-ch-light.svg";
import bsDark from "../assets/bs-dark.svg";
import bsLight from "../assets/bs-light.svg";
import { useTheme } from "../ts/providers-context";

export const LogoComponent = () => {
  const { theme } = useTheme();
  const bschSrc = theme === "dark" ? bschDark : bschLight;
  const bsSrc = theme === "dark" ? bsDark : bsLight;
  return (
    <div className="logo-cont">
      <img src={bschSrc} alt="crosshairs" />
      <img src={bsSrc} alt="battleship" />
    </div>
  );
};
