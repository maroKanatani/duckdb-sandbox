import { useDBConnection } from "../hooks/useDBConnection";

export function Sample() {
  const { loading, connection, db } = useDBConnection();
  console.log(loading, connection, db);
  return <>test</>;
}
