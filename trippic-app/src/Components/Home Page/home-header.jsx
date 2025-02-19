export default function HomeHeader() {
  return (
    <header className="bg-blue-400 text-white rounded-2xl shadow-2xl">
      <div className="flex flex-col items-center justify-between px-6 py-6">
        <h1 className="text-6xl font-swanky font-extrabold hover:text-blue-200 transition duration-500 tracking-widest mb-4">
          Trip Pic
        </h1>
        <p className="text-2xl font-swanky text-blue-100 font-bold tracking-wider">
          Bring your trip to life with pictures on Trip Pic.
        </p>
      </div>
    </header>
  );
}
