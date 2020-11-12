// pages/api/user.js

import Iron from '@hapi/iron'
import CookieService from '../../lib/cookie'

export default async (req, res) => {
  let user;
  try {
    user = await Iron.unseal(CookieService.getAuthToken(req.cookies), process.env.ENCRYPTION_SECRET, Iron.defaults)
  } catch (error) {
    res.status(401).end()
  }

  // now we have access to data inside of user
  // and we could make database calls or just send back what we have
  // in the token.

  res.json(user)
}