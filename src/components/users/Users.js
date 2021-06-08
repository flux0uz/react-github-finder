import { PropTypes } from "prop-types";
import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";

const Users = ({ loading, users }) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1rem",
};

export default Users;
