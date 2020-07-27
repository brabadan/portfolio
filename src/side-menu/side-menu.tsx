import React, { useState } from 'react';
import { Menu } from 'antd';
import { Layout } from 'antd';

interface MenuItem {
    name: string;
    link: string;
}

export const SideMenu: React.FC = () => {
    const menuItems: MenuItem[] = [
        {
            name: 'Kubik',
            link: '../kubik/index.html'
        },
        {
            name: 'templator',
            link: '../templator/index.html'
        }
    ];

    const [itemNo, setItemNo] = useState(0);

    const handleClickMenu = (index: number) => () => {
        setItemNo(index);
    }

    return (
        <React.Fragment>
            <Layout.Sider>
                <Menu mode="inline">
                    {menuItems.map((menuItem, index) => (
                        <Menu.Item key={menuItem.name} onClick={handleClickMenu(index)}>{menuItem.name}</Menu.Item>
                    ))}
                </Menu>
            </Layout.Sider>
            <Layout.Content>
                <iframe src={menuItems[itemNo].link} style={{ width: '100%', height: '99.5vh', border: 'none' }} />
            </Layout.Content>
        </React.Fragment>
    )
}