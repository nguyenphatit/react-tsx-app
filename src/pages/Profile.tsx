import HelloForm from "components/HelloForm";

interface Props {}

const Profile: React.FC<Props> = () => {
  const login = (payload: any) =>{
    const {username, password} = payload
    console.log(username)
    console.log(password)
  }
  
  return (
    <>
      <h1>Profile</h1>
      <HelloForm login={login}/>
    </>
  );
};

export default Profile;
