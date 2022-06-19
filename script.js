console.log("script running...")
document.querySelector('.cros').style.display = 'none';
document.querySelector('.hambur').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGO');
    if(document.querySelector('.sidebar').classList.contains('sidebarGO')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cros').style.display = 'none'
    }
    else{
        setTimeout(()=>{
        document.querySelector('.cros').style.display = 'inline'
        },300);
        document.querySelector('.ham').style.display = 'none'
    }
})