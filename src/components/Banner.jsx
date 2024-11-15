import bgShadow from "../assets/bg-shadow.png";
import bannerMain from "../assets/banner-main.png";

const Banner = ({addCoins}) => {
  return (
    <div className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-2xl shadow-lg overflow-hidden h-[500px] flex items-center justify-center">
      <img
        src={bgShadow}
        alt="Background Shadow"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="relative flex flex-col items-center justify-center text-center px-6 space-y-4 max-w-xl">
        <img
          src={bannerMain}
          alt="Cricket Logo"
          className="w-32 h-32 mb-4"
        />
        
       
        <h1 className="text-4xl md:text-5xl font-bold leading-tight md:whitespace-nowrap">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        <p className="text-lg md:text-xl">Beyond Boundaries Beyond Limits</p>

      
        <div className="h-50 w-50 border border-[#E7FE29] p-2 rounded-2xl">
        <button onClick={addCoins} className=" bg-[#E7FE29] text-black font-semibold px-8 py-3 rounded-2xl shadow-lg text-lg">
          Claim Free Credit
        </button>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
