import  './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
             <span className="sidebarTitle">ABOUT ME</span>
            <div className="sidebarItem">
               
                <img src="/stefen-tan-jnsiBIGUT_Q-unsplash.jpg"  width="200px" height="200px" alt="" />
                <p>
                        Cillum ullamco amet aliquip sint id nostrud Lorem duis irure occaecat est aliquip magna qui. Nulla magna elit fugiat nostrud aute ad ad.
                </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORISE</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook"></i>
                <i className="sidebarIcon fab fa-twitter"></i>
                <i className="sidebarIcon fab fa-instagram"></i>
                <i className="sidebarIcon fab fa-pinterest"></i>
                <i className="sidebarIcon fab fa-linkedin-in"></i>
            </div>
            </div>
        </div>
    )
}
