
            //////////////
            //Initiation//
            //////////////

            function initiate(...type){
                const matchstr = document.getElementById("field").value.toLowerCase().split(" ").join("")
                filteredarray = []

                const num = document.getElementById("num")
                num.setAttribute("name", "1")
                
                
                if(matchstr === ""){
                    //console.log("nothing")
                    warn("Please Enter a Country or University Name", "empty")
                    disableAll()
                    return
                }
                
                if(type.length != 0){
                    dataarray.forEach(element => {
                    const uniname = element.name.toLowerCase().split(" ").join("")
                    if(uniname.includes(matchstr)){
                        filteredarray.push(element)
                    }  
                });
                }
                
                dataarray.forEach(element => {
                  const country = element.country.toLowerCase().split(" ").join("")
                    if(country.indexOf(matchstr) != -1){
                        if(country.indexOf(matchstr) == 0){
                            filteredarray.push(element)
                        }
                    }  
                });
                if(filteredarray.length != 0){
                }else{
                    dataarray.forEach(element => {
                        const uniname = element.name.toLowerCase().split(" ").join("")
                        if(uniname.indexOf(matchstr) != -1){
                            if(uniname.indexOf(matchstr) == 0){
                                filteredarray.push(element)
                            }
                        } 
                    });
                }

                if(filteredarray.length == 0){
                    warn(`0 Results matching the word \"${matchstr}\" `, "full")
                    disableAll()
                    return
                }
                setFooter()
            }

            function initiateconstruct(array,range){
                const holderframe = document.getElementById("parent")
                holderframe.innerHTML = ""
                holderframe.scrollTo(0,0)
                const field = document.getElementById("field")
                
                constructheader()

                for (let index = range - 100; index < range; index++) {
                    const element = array[index]; 
                    if(element == undefined){return} 
                    construct(element, index)  
                    //console.log(element)       
                }
            }

            function changePage(com){
                const num = document.getElementById("num")
                let pagenum = parseInt(num.getAttribute("name"))
                if(com == 0){
                    pagenum -= 1 
                    num.setAttribute("name", pagenum)
                }else{
                    pagenum += 1
                    num.setAttribute("name", pagenum)
                }
                setFooter()
                //console.log(pagenum)
            }

            function disableAll(){
                const frontbtn = document.getElementById("front")
                const num = document.getElementById("num")
                const backbtn = document.getElementById("back")
                const results = document.getElementById("results")
                const sortbtn = document.getElementById("sort")

                frontbtn.disabled = "true"
                backbtn.disabled = "true"
                num.textContent = "#"
                results.style.visibility = "hidden"
                sortbtn.style.visibility = "hidden"
                sortbtn.setAttribute("name", "most")
                sortbtn.textContent = "Sort Z-A"
                sortbtn.disabled = "true"
            }
  
            getData()