export default function Logout() {
    const logout = () => {
        fetch('/api/session', {
            method: 'DELETE',
        })
        .then(res => res)
        .then((data) => data);
    };

    return (
        <button onClick={logout}> Logout </button>
    )    
}