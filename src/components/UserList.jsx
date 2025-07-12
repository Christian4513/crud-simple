import UserItem from "./UserItem";

function UserList(props) {
  const { users, ...editHandlers } = props;

  return (
    <ul className="space-y-3">
      {users.map((user) => (
        <UserItem key={user.id} user={user} {...editHandlers} />
      ))}
    </ul>
  );
}

export default UserList;
