import { useRouter } from "next/router";

function User({ user }) {
  const router = useRouter();
  const data = user.data;
  return (
    <div>
      <p>single user</p>
      <h3>
        {" "}
        User Name : {data.first_name} {data.last_name}
      </h3>
      <img
        style={{
          height: "150px",
          width: "120px",
        }}
        src={data.avatar}
      />
      <br />
      <button
        onClick={() => {
          router.push("../AllUsers");
        }}
      >
        Go to home
      </button>
    </div>
  );
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
