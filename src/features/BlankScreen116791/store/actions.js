import * as types from "./constants"

export const notification_list = () => ({ type: types.NOTIFICATION_LIST })
export const notification_listSucceeded = (response, starter) => ({
  type: types.NOTIFICATION_LIST_SUCCEEDED,
  response,
  starter
})
export const notification_listFailed = (response, starter) => ({
  type: types.NOTIFICATION_LIST_FAILED,
  response,
  starter
})