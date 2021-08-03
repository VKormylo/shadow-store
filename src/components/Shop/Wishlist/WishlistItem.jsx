import React, { useState } from "react";
import s from "./Wishlist.module.css";
import success from "../../../assets/images/icon success.svg";
import cancel from "../../../assets/images/icon-cross.svg";
import { useTranslation } from "react-i18next";

const WishlistItem = (props) => {
  console.log(props);

  const [isConfirmed, setConfirm] = useState(false);

  const Confirm = (confirm) => {
    setConfirm(confirm);
  };

  const removeFromWishlist = () => {
    props.removeFromWishlist(props.game.id);
  };
  const { t } = useTranslation();
  return (
    <div>
      {isConfirmed === false ? (
        <div className={`${s.itemInner} ${s.onHover}`}>
          <div className={s.wrapperLeft}>
            <div className={s.fotoBlock}>
              <img className={s.foto} src={props.foto} />
            </div>
            <div className={s.name}>{props.name}</div>
          </div>
          <div className={s.wrapperRight}>
            {props.price === "Free" ? (
              <div className={s.price}>{t("price.free")}</div>
            ) : props.price === "Soon" ? (
              <div className={s.price}>{t("price.soon")}</div>
            ) : (
              <div className={s.price}>{props.price} ₴</div>
            )}
            <div className={s.btn}>
              <div className={s.btnItem}>
                <a onClick={() => Confirm(true)}>
                  <img src={success} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={s.itemInner}>
          <div className={s.wrapperLeft}>
            <div className={s.name}>
              {props.name} {t("wishlist.confirm")}
            </div>
          </div>
          <div className={s.wrapperRight}>
            <div className={s.btn}>
              <div className={s.btnItem} onClick={removeFromWishlist}>
                <a>
                  <img src={success} />
                </a>
              </div>
              <div className={s.btnItem} onClick={() => Confirm(false)}>
                <a>
                  <img className={s.cancel} src={cancel} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistItem;
