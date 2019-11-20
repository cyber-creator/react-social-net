const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
                state.newMessageBody = action.body;
                return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
                return state;
    }

}

export const sendMEssageCreator = () => ({ type: SEND_MESSAGE }) // when you do like that dont forget () cause you return object

export const updateNewMessageBodyCreator = (body) => {
	return{
		type: UPDATE_NEW_MESSAGE_BODY, body: body
	}
}

export default dialogsReducer;