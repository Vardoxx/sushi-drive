export type NotificationType = "success" | "info" | "warning" | "error";

export interface IUseNotification {
  openNotification: (type: NotificationType, title: string) => void;
  contextHolder: React.ReactNode;
}
