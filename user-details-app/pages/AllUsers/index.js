import styles from "./user.module.css";

function Users({ users }) {
  console.log(users.data);
  return (
    <>
      <h1>All the users are here</h1>
      {users.data.map((e) => (
        <div className={styles.card} key={e.id}>
          <p>
            User name: {e.first_name} {e.last_name}
          </p>
          <p>{e.email}</p>
          <img src={e.avatar} alt="users"></img>
        </div>
      ))}
    </>
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
