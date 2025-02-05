import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
 
  {
    id: 2.1,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "About",
    newTab: false,
    path: "/#ourservices",
  },
  {
    id: 3,
    title: "Our Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "App Development",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Web Development",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Testing ",
        newTab: false,
        path: "/auth/signup",
      },
      
    ],
  },
  {
    id: 3,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Careers",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Testimonials",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Testing ",
        newTab: false,
        path: "/auth/signup",
      },
      
    ],
  },

  {
    id: 4,
    title: "Testimonials",
    newTab: false,
    path: "/testimonials",
  },
  {
    id: 5,
    title: "Contact",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
