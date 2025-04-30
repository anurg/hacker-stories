const delay = (ms)=>{
    return new Promise((resolve,reject)=>{
        try {
            setTimeout(()=>resolve(`waited for ${ms} milliseconds.`),ms)
        }
        catch(e) {
            reject(e.message)
        }
        
    });
}
delay(2000).then((message)=>console.log(message)).catch((error)=>console.error('Error:',error))