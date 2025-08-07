// simulate api requests with callbacks
function getuserInfo(userId, callback  ){
    setTimeout(() => {
        const userInfo = {name:'john', email: 'johm@example.com'};
        callback(userInfo);
    }, 1000);
}

function getuserPost (userId,callback){
    setTimeout(() => {
        const posts = ['post1', 'post2', 'post3'];
        callback(posts);
    }, 1500);
}
// callback hell scenerio
    getuserInfo(1, (userInfo) => { // 1 = userId
        console.log('userInfo: ', userInfo);
        getuserPost(1, (posts) => {
            console.log('User posts: ', posts);
        });
    }); 