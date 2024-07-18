const express=require('express');
const path=require('path');
const fs=require('fs');
const multer=require('multer');
// Tạo đối tượng express
const app=express();
const upload=multer({dest: 'uploads/'});// Định nghĩa thư mục chứa ảnh upload
// Cấu hình hướng dẫn phục vụ file trong thư mục uploads
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
// Cấu hình link đến thư mục views
app.set('views',path.join(__dirname,'views'));
// Chọn view engine là ejs
app.set('view engine','ejs');
// Route hiển thị các ảnh trong thư mục
app.get('/gallery', (req,res)=>{
    // Đọc tất cả các file trong thư mục upload
    fs.readdir(path.join(__dirname,'uploads'),(err,files)=>{
        if(err){
            console.error("Lỗi khi đọc file: ",err);
            return;
        }
        res.render('gallery',{images: files});
    });
});
//route upload ảnh
app.post('/upload',upload.single('image'),(req,res)=>{//upload anh
    res.redirect('/gallery');// Trả về trang gallery
});
//Lắng nghe
app.listen(3001,()=>{
    console.log("server đang chạy ở cổng 3001");
});