var express =require("express"),
	app = express(),
	http = require("http").Server(app).listen(8080)
	upload=require("express-fileupload");
app.use(upload())

console.log("server started!")

app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
	if(req.files){
		//console.log(req.files)
		var file=req.files.filename,
			filename=file.name;
		file.mv("/Users/mac/Desktop/"+filename,function(err){
			if(err){
				console.log(err)
				res.send("err occured")
			}
			else{
				res.send("done!")
			}
		})
	}
})
