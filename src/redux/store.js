import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {


	_state: {


	profilePage:
			{
			posts: [
					{id: 0, message: "Hi, how are you?", likesCount: 32},
					{id: 1, message: 'It\'s my first post', likesCount: 14},
					{id: 1, message: 'It\'s my second post', likesCount: 15},
					{id: 1, message: 'It\'s my third post', likesCount: 10},
					],
			newPostText: 'it-kamasutra.com'
			 },

	dialogsPage:
			{
			messages: [
						{id: 0, message: "Hi Dimych"},
						{id: 1, message: 'Andrew How is you deal'},
						{id: 2, message: 'Sveta Yo'},
						{id: 3, message: 'Sasha Yo'},
						{id: 4, message: 'Viktor Yo'},
						{id: 5, message: 'Valera Yo'}
					],
			dialogs:[   
					{id: 0, name: "Dimych"},
					{id: 1, name: 'Andrew'},
					{id: 2, name: 'Sveta'},
					{id: 3, name: 'Sasha'},
					{id: 4, name: 'Viktor'},
					{id: 5, name: 'ValeraKKK'},
					 ],
			newMessageBody: ""
			},
	sidebar: {}
},


	getState(){
		return this._state;
	},

	_callSubscriber(){
	console.log('State was changed');
	},



	subscribe(observer){
		this._callSubscriber = observer;
		},

	dispatch(action){

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);


	}


}


export default store;
window.store = store;