// writing switch into if

let age =  +prompt ('what is your age');

//   switch(age){
//       case 10:
//           console.log('you can play games')
//             break;
//       case 20:
//           console.log('you can run page now')
//           break;
//       case 23:
//             console.log('you can access page now')
//             break;
//       case 40:
//             console.log('you can login now')
//             break;
//       case 50:
//           console.log('you can play games')
//           break;
//       case 10:
//           console.log('you can link to page')
//           break;    
//        default:
//           console.log('you are not involved')           
//   }

if (age === 10){
    alert('you can play now')
}
else if( age === 20){
    alert('you can run page now')
}
else if( age ===23){
    alert(" you can access page now")

}
else if ( age === 40){
    alert('you can login now')
}
else if ( age === 50){
    alert('you can play games now')
}
else if ( age === 10){
    alert('you can link to page')
}
else{
    alert('not accessible')
}


// rewriting this from 'if' to "switch statement" is the vice versa 