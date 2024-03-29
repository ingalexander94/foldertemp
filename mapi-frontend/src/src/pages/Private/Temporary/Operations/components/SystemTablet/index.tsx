import { useContext, useEffect, useState } from "react";
import Pagination from "src/components/UI/Pagination";
import AlertDelete from "src/components/AlertDelete";
import { TemporaryContext, UIContext } from "src/context";
import { useAxios } from "src/hooks";
import { OperationService } from "src/services";
import { formatCurrency } from "src/utilities";
import editIcon from "src/assets/icons/edit.svg";
import deleteIcon from "src/assets/icons/delete.svg";
import filterIcon from "src/assets/icons/filter-black.svg";
import kilometres from "src/assets/icons/kilometres.svg";
import hours from "src/assets/icons/time.svg";
import styles from "./systemtablet.module.css";
import AddOperationModal from "../AddOperationModal";
import { Operation } from "src/interfaces";

const SystemTablet = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const { callEndpoint } = useAxios();
  const { toggleCheking } = useContext(UIContext);
  const { setOperations, temporaryState, setTotalPagesOperation } =
    useContext(TemporaryContext);
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get("page") ?? "1") ?? 1;

  const [idOperation, setIdOperation] = useState<number>(0);
  const [operationActive, setOperationActive] = useState<Operation | null>(
    null
  );

  useEffect(() => {
    getOperations(page);
    return () => {};
  }, [page, temporaryState.orderBy]);

  useEffect(() => {
    if (temporaryState.search.length) {
      findOperationSearch();
    } else {
      const queryParams = new URLSearchParams(location.search);
      const page = parseInt(queryParams.get("page") ?? "1") ?? 1;
      getOperations(page);
    }
    return () => {};
  }, [temporaryState.search]);

  const getOperations = async (currentPage: number) => {
    const res = await callEndpoint(
      OperationService.getOperationsByPage(currentPage, temporaryState.orderBy)
    );
    if (res) {
      const { data } = res.data;
      setOperations(data.operations);
      setTotalPagesOperation(data.totalPages);
    }
  };

  const findOperationSearch = async () => {
    toggleCheking();
    const res = await callEndpoint(
      OperationService.searchOperation({ code: temporaryState.search, page })
    );
    if (res) {
      const response = res.data;
      setTotalPagesOperation(response.data.totalPages);
      setOperations(response.data.operations);
    }
    toggleCheking();
  };

  const showDelete = (id_operation: number) => {
    setIdOperation(id_operation);
    setModalDelete(true);
  };

  const handleEdit = (operation: Operation) => {
    setOperationActive(operation);
    setModalVisible(true);
  };

  return (
    <>
      <div className={styles.table_system}>
        <div className={styles.table_header}>
          <ul>
            <li>
              <img src={filterIcon} alt="icon-filter" />
              Sistema
            </li>
            <li>Código</li>
            <li>Descripción de operación</li>
            <li>Técnico</li>
            <li>Duración</li>
            <li>Modelo OEM</li>
            <li>
              <img src={filterIcon} alt="icon-filter" />
              Tipo de mantenimiento
            </li>
            <li>Valor</li>
            <li>Acciones</li>
          </ul>
        </div>
        <div className={styles.table_content}>
          {temporaryState.operations.length ? (
            temporaryState.operations.map((operation, index) => (
              <div
                key={operation.id_operation}
                className={`animate__animated animate__fadeIn ${styles.table_item}`}
              >
                <input type="checkbox" id={`system${index}`} />
                <label htmlFor={`system${index}`}>
                  <ul>
                    <li>
                      <img
                        className={styles.time}
                        src={
                          operation.operation_measure === 2 ? kilometres : hours
                        }
                        alt="time-icon"
                      />
                      <strong>{operation.system}</strong>
                    </li>

                    <li>
                      <strong>{operation.code}</strong>
                    </li>
                    <li>
                      <p>{operation.operation_description}</p>
                    </li>
                    <li>
                      <strong>
                        {operation.technician_code ?? "Sin especificar"}
                      </strong>
                    </li>
                    <li>
                      {operation.operation_duration_minutes ? (
                        <strong>
                          {operation.operation_duration_minutes} (Min.) <br />
                          {operation.operation_duration_hours} (Hr.)
                        </strong>
                      ) : (
                        <strong>Sin especificar</strong>
                      )}
                    </li>
                    <li>
                      <p>
                        {operation.operation_models.length
                          ? operation.operation_models
                              .reduce(
                                (acc, cur) => (acc += `${cur.model_code},`),
                                ""
                              )
                              .slice(0, -1)
                          : "Sin especificar"}
                      </p>
                    </li>
                    <li>
                      <strong>
                        {operation.maintenance_type_name || "Sin especificar"}
                      </strong>
                    </li>
                    <li className={styles.show}>
                      <p>{formatCurrency(operation.operation_total ?? 0)}</p>
                      <strong>Ver</strong>
                    </li>
                    <div className={styles.buttons}>
                      <button onClick={() => handleEdit(operation)}>
                        <img src={editIcon} alt="edit icon" />
                      </button>
                      <button
                        onClick={() => showDelete(operation.id_operation)}
                      >
                        <img src={deleteIcon} alt="delete icon" />
                      </button>
                    </div>
                  </ul>
                </label>
              </div>
            ))
          ) : (
            <p>No se encontrarón resultados</p>
          )}
        </div>
        {temporaryState.totalPagesOperations > 1 && (
          <Pagination last_page={temporaryState.totalPagesOperations} />
        )}
        {modalVisible && (
          <AddOperationModal
            title={"Editar"}
            closeModal={() => {
              setOperationActive(null);
              setModalVisible(false);
            }}
            operation={operationActive}
          />
        )}
        {modalDelete && (
          <AlertDelete
            title="una operación"
            subtitle="esta operación"
            to_delete={async () => {
              const res = await callEndpoint(
                OperationService.removeOperation(idOperation)
              );
              return res;
            }}
            closeModal={() => {
              setIdOperation(0);
              setModalDelete(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default SystemTablet;
