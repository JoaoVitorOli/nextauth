import { setUpAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth"

export default function Metrics() {
  return (
    <>
      <h1>Metrics</h1>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setUpAPIClient(ctx);
  const response = await apiClient.get('/me');

  return {
    props: {}
  }
}, {
  permissions: ['metrics.list3'],
  roles: ['administrator'],
})