import React from 'react'
import './index.krem.css'

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
    <ul>
        {
          route.map(route => {
            return <Menu key={route.id} route={route}></Menu>
          })
        }
    </ul>
  )
}

const Menu = ({route}) => {
  
  if (route.children) {
    return (
      <>
        <li>{route.name}</li>
        <Parent route={route.children}></Parent>
      </>
    )
  }
  return <li><a href={route.url}>{route.name}</a></li>
}

export default () => {
  return <Parent route={routes}></Parent>
}