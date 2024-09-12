import { Button, Modal, Space, Tag } from "antd";
import { FC, useEffect, useState } from "react";
import { ShoppingCartWidgetProps } from "../types/shopping-cart-widget";
import { Table } from "antd";
import type { TableProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ItemsProps } from "../types/product-card";
import { removeItemFromCart } from "../store/slices/shoppingCart.slice";

const ShoppingCartWidget: FC<ShoppingCartWidgetProps> = ({ openState }) => {
  const dispatch = useDispatch();
  const cartItems: ItemsProps[] = useSelector(
    (state: RootState) => state.shoppingCart.items
  );
  const totalCost: number = useSelector(
    (state: RootState) => state.shoppingCart.totalCost
  );

  const [isModalOpen, setIsModalOpen] = useState(openState);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns: TableProps["columns"] = [
    {
      title: "Позиция",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Примечания",
      dataIndex: "tag",
      key: "tag",
      render: (_, { tag }) => (
        <>
          {tag.map((tag: string) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "острое") {
              color = "red";
            }
            if (tag === "классическое") {
              color = "green";
            }
            if (tag === "постное") {
              color = "warning";
            }
            if (tag === "сладкое") {
              color = "purple";
            }

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Кол-во",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Цена",
      key: "cost",
      dataIndex: "cost",
    },
    {
      title: "Удалить",
      key: "remove",
      render: (record) => (
        <Space size="middle">
          <a onClick={() => dispatch(removeItemFromCart(record))}>Удалить</a>
        </Space>
      ),
    },
  ];

  const updateTableData = () => {
    const data = cartItems.map((i) => ({
      id: i.id,
      key: i.id,
      title: i.title,
      cost: `${i.cost} ₽`,
      quantity: i.quantity,
      tag: i.tag,
    }));

    return data;
  };

  useEffect(() => {
    updateTableData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  return (
    <>
      <Modal
        title="Корзина"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
      >
        <Table columns={columns} dataSource={updateTableData()} />
        <Button
          type="primary"
          onClick={handleOk}
        >{`Заказать: ${totalCost} ₽`}</Button>
      </Modal>
    </>
  );
};

export default ShoppingCartWidget;
