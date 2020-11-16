const ADD_POST = 'ADD-POST';
const SHOW_TEXT_IN_TEXTBOX = 'SHOW-TEXT-IN-TEXTBOX';


let postsData = [
    {message:'Hi how are you?', likes: 4},
    {message:"I'm fine?", likes: 5},
    {message:'Idiots :)', likes: 10}
];

let profilePageState = {postsData: postsData, textInTextbox: 'Starter'};


const profileReducer = (state = profilePageState, action) => {

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