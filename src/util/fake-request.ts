const FAKE_REQUEST_DELAY = 3000; //ms
export const fakeSuccessRequest = <T>( fakeResponse: T ):Promise<T> => {
    return new Promise( ( resolve ) => {
        setTimeout( () => {
            resolve( fakeResponse );
        }, FAKE_REQUEST_DELAY );
    } )
}