const Stats = ({
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
}) => {
  return (
    <div className="my-5 grid grid-cols-3 gap-10 rounded-lg bg-gradient-to-r from-gray-700 via-gray-900 to-black p-5 text-center text-sm tracking-wider shadow-lg md:text-2xl">
      <p>
        HP <span className="block text-2xl md:text-3xl">{hp}</span>
      </p>
      <p>
        ATK <span className="block text-2xl md:text-3xl">{attack}</span>
      </p>
      <p>
        DEF <span className="block text-2xl md:text-3xl">{defense}</span>
      </p>
      <p>
        SP. ATK{" "}
        <span className="block text-2xl md:text-3xl">{specialAttack}</span>
      </p>
      <p>
        SP. DEF{" "}
        <span className="block text-2xl md:text-3xl">{specialDefense}</span>
      </p>
      <p>
        SPD <span className="block text-2xl md:text-3xl">{speed}</span>
      </p>
    </div>
  );
};

export default Stats;
