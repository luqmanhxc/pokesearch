const Stats = ({
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
}) => {
  return (
    <div className="mt-5 grid grid-cols-3 gap-10 rounded-lg border-2 p-5 text-center text-xl tracking-wider">
      <p>
        HEALTH <span className="block text-4xl ">{hp}</span>
      </p>
      <p>
        ATTACK <span className="block text-4xl ">{attack}</span>
      </p>
      <p>
        DEFENSE <span className="block text-4xl ">{defense}</span>
      </p>
      <p>
        SP. ATTACK <span className="block text-4xl ">{specialAttack}</span>
      </p>
      <p>
        SP. DEFENSE <span className="block text-4xl ">{specialDefense}</span>
      </p>
      <p>
        SPEED <span className="block text-4xl ">{speed}</span>
      </p>
    </div>
  );
};

export default Stats;
