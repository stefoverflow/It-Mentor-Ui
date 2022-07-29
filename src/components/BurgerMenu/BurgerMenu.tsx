import BurgerMenuLines from "./BurgerMenuLines/BurgerMenuLines";
import "./BurgerMenu.scss";

const BurgerMenu = () => {
  return (
    <div className="burger-menu">
      <svg
        style={{ width: "1.8rem", height: "1.2 rem" }}
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 12H6V10H18V12ZM18 7H0V5H18V7ZM18 2H6V0H18V2Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default BurgerMenu;