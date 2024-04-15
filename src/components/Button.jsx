const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-8 py-4 border font-montserrrat text-lg leading-none rounded-full  ${backgroundColor} ${textColor} ${borderColor} ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="Arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
