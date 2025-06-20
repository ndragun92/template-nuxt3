export default defineNuxtPlugin((nuxtApp) => {
  let host: string;
  // Get host in case of server side request
  if (import.meta.env.SSR) {
    host = nuxtApp?.ssrContext?.event?.node?.req?.headers?.host || "";
  } else {
    host = window.location.host;
  }
  const origin = new URL(`https://${host}`);
  // Extract origin and set data in-app context
  nuxtApp.provide("app_origin", origin.origin);
  nuxtApp.provide("app_hostname", origin.hostname);
});
