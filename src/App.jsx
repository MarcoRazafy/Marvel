import { useState } from "react";
import HeroTable from "./components/HeroTable";
import HeroForm from "./components/HeroForm";

export default function App() {
  const [heroes, setHeroes] = useState([
    { id: 1, name: "Spider-Man", power: "Agilité, sens d'araignée", universe: "Marvel" },
    { id: 2, name: "Iron Man", power: "Armure high-tech", universe: "Marvel" },
    { id: 3, name: "Hulk", power: "Force surhumaine", universe: "Marvel" }
  ]);

  const [form, setForm] = useState({ name: "", power: "", universe: "" });
  const [editingId, setEditingId] = useState(null);

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

      <HeroTable heroes={heroes} onEdit={editHero} onDelete={deleteHero} />

      <HeroForm
        form={form}
        setForm={setForm}
        onSubmit={handleSubmit}
        editingId={editingId}
      />
    </div>
  );
}
