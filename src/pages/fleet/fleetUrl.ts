/** Current fleet page, including its query string. The hash is dropped. */
export function fleetHandoffUrl(origin: string, pathname: string, search: string): string {
  const url = new URL(`${pathname}${search}`, origin);
  url.hash = "";
  return `${url.origin}${url.pathname}${url.search}`;
}
