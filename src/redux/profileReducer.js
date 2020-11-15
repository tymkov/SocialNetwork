const ADD_POST = 'ADD-POST';
const SHOW_TEXT_IN_TEXTBOX = 'SHOW-TEXT-IN-TEXTBOX';


const profileReducer = (state, action) => {

    switch (action.type) {

        case ADD_POST:  
            let newPost = {
                likes: 11,
                message: state.textInTextbox
            };
            debugger;
            state.postsData.push(newPost);
            state.textInTextbox = '';
            return state;
    
        case SHOW_TEXT_IN_TEXTBOX:            
            state.textInTextbox = action.text;
            return state;

        default:
            return state;
    };   
};

export default profileReducer;

    
export const addPostActionCreator = () => ({type: ADD_POST});
export const showTextInTextBoxActionCreator = (text) => { 
    return (
        {
            type: SHOW_TEXT_IN_TEXTBOX,
            text: text
        }
    )
};