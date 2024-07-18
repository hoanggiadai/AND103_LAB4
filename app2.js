//import Thư viện
const express=require('express');
const mailer=require('nodemailer');
const app43=express();// Tạo đối tượng express
// Tạo thông tin người gửi
let transporter=mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'daihgph36944@fpt.edu.vn',
        pass: 'htcv iwtu jpsi zzas'
    }
});
//noi dung can gui
let mailOption={
    from: 'daihgph36944@fpt.edu.vn',
    to: 'hoanggiadai19@gmail.com',
    subject: 'Gửi maill',
    text: 'Đây là email gửi ngày 18/7'
};
//thuc hien gui
transporter.sendMail(mailOption,(error,info)=>{
    if(error){
        console.error(error);
    }
    else{
        console.log("Thành công: ",info.messageId);
    }
});
//lang nghe
app43.listen(3002,()=>{
    console.log("Server đang chạy ở cổng 3002");
});