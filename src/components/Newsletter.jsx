

const Newsletter = () => {
  return (
   
    <div className=" border-2 newsletter-container p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-100 to-yellow-100 mx-auto my-8 max-w-full sm:max-w-lg md:max-w-2xl lg:w-5/6 md:h-52">
      <h2 className="text-2xl font-semibold text-center mt-6">Subscribe to our Newsletter</h2>
      <p className="text-center mb-4">Get the latest updates and news right in your inbox!</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn bg-gradient-to-r from-pink-400 to-yellow-500 text-white">
          Subscribe
        </button>
      </div>
    </div>
    
  );
};

export default Newsletter;
