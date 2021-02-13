/* created by imamudin on 02/01/19 */

import Route from "../routes/routeNames";

export const RESPONSE_KEYS = {};

export const APP_INITIAL_STATE = {
  app: {},
};


export const NAV = [
  {
    text: 'Home',
    route: 'LANDING'
  },
  {
    text: 'About us',
    route: 'ABOUT'
  },
  {
    text: 'Our Team',
    route: Route.TEAM
  },
  {
    text: 'Contact us',
    route: Route.CONTACT
  }
]

export const BRAND_NAME = 'M. S. Nagar & Co.'
