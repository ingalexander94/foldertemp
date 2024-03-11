import Pagination from "src/components/UI/Pagination";
import styles from "./systemtablet.module.css";
import { useState } from "react";
import ViewDetail from "./components/ViewDetail";

const SystemTablet = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  return (
    <div className={styles.table_system}>
      <div className={styles.table_header}>
        <ul>
          <li>Lugar de salida</li>
          <li>Lugar de Llegada</li>
          <li>Km recorrido</li>
          <li>Conductor</li>
          <li>Empresa</li>
          <li>Producto</li>
          <li>Total de Gastos</li>
          <li>Utilidad del viaje</li>
          <li>Acciones</li>
        </ul>
      </div>
      <div className={styles.table_content}>
        <div className={styles.table_item}>
          <ul>
            <li>
              <strong>Cúcuta</strong>
            </li>

            <li>
              <strong>Bucaramanga</strong>
            </li>
            <li>
              <strong>1.475</strong>
            </li>
            <li>
              <strong>Andrey Jerez</strong>
            </li>
            <li>
              <strong>Transcomil</strong>
            </li>
            <li>
              <strong>Carbón</strong>
            </li>
            <li>
              <strong>$0</strong>
            </li>
            <li>
              <strong>$0</strong>
            </li>
            <li>
              <button className={styles.btn_detail} onClick={showModal}>
                ver detalles
              </button>
            </li>
          </ul>
        </div>
        {modalVisible && (
          <ViewDetail closeModal={() => setModalVisible(false)} />
        )}
      </div>
      <Pagination last_page={1} />
    </div>
  );
};

export default SystemTablet;
