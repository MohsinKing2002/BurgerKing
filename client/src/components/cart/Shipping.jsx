import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { motion } from "framer-motion";
import { Country, State } from "country-state-city";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Shipping() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phone, setPhone] = useState(shippingInfo.phone);

  const handleShipping = (e) => {
    e.preventDefault();

    dispatch({
      type: "addShippingInfo",
      payload: {
        address,
        city,
        state,
        country,
        pinCode,
        phone,
      },
    });

    //save the shipping details in local storage
    localStorage.setItem(
      "shippingInfo",
      JSON.stringify({
        address,
        city,
        state,
        country,
        pinCode,
        phone,
      })
    );

    navigate("/confirmOrder");
  };

  return (
    <motion.div
      className="shipping bg-light"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
    >
      <h1 className="title my-2 heading">Shipping Details</h1>
      <br />
      <Form onSubmit={handleShipping}>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder="Enter complete address"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            placeholder="Enter city name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Country</Form.Label>
          <Form.Select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            defaultValue="country"
          >
            <option>Countries </option>
            {Country &&
              Country.getAllCountries().map((i) => (
                <option key={i.isoCode} value={i.isoCode}>
                  {i.name}
                </option>
              ))}
          </Form.Select>
        </Form.Group>

        {country && (
          <Form.Group className="mb-3">
            <Form.Label>State</Form.Label>
            <Form.Select
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
              defaultValue="state"
            >
              <option>States </option>
              {State &&
                State.getStatesOfCountry(`${country}`).map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Pin Code</Form.Label>
          <Form.Control
            value={pinCode}
            onChange={(e) => {
              setPinCode(e.target.value);
            }}
            placeholder="Enter pincode"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone No.</Form.Label>
          <Form.Control
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="Enter Phone No."
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Confirm Order
        </Button>
      </Form>
    </motion.div>
  );
}

export default Shipping;
