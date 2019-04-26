//asnc.js

const wget1=(url,callback)=>{
	console.log('wget1 ['+url+']');
	setTimeout(()=>{
        const response={
            data:'Hello World1'
        }
       callback(response);
	},3000);
}

const wget2 = url => {
    console.log('wget2 ['+url+']');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const response={
                data:'Hello World2'
            }
           //resolve(response);
           reject('fails=wger2');
        },1000);
    });
	
}

const wget3 = async(url)=>{
    console.log('wget3 ['+url+']');

    let response=null;
   await setTimeout(()=>{
        const response={
            data:'Hello World3'
        }
    },1000);

    return response;
}

const _fetch=async(url)=>{
   
    try{
        console.log('_fetch['+url+']');
        let response=await wget2(url);
        return response;
    }catch(err){
        console.error(err);
    }
    
}

wget1('http://www.kickscar.com/api1',response => console.log(response));
wget2('http://www.kickscar.com/api2')
.then(response => console.log(response))
.catch((err)=>console.error(err));
// wget3('http://www.kickscar.com/api')
// .then((response)=> console.log(response))

_fetch('http://www.kickscar.com/api3')
.then((response)=> console.log(response))
console.log('do something');