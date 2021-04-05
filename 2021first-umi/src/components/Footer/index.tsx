import React from 'react';
import { Row, Col, Divider } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { MailOutlined } from '@ant-design/icons';
import { QqOutlined } from '@ant-design/icons';
import { styles } from './styles.less';


const box_style = {
  padding: '8px 0',
  background: 'rgb(0,21,41)',
  color: 'rgb(255, 255, 255)'

}
const text_style = {
  margin: '3px 3px',
}

export default () => (
    <div style={box_style} >
        <Row justify="center" align="top" wrap gutter={ [48,16]}>
            <Col span="12" offset="2">
                <div style={text_style}>
                    Igniting the Thought！
                </div>
                <div style={text_style}>
                    南京邮电大学大学生科学技术协会（简称SAST）是在校团委指导下，
                </div>     
                <div style={text_style}>
                    独立展开活动的学生科技文化及学术研究组织。
                </div>
                <div style={text_style}>
                  Copyright © NJUPT.SAST 1992-2021
                </div>
             
            </Col>
            <Col span="8" offset="2">
                <div style={text_style}>
                    <span style={{fontSize:"20px"}}>
                        Contact Us
                    </span>
                </div>
                <div style={text_style}>
                    <MailOutlined />
                    <span style={text_style}>
                      Mail to us
                    </span>
                </div>
                <div style={text_style} >
                    <a href="https://github.com/NJUPT-SAST-Technology-Center">
                         <GithubOutlined />
                         <span style={text_style}>
                              Github
                         </span>
                    </a>
                </div>
                <div style={text_style} >
                    <QqOutlined />
                    <span style={text_style}>
                      QQ:2595331904
                    </span>
                </div>
             
            </Col>
        </Row>
    </div>



//   <DefaultFooter
//     copyright="NJUPT.SAST 1992-2021"
//     links={[
//       {
//         key: 'Emain',
//         title: 'Mail to Us',
//         href: 'https://sast@njupt.edu.cn',
//         blankTarget: true,
//       },
//       {
//         key: 'github',
//         title: 'Github',
//         href: 'https://github.com',
//         blankTarget: true,
//       },
//       {
//         key: 'QQ',
//         title: 'QQ:2595331904',
//         href: 'https://sast.njupt.edu.cn/public/img/qq_qrcode.png',
//         blankTarget: false,
//       },
//     ]}
//   />
);
