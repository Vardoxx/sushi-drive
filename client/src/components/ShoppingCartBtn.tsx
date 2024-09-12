// ShoppingCartBtn.js
import { CgShoppingCart } from "react-icons/cg";
import useWidget from "../hooks/useWidget";
import ShoppingCartWidget from "../widgets/ShoppingCart.widget";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const ShoppingCartBtn = () => {
  const [isModalOpen, openWidget] = useWidget();

  const productQuantity = useSelector(
    (state: RootState) => state.shoppingCart.totalQuantity
  );

  return (
    <>
      <div className="shopping-cart-widget" onClick={openWidget}>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            fontSize: "40px",
            top: "-15px",
            right: "5px",
            backgroundColor: "orangered",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            boxShadow: "0px 4px 5px black",
          }}
        >
          {productQuantity}
        </p>
        <CgShoppingCart />
      </div>
      {isModalOpen && <ShoppingCartWidget openState={isModalOpen} />}
    </>
  );
};

export default ShoppingCartBtn;
