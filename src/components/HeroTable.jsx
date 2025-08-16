import HeroRow from "./HeroRow";

export default function HeroTable({ heroes, onEdit, onDelete }) {
  return (
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
          <HeroRow
            key={hero.id}
            hero={hero}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}
