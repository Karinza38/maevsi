import type { BreadcrumbItemProps } from 'nuxt-seo-ui'
import type { TypedLocalePathParameter } from '@typed-router/__paths'

export type BreadcrumbItemPropsLocalizedObject = Omit<
  BreadcrumbItemProps,
  'ariaLabel' | 'label' | 'to'
> & {
  ariaLabel?: { [Key in LOCALE_CODES]: string } | string
  label?: { [Key in LOCALE_CODES]: string } | string
  to: TypedLocalePathParameter<never>
}

export type UseBreadcrumbItemPropsLocalized = () =>
  | BreadcrumbItemPropsLocalizedObject
  | Promise<BreadcrumbItemPropsLocalizedObject>
