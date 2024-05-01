import { Box, Container, Stack } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PuasedOrders from "./PuasedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/orders.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrders, setFinishedOrders } from "./slice";
import { Order } from "../../../lib/types/order";




const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: ( data: Order []) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});




export default function OrdersPage() {
  const {setPausedOrders, setProcessOrders, setFinishedOrders} = actionDispatch(useDispatch());
  const [value, setValue] = useState("1");
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  /**H**/

  return (
    <div className="order-page">
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className="order-nav-frame">
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  width: "679px",
                  margin: "0 auto",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="table_list"
                >
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className="order-main-content">
              <PuasedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className="order-right">
          <Box className="order-info-box">
            <Box className="member-box">
              <div className="order-user-img">
                <img
                  src="/icons/default-user.svg"
                  alt=""
                  className="order-user-avatar"
                />
                <div className="order-user-icon-box">
                  <img
                    src="/icons/user-badge.svg"
                    alt=""
                    className="order-user-prof-img"
                  />
                </div>
              </div>
              <span className="oerder-user-name">Martin</span>
              <span className="oerder-user-prof">User</span>
            </Box>
            <Box className="liner">
              <Stack
                flexDirection={"row"}
                gap={"10px"}
                marginLeft={"10px"}
                sx={{
                  marginTop: "5px",
                }}
              >
                <LocationOnIcon />
                <span>South Korea, Busan</span>
              </Stack>
            </Box>
          </Box>
          <Box className="order-info-pay">
            <Box className="pay-input">
              <input
                type="text"
                placeholder="Card number : 5243 4090 2002 7495" style={{ width: "100%" }}
              />
              <div className="pay-input2">
                <input type="text" placeholder="07 / 24" style={{ width: "100%" }} />
                <input type="text" placeholder="CVV : 010" style={{ width: "100%" }} />
              </div>
              <input type="text" placeholder="Justin Robertson" style={{ width: "100%" }} />
            </Box>
            <Box className="pay-cards">
              <img src="/icons/western-card.svg" alt="" />
              <img src="/icons/master-card.svg" alt="" />
              <img src="/icons/paypal-card.svg" alt="" />
              <img src="/icons/visa-card.svg" alt="" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}