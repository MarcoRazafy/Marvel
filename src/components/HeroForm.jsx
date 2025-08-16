export default function HeroForm({ form, setForm, onSubmit, editingId }) {
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    return (
      <form
        onSubmit={onSubmit}
        className="bg-white text-black p-4 rounded-lg shadow-lg max-w-lg mx-auto"
      >
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
    );
  }
  