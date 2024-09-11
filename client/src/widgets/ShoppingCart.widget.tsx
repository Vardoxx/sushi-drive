// ShoppingCartWidget.js
import { Modal } from "antd";
import { FC, useState } from "react";
import { ShoppingCartWidgetProps } from "../types/shopping-cart-widget";

const ShoppingCartWidget: FC<ShoppingCartWidgetProps> = ({ openState }) => {
  const [isModalOpen, setIsModalOpen] = useState(openState);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ShoppingCartWidget;
