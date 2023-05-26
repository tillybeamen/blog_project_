import './singlePost.css';


export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img
                    src="https://townsquare.media/site/812/files/2020/05/Illustrated-album-covers.jpg?w=1200"
                    alt="hip hop album covers"
                    className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor, sit amet consectetur.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Tillman</b></span>
                    <span className='singlePostDate'> 1 hour ago</span>
                </div>
                <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque, delectus dolorum excepturi tempora
                    assumenda inventore dignissimos? At excepturi reiciendis exercitationem, repellat praesentium possimus itaque
                    facere obcaecati ex perspiciatis mollitia.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque, delectus dolorum excepturi tempora
                    assumenda inventore dignissimos? At excepturi reiciendis exercitationem, repellat praesentium possimus itaque
                    facere obcaecati ex perspiciatis mollitia.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque, delectus dolorum excepturi tempora
                    assumenda inventore dignissimos? At excepturi reiciendis exercitationem, repellat praesentium possimus itaque
                    facere obcaecati ex perspiciatis mollitia.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque, delectus dolorum excepturi tempora
                    assumenda inventore dignissimos? At excepturi reiciendis exercitationem, repellat praesentium possimus itaque
                    facere obcaecati ex perspiciatis mollitia.
                </p>
            </div>
        </div>
    )
}
