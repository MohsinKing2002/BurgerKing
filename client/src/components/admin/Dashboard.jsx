import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as Chartjs, Tooltip, ArcElement, Legend } from "chart.js";
import { useEffect } from "react";
import { getAdminStats } from "../../redux/actions/adminAction";

Chartjs.register(Tooltip, ArcElement, Legend);

const Box = ({ title, value }) => {
  return (
    <div className="box flex flex-column">
      <h6>{title}</h6>
      <h4 className="fw-bold">{value}</h4>
    </div>
  );
};

function Dashboard() {
  const dispatch = useDispatch();
  const { userCounts, orderCounts, totalIncome } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    dispatch(getAdminStats());
  }, [dispatch]);

  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: orderCounts
          ? [orderCounts.preparing, orderCounts.shipped, orderCounts.delivared]
          : [0, 0, 0],
        backgroundColor: ["#ffb900", "lightblue", "seagreen"],
        borderColor: ["orangered", "blue", "darkgreen"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard text-center">
      <Card>
        <Card.Header className="title heading py-3">Dashboard</Card.Header>
        <Card.Body>
          <section className="boxes flex justify-content-evenly py-4">
            <Box title={"Users"} value={userCounts} />
            <Box title={"Orders"} value={orderCounts && orderCounts.total} />
            <Box title={"Income"} value={totalIncome} />
          </section>
          <section className="flex flex-column">
            <div className="chart py-4 mb-3">
              <Doughnut data={data} />
            </div>
            <NavLink className="w-25" to="/admin/orders">
              <Button className="w-100" variant="dark">
                View Orders
              </Button>
            </NavLink>{" "}
            <br />
            <NavLink className="w-25" to="/admin/users">
              <Button className="w-100" variant="dark">
                View Users
              </Button>
            </NavLink>
          </section>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Dashboard;
