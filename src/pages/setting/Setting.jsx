import './setting.css'
import Sidebar from '../../components/sidebar/Sidebar.jsx'

export default function Setting() {
    return (
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">
                        Update your Account
                    </span>
                    <span className="settingDeleteTitle">
                        Delete your Account
                    </span>
                </div>
                <form action="" className="settingForm">
                    <label > ProfilePic</label>
                    <div className="settingPP">
                        <img src="./pic.jpg" alt="" />
                        <label htmlFor="fileInput">
                    <i className="settingPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label >userName</label>
                <input type="text" placeholder="obi" />
                <label >Email</label>
                <input type="email" placeholder="obi@gmail.com" />
                <label >Password</label>
                <input type="password" />
                <button className="settingSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
