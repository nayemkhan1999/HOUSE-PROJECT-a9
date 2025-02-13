import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../FireBaseProvider/FireBaseProvider";

const Nav = () => {
  const { user, logOutUser } = useContext(AuthContex);
  console.log(user);

  const [showUser, setShowUser] = useState(false);
  const { photoURL, displayName } = user || {};

  const Links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/updateProfile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/userProfile">user profile</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOutUser().then((result) => {
      console.log(result, "log out sussecfull").catch((error) => {
        console.log(error);
      });
    });
  };
  return (
    <div className="navbar bg-base-100 lg:container  mx-auto font-poppins">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-10"
          >
            {Links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 font-black text-green-400 lg:flex md:flex hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <p className=" text-[#515151] font-black lg:text-4xl">House</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">{Links}</ul>
      </div>
      <div className="navbar-end">
        <div className="relative">
          {user && (
            <div
              onMouseEnter={() => setShowUser(true)}
              onMouseLeave={() => setShowUser(false)}
              className="w-10 mr-5 rounded-full "
            >
              <img
                className="border-2 border-gray-500 w-10 h-10 rounded-full"
                src={
                  user?.photoURL ||
                  "https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                }
              />
            </div>
          )}
        </div>

        <div className={`${showUser ? "flex" : "hidden"}`}>
          <div className="absolute bg-teal-700 top-[40px] right-[220px] p-4 rounded-lg text-white z-10">
            <h1 className="textxl">{user?.displayName || "not found"}</h1>
            <h1 className="textxl">{user?.email || "not found"}</h1>
          </div>
        </div>

        <Link to="/login" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 lg:w-48 lg:h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            {user ? (
              <span onClick={handleLogOut} className="relative">
                LogOut
              </span>
            ) : (
              <span className="relative">LOGIN</span>
            )}
          </span>

          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
