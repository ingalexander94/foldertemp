import plusIcon from "src/assets/icons/plus-icon.svg";
import styles from "./teamfilter.module.css";
import { Link } from "react-router-dom";
import { privateRoutes } from "src/models";
const TeamFilter = () => {
  return (
    <>
      <section className={styles.team_filter}>
        <p>Selecciona el equipo</p>
        <div>
          <ul>
            <li className={styles.active}>WOM-371</li>
            <li>WOM-371</li>
            <li>WOM-371</li>
          </ul>
        </div>
        <Link
          to={`/${privateRoutes.CLIENT}/${privateRoutes.EXPENSES}/${privateRoutes.ADDREGISTER}`}
        >
          <button className={styles.btn}>
            <img src={plusIcon} alt="Plus icon" />
            Agregar registro
          </button>
        </Link>
      </section>
    </>
  );
};

export default TeamFilter;
