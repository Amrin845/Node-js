try{
    fs.mkdirSync("temp"  )
        console.log("Folder is Created");
        
  
}catch(error){
    if(error.code==="EINVAL")
        console.log("Path is Invalid");
    else
        console.log("Folder Already exist");
        
        
}