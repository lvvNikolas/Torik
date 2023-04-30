import "./cardsLoader.css";

const CardLoader = () => {
  return (
    <div className="cardPage__list">
      {[1, 2, 3].map((e, i) => (
        <div className="cardPage__card" key={i} data={e} />
      ))}
    </div>
  );
};
export default CardLoader;
