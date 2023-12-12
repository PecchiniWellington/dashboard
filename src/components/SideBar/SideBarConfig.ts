export interface IMenu {
  label: string;
  linkTo: string;
  icon: string;
  type?: string;
  child?: any[];
}
export const sideBarConfig: IMenu[] = [
  {
    label: "Dashboard",
    linkTo: "/dashboard",
    icon: "bx bx-grid-alt",
    type: "link",
  },
  {
    label: "User",
    linkTo: "/user",
    icon: "bx bx-user",
    type: "link",
  },
  {
    label: "Message",
    linkTo: "/message",
    icon: "bx bx-chat",
    type: "link",
  },
  {
    label: "Analytics",
    linkTo: "/analytics",
    icon: "bx bx-pie-chart-alt-2",
    type: "link",
  },
  {
    label: "File manager",
    linkTo: "/fileManager",
    icon: "bx bx-folder",
    type: "link",
  },
  {
    label: "Order",
    linkTo: "/order",
    icon: "bx bx-cart-alt",
    type: "link",
  },
  {
    label: "Settings",
    linkTo: "/settings",
    icon: "bx bx-cog",
    type: "link",
  },
  {
    label: "Ideas",
    linkTo: "https://coreui.io/demos/react/4.6/default-v3/#/theme/colors",
    icon: "bx bx-cog",
    type: "link",
  },
  {
    label: "Components",
    icon: "bx bx-grid-alt",
    linkTo: "/components",
    type: "collapse",
    child: [
      {
        label: "Button",
        icon: "bx bx-grid-alt",
        linkTo: "/components/buttons",
      },
      {
        label: "Collapse",
        icon: "bx bx-grid-alt",
        linkTo: "/components/accordions",
      },
    ],
  },
];
