import * as clients from "./clients.json";

export default defineEventHandler(() => {
  return {
    clients,
  };
});
