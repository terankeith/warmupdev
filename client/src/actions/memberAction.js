import { TEST_DISPATCH } from "./types";

export const saveMember = memberData => {
  return {
    type: TEST_DISPATCH,
    payload: memberData
  };
};
