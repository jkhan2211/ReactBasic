import Heading from "./Header";
import Btn from './Btn'
import avatar from './icons8-avatar-96.png';
import "./App.css"
import Card from "./Card";

function Logo(props) {
  const userPic = <img src={avatar} alt="avatar" />;
  return userPic
}

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Logo />
      <Card h2="first card's h2" h3="first card's h3" />
      <Card h2="first card's h2" h3="first card's h3" />
      <Card h2="first card's h2" h3="first card's h3" />
      <Card h2="first card's h2" h3="first card's h3" />
      <Btn />

    </div>
  )

}

export default App;
