import "./posts.css"
import Post from "../post/Post"
import Post_1 from "../post 1/Post_1"
import Post_2 from "../post 2/Post_2"
import Post_3 from "../post 3/Post_3"
import Post_4 from "../post 4/Post_4"
import Post_5 from "../post 5/Post_5"

export default function Posts() {
    return (
        <div className="posts">
            <Post />
            <Post_1 />
            <Post_2 />
            <Post_3 />
            <Post_4 />
            <Post_5 />
        </div>
    )
}
