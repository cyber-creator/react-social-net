import React from 'react';
import S from './MyPosts.module.css';
import Post from './create_post/Post.jsx';
import {updateNewPostTextActionCreator, addPostActionCreator } from "../../../../redux/profile-reducer";



const MyPosts = (props) => {
	let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

	let newPostElement = React.createRef();  /* special read method */

		let addPost = () => {
			props.dispatch(addPostActionCreator());
		};




	let onPostChange = () => {
		let text = newPostElement.current.value;
		let action = updateNewPostTextActionCreator(text);
		props.dispatch(action);

	};

	return(

	    <div className={S.postBlog}>

		     <h3>My posts</h3>

		     <div>
			      	<div>
			      		<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
			      	</div>


			      	<div>
			      		<button onClick={addPost}>Add post</button> {/* we add function without () because we dont want launch, we want send */}
			      	</div>
		      </div>


		      <div>
		        <h4>New post</h4>
		      </div>

		      <div className={S.posts}>

		      		{postsElements}

		     </div>

	    </div>



	);
}

export default MyPosts;
