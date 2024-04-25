import React, { useState } from 'react'; 
import useStore from '../zustand/state';
import { Switch } from 'antd';
import { Outlet } from "react-router-dom";
import LeftSideMenu from '../layouts/LayoutsSidebar/leftSideMenu';
import LeftSideOptions from '../layouts/LayoutsSidebar/leftSideOptions';
import { ChevronLeft } from 'lucide-react';

export default function MainLayout() {
    const { mobileSidebar } = useStore()

    return (
       <div className="container">
            <div className="leftSide">
                <LeftSideMenu/>
                <LeftSideOptions/>
            </div>

            <div className={`mobileMenu ${mobileSidebar ? "active":"deactive"}`}>
                <LeftSideMenu/>
                <LeftSideOptions/>
                <div onClick={() => {useStore.setState({ mobileSidebar:!mobileSidebar });}} className="closeButton">
                    <ChevronLeft />
                </div>
            </div>
            <Outlet/>
     </div>

    )
}


