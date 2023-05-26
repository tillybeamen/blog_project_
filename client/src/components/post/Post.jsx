import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" 
            src="https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg" 
            alt="anime characters" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Anime</span>
                    <span className="postCat"> Music</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
        
                </span>
                <span className="postDate"> 1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consequuntur, 
            aut sint recusandae incidunt, eius quae fuga repudiandae sed eos nemo beatae? Praesentium eum ut eius 
            ure maiores provident voluptate! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consequuntur, 
            aut sint recusandae incidunt, eius quae fuga repudiandae sed eos nemo beatae? Praesentium eum ut eius 
            ure maiores provident voluptate! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consequuntur, 
            aut sint recusandae incidunt, eius quae fuga repudiandae sed eos nemo beatae? Praesentium eum ut eius 
            ure maiores provident voluptate! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consequuntur, 
            aut sint recusandae incidunt, eius quae fuga repudiandae sed eos nemo beatae? Praesentium eum ut eius 
            ure maiores provident voluptate!</p>
        </div>
    )
}

