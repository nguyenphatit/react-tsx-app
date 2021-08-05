import HelloForm from "components/HelloForm";

interface Props {}

const Profile: React.FC<Props> = () => {
  return (
    <>
      <h1>Profile</h1>
      <HelloForm />
    </>
  );
};

export default Profile;
