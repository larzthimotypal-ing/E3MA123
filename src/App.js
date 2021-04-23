import Header from './components/Header'
import NavItem from './components/NavItem'
import Footer from './components/Footer'
import Main from './components/Main'
import Favourite from './components/Favourite';

function App() {
  return (
    <div className= "container">
      {/* raquel */}
      
      <Header title="BIRDWATCHING" />
      
      {/* vince */}
      <NavItem text="Home" itemNumber="1" />
      <NavItem text="Get Started" itemNumber="2" />
      <NavItem text="Photos" itemNumber="3" />
      <NavItem text="Gear" itemNumber="4" />
      <NavItem text="Forum" itemNumber="5" />
      
      {/* mich */}
      <Main title="WELCOME"
      text="Welcome to our fake birdwatching site. If this were a real site, it would be the ideal place to come to learn more about birdwatching whether you are a beginner looking to learn how to get into birding, or an expert wanting to share ideals, tips, and photos with other like-minded people.So don't waste time! Get what you need, then turn off that computer and get out into the great outdoors!"/>

      <Favourite line1="Favourite" line2="Photos"/>

      {/* kyla */}
      <Footer text="This fake website example is CC0 - any part of this code may be reused in any way you wish. Original example written by Chris Mills, 2016" 
      urlSource="https://www.vecteezy.com/free-vector/bird-icon" 
      iconName="Eagle Icon" 
      websiteSource="Vecteezy.com"/>
    </div>
  );
}

export default App;
