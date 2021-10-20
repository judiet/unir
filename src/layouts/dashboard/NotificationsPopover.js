import faker from 'faker';
import PropTypes from 'prop-types';
import { noCase } from 'change-case';
import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { set, sub, formatDistanceToNow } from 'date-fns';
import { Icon } from '@iconify/react';
import bellFill from '@iconify/icons-eva/bell-fill';
import clockFill from '@iconify/icons-eva/clock-fill';
import doneAllFill from '@iconify/icons-eva/done-all-fill';
// material
import { alpha } from '@mui/material/styles';
import {
  Box,
  List,
  Badge,
  Button,
  Avatar,
  Tooltip,
  Divider,
  IconButton,
  Typography,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  ListItemButton
} from '@mui/material';
// AWS
import Amplify, { Auth, API } from 'aws-amplify';
// utils
import { mockImgAvatar } from '../../utils/mockImages';
// components
import Scrollbar from '../../components/Scrollbar';
import MenuPopover from '../../components/MenuPopover';
// query
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
// ----------------------------------------------------------------------

const NOTIFICATIONS = [
  {
    id: faker.datatype.uuid(),
    title: 'Wie geht es dem Wolf?',
    description: 'Eine neue Umfrage für Sie',
    avatar: null,
    type: 'chat_message',
    createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
    isUnRead: true
  },
  {
    id: faker.datatype.uuid(),
    title: 'Test',
    description: 'Eine neue Umfrage für Sie',
    avatar: null,
    type: 'chat_message',
    createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
    isUnRead: false
  }
  // {
  //   id: faker.datatype.uuid(),
  //   title: faker.name.findName(),
  //   description: 'answered to your comment on the Minimal',
  //   avatar: mockImgAvatar(2),
  //   type: 'friend_interactive',
  //   createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
  //   isUnRead: false
  // }
  // {
  //   id: faker.datatype.uuid(),
  //   title: 'You have new mail',
  //   description: 'sent from Guido Padberg',
  //   avatar: null,
  //   type: 'mail',
  //   createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
  //   isUnRead: false
  // },
  // {
  //   id: faker.datatype.uuid(),
  //   title: 'Delivery processing',
  //   description: 'Your order is being shipped',
  //   avatar: null,
  //   type: 'order_shipped',
  //   createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
  //   isUnRead: false
  // }
];

function renderContent(notification) {
  const title = (
    <Box>
      <Typography variant="subtitle2">{notification.title}</Typography>
      <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
        {notification.description}
      </Typography>
    </Box>
  );

  if (notification.type === 'order_placed'.toLocaleUpperCase()) {
    return {
      avatar: <img alt={notification.title} src="/static/icons/ic_notification_package.svg" />,
      title
    };
  }
  if (notification.type === 'order_shipped'.toLocaleUpperCase()) {
    return {
      avatar: <img alt={notification.title} src="/static/icons/ic_notification_shipping.svg" />,
      title
    };
  }
  if (notification.type === 'mail'.toLocaleUpperCase()) {
    return {
      avatar: <img alt={notification.title} src="/static/icons/ic_notification_mail.svg" />,
      title
    };
  }
  if (notification.type === 'chat_message'.toLocaleUpperCase()) {
    return {
      avatar: <img alt={notification.title} src="/static/icons/ic_notification_chat.svg" />,
      title
    };
  }
  if (notification.type === 'survey'.toLocaleUpperCase()) {
    return {
      avatar: <img alt={notification.title} src="/static/icons/ic_notification_chat.svg" />,
      title
    };
  }
  return {
    avatar: <img alt={notification.title} src={notification.avatar} />,
    title
  };
}

function clickNotification(params) {
  console.log(params);
  if (params.status === 'NOTIFIED') {
    changeNotificationStatus(params);
  }
}

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired,
  userId: PropTypes.string
};

function NotificationItem({ notification, userId }) {
  const { avatar, title } = renderContent(notification);
  const url = `${notification.url}#user_id=${userId}`;
  return (
    <ListItemButton
      href={url}
      disableGutters
      component="a"
      sx={{
        py: 1.5,
        px: 2.5,
        mt: '1px',
        ...(notification.status === 'NOTIFIED' && {
          bgcolor: 'action.selected'
        })
      }}
      onClick={() => clickNotification(notification, userId)}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled'
            }}
          >
            <Box component={Icon} icon={clockFill} sx={{ mr: 0.5, width: 16, height: 16 }} />
            {formatDistanceToNow(new Date(notification.createdAt))}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

async function changeNotificationStatus(notificationId, notification) {
  console.log(notification);
  const todoDetails = {
    id: notificationId,
    _version: notification._version,
    // title: notification.title,
    status: 'NOTIFICATION_READ'
    // type: notification.type,
    // description: notification.description,
    // url: notification.url
  };

  const apiData = await API.graphql({
    query: mutations.changeNotificationStatus,
    variables: { input: todoDetails },
    authMode: 'AMAZON_COGNITO_USER_POOLS'
  });
  console.log(apiData);
}

function renderNotification(notifications, userID) {
  if (notifications !== undefined) {
    return notifications.map((notification) => (
      <NotificationItem
        key={notification.notificationID}
        notification={notification.notification}
        userId={userID}
      />
    ));
  }
  return <Typography>Loading</Typography>;
}

function getUserID() {
  const userData = localStorage.getItem('userData');
  let userId = '';
  if (userData == null) {
    Auth.currentSession()
      .then((data) => {
        userId = data.idToken.payload.sub;
        // fetchNotes(data.idToken.payload.sub);
      })
      .catch((err) => console.log(err));
  } else {
    userId = JSON.parse(userData).id;
    // fetchNotes(JSON.parse(userData).id);
  }
  return userId;
}

export default function NotificationsPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [userID, setUserID] = useState(getUserID());
  const totalUnRead = notifications.filter(
    (item) => item.notification.status === 'NOTIFIED'
  ).length;

  useEffect(() => {
    fetchNotes(userID);
  }, []);

  async function fetchNotes(userId) {
    const apiData = await API.graphql({
      query: queries.getNotificationByUserID,
      variables: { id: userId },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    });
    console.log(apiData);
    const data = apiData.data.listUsers.items[0].UserNotifications.items.filter(
      (e) => e._deleted !== true
    );
    setNotifications(data);
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        status: 'NOTIFICATION_READ'
      }))
    );
    notifications.forEach((notification) => {
      changeNotificationStatus(notification.notificationID, notification.notification);
    });
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        size="large"
        color={open ? 'primary' : 'default'}
        onClick={handleOpen}
        sx={{
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <Icon icon={bellFill} width={20} height={20} />
        </Badge>
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 360 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Benachrichtigungen</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Sie haben {totalUnRead} ungelesene Nachrichten
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=" Alle als gelesen markieren">
              <IconButton color="primary" onClick={handleMarkAllAsRead}>
                <Icon icon={doneAllFill} width={20} height={20} />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Divider />

        <Scrollbar sx={{ height: { xs: 340, sm: 'auto' } }}>
          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                Neu
              </ListSubheader>
            }
          >
            {/* {notifications.map((notification) => (
              <NotificationItem
                key={notification.notificationID}
                notification={notification.notification}
              />
            ))} */}
            {renderNotification(notifications, userID)}
          </List>

          {/* <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                Davor
              </ListSubheader>
            }
          >
            {notifications.slice(1, 5).map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </List> */}
        </Scrollbar>

        <Divider />

        {/* <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple component={RouterLink} to="#">
            View All
          </Button>
        </Box> */}
      </MenuPopover>
    </>
  );
}
