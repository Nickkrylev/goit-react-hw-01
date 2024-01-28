import FriendListItem from "./FriendListItem";
import css from "./friends.module.css"
const FriendList = ({ friends }) => {
    console.log(friends)
  return (
    <ul className={css.friendList}>

      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
