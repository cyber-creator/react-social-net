import React from 'react';
import S from './Post.module.css';

const Post = (props) => {
	return(


		<div className={S.item}>
		    <div>
		      	<img src='https://cdn1.vectorstock.com/i/1000x1000/75/65/avatar-head-profile-silhouette-with-shadow-call-vector-21757565.jpg'/>
		    </div>

			<div>
			    <p>{props.message}</p>
				<p>Like = {props.likesCount}</p>
			</div>

			<div>
				<button>Like</button>
			</div>
			
		</div>


	);
}

export default Post;
