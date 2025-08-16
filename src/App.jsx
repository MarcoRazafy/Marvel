import { useState } from "react";

export default function App() {
  const [heroes, setHeroes] = useState([
    { id: 1, name: "Spider-Man", power: "Agilité, sens d'araignée", universe: "Marvel" },
    { id: 2, name: "Iron Man", power: "Armure high-tech", universe: "Marvel" },
    { id: 3, name: "Hulk", power: "Force surhumaine", universe: "Marvel" }
  ]);

  const addHero = () => {
    const name = prompt("Nom du super-héros :");
    const power = prompt("Pouvoir :");
    const universe = prompt("Univers :");
    if (name && power && universe) {
      setHeroes([...heroes, { id: Date.now(), name, power, universe }]);
    }
  };

  const editHero = (id) => {
    const hero = heroes.find(h => h.id === id);
    const name = prompt("Nouveau nom :", hero.name);
    const power = prompt("Nouveau pouvoir :", hero.power);
    const universe = prompt("Nouvel univers :", hero.universe);
    if (name && power && universe) {
      setHeroes(heroes.map(h => h.id === id ? { ...h, name, power, universe } : h));
    }
  };

  const deleteHero = (id) => {
    if (confirm("Supprimer ce héros ?")) {
      setHeroes(heroes.filter(h => h.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-marvelRed text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Marvel Heroes</h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={addHero}
          className="bg-white text-marvelRed px-4 py-2 rounded hover:bg-gray-200"
        >
          ➕ Ajouter
        </button>
      </div>

      <table className="w-full border border-white">
        <thead className="bg-marvelBlack">
          <tr>
            <th className="p-2 border border-white">Nom</th>
            <th className="p-2 border border-white">Pouvoir</th>
            <th className="p-2 border border-white">Univers</th>
            <th className="p-2 border border-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {heroes.map(hero => (
            <tr key={hero.id} className="hover:bg-marvelBlack">
              <td className="p-2 border border-white">{hero.name}</td>
              <td className="p-2 border border-white">{hero.power}</td>
              <td className="p-2 border border-white">{hero.universe}</td>
              <td className="p-2 border border-white flex gap-2 justify-center">
                <button
                  onClick={() => editHero(hero.id)}
                  className="bg-yellow-400 text-black px-2 py-1 rounded hover:bg-yellow-300"
                >
                  Modifier
                </button>
                <button
                  onClick={() => deleteHero(hero.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
