import React, { useState } from 'react'
import axios from 'axios';
import classes from "./App.module.css";
import ProfileSection from './components/ProfileSection';
import RepositorySection from './components/RepositorySection';
import Loading from './components/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Img from "./assets/githublogo.png"

const getUsername = () => {
  let username = sessionStorage.getItem("SearchUsername");
  if (username) {
    return username
  } else {
    return "";
  }
}

const App = () => {
  const [username, setUsername] = useState(getUsername);
  const [getProfileData, setProfileData] = useState();
  const [getRepoData, setRepoData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage, setRepoPerPage] = useState(10);

  function handleSearchUser(event) {
    setUsername(event.target.value)
  }
  function handleSearchUserClick() {
    setLoading(true)
    getData()
  }

  

  async function getData() {
    const getProfile = await axios.get(`https://api.github.com/users/${username}`).catch(notifyError);
    setProfileData(getProfile?.data)
    const getRepo = await axios.get(`https://api.github.com/users/${username}/repos`).catch(setLoading(false));
    setRepoData(getRepo?.data)
    setLoading(false);
    sessionStorage.setItem("SearchUsername", username)
  }
  
  const notifyError=(message)=>toast.error("User not found with this username", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const indexOfLastRepo = currentPage * repoPerPage;
  const indexOfFirstRepo = indexOfLastRepo - repoPerPage;
  const currentRepo = getRepoData.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  return (
    <div className={classes.main}>
      <div className={classes.searchBar}>
        <img className={classes.img} src={Img} alt="github-pic" />
        <input className={classes.search} type="text" onChange={handleSearchUser} value={username} name="username" placeholder='Search username here...' />
        <button className={!username ? classes.searchBtnDisabled : classes.searchBtn} onClick={handleSearchUserClick} disabled={!username}>Search</button>
      </div>
      {getProfileData && getRepoData && <div className={classes.github}>
        <ProfileSection data={getProfileData} />
        <RepositorySection data={currentRepo} loading={loading} repoPerPage={repoPerPage} totalRepo={getRepoData.length} paginate={paginate} />
      </div>}
      {loading && <Loading />}
      <ToastContainer />
    </div>
  )
}

export default App