import { useState } from "react";
import cart from "src/assets/cartimg.png";
import styles from "./detail.module.css";
import photo from "src/assets/icons/photo.svg";
import edit from "src/assets/icons/edit.svg";
import EditModal from "../EditModal";
import CopyToClipboardButton from "../CopyButtons";
import arrow from "src/assets/icons/arrow-down.svg";

const DetailEquipments = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const initialImages = [cart, cart, cart];
  const [smallImages, setSmallImages] = useState(initialImages);
  const [currentImageIndex, _] = useState(0);

  const handleChangeImages = () => {
    const newImages = [cart, cart, cart];
    setSmallImages(newImages);
  };

  return (
    <section className={styles.table_system}>
      {modalVisible && <EditModal closeModal={() => setModalVisible(false)} />}

      <div className={styles.container_content}>
        <div className={styles.container_galery}>
          <div className={styles.gallery_container}>
            <div className={styles.gallery_image}>
              <img src={smallImages[currentImageIndex]} alt="" />
            </div>
            <div className={styles.small_images}>
              {smallImages.map((image, index) => (
                <div className={styles.small_image} key={index}>
                  <img src={image} alt="" />
                </div>
              ))}
            </div>
            <div className={styles.buttons_container}>
              <button
                className={styles.button_galery}
                onClick={handleChangeImages}
              >
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>

          <div className={styles.container_mantenimient}>
            <div className={styles.dropdownContaine}>
              <div className={styles.selected_option}>
                <h2> Próximos mantenimientos</h2>
              </div>

              <div className={styles.scrollContainer}>
                <ul className={styles.optionss}>
                  <li>
                    <span>3,000 Km</span>
                    <span>Engrase</span>
                    <span>44 Minutos</span>
                    <span>$44.000</span>
                  </li>
                  <li>
                    <span>6,000 Km</span>
                    <span> Engrase</span>
                    <span>44 Minutos</span>
                    <span>$44.000</span>
                  </li>

                  <li>
                    <span>9,000 Km</span>
                    <span> Engrase</span>
                    <span>44 Minutos</span>
                    <span>$44.000</span>
                  </li>
                  <li>
                    <span>10,000 Km</span>
                    <span> MCK1</span>
                    <span>72 Minutos</span>
                    <span>$72.000</span>
                  </li>
                  <li>
                    <span>12,000 Km</span>
                    <span> MCK1</span>
                    <span>Engrase</span>
                    <span>$44.000</span>
                  </li>
                  <li>
                    <span>12,000 Km</span>
                    <span> MCK1</span>
                    <span>Engrase</span>
                    <span>$44.000</span>
                  </li>
                  <li>
                    <span>15,000 Km</span>
                    <span> MCK1</span>
                    <span>Engrase</span>
                    <span>$44.000</span>
                  </li>
                  <li>
                    <span>20,000 Km</span>
                    <span> MCK1 + MPK1</span>
                    <span>218 Minutos</span>
                    <span>$218.000</span>
                  </li>
                  <li>
                    <span>20,000 Km</span>
                    <span> MCK1 + MPK1</span>
                    <span>218 Minutos</span>
                    <span>$218.000</span>
                  </li>
                  <li>
                    <span>20,000 Km</span>
                    <span> MCK1 + MPK1</span>
                    <span>218 Minutos</span>
                    <span>$218.000</span>
                  </li>
                  <li>
                    <span>20,000 Km</span>
                    <span> MCK1 + MPK1</span>
                    <span>218 Minutos</span>
                    <span>$218.000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content_description}>
          <div className={styles.content_title}>
            <div>
              <p>Kenworth - T800</p>
              <h2>Tractocamión - WOM-361</h2>
            </div>
            <button
              className="btn_secondary"
              onClick={() => setModalVisible(true)}
            >
              <img src={edit} alt="" />
              Editar equipo
            </button>
          </div>
          <div className={styles.container_date}>
            <strong>Fecha de compra:</strong>
            <span>DD/MM/AAAA</span>
            <strong>Año:</strong>
            <span>2021</span>
            <strong>Aplicación:</strong>
            <span>Tractocamión</span>
          </div>
          <div className={styles.container_detail_driver}>
            <div className={styles.property_cart}>
              <div>
                <strong>WOM-371</strong>
                <span>Placa</span>
              </div>
              <div>
                <strong>3.245 km</strong>
                <span>Km. recorrido</span>
              </div>

              <div>
                <strong>Activo</strong>
                <span>Estado actual</span>
              </div>
            </div>
            <div className={styles.property_driver}>
              <img src={photo} alt="" />
              <div>
                <h2>Nombre del conductor</h2>
                <div>
                  <p>
                    Contacto
                    <CopyToClipboardButton text="330 333 4444" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.optionsContainer}>
            <div className={styles.dropdownContainer}>
              <div className={styles.selected_option_title}>
                Características del equipo
              </div>
              <div className={styles.scroll}>
                <ul className={styles.options}>
                  <li>
                    <strong>Fecha de compra</strong>
                    <span>
                      <CopyToClipboardButton text=" DD/MM/AAAA" />
                    </span>
                  </li>
                  <li>
                    <strong>Marca</strong>
                    <span>
                      <CopyToClipboardButton text=" Kenworth" />
                    </span>
                  </li>
                  <li>
                    <strong>Modelo</strong>
                    <span>
                      <CopyToClipboardButton text="   T800" />
                    </span>
                  </li>
                  <li>
                    <strong>Año</strong>
                    <span>
                      <CopyToClipboardButton text="  2021" />
                    </span>
                  </li>
                  <li>
                    <strong>Placa</strong>
                    <CopyToClipboardButton text="WOM-371" />
                  </li>
                  <li>
                    <strong>VIN</strong>

                    <CopyToClipboardButton text="3WKDD40XXMF728346" />
                  </li>
                  <li>
                    <strong>Aplicación</strong>

                    <CopyToClipboardButton text=" Tractocamión" />
                  </li>
                  <li>
                    <strong>Aplicación</strong>

                    <CopyToClipboardButton text=" Tractocamión" />
                  </li>
                  <li>
                    <strong>Aplicación</strong>

                    <CopyToClipboardButton text=" Tractocamión" />
                  </li>
                  <li>
                    <strong>Aplicación</strong>

                    <CopyToClipboardButton text=" Tractocamión" />
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.dropdownContainer}>
              <div className={styles.selected_option_title}>Motor</div>
              <div className={styles.scroll}>
                <ul className={styles.options}>
                  <li>
                    <strong>Marca</strong>
                    <span>
                      <CopyToClipboardButton text=" Cummins" />
                    </span>
                  </li>
                  <li>
                    <strong>Modelo</strong>
                    <span>
                      <CopyToClipboardButton text=" X15" />
                    </span>
                  </li>
                  <li>
                    <strong>Cilindraje</strong>
                    <span>
                      <CopyToClipboardButton text=" 15 litros" />
                    </span>
                  </li>
                  <li>
                    <strong>Serial</strong>
                    <span>
                      <CopyToClipboardButton text=" 80256582" />
                    </span>
                  </li>
                  <li>
                    <strong>Potencia indicada</strong>
                    <CopyToClipboardButton text="450 H.P" />
                  </li>
                  <li>
                    <strong>RPM de potencia indicada</strong>

                    <CopyToClipboardButton text="1800 RPM" />
                  </li>
                  <li>
                    <strong>Torque</strong>

                    <CopyToClipboardButton text=" 1650 Lb.pie" />
                  </li>
                  <li>
                    <strong>Velocidad gobernada</strong>

                    <CopyToClipboardButton text=" 1800 RPM" />
                  </li>
                  <li>
                    <strong>Código del ECM</strong>

                    <CopyToClipboardButton text=" DS10117,07" />
                  </li>
                  <li>
                    <strong>Nombre del ECM</strong>

                    <CopyToClipboardButton text=" CM2250" />
                  </li>
                  <li>
                    <strong>Nombre del ECM</strong>

                    <CopyToClipboardButton text=" CM2250" />
                  </li>
                  <li>
                    <strong>Nombre del ECM</strong>

                    <CopyToClipboardButton text=" CM2250" />
                  </li>
                  <li>
                    <strong>Nombre del ECM</strong>

                    <CopyToClipboardButton text=" CM2250" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailEquipments;
