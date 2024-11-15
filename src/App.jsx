import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Player from "./components/Player";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [coins, setCoins] = useState(0);
  const [activeTab, setActiveTab] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [players, setPlayers] = useState([]); // State to store players data

  // Function to add coins and show a toast message
  const addCoins = () => {
    toast("Coins added");
    setCoins(coins + 10000000);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Select player with validation
  const handleSelectPlayer = (id) => {
    const player = players.find((p) => p.id === id);

    // Check if player is already selected
    if (selectedPlayers.includes(id)) {
      toast.error(`${player.name} already selected`);
      return;
    }

    // Check if the selected players limit (6) has been reached
    if (selectedPlayers.length >= 6) {
      toast.warning("You can only select up to 6 players.");
      return;
    }

    // Check if the user has enough coins
    if (coins < player.price) {
      toast.error(`Insufficient coins to select ${player.name}.`);
      return;
    }

    // Add player to selectedPlayers and deduct coins
    setSelectedPlayers([...selectedPlayers, id]);
    setCoins(coins - player.price);
    toast.success(`${player.name} added successfully!`);
  };

  // Remove selected player
  const handleRemovePlayer = (id) => {
    const player = players.find((p) => p.id === id);
    toast.error(`${player.name} successfully deleted and coins returned to your account.`);
    setCoins(coins + player.price);
    const updatedPlayers = selectedPlayers.filter((playerId) => playerId !== id);
    setSelectedPlayers(updatedPlayers);
  };

  return (
    <div>
      {/* ToastContainer with centered position */}
      <ToastContainer 
        position="top-center" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
      
      <div className="relative container mx-auto mb-[100px]">
        <Header coins={coins} />
        <Banner addCoins={addCoins} />
        
        <div className="flex justify-end mb-4 mt-5">
          <button
            onClick={() => handleTabChange("available")}
            className={`btn ${activeTab === "available" ? "btn-primary" : ""} mr-2`}
          >
            Available
          </button>
          <button
            onClick={() => handleTabChange("selected")}
            className={`btn ${activeTab === "selected" ? "btn-primary" : ""}`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>

        <Player
          activeTab={activeTab}
          selectedPlayers={selectedPlayers}
          handleSelectPlayer={handleSelectPlayer}
          handleRemovePlayer={handleRemovePlayer}
          setActiveTab={setActiveTab}
          setPlayers={setPlayers} 
        />
      </div>


      <div className="absolute left-0 right-0 z-10 flex justify-center ">
        <Newsletter />
      </div>

      <Footer className="mt-10" />
    </div>
  );
};

export default App;
