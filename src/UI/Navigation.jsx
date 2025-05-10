import { Link } from "react-router-dom";
import style from "./nav.module.css";

function navigation() {
  return (
    <div>
      <nav id="intro">
        <div className={style.nav_gap}>
          <div className={style.nav_link}>
            <div className={style.logo}>
              <p>
                <strong>Rahul.</strong>
              </p>
            </div>
            <div className={style.link_list}></div>
            <ul>
              <li>
                {/* <NavLink>Hello</NavLink> */}
                {/* <Link to="#intro">Hello</Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navigation;
