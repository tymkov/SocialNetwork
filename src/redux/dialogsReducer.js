const ADD_MESSAGE = 'ADD-MESSAGE';
const SHOW_NEW_TEXT_IN_INPUT = 'SHOW-NEW-TEXT-IN-INPUT';
    

let dialogsMenuData = {
    1: {sectionName: 'groups', sectionId: 1, menuItems: {
        1: {name:'JS', itemId: 1, path:'/dialogs/groups/1'},
        2: {name:'React', itemId: 2, path:'/dialogs/groups/2'},
        3: {name:'How to find a job?', itemId: 3, path:'/dialogs/groups/3'},
        4: {name:'Diving', itemId: 4, path:'/dialogs/groups/4'}}},
    2: {sectionName: 'threads', sectionId: 2, menuItems: {
        1: {name:'Angular vs React', itemId: 1, path:'/dialogs/threads/1'},
        2: {name:'Best CV', itemId: 2, path:'/dialogs/threads/2'},
        3: {name:'TimeOut Issue', itemId:3, path:'/dialogs/threads/3'}
    }},
    3: {sectionName: 'friends', sectionId: 3, menuItems: {
        1: {name:'Misha', itemId: 1, path:'/dialogs/friends/1'},
        2: {name:'Grisha', itemId: 2, path:'/dialogs/friends/2'},
        3: {name:'Zita', itemId: 3, path:'/dialogs/friends/3'},
        4: {name:'Gita', itemId: 4, path:'/dialogs/friends/4'}
    }}
};

let dialogsMessages = {
    1: {1:[],2:[],3:[],4:[]},
    2: {1:[{id:1, message:'Hey'},
    {id:2, message:'Yo'},
    {id:3, message:'Bay'}],2:[{id:1, message:'Hello mama. I always anted to be a austronaut. But my frien Josef sad that is a stupid idea.'},
    {id:2, message:'sdfsdfdf dfsfsdfsd dsf sdf sd fs f sdfsdfsfs fsdfsdfsdf sdfsdfsdfs dfsddf'},
    {id:3, message:'Hello mama. I always anted to be a austronaut. But my frien Josef sad that is a stupid idea.'},
    {id:4, message:'sdfsdfdf dfsfsdfsd dsf sdf sd fs f sdfsdfsfs fsdfsdfsdf sdfsdfsdfs dfsddf'},
    {id:5, message:'Hello mama. I always anted to be a austronaut. But my frien Josef sad that is a stupid idea.'},
    {id:6, message:'sdfsdfdf dfsfsdfsd dsf sdf sd fs f sdfsdfsfs fsdfsdfsdf sdfsdfsdfs dfsddf'},
    {id:7, message:'Hello mama. I always anted to be a austronaut. But my frien Josef sad that is a stupid idea.'},
    {id:8, message:'sdfsdfdf dfsfsdfsd dsf sdf sd fs f sdfsdfsfs fsdfsdfsdf sdfsdfsdfs dfsddf'},
    {id:9, message:'Son'},
    {id:10, message:'Daughsdffsd  sdf sdfsdf fffff dsfsdfsdf dfsdfsfs dfsdf sdf sdfsfsdfsf s'}],3:[{id:1, message:'true'},
    {id:2, message:'false'}]},
    3: {1:[],2:[{id:1, message:'Lisa'},
    {id:2, message:'elefant'},
    {id:3, message:'Baiden'},
    {id:4, message:'Turkish'}],3:[],4:[]},
}

let dialogsPageState = {dialogsMenuData: dialogsMenuData, dialogsMessages: dialogsMessages, textInInput: 'Hey'};


const dialogsReducer = (state = dialogsPageState, action) => {
    
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