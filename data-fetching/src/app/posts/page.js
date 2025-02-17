import { Posts } from "./components/posts";
import { FetchPostsUsingSWRT } from "./components/PostsClientUsingSWR";

export default function PostsPage(){

    return <div>
            {/* <Posts/> */}
            <FetchPostsUsingSWRT/>
    </div>
}