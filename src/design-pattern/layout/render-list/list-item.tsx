interface IListItemProps {
  games: {
    gameName: string;
    gameRating: number;
    gameGenre: string;
    gameLanguages: string[];
  };
}

const ListItem = ({ games }: IListItemProps) => {
  const { gameName, gameGenre, gameRating, gameLanguages } = games;
  return (
    <div className="border shadow-md p-4 rounded-md space-y-2">
      <h1>Name: {gameName}</h1>
      <h2>Genre: {gameGenre}</h2>
      <h3>Rating: {gameRating}</h3>
      <p>Languages: {gameLanguages.join(", ")}</p>
    </div>
  );
};

export default ListItem;
