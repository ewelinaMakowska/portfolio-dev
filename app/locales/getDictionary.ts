import supportedLanguages, { defaultLanguage, langLiterals } from "./supportedLanguages"

export type Locale = typeof langLiterals[number]

export const determineLangToUse = (locale: unknown): Locale => {
  if (!locale) return defaultLanguage
  if (!supportedLanguages.includes(locale as Locale)) return defaultLanguage
  return locale as Locale
}

export const getDictionary = async (locale: unknown): Promise<Record<string, unknown>> => {
  const lang = determineLangToUse(locale)
  const dict = await import(`./${lang}.json`)
  return dict.default
}