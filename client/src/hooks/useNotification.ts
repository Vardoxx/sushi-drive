import { notification } from "antd";
import { NotificationType, IUseNotification } from "../types/use-notification";

export const useNotification = (): IUseNotification => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (type: NotificationType, title: string) => {
    api[type]({
      message: "Успешно!",
      description: `Позиция "${title}" добавлена в корзину`,
    });
  };

  return { openNotification, contextHolder };
};
