import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { router, IRouter } from "@/router/router";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const getMenuOption = (router: IRouter[] | undefined): any => {
    if (router?.length) {
        return router.map((item) => {
            return getItem(
                item.title, 
                item.path, 
                // item.icon ? <item.icon /> : '' , 
                null,
                item.router?.length ? getMenuOption(item?.router) : null)
        })
    }
    return [];
};

const menuOption = getMenuOption(router);

interface IProps {
    children?: React.ReactNode;
}
const LeftMenu: React.FC = ({ children }: IProps) => {
    let navigate = useNavigate();
    const location = useLocation();

    const [selectedKeys, setSelectedKeys] = useState<string>('');
    const [openMenukeys, setOpenMenukeys] = useState<string[]>(['/']);
    useEffect(() => {
        setSelectedKeys(location.pathname)
        setOpenMenukeys([location.pathname])
    }, [location.pathname])

    const onClick: MenuProps["onClick"] = (e) => {
        setSelectedKeys(e.key)
        setOpenMenukeys(e.keyPath)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        navigate(e.key)
    };

    return (
        <div style={{ display: "flex",height: '100%' }}>
            <Menu
                onClick={onClick}
                selectedKeys={[selectedKeys]}
                style={{ width: 180 }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={openMenukeys}
                mode="inline"
                items={menuOption}
            />
            <div style={{ flex: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default LeftMenu;
