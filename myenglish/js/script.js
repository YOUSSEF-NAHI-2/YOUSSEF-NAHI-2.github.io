var tableId = "table0";
words.forEach((element,index) => {
    // alert(index)
    
    if ( (index%10)==0 ) {
        tableId = "table"+index;
        $("#tables").append(`<table style="width:100%" id="table${index}"></table>`)
        $("#tables").append(`<div class="divider"></div>`)

        $("#"+tableId).append(`<tr id=${index}><td id=${element.w}-word> <strong>${index+1}.</strong> <a href="${element.link}"><strong>${element.w}</strong><small>(${element.t})</small></a></td></tr>`)
        $("#"+(index-1)).append(`<td id=${element.w}-word> <strong>${index+1}.</strong> <a href="${element.link}"><strong>${element.w}</strong><small>(${element.t})</small></a></td>`)

    } else {

        modulo = index%2;
        if (modulo==0) {
            $("#"+tableId).append(`<tr id=${index}><td id=${element.w}-word> <strong>${index+1}.</strong> <a href="${element.link}"><strong>${element.w}</strong><small>(${element.t})</small></a></td></tr>`)
        }
        else {
            $("#"+(index-1)).append(`<td id=${element.w}-word> <strong>${index+1}.</strong> <a href="${element.link}"><strong>${element.w}</strong><small>(${element.t})</small></a></td>`)
        }
    }
    
    
});


// data.forEach((el,index) => {
//     // alert(index)
//     $("#definition").append(`<div class="divider">-----------------<strong>${words[index].w}</strong>------------------</div>`)
//     $("#definition").append(`<div class="w_def" id="w_def${index}"></div>`)
//     el.forEach(element => {
//         console.log(element)
//         $("#w_def"+index).append(`<div class="def" id="${element.word}-def"><strong>${element.def}<span class="ar">${element.ar}</span></strong> <a class="b" href="#${element.word}-word">Back</a></div>`)
//         element.ex.forEach(e => {
//             e= e.replace(element.word, '<strong>'+element.word+'</strong>')
//             $("#w_def"+index).append(`<div class="def-ex"><span class="ex">${e}</span></div>`)
//         })
//     })
// });