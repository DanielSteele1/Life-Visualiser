import { MdAccountCircle } from "react-icons/md";
import { FaCalendarWeek } from "react-icons/fa6";

function Navigation() {


  return (

    <section className="Navigation-container">
      <div className="Navigation">

        <span className="Nav-logo">
          <FaCalendarWeek style={{ margin: '10px' }} />
          Life Calander
        </span>

        <div className="nav-links">

          <div className="nav-link">

            Sign in
            <MdAccountCircle style={{ margin: '10px' }} />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Navigation;
