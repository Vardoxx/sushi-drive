import { ProductItems } from "../../api/ProductTestApi";
import ProductCard from "../../ui/product-card/ProductCard";

const SeasonPage = () => {
  return <ProductCard items={ProductItems} />;
};

export default SeasonPage;
