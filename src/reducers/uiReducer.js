import { types } from "../types/types";

const initialState = {
  loading: false,
  msgError: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
      };

    case types.uiResetError:
      return {
        ...state,
        msgError: null,
      };

    case types.uiStartLoading:
      return { loading: true };

    case types.uiFinishLoading:
      return { loading: false };

    default:
      return state;
  }
};
