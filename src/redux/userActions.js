export const UPDATE_NAME = '[Profile] - Update Name'
export const updateUserName = () => ({ type: UPDATE_NAME });

export const USER_UPDATE_SUCCEEDED = '[Profile] - Update Name Success'
export const updateUserNameSuccess = (userName) => ({ type: USER_UPDATE_SUCCEEDED, payload: userName });
