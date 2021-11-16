import { useRouter } from "next/router";

function User({ user }) {
  const router = useRouter();
  console.log(router.query);
  return <div>{user}</div>;
}
export async function getStaticProps() {
  const res = await fetch(`https://reqres.in/api/users/${2}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
export default User;
