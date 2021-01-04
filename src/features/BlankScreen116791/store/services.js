import axios from "axios";

const notificationsAPI = axios.create({
  baseURL: "https://app.botics.co/modules/notifications",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export function notification_list(action) {
  return notificationsAPI.get(`/notification`)
}
