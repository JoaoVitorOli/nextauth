import { useContext, useEffect } from "react"
import Router from 'next/router';

import { setUpAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth"
import { Can } from "../components/can";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, isAuthenticated, signOut } = useAuth();

  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
  }, [])

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

      <button onClick={signOut}>Sign out</button>

      <Can permissions={['metrics.list']}>
        <div>Métricas</div>
      </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setUpAPIClient(ctx);
  const response = await apiClient.get('/me');

  console.log(response.data)

  return {
    props: {}
  }
})