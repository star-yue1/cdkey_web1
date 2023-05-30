import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { routes, IRouter } from "@/router/router";

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
            return item.showMenu ? getItem(
                item.title, 
                item.path, 
                // item.icon ? <item.icon /> : '' , 
                null,
                item.children?.length ? getMenuOption(item?.children) : null) : null
        })
    }
    return [];
};

const menuOption = getMenuOption(routes);

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
                defaultSelectedKeys={openMenukeys}
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
