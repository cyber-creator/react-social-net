import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return(


	<div>
	    <div>
	      <img src="https://images.pexels.com/photos/841303/pexels-photo-841303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
	    </div>

	    <div className={s.descriptionBlog}>
	      ava + description
	    </div>
	</div>
	);
}

export default ProfileInfo;
