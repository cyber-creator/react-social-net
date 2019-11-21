import React from 'react';
import S from './Profile.module.css';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {



	return(
	  <div>
	    	<ProfileInfo />
	    	<MyPostsContainer store={props.store} />
	  </div>

	);
};

export default Profile;
