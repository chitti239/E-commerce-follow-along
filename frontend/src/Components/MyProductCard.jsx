import React from 'react'
import styles from "./Card.module.css"

const MyProductCard = ({product}) => {
  return (
    <div className={styles.card}>
      <img className={styles.productImg} src={product.images[0]} alt={product.title} />
     <h3>{product.title}</h3>
     <p>${product.price}</p>
     <div>
        <button className="btn-del-edt">Edit</button>
        <button className="btn-del-edt">Delete</button>
     </div>
    </div>
  )
}

export default MyProductCard;
