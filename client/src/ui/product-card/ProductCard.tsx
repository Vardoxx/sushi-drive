import { Button, Card, Col, Image, Row } from "antd";
import { ProductCardProps } from "../../types/product-card";
import { useNotification } from "../../hooks/useNotification";
import { tagColorChanger } from "../../utils/tagColorChanger";
import Meta from "antd/es/card/Meta";

const ProductCard: React.FC<ProductCardProps> = ({ items }) => {
  const { openNotification, contextHolder } = useNotification();

  return (
    <Row justify={"center"} gutter={[24, 24]}>
      {contextHolder}
      {items.map((i) => (
        <Col key={i.id} style={{ position: "relative" }}>
          <div className="tag-container">
            {i.tag?.map((tag) => (
              <div
                key={tag}
                className="tag-body"
                style={{
                  backgroundColor:
                    tag !== undefined ? tagColorChanger(i.tag)[tag] : "",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <Card
            key={i.id}
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
                alt={i.title}
                src={i.img}
              />
            }
          >
            <div>
              <Meta title={i.title} />
            </div>
            <div
              style={{
                maxHeight: "50px",
                overflowY: "scroll",
                marginTop: "10px",
              }}
            >
              <Meta description={i.composition} />
            </div>

            <div
              style={{
                position: "absolute",
                right: "5px",
                bottom: "5px",
                height: "32px",
              }}
            >
              <Button
                onClick={() => openNotification("success", i.title)}
                type="primary"
                shape="round"
                size={"middle"}
              >
                {`${i.cost} ₽`}
              </Button>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductCard;
