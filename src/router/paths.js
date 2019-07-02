// Hi, sign in to your company
import Index from "../views/Index";
import SignIn from "../views/auth/SignIn";
import CreateProject from "../views/auth/CreateWorkSpace";
import ResetPassword from "../views/auth/ResetPassword";
import ChangePassword from "../views/auth/ResetPasswordConfirm";
import SetSubdomainToken from "../components/auth/SetSubdomainToken";

import InviteMembers from "../views/auth/InviteMembers";
import JoinInvite from "../views/auth/JoinInvite";

import DashBoard from '../views/dashboard/DashBoard';
import ResultDetail from '../views/ResultDetail';

const LAYOUT = {
  "NotLoggedIn": "NotLoggedIn",

};
export default [
  {
    path: "/",
    name: "index",
    component: Index,
    meta: { layout: LAYOUT.NotLoggedIn },
  },

  {
    path: "/signin",
    name: "signin",
    component: SignIn,
    meta: { layout: LAYOUT.NotLoggedIn },
  },
  {
    path: "/reset-password",
    name: "forgot-password",
    component: ResetPassword,
    meta: { layout: LAYOUT.NotLoggedIn},

  },
  {
    path: "/password-reset/confirm/:uidb64/:token", // DO NOT CHANGE THIS PATH
    name: "password_reset_confirm",
    component: ChangePassword,
    meta: { layout: LAYOUT.NotLoggedIn },
  },
  {
    path: "/create-workspace",
    name: "createworkspace",
    component: CreateProject,
    meta: { layout: LAYOUT.NotLoggedIn },
  },
  {
    path: "/set-token",
    name: "set-token",
    component: SetSubdomainToken
  },
  {
    path: "/invite-members",
    name: "inviteMembers",
    component: InviteMembers,
    meta: { layout: LAYOUT.NotLoggedIn },
  },

  {
    path: "/join/invite/:key",
    name: "join-invite",
    component: JoinInvite,
    meta: { layout: LAYOUT.NotLoggedIn },
  },
  {
    path: "/dashboard",
    name: "dashBoard",
    component: DashBoard,
  },
  {
    path: "/detail/:id",
    name: "resultDetail",
    component: ResultDetail,
  },
];
