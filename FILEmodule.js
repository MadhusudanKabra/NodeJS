const fs= require('fs')


var first = fs.readFileSync('./content/first.txt','utf8')
var second = fs.readFileSync('./content/second.txt','utf8')

console.log(first);
console.log(second);

fs.writeFileSync('./content/created.txt','Hello World,I have created a text file using nodeJs',{flag:'a'})

// Above,in writeFieSync   third argument of flag is not necessary.Just in case if you want to append the content in file you can use that flag.



// NOW THE ASYNCHRONOUS APPROACH

const fs2=require('fs')

fs2.readFile('./content/first.txt','utf8',(err,result) =>{
    if(err){
        console.log(err)
        return
    }
    console.log(result);

    fs2.readFile('./content/second.txt','utf8',(err,result) =>{
        if(err){
            console.log(err)
            return
        }
        console.log(result);
    })
})

