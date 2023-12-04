import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DatePicker, message, TimePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import "../styles/bookingpage.css";

const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [faculty, setFaculty] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const dispatch = useDispatch();

  const getUserData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/faculty/getFacultyById",
        { facultyId: params.facultyId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setFaculty(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAvailability = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/booking-availability",
        { facultyId: params.facultyId, date, time },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.success) {
        message.success(res.data.message);
        setIsAvailable(true);
      } else {
        message.error(res.data.message);
        setIsAvailable(false);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error(error);
      setIsAvailable(false);
    }
  };

  const handleBooking = async () => {
    try {
      if (!date || !time) {
        message.error("Date & Time Required");
        return;
      }

      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/book-appointment",
        {
          facultyId: params.facultyId,
          userId: user._id,
          doctorInfo: faculty,
          userInfo: user,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());

      if (res.data.success) {
        message.success(res.data.message);
        setIsAvailable(false);
        getUserData(); // Refresh faculty data after booking
      } else {
        message.error(res.data.message);
        setIsAvailable(false);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error(error);
      setIsAvailable(false);
    }
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <div className="container">
        <h3 className="text-center text-dark ">Booking Page</h3>
        {faculty && (
          <div className="doctor-info">
            <h4>
              {faculty.firstName} {faculty.lastName}
            </h4>
            <h4 className="timings">
              Timings: {faculty.timings && faculty.timings[0]} -{" "}
              {faculty.timings && faculty.timings[1]}
            </h4>
            <div className="date-time-picker">
              <DatePicker
                className="m-2"
                format="DD-MM-YYYY"
                onChange={(value) => {
                  setIsAvailable(false);
                  setDate(moment(value).format("DD-MM-YYYY"));
                }}
              />
              <TimePicker
                format="HH:mm"
                className="m-2"
                onChange={(value) => {
                  setIsAvailable(false);
                  setTime(moment(value).format("HH:mm"));
                }}
              />
              <button
                className="btn btn-check-availability"
                onClick={handleAvailability}
              >
                Check Availability
              </button>
              {isAvailable && (
                <button className="btn btn-book-now" onClick={handleBooking}>
                  Book Now
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingPage;
