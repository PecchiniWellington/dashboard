export interface IMenu {
  label: string;
  linkTo: string;
  icon: string;
}
export const sideBarConfig: IMenu[] = [
  {
    label: "Dashboard",
    linkTo: "/dashboard",
    icon: "bx bx-grid-alt",
  },
  {
    label: "User",
    linkTo: "/user",
    icon: "bx bx-user",
  },
  {
    label: "Message",
    linkTo: "/message",
    icon: "bx bx-chat",
  },
  {
    label: "Analytics",
    linkTo: "/analytics",
    icon: "bx bx-pie-chart-alt-2",
  },
  {
    label: "File manager",
    linkTo: "/fileManager",
    icon: "bx bx-folder",
  },
  {
    label: "Order",
    linkTo: "/order",
    icon: "bx bx-cart-alt",
  },
  {
    label: "Settings",
    linkTo: "/settings",
    icon: "bx bx-cog",
  },
];
