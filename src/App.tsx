import React from 'react';
import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import { SideMenu } from './side-menu/side-menu';

function App() {
    return (
        <Layout>
            <SideMenu />
        </Layout>
    );
}

export default App;
