export default function HeroRow({ hero, onEdit, onDelete }) {
    return (
      <tr className="hover:bg-marvelBlack">
        <td className="p-2 border border-white">{hero.name}</td>
        <td className="p-2 border border-white">{hero.power}</td>
        <td className="p-2 border border-white">{hero.universe}</td>
        <td className="p-2 border border-white flex gap-2 justify-center">
          <button
            onClick={() => onEdit(hero.id)}
            className="bg-yellow-400 text-black px-2 py-1 rounded hover:bg-yellow-300"
          >
            Modifier
          </button>
          <button
            onClick={() => onDelete(hero.id)}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400"
          >
            Supprimer
          </button>
        </td>
      </tr>
    );
  }
  