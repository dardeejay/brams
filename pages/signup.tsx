import React from "react";
import Wave from "react-wavify";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Signup() {
  const [focusedUsername, setFocusedUsername] = useState(false);
  const [username, setUsername] = useState("");
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [focusedConfirmPassword, setFocusedConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [focusedFirstName, setFocusedFirstName] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [focusedLastName, setFocusedLastName] = useState(false);
  const [lastName, setLastName] = useState("");
  const [focusedMiddleName, setFocusedMiddleName] = useState(false);
  const [middleName, setMiddleName] = useState("");

  useEffect(() => {
    const loginForm = document.getElementById("login-form");
    loginForm?.animate(
      [
        // keyframes

        { transform: "scale(0)" },
        { transform: "scale(1)" },
      ],
      {
        duration: 700,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <>
      <Wave
        className="absolute bottom-0 -z-50  overflow-visible h-[30vh] "
        fill="#1994e6"
        paused={false}
        options={{
          height: 20,
          amplitude: 70,
          speed: 0.18,
          points: 5,
        }}
      />
      <div className="  w-full bg-auto h-full min-h-screen  grid place-items-center py-10 ">
        <div
          className="w-[90%] md:w-1/2 h-fit  mx-auto rounded-2xl drop-shadow-2xl relative z-10 flex flex-col-reverse md:flex-row overflow-hidden scale-0 "
          id="login-form"
        >
          <div className="bg-gradient-to-b from-[#00ADD8] to-[#338FCC] h-2/3 md:h-full md:py-20  w-full md:w-1/2 md:scale-100 ">
            <form
              action="POST"
              className="flex flex-col justify-center  md:h-full px-10 py-10 md:py-0 relative z-10 gap-8 md:gap-10 "
              onSubmit={handleSubmit}
            >
              <div className="border-b border-tertiary py-3">
                <h1 className="text-lg md:text-2xl drop-shadow-md font-Poppins font-bold text-customWhite">
                  Start Managing Your Records
                </h1>
                <p className="text-customWhite drop-shadow-md">
                  Sign Up for Your Barangay Account.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <div className="relative">
                  <input
                    title="firstName"
                    name="firstName"
                    type="text"
                    className="w-full border-b border-b-customWhite text-customBlack h-10 md:h-10 drop-shadow-md bg-customWhite p-2   focus:outline-none rounded-md "
                    onFocus={() => setFocusedFirstName(true)}
                    onBlur={() => setFocusedFirstName(false)}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <label
                    className={`absolute transition-all duration-200 cursor-text font-Poppins   ${
                      focusedFirstName || firstName
                        ? " text-md text-customWhite left-0 top-[-30px]"
                        : "text-sm font-Poppins font-semibold opacity-70 text-[customBlack] top-[0.6rem]  left-3 "
                    }`}
                    onClick={() =>
                      document.getElementsByName("firstName")[0].focus()
                    }
                  >
                    First Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    title="middleName"
                    name="middleName"
                    type="text"
                    className="w-full border-b border-b-customWhite text-customBlack h-10 md:h-10 drop-shadow-md bg-customWhite p-2   focus:outline-none rounded-md "
                    onFocus={() => setFocusedMiddleName(true)}
                    onBlur={() => setFocusedMiddleName(false)}
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                  <label
                    className={`absolute transition-all duration-200 cursor-text font-Poppins   ${
                      focusedMiddleName || middleName
                        ? " text-md text-customWhite left-0 top-[-30px]"
                        : "text-sm font-Poppins font-semibold opacity-70 text-[customBlack] top-[0.6rem]  left-3 "
                    }`}
                    onClick={() =>
                      document.getElementsByName("middleName")[0].focus()
                    }
                  >
                    Middle Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    title="lastName"
                    name="lastName"
                    type="text"
                    className="w-full border-b border-b-customWhite text-customBlack h-10 md:h-10 drop-shadow-md bg-customWhite p-2   focus:outline-none rounded-md "
                    onFocus={() => setFocusedLastName(true)}
                    onBlur={() => setFocusedLastName(false)}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <label
                    className={`absolute transition-all duration-200 cursor-text font-Poppins   ${
                      focusedLastName || lastName
                        ? " text-md text-customWhite left-0 top-[-30px]"
                        : "text-sm font-Poppins font-semibold opacity-70 text-[customBlack] top-[0.6rem]  left-3 "
                    }`}
                    onClick={() =>
                      document.getElementsByName("lastName")[0].focus()
                    }
                  >
                    Last Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    title="username"
                    name="username"
                    type="text"
                    className="w-full border-b border-b-customWhite text-customBlack h-10 md:h-10 drop-shadow-md bg-customWhite p-2   focus:outline-none rounded-md "
                    onFocus={() => setFocusedUsername(true)}
                    onBlur={() => setFocusedUsername(false)}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label
                    className={`absolute transition-all duration-200 cursor-text font-Poppins   ${
                      focusedUsername || username
                        ? " text-md text-customWhite left-0 top-[-30px]"
                        : "text-sm font-Poppins font-semibold opacity-70 text-[customBlack] top-[0.6rem]  left-3 "
                    }`}
                    onClick={() =>
                      document.getElementsByName("username")[0].focus()
                    }
                  >
                    Username
                  </label>
                </div>
                <div className="relative">
                  <input
                    title="password"
                    name="password"
                    type="password"
                    className="w-full border-b border-b-customWhite text-customBlack h-10 md:h-10 drop-shadow-md bg-customWhite p-2   focus:outline-none rounded-md "
                    onFocus={() => setFocusedPassword(true)}
                    onBlur={() => setFocusedPassword(false)}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    className={`absolute transition-all duration-200 cursor-text font-Poppins   ${
                      focusedPassword || password
                        ? " text-md text-customWhite left-0 top-[-30px]"
                        : "text-sm font-Poppins font-semibold opacity-70 text-[customBlack] top-[0.6rem]  left-3 "
                    }`}
                    onClick={() =>
                      document.getElementsByName("password")[0].focus()
                    }
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    title="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="w-full border-b border-b-customWhite text-customBlack h-10 md:h-10 drop-shadow-md bg-customWhite p-2   focus:outline-none rounded-md "
                    onFocus={() => setFocusedConfirmPassword(true)}
                    onBlur={() => setFocusedConfirmPassword(false)}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <label
                    className={`absolute transition-all duration-200 cursor-text font-Poppins   ${
                      focusedConfirmPassword || confirmPassword
                        ? " text-md text-customWhite left-0 top-[-30px]"
                        : "text-sm font-Poppins font-semibold opacity-70 text-[customBlack] top-[0.6rem]  left-3 "
                    }`}
                    onClick={() =>
                      document.getElementsByName("confirmPassword")[0].focus()
                    }
                  >
                    Confirm Password
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <button
                  className="bg-transparent border-2 border-tertiary hover:bg-tertiary hover:text-customBlack transition-colors text-customWhite font-Poppins font-semibold text-lg md:text-xl h-10 md:h-10 rounded-md"
                  type="submit"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
          <div className="w-full  md:w-1/2 bg-white grid place-content-center rounded-t-2xl md:rounded-none p-5 md:p-0">
            <img
              src="/barms-logo.png"
              alt=""
              className="w-1/2 md:w-1/2 mx-auto mt-3"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </>
  );
}