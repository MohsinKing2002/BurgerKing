import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/actions/adminAction";
import Loader from "../layout/Loader";

function Users() {
  const dispatch = useDispatch();
  const { users, error, loading } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return loading === true ? (
    <Loader />
  ) : (
    <div style={{ minHeight: "70vh" }} className="flex">
      <div className="myorder bg-light rounded">
        <h1 className="title my-2 heading">All Users</h1> <br />
        <Table bordered className="text-center">
          <thead className="table-dark">
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Avatar</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <img
                      style={{ height: "3vh", borderRadius: "50%" }}
                      src={user.photo}
                      alt=""
                    />
                  </td>
                  <td>{user.role}</td>
                  <td>{user.createdAt.split("T")[0]}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Users;
