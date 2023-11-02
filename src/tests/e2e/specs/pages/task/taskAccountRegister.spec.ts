import { test, expect } from '@playwright/test'

import { TIMEZONE_COOKIE_NAME } from '../../../../../utils/constants'
import {
  COOKIE_CONTROL_CONSENT_COOKIE_DEFAUL_VALUE,
  TIMEZONE_DEFAULT,
} from '../../../utils/constants'

test.beforeEach(async ({ context }) => {
  await context.addCookies([
    {
      name: TIMEZONE_COOKIE_NAME,
      value: TIMEZONE_DEFAULT,
      domain: 'localhost',
      path: '/',
    },
    {
      name: 'ncc_c',
      value: COOKIE_CONTROL_CONSENT_COOKIE_DEFAUL_VALUE,
      domain: 'localhost',
      path: '/',
    },
  ])
})

test.describe('page load', () => {
  test('loads the page successfully', async ({ request }) => {
    const resp = await request.get('/tasks/accounts/register')
    expect(resp.status()).toBe(200)
  })
})

// TODO: find out why vuelidate thinks its pending while page load (maybe: https://github.com/maevsi/maevsi/issues/900)
// context('visual regression', () => {
//   it('looks as before', () => {
//     cy.visit('/tasks/accounts/register')
//     cy.get('[data-is-loading="false"]').should('be.visible')
//     cy.get('[data-testid="nuxt-cookie-control-control-button"]').should(
//       'be.visible'
//     )
//     cy.compareSnapshot('taskAccountRegister')
//   })
// })
