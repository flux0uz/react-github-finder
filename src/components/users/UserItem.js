import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const UserItem = ({ user }) => {
  const { login, avatar_url } = user;

  const onClick = () => {};

  return (
    <div className="card text-center">
      <img
        className="round-img"
        style={{ width: "60px" }}
        src={avatar_url}
        alt={login}
      />
      <h3>{login}</h3>
      <div>
        <Link
          to={`/user/${login}`}
          className="btn btn-dark btn-sm my-1"
          onClick={onClick(login)}
        >
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
