export default function Header() {
  return (
    <div className="flex justify-around items-center bg-gray-800 text-white">
      <div className="text-3xl font-bold">Gym Members</div>
      <div className="flex space-x-8">
        {/* Replace these divs with your own custom icons */}
        <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center cursor-pointer">
          <span className="text-gray-800 font-bold">U</span>{" "}
          {/* Example User icon */}
        </div>
      </div>
    </div>
  );
}