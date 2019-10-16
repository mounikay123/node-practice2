var p=Promise.resolve({id:1});
p.then(result=>console.log(result));


var q=Promise.reject(new Error('something went wrong'));
q.catch(err=>console.log(err))