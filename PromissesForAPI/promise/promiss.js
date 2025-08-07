function getUserInfo(UserId){
    return new Promise ((resolve)=> {
        setTimeout (()=>{
            const userInfo ={name: 'John', email: 'john@example.com'};
            resolve(userInfo);        
        }, 1000);
    });
}
function getUserPosts(UserId){
    return new Promise((resolve)=>{
        setTimeout(()=> {
            const posts =['post1','post2','post3'];
            resolve(posts);
        },1500);
    });
}
// Using promisses to simplify the code3 => creating callback using promisses
getUserInfo(1)
.then((userInfo)=>{
    console.log('User info:',userInfo);
    return getUserPosts(1);
})
.then((userPosts)=>{
    console.log('User posts:', userPosts);
})
.catch((error)=>{
    console.log('An error occurred:', error);
});