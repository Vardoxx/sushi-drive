import { Button, Card, Col, Image, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { ProductCardProps } from "../../types/product-card";

const ProductCard: React.FC<ProductCardProps> = ({ items }) => {
  return (
    <Row justify={"center"} gutter={[24, 24]}>
      {items.map((item) => (
        <Col>
          <Card
            key={item.id}
            hoverable
            style={{
              position: "relative",
              height: 320,
              width: 240,
              maxHeight: 360,
              borderRadius: "1rem",
            }}
            cover={
              <Image
                height={150}
                style={{ borderRadius: "1rem" }}
                alt={item.title}
                src={item.img}
              />
            }
          >
            <div>
              <Meta title={item.title} />
            </div>
            <div
              style={{
                maxHeight: "50px",
                overflowY: "scroll",
                marginTop: "10px",
              }}
            >
              <Meta description={item.composition} />
            </div>

            <div
              style={{
                position: "absolute",
                right: "5px",
                bottom: "5px",
                height: "32px",
              }}
            >
              <Button type="primary" shape="round" size={"middle"}>
                {`${item.cost} ₽`}
              </Button>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductCard;
