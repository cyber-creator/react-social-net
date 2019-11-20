import React from 'react';
import S from './Profile.module.css';
import MyPosts from './MyPosts/Post/MyPosts.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx"




const Profile = (props) => {



	return(
	  <div>
	    	<ProfileInfo />
	    	<MyPosts posts={props.profilePage.posts}
	    		newPostText={props.profilePage.newPostText}
	    		dispatch={props.dispatch} />

	  </div>

	);
}

export default Profile;
