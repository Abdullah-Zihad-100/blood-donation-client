const Button = ({children}) => {
  return (
    <button className={`bg-red-500 rounded shadow-lg px-4 py-3 text-white font-semibold`}>
      {children}
    </button>
  );
};
export default Button;
