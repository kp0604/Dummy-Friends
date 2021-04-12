
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import UserCard from './components/usercard.js';
import Friends from './components/friends.js';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


function App() {

  const [userObj, setUserObj] = useState(null)
  const [friendObj, setFriendObj] = useState(null)

  console.log(friendObj)

  function fetchData() {
    fetch('https://randomuser.me/api/').then(res => res.json())
      .then((data) => {
        console.log("inFetchData3")
        setUserObj(data.results[0])
        // window.scroll({ top: 100000, behavior: 'smooth' })
        console.log(userObj)
        console.log(friendObj)

      })
  }

  useEffect(function fetchData() {
    fetch('https://randomuser.me/api/').then(res => res.json())
      .then((data) => {
        console.log("inFetchData")
        console.log(userObj)
        setUserObj(data.results[0])

        console.log(userObj)
      })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <UserCard userObj={userObj} friendObj={friendObj} setFriendObj={(fD) => setFriendObj(fD)} fetchData={() => fetchData()} /> */}
        <Switch>
          <Route exact path="/" component={() => <UserCard userObj={userObj} friendObj={friendObj} setFriendObj={(fD) => setFriendObj(fD)} fetchData={() => fetchData()} />} />
          <Route exact path="/home" component={() => <UserCard userObj={userObj} friendObj={friendObj} setFriendObj={(fD) => setFriendObj(fD)} fetchData={() => fetchData()} />} />
          <Route exact path="/friends" component={() => <Friends friendObj={friendObj} />} />
          <Redirect path="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )

}

export default App;

