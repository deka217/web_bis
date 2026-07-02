// const variantClasses = {
//   light: "bg-white text-[#FFA600]",
//   tint: "bg-[#FFF0E1] text-[#FFA600]",
//   accent: "bg-[#FEA30F] text-white"
// };

// function MenuButton({
//   children,
//   className = "",
//   variant = "light",
//   icon = null,
//   active = false,
//   ...props
// }) {
//   const variantClassName =
//     active && variant !== "accent" ? "bg-[#FFF0E1] text-[#FFA600]" : variantClasses[variant];

//   return (
//     <button
//       className={[
//         "group relative flex h-12 w-[173px] shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[20px] border-0 px-[50px] py-4",
//         "isolate whitespace-nowrap text-[15px] font-bold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px",
//         variantClassName,
//         className
//       ]
//         .filter(Boolean)
//         .join(" ")}
//       type="button"
//       {...props}
//     >
//       <span
//         className="pointer-events-none absolute bottom-[-168px] left-1/2 z-0 block h-[200px] w-[200px] -translate-x-1/2 scale-[0.35] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.25)] group-hover:scale-100 group-hover:opacity-100"
//         aria-hidden="true"
//       >
//         <svg viewBox="0 0 173 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-full w-full">
//           <circle
//             cx="85"
//             cy="33"
//             r="100"
//             fill={variant === "accent" ? "rgba(255,255,255,0.18)" : "#FFF0E1"}
//           />
//         </svg>
//       </span>
//       {icon ? <span className="relative z-10 inline-flex h-[18px] w-[18px] items-center justify-center">{icon}</span> : null}
//       <span className="relative z-10">{children}</span>
//     </button>
//   );
// }

/*
Legacy class-based version kept for reference:
*/
function MenuButton({
  children,
  className = "",
  variant = "light",
  icon = null,
  ...props
}) {
  return (
    <button
      className={`menu-button menu-button--${variant} ${className}`.trim()}
      type="button"
      {...props}
    >
      <span className="menu-button__glow" aria-hidden="true">
        <svg viewBox="0 0 173 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="85" cy="33" r="100" fill="#FFF0E1" />
        </svg>
      </span>
      {icon ? <span className="menu-button__icon">{icon}</span> : null}
      <span className="menu-button__label">{children}</span>
    </button>
  );
}


export default MenuButton;
