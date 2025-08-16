import { useState } from "react";

export default function App() {
  const [heroes, setHeroes] = useState([
    { id: 1, name: "Spider-Man", power: "Agilité, sens d'araignée", universe: "Marvel" },
    { id: 2, name: "Iron Man", power: "Armure high-tech", universe: "Marvel" },
    { id: 3, name: "Hulk", power: "Force surhumaine", universe: "Marvel" }
  ]);

  const [form, setForm] = useState({ name: "", power: "", universe: "" });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const editHero = (id) => {
    const hero = heroes.find(h => h.id === id);
    setForm({ name: hero.name, power: hero.power, universe: hero.universe });
    setEditingId(id);
  };

  const deleteHero = (id) => {
    if (confirm("Supprimer ce héros ?")) {
      setHeroes(heroes.filter(h => h.id !== id));
      if (editingId === id) {
        setEditingId(null);
        setForm({ name: "", power: "", universe: "" });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.power || !form.universe) {
      alert("Remplis tous les champs !");
      return;
    }

    if (editingId) {
      setHeroes(heroes.map(h => h.id === editingId ? { ...h, ...form } : h));
      setEditingId(null);
    } else {
      setHeroes([...heroes, { id: Date.now(), ...form }]);
    }

    setForm({ name: "", power: "", universe: "" });
  };

  return (
    <div className="min-h-screen bg-marvelRed text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Marvel Heroes</h1>

      {/* Tableau */}
      <table className="w-full border border-white mb-6">
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

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="bg-white text-black p-4 rounded-lg shadow-lg max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4 text-marvelRed">
          {editingId ? "Modifier un héros" : "Ajouter un héros"}
        </h2>

        <div className="mb-3">
          <label className="block font-semibold">Nom</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-3">
          <label className="block font-semibold">Pouvoir</label>
          <input
            type="text"
            name="power"
            value={form.power}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-3">
          <label className="block font-semibold">Univers</label>
          <input
            type="text"
            name="universe"
            value={form.universe}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-marvelRed text-white px-4 py-2 rounded hover:bg-red-700"
        >
          {editingId ? "Mettre à jour" : "Ajouter"}
        </button>
      </form>
    </div>
  );
}
