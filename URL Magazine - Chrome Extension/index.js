
//vivaldi://extensions/

const inputbtn = document.querySelector('#input-btn');
const inputel = document.querySelector('#input-el');
const ulel = document.querySelector('#ul-el');
const tabbtn = document.querySelector("#tab-btn");
const empty_list = [];




let list_of_links = get_local();




function remove_element(n) {
    if(n=='0'){
        list_of_links.shift();
    }
    else{
        list_of_links.splice(n,n);
    }
    update_local();
    render();
}


tabbtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
        var tab = tabs[0].url
        console.log("The query: " + tab) 
        list_of_links.push(tab);
        update_local();
        render();
    })
    
})

inputbtn.addEventListener("click", function() {
    if (inputel.value.length > 3) {
        list_of_links.push(inputel.value);
        inputel.value = '';

        console.log(list_of_links);

        update_local();
        render();
    }
});


function render() {
    let list_items ='';

    list_holder = get_local();

    for(let x=0; x<list_holder.length; x++){
        the_item = `
        <li>

            <a href="${list_holder[x]}" target="_blank">
            ${list_holder[x]}
            </a>
            <button id="remove-btn" class="button-${x}" style="margin-right:10px;"> 
            Delete
        </button>

            
        </li>
        `//<button id="remove-btn" onclick="remove_element(${x});">
        list_items += the_item
    }
    ulel.innerHTML = list_items;



    for(let x=0; x<list_holder.length; x++){
        query_item = document.querySelector(".button-" + x)
        console.log(query_item)
        console.log("Adding listnener to: " + query_item)
        query_item.addEventListener("click", function() {
            remove_element(x);
        })
        console.log("Added listner to: " + query_item)
    }


}
function get_local() {
    let temp = [];
    temp = JSON.parse(localStorage.getItem('Links'));
    if (temp == null) {
        return(empty_list);
    }
    else {
       return(temp);
    }
}

function update_local() {
    let temp = [];
    temp = JSON.stringify(list_of_links);
    localStorage.setItem('Links', temp);
    return null
}


render();