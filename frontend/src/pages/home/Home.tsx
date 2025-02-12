import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'
import GitHubLoginButton from '../../components/authentication/GitHubLoginButton'
import LogoutButton from '../../components/authentication/LogoutButton'

type Props = {
  user_email?: string
};

export default function Home(props: Props) {
  const [count, setCount] = useState(0);
  console.log(props.user_email);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        { props.user_email ? <p>Logged in as { props.user_email } </p> : <p></p>}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>components/home/index.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        <GitHubLoginButton />
      </p>
      <p>
        <LogoutButton />
      </p>
    </>
  )
}
