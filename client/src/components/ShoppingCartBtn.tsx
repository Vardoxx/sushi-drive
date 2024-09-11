// ShoppingCartBtn.js
import { CgShoppingCart } from "react-icons/cg";
import useWidget from "../hooks/useWidget";
import ShoppingCartWidget from "../widgets/ShoppingCart.widget";

const ShoppingCartBtn = () => {
  const [isModalOpen, openWidget] = useWidget();

  return (
    <>
      <div className="shopping-cart-widget" onClick={openWidget}>
        <CgShoppingCart />
      </div>
      {isModalOpen && <ShoppingCartWidget openState={isModalOpen} />}
    </>
  );
};

export default ShoppingCartBtn;
