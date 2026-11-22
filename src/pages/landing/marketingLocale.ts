import { isDeLocalizedMarketingPath, DE_HOME_PATH } from "../../de-poc/deSiteChrome";
import { isFrLocalizedMarketingPath, FR_HOME_PATH } from "../../fr-poc/frSiteChrome";

export type MarketingLocale = "en" | "fr" | "de";

export function getMarketingLocale(pathname: string): MarketingLocale {
  if (isDeLocalizedMarketingPath(pathname)) return "de";
  if (isFrLocalizedMarketingPath(pathname)) return "fr";
  return "en";
}

export function localizedMarketingHomePath(locale: MarketingLocale): string {
  if (locale === "de") return DE_HOME_PATH;
  if (locale === "fr") return FR_HOME_PATH;
  return "/";
}