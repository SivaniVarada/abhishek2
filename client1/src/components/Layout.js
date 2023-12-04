import React from "react";
import "../styles/LayoutStyles.css";
import { userMenu } from "../Data/userMenu";
import { adminMenu } from "../Data/adminMenu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";
import { cbitlogoo } from "../assets/home";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const doctorMenu = [
    {
      name: "Home",
      path: "/H",
      icon: "fa-solid fa-house",
    },
    {
      name: "Approve As Faculty",
      path: "/admin/admins",
      icon: "fa-solid fa-users",
    },
  

    {
      name: "Appointments",
      path: "/H/faculty-appointments",
      icon: "fa-solid fa-list",
    },
  ];
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/");
  };

  // redering menu list
  const SidebarMenu = user?.isAdmin
  ? adminMenu
  : user?.isDoctor
  ? doctorMenu
  : userMenu;
    return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo bg-white">
            <img
// src="https://www.cbit.ac.in/wp-content/uploads/2023/04/CBIT-LOGO-2023.png"
// src="https://www.cbit.ac.in/wp-content/themes/CBIT/images/logo.png"
src={cbitlogoo}
alt="cbit"
className="img1"
class="container-fluid"
/>
<hr />
            </div>
            <div className="menu">
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
              <div className={`menu-item `} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="header">
              <div className="header-content" style={{ cursor: "pointer" }}>
              <Badge count={user && user.notifcation.length}   onClick={() => {
                    navigate("/notification");
                  }} >
                  <i class="fa-solid fa-bell"></i>
                </Badge>

                <Link to="/profile">{user?.name}</Link>
              </div>
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Layout;
