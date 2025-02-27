const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
            posts: [
                {id: 0, message: "Hi, how are you?", likesCount: 32},
                {id: 1, message: 'It\'s my first post', likesCount: 14},
                {id: 1, message: 'It\'s my second post', likesCount: 15},
                {id: 1, message: 'It\'s my third post', likesCount: 10}
            ],
            newPostText: 'it-kamasutra.com'

};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST :{
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                };
                return {
                    ...state,
                    posts: [...state.posts, newPost],  // here we push newPost in end
                    newPostText: ''
                };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText:action.newText
            }
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST }) // when you do like that dont forget () cause you return object

export const updateNewPostTextActionCreator = (text) => {
	return{
		type: UPDATE_NEW_POST_TEXT, newText: text
	}
}

export default profileReducer;