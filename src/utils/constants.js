export const ROOT_URL = 'http://localhost:5001';
export const AUTH_HEADERS = {'Authorization': 'whatever-you-want', 'Accept': 'application/json',};
export function guid() {
  return Math.random().toString(36).substr(-8);
}
