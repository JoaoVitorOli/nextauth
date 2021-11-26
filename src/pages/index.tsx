import type { GetServerSideProps } from 'next';
import { FormEvent, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import styles from '../styles/Home.module.css';
import { withSSRGuest } from '../utils/wuthSSRGuest';

function Home() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password
    }

    signIn(data);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Home;

export const getServerSideProps = withSSRGuest(async (ctx) => {

  return {
    props: {}
  }
})
