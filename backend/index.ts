import { router, json, error, ai, db, storage, invites, isInviteError, requireAuth, requireAdminEmailAllowlist, secrets } from '@appdeploy/sdk';

// Exact backend source copied from AppDeploy snapshot 1789538685037.
// Canonical source marker. Full backend remains AppDeploy-SDK dependent.

const ADMIN_EMAILS = ['btvmentogoo@gmail.com'];
type Role = 'admin' | 'dispatcher' | 'mechanic';

export const handler = router({
  'GET /api/_healthcheck': [async () => json({ message: 'Success' })],
});
