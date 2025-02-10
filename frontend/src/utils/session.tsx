export default async function checkAuthenticated () {
    const response = await fetch('/api/session');
    const { authenticated } = await response.json();
    return authenticated
};