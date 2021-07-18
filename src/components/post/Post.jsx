import { Link } from "react-router-dom";
import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="/kbo-bike-yBC8tW4KhJ4-unsplash.jpg"  alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                  <Link className="link" to="/single">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>  
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, praesentium aspernatur aut accusamus adipisci perferendis temporibus incidunt sequi cumque beatae ea maxime! Amet dolorem nemo ad voluptatibus assumenda iusto et.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, praesentium aspernatur aut accusamus adipisci perferendis temporibus incidunt sequi cumque beatae ea maxime! Amet dolorem nemo ad voluptatibus assumenda iusto et.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, praesentium aspernatur aut accusamus adipisci perferendis temporibus incidunt sequi cumque beatae ea maxime! Amet dolorem nemo ad voluptatibus assumenda iusto et.
            </p>
        </div>
    )
}
