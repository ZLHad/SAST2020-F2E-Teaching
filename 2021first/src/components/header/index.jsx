'use strict';

import React from 'react';
import { Dropdown, Menu, Icon } from '@alifd/next';
import './index.scss';


class Header extends React.Component {
  renderTrigger() {
    return (
      <span>
        <span>drowpdown&nbsp;&nbsp;&nbsp;</span>
        <Icon className="select-icon" type="arrow-down" size="xs" />
      </span>);
  }

  renderMenu() {
    const menu = (
      <Menu >
        <Menu.Item key="menu1">option1</Menu.Item>
        <Menu.Item key="menu2">option2</Menu.Item>
        <Menu.Item key="menu3">option3</Menu.Item>
        <Menu.Item key="menu4">option4</Menu.Item>
      </Menu>);
    return menu;
  }

  render() {
    return (
      <div className="header-component">
        <div className="sitenav">
          <div className="header-left header-icon header-item">
            <a href="//sast.njupt.edu.cn/" target="_blank" rel="noopener noreferrer">
              <img src="https://webpack.docschina.org/site-logo.1fcab817090e78435061.svg" width="100%" height="100%" />
            </a>
          </div>
          <div className="header-left header-info header-item">
            <a href="//sast.njupt.edu.cn/" target="_blank" rel="noopener noreferrer">平台 title</a>
          </div>
          <div className="header-right header-user header-item">
            <a href="//sast.njupt.edu.cn/" target="_blank" rel="noopener noreferrer" title="用户头像">
              <img src="https://sast.njupt.edu.cn/public/img/logo2.png" width="100%" height="100%" />
            </a>
          </div>
          <div className="header-right header-info header-item">
            <a href="//njupt.edu.cn" target="_blank" rel="noopener noreferrer">外链1</a>
          </div>
          <div className="header-right header-info header-item">
            <a href="/demos/help.html" target="_blank" rel="noopener noreferrer">help</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
