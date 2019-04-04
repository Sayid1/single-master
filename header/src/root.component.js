import React from 'react'
import { Scoped } from 'kremling'
import styles from './index.krem.css'

export default () => {
  return (
    <Scoped postcss={styles}>
      <header className='header'>
        <span className='brand'>丙晟云商</span>
        <ul className='md'>
          <li>产品中心</li>
          <li>合作伙伴</li>
          <li>客户案列</li>
          <li>帮助中心</li>
        </ul>
        <ul className='right'>
          <li>控制台</li>
          <li>iSayid</li>
        </ul>
      </header>
    </Scoped>
  )
}
