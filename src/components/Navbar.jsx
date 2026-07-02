import MenuButton from "./MenuButton";
import logo from "../assets/logoBIS.png";
import rocketLaunch from "../assets/RocketLaunch.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function ContactIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M94.1 161.9C59.6 196.4 35.9 228.1 41.1 233.3C46.3 238.5 78 214.8 112.5 180.3C147 145.8 170.7 114.1 165.5 108.9C160.3 103.7 128.6 127.4 94.1 161.9Z"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M144 112L176 80"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
      />

      <path
        d="M184 72L216 40"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
      />

      <path
        d="M152 104L192 144"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
      />

      <path
        d="M184 72L216 104"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
      />
    </svg>
  );
}

// const navItems = [
//   { label: "Home", variant: "light" },
//   { label: "About Us", variant: "light" },
//   { label: "Products", variant: "light" },
//   {
//     label: "Contact Us",
//     variant: "accent",

//     icon: (
//       <img
//         src={rocketLaunch}
//         alt="rocket"

//         style={{
//           width: 18,
//           height: 18,
//           display: 'block',
//           objectFit: 'contain'
//         }}
//       />
//     )
//   }
// ];

const navItems = [
  {
    label: "Home",
    path: "/",
    variant: "light",
  },
  {
    label: "About Us",
    path: "/about",
    variant: "light",
  },
  {
    label: "Products",
    path: "/products",
    variant: "light",
  },
  {
    label: "Contact Us",
    path: "/contact",
    variant: "accent",
    icon: (
      <img
        src={rocketLaunch}
        alt="rocket"
        style={{
          width: 18,
          height: 18,
          display: "block",
          objectFit: "contain",
        }}
      />
    ),
  },
];

/*
Legacy class-based version kept for reference:
*/
// function Navbar({ activeItem = "Home", onNavigate = () => {} }) {
//   return (
//     <header className="navbar">
//       <div className="navbar__brand">
//         <img className="navbar__logo" src={logo} alt="PT BestAgro Indo Sukses" />
//       </div>

//       <nav className="navbar__menu" aria-label="Primary">
//         {navItems.map((item) => (
//           <MenuButton
//             key={item.label}
//             variant={item.variant}
//             icon={item.icon}
//             className={activeItem === item.label && item.variant !== "accent" ? "is-active" : ""}
//             onClick={() => onNavigate(item.label)}
//           >
//             {item.label}
//           </MenuButton>
//         ))}
//       </nav>
//     </header>
//   );
// }

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // return (
  //   <header className="navbar">
  //     <div className="navbar__brand">
  //       <NavLink to="/">
  //         <img
  //           className="navbar__logo"
  //           src={logo}
  //           alt="PT BestAgro Indo Sukses"
  //         />
  //       </NavLink>
  //     </div>

  //     <nav
  //       className="navbar__menu"
  //       aria-label="Primary"
  //     >
  //       {navItems.map((item) => (
  //         <NavLink
  //           key={item.label}
  //           to={item.path}
  //           style={{ textDecoration: "none" }}
  //         >
  //           {({ isActive }) => (
  //             <MenuButton
  //               variant={item.variant}
  //               icon={item.icon}
  //               className={
  //                 isActive && item.variant !== "accent"
  //                   ? "is-active"
  //                   : ""
  //               }
  //             >
  //               {item.label}
  //             </MenuButton>
  //           )}
  //         </NavLink>
  //       ))}
  //     </nav>
  //   </header>
  // );

  return (
    <header className="navbar relative">
      {/* Logo */}
      <NavLink
        to="/"
        className="navbar__brand"
      >
        <img
          src={logo}
          alt="PT BestAgro Indo Sukses"
          className="navbar__logo"
        />
      </NavLink>

      {/* Desktop Menu */}
      <nav
        className="navbar__menu hidden lg:flex"
        aria-label="Primary"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            style={{ textDecoration: "none" }}
          >
            {({ isActive }) => (
              <MenuButton
                variant={item.variant}
                icon={item.icon}
                className={
                  isActive && item.variant !== "accent"
                    ? "is-active"
                    : ""
                }
              >
                {item.label}
              </MenuButton>
            )}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
      lg:hidden

      flex
      items-center
      justify-center

      w-11
      h-11

      ml-auto

      text-[#2D2D2D]
    "
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 7H20M4 12H20M4 17H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
absolute
top-[70px]
left-5
right-5

z-50

rounded-2xl
bg-white

shadow-xl

p-5

lg:hidden
"
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `
                rounded-xl
                px-4
                py-3
                transition
                ${isActive
                    ? "bg-[#FFA600] text-white"
                    : "text-[#333] hover:bg-[#FFF3E0]"
                  }
              `
                }
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  {item.label}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );

}

export default Navbar;
