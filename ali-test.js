let user = {
    delete() {
        let ul = document.getElementById("J_List");
        let lists = Array.from(document.querySelectorAll("#J_List .id"));
        Array.from(document.getElementsByClassName("user-delete")).forEach(function(v,i) {
            v.addEventListener('click', function() {
                ul.removeChild(ul.childNodes[i+1]);
                lists.forEach(function(v2, i2) {
                    if(i2>i) {
                        lists[i2].innerText = parseInt(lists[i2].innerText)-1;
                    }
                })
            }
        })
    }
}