// pages/api/login.js
import { Magic } from '@magic-sdk/admin'
import Iron from '@hapi/iron'
import CookieService from '../../lib/cookie'

export default async (req, res) => {
    if (req.method !== 'POST') return res.status(405).end()

    // exchage DID from Magic for user data
    const did = req.headers.authorization.split('Bearer').pop().trim()
    const user = await new Magic(process.env.MAGIC_SECRET_KEY).users.getMetadataByToken(did)

    // author cookies to persist user session
    const token = await Iron.seal(user, process.env.ENCRYPTION_SECRET, Iron.defaults)
    CookieService.setTokenCookie(res, token)

    res.end()
}