import $ from 'jquery'
const $squ=$('.square')
if(parseInt(localStorage.getItem('i')))$squ.addClass('circular')
let index 
$squ.on('click',()=>{
    
    if($squ.hasClass('circular'))
    {
        $squ.removeClass('circular')
        index=0
    }else{
        $squ.addClass('circular')
        index=1
    }
    localStorage.setItem('i',index)
   // $squ.toggleClass('circular')
})