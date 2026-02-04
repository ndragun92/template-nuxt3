/**
 * Initialization plugin that provides app origin and hostname to the Nuxt app context
 *
 * This plugin extracts the origin and hostname from either:
 * - Server: HTTP headers from the request
 * - Client: Window location object
 *
 * The values are made available globally via nuxtApp.$app_origin and nuxtApp.$app_hostname
 *
 * Usage in components:
 * ```typescript
 * const nuxtApp = useNuxtApp();
 * console.log(nuxtApp.$app_origin);    // e.g., "https://example.com"
 * console.log(nuxtApp.$app_hostname);  // e.g., "example.com"
 * ```
 */
export default defineNuxtPlugin((nuxtApp) => {
  let host: string;
  // Get host in case of server side request
  if (import.meta.env.SSR) {
    host = nuxtApp?.ssrContext?.event?.node?.req?.headers?.host || "";
  } else {
    host = window.location.host;
  }

  // Determine protocol based on environment
  const protocol = import.meta.env.SSR
    ? process.env.NODE_ENV === "production"
      ? "https"
      : "http"
    : window.location.protocol.replace(":", "");

  const origin = new URL(`${protocol}://${host}`);
  // Extract origin and set data in-app context
  nuxtApp.provide("app_origin", origin.origin);
  nuxtApp.provide("app_hostname", origin.hostname);
});
