export enum AppErrorCode {
    OK = 0,
    ServerInternalError = 1,
    UnKnown = 2,
    UnAuth = 3
};
const GetResponseByDefinedCode = <T>( errorCode: AppErrorCode, payload: T ) => { return { errorCode, payload } };
export const GetOKResponse = <T>( payload: T ):AppResponse<T> => GetResponseByDefinedCode<T>( AppErrorCode.OK, payload );
export const GetInternalErrorResponse = <T>( payload: T ):AppResponse<T> => GetResponseByDefinedCode<T>( AppErrorCode.ServerInternalError, payload );
type AppResponse<T> = {
    errorCode: AppErrorCode,
    payload: T
};
export default AppResponse;