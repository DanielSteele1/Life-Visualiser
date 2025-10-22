import Stats from './Stats.tsx'
import Grid from './Grid.tsx'
import Search from './Search.tsx'

function Main() {

  return (
    <section className="Main-content">

      <div className="main-title">
        <span className="highlight">Life Calander</span> - Your life visualised in weeks.
      </div>

      <div className="main-paragraph">
        Enter your age to see how long you've lived, and how long you have left. 
        Use the sidebar to add in important life events onto the calander,
      </div>

      <Search />

      <Stats />
      <Grid />

    </section>
  )
}

export default Main;
