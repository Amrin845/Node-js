const { error } = require("console");
const fs = require("fs");

// fs.mkdir('temp', (error) => {
//     if (error) {
//         console.log(error);

//         if (error.code === 'ENOENT')
//             console.log('Path is Invalid');
//         else
//             console.log('Folder Already Exist');
//             }
//     else {
//         console.log('Folder has been Created');
//         }
// })

// fs.rmdir("temp", (error) => {
//   if (error) {
//     console.log("Path is Invalid");
//   } else {
//     console.log("Folder has been Deleted");
//   }
// });

// fs.appendFile("temp/text.txt","Hello World\n", (error) => {
//   if (error) {
//     console.log("Path is Invalid");
//   } else {
//     fs.appendFile("temp/text.txt","Hello World2\n", ()=>{})
//     fs.appendFile("temp/text.txt","Hello World3\n", ()=>{})
//     fs.appendFile("temp/text.txt","Hello World4\n", ()=>{})
//     fs.appendFile("temp/text.txt","Hello World5\n", ()=>{})
//     console.log('Done');
    
//   }
// });


// fs.readFile("temp/text.txt",'utf-8', (error,data) => {
//   if (error) {
//     console.log("Path is Invalid");
//   } else {
    
//     console.log(data);
    
//   }
// });


// fs.rename("temp/text.txt",'temp/test.txt', (error) => {
//   if (error) {
//     console.log("Path is Invalid");
//   } else {
    
//     console.log('File name have been changed');
    
//   }
// });


fs.unlink('temp/test.txt', (error) => {
  if (error) {
    console.log("Path is Invalid");
  } else {
    
    console.log('File has been deleted');
    
  }
});