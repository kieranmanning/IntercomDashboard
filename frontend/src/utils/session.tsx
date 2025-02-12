export type SessionInfo = {
    authenticated: boolean,
    user_email: string
};

export async function getSessionInfo (): Promise<SessionInfo> {
    const response = await fetch('/api/session');
    const { authenticated, user_email } = await response.json()
    const sessionInfo: SessionInfo = {
        authenticated: authenticated,
        user_email: user_email
    }
    return sessionInfo
};