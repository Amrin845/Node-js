// const { error } = require("console");

const fs = require("fs");

// try{
// fs.mkdirSync('temp')
// console.log("Folder is Created");
// }catch(error){
//     if(error.code==='EINVAL')
//         console.log('Path is Invalid');
//     else
//         console.log('Folder Already Exist');

// }

// try {
//   fs.rmSync("temp", { recursive: true, force: true });
//   console.log("Folder is deleted");
// } catch (error) {
//   console.log("Folder Does'nt Exist or Path is Invalid");
// }

// try {
//   fs.writeFileSync("temp/text.txt", "Hello World1\n");
//   fs.writeFileSync("temp/text.txt", "Hello World2\n");
//   fs.writeFileSync("temp/text.txt", "Hello World3\n");
//   fs.writeFileSync("temp/text.txt", "Hello World4\n");
//   fs.writeFileSync("temp/text.txt", "Hello World5\n");
//   console.log("Done");
// } catch (error) {
//   console.log("Invalid path");
// }

// try {
//   fs.appendFileSync("temp/text.txt", "Hello World1\n");
//   fs.appendFileSync("temp/text.txt", "Hello World2\n");
//   fs.appendFileSync("temp/text.txt", "Hello World3\n");
//   fs.appendFileSync("temp/text.txt", "Hello World4\n");
//   fs.appendFileSync("temp/text.txt", "Hello World5\n");
//   console.log("Done");
// } catch (error) {
//   console.log("Invalid path");
// }

// try {
//   let data = fs.readFileSync("temp/text.txt", "utf-8");

//   console.log(data);

// } catch (error) {
//   console.log("Invalid Path");
// }

// try {
//    fs.renameSync('temp/text.txt','temp/sample.txt')
//    console.log('Done');
   
// } catch (error) {
//     console.log('invalid path');
    
// }


try {
   fs.unlinkSync('temp/sample.txt')
   console.log('Done');
   
} catch (error) {
    console.log('invalid path');
    
}


