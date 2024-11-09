
import logo from "../assets/logo.png";

const Header = ({ coins }) => {
  return (
    <div>
    <div className="navbar bg-base-100">
<div className="h-full">
<img src={logo} alt="Logo" className="h-full mr-2" />
</div>
<div className=" mx-auto flex justify-end items-center mr-5">
<div className="lg:block md:block hidden">
        
        <div className="space-x-10 font-semibold ml-40">
            <a href="#" className="text-green-800">Home</a>
            <a href="#" className="text-green-800">Fixture</a>
            <a href="#" className="text-green-800">Team</a>
            <a href="#" className="text-green-800">Schedules</a>
          </div>
    </div>
</div>

<div className="border-2 p-2 rounded-lg flex items-center space-x-2">
<h1>10000 Coins</h1>
<img src="https://img.icons8.com/?size=48&id=63810&format=png" className="h-8 w-8" alt="" />
</div>

</div>
  </div>
  );
};

export default Header;
