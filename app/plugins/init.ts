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
  const host = useRequestURL();
  nuxtApp.provide("app_origin", host.origin);
  nuxtApp.provide("app_hostname", host.hostname);
});
