import { sleep } from "./base";
import { dataBackgroundColor } from "../mock-data/data-background-color";
import { dataIntived } from "../mock-data/general-intived";
import { dataAssignedTome } from "../mock-data/data-project";

async function getDatathemeColorProject() {
  await sleep();
  return dataBackgroundColor;
}

async function getProjectMembers() {
  await sleep();
  return dataIntived;
}

async function createThemeColor(itemColor) {
  await sleep();
  return itemColor;
}

async function inviteMemberToProject(emailAddress) {
  await sleep();
  return emailAddress;
}

async function getDataProjectAssignToMe() {
  await sleep();
  return dataAssignedTome;
}

async function getDataProjectManageByMe() {
  await sleep();
  return dataAssignedTome;
}

async function getProjectDetail(projectId) {
  await sleep();
  return {
    id: projectId,
    type: (projectId => {
      switch (projectId % 3) {
        case 0:
          return "general";
        case 1:
          return "byzantine";
        default:
          return "filing";
      }
    })(projectId)
  };
}

export default {
  getDatathemeColorProject,
  getProjectDetail,
  getProjectMembers,
  createThemeColor,
  inviteMemberToProject,
  getDataProjectManageByMe,
  getDataProjectAssignToMe
};
