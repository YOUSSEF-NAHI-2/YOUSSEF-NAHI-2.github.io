words.forEach((element,index) => {
    // alert(index)
    modulo = index%2;
    if (modulo==0) {
        $("#table").append(`<tr id=${index}><td id=${element}-word><a href="#${element}-def"><strong>${element.w}</strong><small>(${element.t})</small></a></td></tr>`)
    }
    else {
        $("#"+(index-1)).append(`<td id=${element}-word><a href="#${element}-def"><strong>${element.w}</strong><small>(${element.t})</small></a></td>`)
    }
    
});


data.forEach((el,index) => {
    // alert(index)
    $("#definition").append(`<div class="divider">-----------------<strong>${words[index].w}</strong>------------------</div>`)
    $("#definition").append(`<div class="w_def" id="w_def${index}"></div>`)
    el.forEach(element => {
        console.log(element)
        $("#w_def"+index).append(`<div class="def" id="${element.word}-def"><strong>${element.def}<span class="ar">${element.ar}</span></strong> <a class="b" href="#${element.word}-word">Back</a></div>`)
        element.ex.forEach(e => {
            e= e.replace(element.word, '<strong>'+element.word+'</strong>')
            $("#w_def"+index).append(`<div class="def-ex"><span class="ex">${e}</span></div>`)
        })
    })
});