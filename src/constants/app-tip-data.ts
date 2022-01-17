import { AppTipDataType } from '../App';
export const LOGIN_FAIL_TIP: AppTipDataType = {
    tipTop: "LOGIN_FAIL",
    tipContent: "TRY TO LOGIN WITH CORREACT [username, pwd] PAIR"
};
export const ADD_TODO_TO_NULL_CATEGORY: AppTipDataType = {
    tipTop: "ADD_TODO_FAIL",
    tipContent: "ADD TODO TO A CATEGORY NO EXIST, ERROR_CODE: 001, SYSTEM ERROR"
};
export const ADD_TODO_RUNTIME_ERROR: AppTipDataType = {
    tipTop: "ADD_TODO_FAIL",
    tipContent: "ADD TODO RUNTIME ERROR, ERROR_CODE: 002"
};