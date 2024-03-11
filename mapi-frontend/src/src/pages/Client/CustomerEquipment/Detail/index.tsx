import DetailEquipments from "./componentes/ContentEquipment";
import styles from "./details.module.css";

const Detail = () => {
  return (
    <>
      <div className={styles.classification_wrapper}>
        <DetailEquipments />
      </div>
    </>
  );
};

export default Detail;
