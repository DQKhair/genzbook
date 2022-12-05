

// responsive_product_home();
// responsive_product_home1();
// responsive_product_home2();
// responsive_product_home3();
// responsive_product_home4();

count_element_all()


// function responsive_product_home(){
//     const address0 = document.getElementsByClassName('card-group')[0]
//     const count_element = document.getElementsByClassName('card-group')[0].childElementCount;
//     if(count_element >4){
//         for(let j=4;j<count_element;j++){
//             address0.getElementsByClassName('card_product')[j].style.display="none"
//         }
//     }
// }
// function responsive_product_home1(){
//     const address1 = document.getElementsByClassName('card-group')[1]
//     const count_element1 = document.getElementsByClassName('card-group')[1].childElementCount;
//     if(count_element1 >4){
//         for(let j=4;j<count_element1;j++){
//             address1.getElementsByClassName('card_product')[j].style.display="none"
//         }
//     }
// }
// function responsive_product_home2(){
//     const address2 = document.getElementsByClassName('card-group')[2]
//     const count_element2 = document.getElementsByClassName('card-group')[2].childElementCount;
//     if(count_element2 >4){
//         for(let j=4;j<count_element2;j++){
//             address2.getElementsByClassName('card_product')[j].style.display="none"
//         }
//     }
// }
// function responsive_product_home3(){
//     const address3 = document.getElementsByClassName('card-group')[3]

//     const count_element3 = document.getElementsByClassName('card-group')[3].childElementCount;
//     if(count_element3 >4){
//         for(let j=4;j<count_element3;j++){
//             address3.getElementsByClassName('card_product')[j].style.display="none"
//         }
//     }
// }
// function responsive_product_home4(){
//     const address4 = document.getElementsByClassName('card-group')[4]
//     const count_element4 = document.getElementsByClassName('card-group')[4].childElementCount;
//     if(count_element4 >4){
//         for(let j=4;j<count_element4;j++){
//             address4.getElementsByClassName('card_product')[j].style.display="none"
//         }
//     }
// }
function count_element_all(){

for(let i=0;i<5;i++){
    const address_i = document.getElementsByClassName('card-group')[i]
    const count_element_i = document.getElementsByClassName('card-group')[i].childElementCount;
        
        if(count_element_i >4){
            for(let j=4;j<count_element_i;j++){
                address_i.getElementsByClassName('card_product')[j].style.display="none"
            }
        }
}
}
