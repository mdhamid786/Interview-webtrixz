import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";

export default function App() {
  const menuItems = ["Home", "About", "Log Out"];

  return (
    <Navbar className="bg-pink-300 text-black" disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand></NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <MenuIcon />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            style={{ color: "white", fontWeight: "bold", background: "tomato" }}
            as={Link}
            href="#"
            variant="flat"
            className=""
          >
            <AddIcon
              style={{ color: "white", width: "30px", height: "30px" }}
            />{" "}
            Add
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            style={{ color: "black", fontWeight: "bold" }}
            as={Link}
            href="#"
            variant="flat"
            className="bg-pink-300"
          >
            <AccountCircleIcon
              style={{ color: "tomato", width: "30px", height: "30px" }}
            />{" "}
            Admin
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
