
            /////////////////
            //Array Handler//
            /////////////////

            function arraysort(type, array){
                console.log("Array Sorted")
                if(type === "most"){
                    array.sort(function(a, b) {
                    if(a.name < b.name){
                        return -1
                    }
                });
                }
                if(type === "least"){
                    array.sort(function(a, b) {
                    if(a.name > b.name){
                        return -1
                    }
                });
                }
            }

            function sortarray(type){
                const sortbtn = document.getElementById("sort")
                const sorttype = sortbtn.getAttribute("name")

                if(sorttype === "most"){
                    sortbtn.setAttribute("name", "least")
                    sortbtn.textContent = "Sort A-Z"
                }else{
                    sortbtn.setAttribute("name", "most")
                    sortbtn.textContent = "Sort Z-A"
                }

                setFooter()
                
            }
