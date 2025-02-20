export default function NewUserHeader() {
  return (
    <header className="bg-green-400 text-white rounded-2xl shadow-2xl">
      <div className="flex flex-col items-center justify-between px-6 py-6">
        <h1 className="text-6xl font-swanky font-extrabold hover:text-blue-200 transition duration-500 tracking-widest mb-4">
          Trip Pic
        </h1>
        <p className="text-2xl font-swanky text-white font-bold tracking-wider">
          Upload
        </p>
      </div>
    </header>
  );
}
