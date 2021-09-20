import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const LearnInfo = ({ name, desc, pros, cons }) => {
  let f = 0;
  return (
    <div className="components">
      <div className="headerComp">
        <h1>{name}</h1>
        <p>{desc}</p>
      </div>
      <div className="prosCons">
        <div>
          <h3>Pros</h3>
          {pros.map((e) => {
            return (
              <div className="grid" key={`${name}${f++}`}>
                <FontAwesomeIcon className="pros" icon={faPlus} />
                <p>{e}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h3>Cons</h3>
          {cons.map((e) => {
            return (
              <div className="grid" key={`${name}${f++}`}>
                <FontAwesomeIcon className="cons" icon={faMinus} />
                <p>{e}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LearnInfo;
