const promise = e => new Promise((resolve, reject) => {
    setTimeout(e => {
        console.log('Hey, I\'m a Promise!');
        resolve();
    }, 2000)
}) 

export default async function(){
    await promise();
    console.log('terminou!');
}
    
