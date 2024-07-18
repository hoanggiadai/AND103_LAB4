const express=require('express');
const jwt=require('jsonwebtoken');
const bodyParser=require('body-parser');
const app44 = express();
app44.use(bodyParser.urlencoded({extended: true}));
app44.use(bodyParser.json());
const accessTokenSecret='123456';
const refressTokenSecret='123456';
const users=[
    {id:1, username: 'user123',password: 'password'},
];
function generateAcessToken(user){
    return jwt.sign(user,accessTokenSecret,{expiresIn: '15m'});
}
function generateRefressToken(user){
    return jwt.sign(user,refressTokenSecret,{expiresIn: '7d'});
}
app44.post('/login', (req,res)=>{
    const { username, password } = req.body; 
    console.log(username);
    console.log(password);
    const user=users.find((u)=>
        u.username===username && u.password===password
    );
    if(!user){
        console.log("user, pass không đúng");
        return;
    }
    const accessToken=generateAcessToken({id:user.id,username: user.username});
    const refessToken=generateRefressToken({id:user.id,username: user.username});
    res.json({accessToken,refessToken});
    console.log("AccessToken: ",accessToken);
    console.log("RefressToken: ",refessToken);
});
app44.listen(3004,()=>{
    console.log("Server đang chạy ở cổng 3004");
});