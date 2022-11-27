const Stats = ({
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
}) => {
  return (
    <div className="mt-5 grid grid-cols-3 gap-10 p-5 text-center text-2xl">
      <p className="">Health: {hp}</p>
      <p>Attack: {attack}</p>
      <p>Defense: {defense}</p>
      <p>Special Attack: {specialAttack}</p>
      <p>Special Defense: {specialDefense}</p>
      <p>Speed: {speed}</p>
    </div>
  );
};

export default Stats;
