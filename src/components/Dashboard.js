import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { fetchChannels } from "../redux/features/channelSlice";
import { Loadingpage } from "./Loadingpage";
import ScreenTitles from "./ScreenTitles";
import Sidebar from "./Sidebar";
import { Cards } from "./Cards";
import { logout } from "../redux/features/authSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const { loading, channels, success } = useSelector((state) => state.channel);
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    //JWT check if token expired
    if (user) {
      const decodedToken = jwtDecode(user.token);
      if (decodedToken.exp * 1000 < Date.now()) {
        toast.warn("Session expired. Login again", {
          position: "top-center",
          autoClose: 5000,
          pauseOnHover: false,
          hideProgressBar: true,
        });
        dispatch(logout());
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [location, user, dispatch, navigate]);

  // fetch all channels from DB
  useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch, success]);

  return (
    <>
      <div className="flex bg-gray-100">
        <Sidebar />
        <div className="p-2 flex-1  h-screen overflow-y-auto">
          <ScreenTitles title="Dashboard" />

          {loading && <Loadingpage />}
          <div className="my-5 p-5 bg-white rounded-md">
            <Cards channels={channels} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
