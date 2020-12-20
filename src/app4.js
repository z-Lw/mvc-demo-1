import $ from 'jquery'
const $circle = $('.circle')
$circle.on('mouseenter',()=>{
    
    $circle.addClass('active')
}).on('mouseleave',()=>{
    $circle.removeClass('active')
})