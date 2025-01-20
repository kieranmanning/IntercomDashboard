export default function GitHubLoginButton() {
    const loginWithGithub = () => {
        const clientID="Ov23liTwXwG84d4q3SvW";
        const redirectURI="http://localhost:8080/auth/github/callback";
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}`;
    };

    return (
        <button onClick={loginWithGithub}> Login with GitHub </button>
    )
}