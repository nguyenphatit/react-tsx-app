import appConstant from "constants/appConstant";
import { useEffect } from "react";
import api from '../services/api';

const Home: React.FC = () => {
  useEffect(() => {
    api.get("", null);
  }, []);

  return (<>
    <h1>{appConstant.name}</h1>
  </>);
};

export default Home;
