import { getSession } from "$lib/session";

export const load = async ({ locals }) => {
  // session consists of just the user object, but could contain other preferences
  const { user } = locals
  const session = getSession(user)

  // layout data could also return additional data other than the session
  
  return { session }
}