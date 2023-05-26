import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"
export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle"><b>Delete Your Account</b></span>
                </div>
                <form className="settingsForm"><label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                        src="https://media.licdn.com/dms/image/D5603AQHrL0y3hjKDjQ/profile-displayphoto-shrink_200_200/0/1682806022033?e=1689206400&v=beta&t=oL-8KA6t0r7eK-69kQdgyCRwxvOFjH1wlVlMcAFYY2o" 
                        alt="profile image" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Tillman" />
                    <label>Email</label>
                    <input type="email" placeholder="till.pugh@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
