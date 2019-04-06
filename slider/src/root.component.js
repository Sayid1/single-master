import React from 'react'
import { Link } from '@reach/router'
import styles from './index.css'

const routes = [{
  id: 1,
  name: '一级菜单A',
  children: [{
    id: 4,
    name: '二级菜单a',
    url: '/app1',
  }, {
    id: 7,
    name: '二级菜单a-1',
    children: [{
      id: 8,
      name: '三级级菜单a-1-1',
      url: '/app4'
    }]
  }]
}, {
  id: 2,
  name: '一级菜单B',
  children: [{
    id: 5,
    name: '二级菜单b',
    url: '/app2'
  }]
}, {
  id: 3,
  name: '一级菜单C',
  children: [{
    id: 6,
    name: '二级菜单c',
    url: '/app3'
  }]
}]

const Parent = ({route}) => {
  return (
    <ul className={styles.slider}>
        {
          route.map(route => {
            return <Menu key={route.id} route={route}></Menu>
          })
        }
    </ul>
  )
}

class Menu extends React.Component {

  constructor(props) {
    super(props)

    this.parentRef = React.createRef()
  }

  zk = () => {
    const display = this.parentRef.current.nextSibling.style.display
    this.parentRef.current.nextSibling.style.display = display === 'block' ? 'none' : 'block'
  }

  render() {
    const { route } = this.props
    if (route.children) {
      return (
        <>
          <li ref={this.parentRef} className={styles.parent} onClick={this.zk}>
            <span>{route.name}</span>
            <span>展开</span>
          </li>
          <Parent route={route.children}></Parent>
        </>
      )
    }
    return <li className={styles.child}><Link to={route.url}>{route.name}</Link></li>
  }
}


export default () => {
  return <Parent route={routes} />
}