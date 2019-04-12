import React from 'react'
import {Provider, connect } from 'react-redux'
import styles from './index.css'

class Header extends React.Component {

  state = {
    store: this.props.store,
    globalEventDistributor: this.props.globalEventDistributor
  }

  logou = () => {
    this.state.globalEventDistributor.dispatch({ 
      type: 'LOGIN', 
      user: {
      }
    })
  }

  login = () => {
    this.state.globalEventDistributor.dispatch({ 
      type: 'LOGIN', 
      user: {
        id: 1,
        name: 'iSayid'
      }
    })
  }

  render() {
    return (
      <Provider store={this.state.store}>
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
            { !this.props.user.id && <li onClick={this.login}>模拟登录</li> }
            { this.props.user.id && <li onClick={this.logou}>退出</li> }
            <li>{this.props.user && this.props.user.id}</li>
            <li>{this.props.user && this.props.user.name}</li>
          </ul>
        </header>
      </Provider>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Header)