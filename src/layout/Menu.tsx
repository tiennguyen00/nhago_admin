import * as React from "react";
import {useState} from "react";
import Box from "@mui/material/Box";
import LabelIcon from "@mui/icons-material/Label";

import {
  useTranslate,
  MenuItemLink,
  MenuProps,
  useSidebarState,
} from "react-admin";

import visitors from "../visitors";
import orders from "../orders";
import invoices from "../invoices";
import products from "../products";
import categories from "../categories";
import reviews from "../reviews";
import SubMenu from "./SubMenu";

type MenuName =
  | "menuProjectDevProcess"
  | "menuProjected"
  | "menuLibrary"
  | "menuHome"
  | "menuOthers";

const Menu = ({dense = false}: MenuProps) => {
  const [state, setState] = useState({
    menuProjectDevProcess: false,
    menuProjected: true,
    menuLibrary: true,
    menuHome: true,
    menuOthers: true,
  });
  const translate = useTranslate();
  const [open] = useSidebarState();

  const handleToggle = (menu: MenuName) => {
    setState(state => ({...state, [menu]: !state[menu]}));
  };

  return (
    <Box
      sx={{
        width: open ? 200 : 50,
        marginTop: 1,
        marginBottom: 1,
        transition: theme =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <SubMenu
        handleToggle={() => handleToggle("menuProjectDevProcess")}
        isOpen={state.menuProjectDevProcess}
        name="pos.menu.processDevProject"
        icon={<orders.icon />}
        dense={dense}
      >
        <MenuItemLink
          to="/quytrinh"
          state={{_scrollToTop: true}}
          primaryText={translate(`resources.quytrinh`)}
          leftIcon={<orders.icon />}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle("menuProjected")}
        isOpen={state.menuProjected}
        name="pos.menu.projected"
        icon={<products.icon />}
        dense={dense}
      >
        <MenuItemLink
          to="/products"
          state={{_scrollToTop: true}}
          primaryText={translate(`resources.products.name`, {
            smart_count: 2,
          })}
          leftIcon={<products.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/categories"
          state={{_scrollToTop: true}}
          primaryText={translate(`resources.categories.name`, {
            smart_count: 2,
          })}
          leftIcon={<categories.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/duandalam"
          state={{_scrollToTop: true}}
          primaryText={translate(`resources.duandalam`)}
          leftIcon={<categories.icon />}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle("menuLibrary")}
        isOpen={state.menuLibrary}
        name="pos.menu.library"
        icon={<visitors.icon />}
        dense={dense}
      >
        <MenuItemLink
          to="/customers"
          state={{_scrollToTop: true}}
          primaryText={translate(`resources.customers.name`, {
            smart_count: 2,
          })}
          leftIcon={<visitors.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/segments"
          state={{_scrollToTop: true}}
          primaryText={translate(`resources.segments.name`, {
            smart_count: 2,
          })}
          leftIcon={<LabelIcon />}
          dense={dense}
        />
        <MenuItemLink
          to="/thuvientulieu"
          state={{_scrollToTop: true}}
          primaryText={translate(`resources.thuvientulieu`)}
          leftIcon={<LabelIcon />}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle("menuHome")}
        isOpen={state.menuHome}
        name="pos.menu.home"
        icon={<visitors.icon />}
        dense={dense}
      >
        <MenuItemLink
          to="/customers"
          state={{_scrollToTop: true}}
          primaryText={translate(`resources.customers.name`, {
            smart_count: 2,
          })}
          leftIcon={<visitors.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/segments"
          state={{_scrollToTop: true}}
          primaryText={translate(`resources.segments.name`, {
            smart_count: 2,
          })}
          leftIcon={<LabelIcon />}
          dense={dense}
        />
        <MenuItemLink
          to="/trangchu"
          state={{_scrollToTop: true}}
          primaryText={translate(`resources.trangchu`)}
          leftIcon={<LabelIcon />}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle("menuOthers")}
        isOpen={state.menuOthers}
        name="pos.menu.others"
        icon={<visitors.icon />}
        dense={dense}
      >
        <MenuItemLink
          to="/customers"
          state={{_scrollToTop: true}}
          primaryText={translate(`resources.customers.name`, {
            smart_count: 2,
          })}
          leftIcon={<visitors.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/segments"
          state={{_scrollToTop: true}}
          primaryText={translate(`resources.segments.name`, {
            smart_count: 2,
          })}
          leftIcon={<LabelIcon />}
          dense={dense}
        />
        <MenuItemLink
          to="/thongtinkhac"
          state={{_scrollToTop: true}}
          primaryText={translate(`resources.thongtinkhac`)}
          leftIcon={<LabelIcon />}
          dense={dense}
        />
      </SubMenu>
    </Box>
  );
};

export default Menu;
