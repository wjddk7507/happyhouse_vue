import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";

import Board from "@/pages/Board.vue";
import BoardList from "@/pages/Board/BoardList.vue";
import BoardView from "@/pages/Board/BoardView.vue";
import BoardUpdate from "@/pages/Board/BoardUpdate.vue";
import BoardWrite from "@/pages/Board/BoardWrite.vue";
import BoardDelete from "@/pages/Board/BoardDelete.vue";

import Qna from "@/pages/Qna.vue";
import QnaList from "@/pages/Qna/QnaList.vue";
import QnaWrite from "@/pages/Qna/QnaWrite.vue";
import QnaUpdate from "@/pages/Qna/QnaUpdate.vue";
import QnaDelete from "@/pages/Qna/QnaDelete.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography,
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true,
        },
        component: Maps,
      },
      {
        path: "/board",
        name: "Board",
        component: Board,
        redirect: "/board/list",
        children: [
          {
            path: "list",
            name: "BoardList",
            component: BoardList,
          },
          {
            path: "write",
            name: "BoardWrite",
            component: BoardWrite,
          },
          {
            path: "view/:articleno",
            name: "BoardView",
            component: BoardView,
          },
          {
            path: "update/:articleno",
            name: "BoardUpdate",
            component: BoardUpdate,
          },
          {
            path: "delete/:articleno",
            name: "BoardDelete",
            component: BoardDelete,
          },
        ],
      },
      {
        path: "/qna",
        name: "Qna",
        component: Qna,
        redirect: "/qna/list",
        children: [
          {
            path: "list",
            name: "QnaList",
            component: QnaList,
          },
          {
            path: "write",
            name: "QnaWrite",
            component: QnaWrite,
          },
          {
            path: "update/:articleno",
            name: "QnaUpdate",
            component: QnaUpdate,
          },
          {
            path: "delete/:articleno",
            name: "QnaDelete",
            component: QnaDelete,
          },
        ],
      },
    ],
  },
];

export default routes;
