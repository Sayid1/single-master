import React from 'react'
import styles from './index.css'

export default () => {
  return (
      <header className={styles.header}>
        <span className={styles.brand}>丙晟云商</span>
        <ul className={styles.md}>
          <li>产品中心</li>
          <li>合作伙伴</li>
          <li>客户案列</li>
          <li>帮助中心</li>
        </ul>
        <ul className={styles.right}>
          <li>控制台</li>
          <li>iSayid</li>
        </ul>
      </header>
  )
}
