import Header from './components/Header'
import NavItem from './components/NavItem'

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
      <Main title="Welcome"
      text="Welcome to our fake birdwatching site. If this were a real site, it would be the ideal place to come to learn more about birdwatching whether you are a beginner looking to learn how to get into birding, or an expert wanting to share ideals, tips, and photos with other like-minded people. So don't wast time! Get what you need, then turn off that computer and get out into the great outdoors!"/>
      {/* kyla */}
      <footer></footer> 
    </div>
  );
}

export default App;
