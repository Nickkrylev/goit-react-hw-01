import css from "./friends.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={clsx(css.item)}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status,{
        [css.isOnline]: isOnline,
        [css.isOffline]: !isOnline,
      })}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
