import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Player = ({ selectedPlayers, activeTab, handleSelectPlayer, handleRemovePlayer, setActiveTab, setPlayers }) => {
  const [players, localSetPlayers] = useState([]);

  useEffect(() => {
    fetch('/Player.json')
      .then((res) => res.json())
      .then((data) => {
        localSetPlayers(data);
        setPlayers(data); 
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {activeTab === "available" ? "Available Players" : `Selected Players (${selectedPlayers.length}/6)`}
      </h2>

      {/* Available Players Section */}
      {activeTab === "available" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-5">
          {players.map((player) => (
            <div key={player.id} className="card card-compact bg-base-100 shadow-xl border-2">
              <figure className="px-8 pt-6">
                <img className="w-full h-52 rounded-xl" src={player.image} alt="Player" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{player.name}</h2>
                <div className="flex items-center space-x-2 mb-2">
                  <img src={player.flag} alt={player.country} className="w-6 h-4" />
                  <span className="text-sm text-gray-500">{player.country}</span>
                </div>
                <span className="badge badge-primary">{player.role}</span>
                <div className="text-sm mt-2">
                  <p><strong>Rating:</strong> <span className="badge badge-secondary">{player.rating}</span></p>
                  <p><strong>Type:</strong> {player.battingType}</p>
                  <div className="flex items-center justify-between mt-4">
                    <p><strong>Price:</strong> $<span className="font-bold text-red-700">{player.price.toLocaleString()}</span></p>
                    <button
                      onClick={() => handleSelectPlayer(player.id)}
                      className="btn py-0"
                    >
                      Choose Player
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Selected Players Section */}
      {activeTab === "selected" && (
        <div className="grid grid-cols-1 gap-4">
          {selectedPlayers.map((id) => {
            const player = players.find((p) => p.id === id);
            return (
              <div key={player.id} className="player-item">
                <div className="flex justify-between items-center gap-5 mb-5 p-5 border-2 rounded-2xl">
                  <div>
                    <img className="w-20 h-20 rounded-xl shadow-xl" src={player.image} alt={player.name} />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{player.name}</p>
                    <p>{player.battingType}</p>
                    <span className="badge badge-primary">{player.role}</span>
                  </div>
                  <img
                    src="https://img.icons8.com/?size=60&id=102550&format=png"
                    alt="Remove"
                    className="w-6 h-6 ml-auto cursor-pointer"
                    onClick={() => handleRemovePlayer(player.id)}
                  />
                </div>
              </div>
            );
          })}
          {/* Add More Player Button */}
          <div className="inline-flex mt-4 p-2 rounded-2xl">
            <button
              className="bg-[#E7FE29] text-black font-semibold px-8 py-3 rounded-2xl shadow-lg text-lg"
              onClick={() => setActiveTab("available")}
            >
              Add More Players
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
