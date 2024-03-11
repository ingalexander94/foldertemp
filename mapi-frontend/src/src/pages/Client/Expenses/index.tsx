import SystemTablet from "./components/SystemTablet";
import TeamFilter from "./components/TeamFilter";
import styles from "./expenses.module.css";

const Expenses = () => {
  return (
    <>
      <article className={styles.expenses}>
        <div className={styles.content_navigate}>
          <nav>
            <ul>
              <li>
                <a className={styles.active}>Tractocamión</a>
              </li>
              <li>
                <a>Volqueta</a>
              </li>
            </ul>
          </nav>
        </div>
        <TeamFilter />
        <SystemTablet />
      </article>
    </>
  );
};

export default Expenses;
