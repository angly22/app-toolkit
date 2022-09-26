import  React, { useEffect } from "react";
//redux
import { getAllUsers } from "../store/slices/users";
import { useDispatch,useSelector } from "react-redux";

const UserList = () => {

    const {list:users}= useSelector(state => state.users)

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div class="container mt-4" >
      <div class="row mt-4">
        {users.map((user, index) => (
          <div key={index} class="col-md-3">
            <div class="card">
              <img src={user.avatar} alt="avatar" />
              <div class="card-body">
                <h5 class="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                <p class="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
