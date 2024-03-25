import { useState } from 'react';
// import notificatoin config  from './NotificationConfig';
import NOTIFICATIONS from './NotificationConfig';

function useNotification() {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
  };

  return {
    notifications,
    totalUnRead,
    open,
    handleOpen,
    handleClose,
    handleMarkAllAsRead,
  };
}
export default useNotification;
