window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
})
menu=document.querySelector(".nav_menu");
openbtn=document.querySelector("#open-menu");
closebtn=document.querySelector("#close-menu");
openbtn.addEventListener('click',()=>
{
    console.log('open-menu')
    menu.style.display="flex";
    openbtn.style.display="none";
    closebtn.style.display="inline-block";

})
const closeNav=()=>{
    console.log('open-menu')
    menu.style.display="none";
    openbtn.style.display="inline-block";
    closebtn.style.display="none";
}
closebtn.addEventListener('click', closeNav)
// show / hide faq answer 
const faqs=document.querySelectorAll('.faq')

faqs.forEach(faq=>faq.addEventListener('click',()=>{
    faq.classList.toggle('open');
    
    // to change the icon
    const icon = faq.querySelector('.faq-icon i')
    if (icon.className==='uil uil-plus'){
        icon.className="uil uil-minus"}
        else{
            icon.className='uil uil-plus'
        }
}))