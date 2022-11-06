import { useDispatch } from "react-redux";
import BurgerCard from "./BurgerCard";
import { toast } from "react-hot-toast";

const Menu = () => {
  const dispatch = useDispatch();

  const handleAddcart = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({
          type: "bangaliBurgerIncrement",
        });
        dispatch({
          type: "calculatePrices",
        });
        toast.success("Added to Cart");
        break;
      case 2:
        dispatch({
          type: "desiSpicyBurgerIncrement",
        });
        dispatch({
          type: "calculatePrices",
        });
        toast.success("Added to Cart");
        break;
      case 3:
        dispatch({
          type: "chineseBurgaIncrement",
        });
        dispatch({
          type: "calculatePrices",
        });
        toast.success("Added to Cart");
        break;

      default:
        break;
    }
  };
  return (
    <div id="menu" className="px-2 py-4">
      <h1 className="title my-2">Delicious Items</h1>

      <div className="menu-items flex">
        <BurgerCard
          image={
            "https://st.depositphotos.com/2576363/4514/i/600/depositphotos_45148843-stock-photo-cheeseburger-on-black-background.jpg"
          }
          name={"Bangali Burger"}
          price={"400"}
          delay={0.1}
          itemNum={1}
          handleAddcart={handleAddcart}
        />

        <BurgerCard
          image={
            "https://i.pinimg.com/originals/96/ca/03/96ca03681b86530cc2426c0cfc9a1414.jpg"
          }
          name={"Desi Spicy Burger"}
          price={"900"}
          delay={0.3}
          itemNum={2}
          handleAddcart={handleAddcart}
        />

        <BurgerCard
          image={
            "https://d2luv1saso99wi.cloudfront.net/2022_Hot-Ones_App-Web-Menu_1500x920_Burger_lg1661364018.jpeg"
          }
          name={"Chinese Burga"}
          price={"650"}
          delay={0.5}
          itemNum={3}
          handleAddcart={handleAddcart}
        />
      </div>
    </div>
  );
};

export default Menu;
