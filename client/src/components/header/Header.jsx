import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">Tillman Thomas Pugh iii's</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className='headerImg' 
            src="https://media.istockphoto.com/id/1253877737/photo/african-man-seated-at-desk-writes-information-on-notebook-closeup.jpg?s=612x612&w=0&k=20&c=3T1ycK6HbN27NZ6s29k7Te4K4cWKgos81sjUJoUk0MY=" 
            alt="header image" />
        </div>
    )
}
