import $ from 'jquery'
const $ul = $('ul')
const $li = $('li')
const index=parseInt(localStorage.getItem('index'))
$li.eq(index).addClass('active')
$('.content').children().eq(index).addClass('active')
$ul.on('click','li',(e)=>{
    
    const index=$li.index(e.currentTarget)
    $li.eq(index).addClass('active').siblings().removeClass('active')
    $('.content').children().eq(index).addClass('active')
    .siblings().removeClass('active')
    localStorage.setItem('index',index)
})