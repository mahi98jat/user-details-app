import styles from "./user.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
function Users({ users }) {
  const router = useRouter();
  console.log(users.data);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles._h1}>All the users are here</h1>
      {users.data.map((e) => (
        <div className={styles.card} key={e.id}>
          <p>
            User name: {e.first_name} {e.last_name}
          </p>
          <p>{e.email}</p>
          <img src={e.avatar} alt="users"></img>
          <br />
          <Link href="../user/user">See details</Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://reqres.in/api/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
