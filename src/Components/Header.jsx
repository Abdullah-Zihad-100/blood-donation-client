const Header = ({title}) => {
    return (
      <div className="w-full p-3 uppercase">
        <h2 className="text-3xl font-semibold text-neutral-700 text-center my-2">
          {title}
        </h2>
        <hr className="border-2 border-red-300 sm:w-1/4 w-56 mx-auto" />
        <hr className="border-2 border-red-400 sm:w-2/6 w-72 mt-3 mx-auto" />
      </div>
    );
}
export default Header;