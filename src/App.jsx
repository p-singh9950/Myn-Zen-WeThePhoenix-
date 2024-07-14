// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import DailyLoginReward from './components/DailyLoginReward';
import FashionChallenges from './components/FashionChallenges';
import MyWardrobe from './components/MyWardrobe';
import LiveLook from './components/LiveLook';
import MixAndMatch from './components/MixAndMatch';

function App() {
    return (
      <BrowserRouter>
        <Router>
            <Navbar />
            <Switch>
                <Route path="/daily-login" component={DailyLoginReward} />
                <Route path="/fashion-challenges" component={FashionChallenges} />
                <Route path="/my-wardrobe" component={MyWardrobe} />
                <Route path="/live-look" component={LiveLook} />
                <Route path="/mix-and-match" component={MixAndMatch} />
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
      </BrowserRouter>
    );
}

const Home = () => (
    <div>
        <h1 className='text-black'>Welcome to Myntra Zen</h1>
        <p>Select a feature to get started!</p>
    </div>
);

export default App;
