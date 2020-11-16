let navMenuData = [
    {caption: 'Profile', path: '/profile'},
    {caption: 'Dialogs', path: '/dialogs'},
    {caption: 'News', path: '/news'},
    {caption: 'Music', path: '/music'},
    {caption: 'Settings', path: '/settings'}
];


const navbarReducer = (state = navMenuData, action) => {

    switch (action.type) {

        default:
            return state;
    };   
};

export default navbarReducer;