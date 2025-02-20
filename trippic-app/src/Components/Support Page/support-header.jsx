import { useNavigate, useLocation } from "react-router-dom";

export default function SupportHeader() {
  //variable to handle navigation through app
  const navigate = useNavigate();
  //creating a variable to handle location
  const location = useLocation();

  // Extract userId from query params
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("userId"); // Get the userId parameter

  //function to handle button click
  const handleClick = () => {
    navigate(`/home?userId=${userId}`);
  };
  return (
    <div>
      <header className="bg-black text-white rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center justify-between px-6 py-6">
          <h1 className="text-6xl font-swanky font-extrabold tracking-widest mb-4">
            Trip Pic
          </h1>
          <p className="text-2xl font-swanky text-white-100 font-bold tracking-wider">
            Support
          </p>
        </div>
      </header>
      <div>
        <button
          onClick={() => handleClick(userId)}
          className="p-4 hover:underline hover:font-extrabold cursor-pointer font-swanky text-3xl tracking-wider text-blue-400"
        >
          HOME
        </button>
      </div>
    </div>
  );
}
