const ADD_MESSAGE = 'ADD-MESSAGE';
const SHOW_NEW_TEXT_IN_INPUT = 'SHOW-NEW-TEXT-IN-INPUT';
    
const dialogsReducer = (state, action) => {
    
    switch (action.type) {

        case ADD_MESSAGE:
        
            let newMessage = {
                id: 11,
                message: state.textInInput
            };
        
            state.dialogsMessages[2][2].push(newMessage);
            state.textInInput = '';
            return state;
        
        case SHOW_NEW_TEXT_IN_INPUT:
            state.textInInput = action.text;
            return state;

        default:
            return state;
    };
};

export default dialogsReducer;


export const addMessageActionCreator = () => ({type: ADD_MESSAGE});   
export const showNewTextInInputActionCreator = (text) => { 
    return (
        {
            type: SHOW_NEW_TEXT_IN_INPUT,
            text: text
        }
    )
};