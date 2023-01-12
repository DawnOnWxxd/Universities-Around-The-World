
            ////////////////
            //Construction//
            ////////////////

            function setFooter(){

                let mainarray = filteredarray
                if(mainarray.length == 0){
                    mainarray = dataarray
                }

                const arraysorttype = document.getElementById("sort").getAttribute("name")

                arraysort(arraysorttype, mainarray)

                const arraylen = mainarray.length
                const frontbtn = document.getElementById("front")
                const num = document.getElementById("num")
                const backbtn = document.getElementById("back")
                const results = document.getElementById("results")
                const sort = document.getElementById("sort")

                sort.disabled = false
                sort.style.visibility = "visible"
                results.style.visibility = "visible"
                results.textContent = `About ${arraylen.toLocaleString()} results`
                num.textContent = `${num.getAttribute("name")} / ${Math.floor(arraylen/100) +1}`
                const currentrange = num.getAttribute("name") * 100
                //console.log(`range is ${currentrange-99} - ${currentrange}`)

                if(arraylen<101){
                    frontbtn.disabled = true
                    backbtn.disabled = true
                }else{
                    if(num.getAttribute("name")==1){
                        backbtn.disabled = true
                    }else if(num.getAttribute("name")>1){
                        backbtn.disabled = false
                    }
                }

                if(Math.floor(arraylen/currentrange) == 0){
                    frontbtn.disabled = true
                    backbtn.disabled = false
                }else{
                    frontbtn.disabled = false
                }

                initiateconstruct(mainarray, currentrange)
        
            }

            function warn(signal,type){
                
                const mainframe = document.getElementById("parent")
                mainframe.innerHTML = ""
                filteredarray = []

                const warnframe = createl("div")
                warnframe.className = "warnframe"

                const warnframechild1 = createl("div")
                warnframechild1.className = "warnframechild1"
                    const warntext = createl("p")
                    warntext.className = "warntext"
                    warntext.textContent = signal
                    warnframechild1.append(warntext)
                
                const warnframechild2 = createl("div")
                warnframechild2.className = "warnframechild2"
                    const showbtn = createl("button")
                    showbtn.textContent = "Show All"
                    showbtn.className = "showallbtn"
                    showbtn.addEventListener("click",setFooter)
                    warnframechild2.append(showbtn)
                
                warnframe.append(warnframechild1,warnframechild2)
                mainframe.append(warnframe)
            
            }


            function constructheader(){
                const main = document.getElementById("parent")
                const card = createl("div")
                card.className = "card"
                card.style.margin = "5px 0px 10px 0px "
                card.style.height = "70px"
                card.style.minHeight = "40px"
                card.style.maxHeight = "70px"
                card.style.backgroundColor = "#92c952"
                card.style.color = "white"
                card.style.fontFamily = "Roboto Slab"
                card.style.fontWeight = "300"
                card.style.boxShadow = "inset 0px 0px 5px rgba(0, 0, 0, 1)"

                const carddivfirst = createl("div")
                carddivfirst.className = "carddivfirst"
                carddivfirst.boxShadow = "inset 0px 0px 5px rgba(0, 0, 0, 1)"
                    const carddivfirstel = createl("p")
                    carddivfirstel.className = "carddivitem"
                    carddivfirstel.textContent = "Sr. No."
                    carddivfirst.append(carddivfirstel)
                    card.append(carddivfirst)
                
                const arr = [["University Name",40], ["Country Name", 26], ["University Website",30]]
                for (let index = 0; arr.length > index; index++) {
                    const div = createl("div")
                    div.className = "carddiv"
                    div.style.width = `${arr[index][1]}%`
                    div.style.boxShadow = "inset 0px 0px 2px rgba(0, 0, 0, 1)"
                        const divitem = createl("p")
                        divitem.className = "carddivitem"
                        divitem.textContent = arr[index][0]     
                        div.append(divitem)
                    card.append(div)
                }
                main.append(card)
            }

            function construct(element, index){
                if(element == undefined){return}
                const holderframe = document.getElementById("parent")
                const countryname = element.country
                const uniname = element.name
                const unilink = element.web_pages[0]
                let clr = `#d8456b`

                if(index%2 == 1){
                    clr = `#92c952`
                }

                const main = document.getElementById("parent")
                const card = createl("div")
                card.className = "card"
                card.style.backgroundColor = clr

                const carddivfirst = createl("div")
                carddivfirst.className = "carddivfirst"
                    const carddivfirstel = createl("p")
                    carddivfirstel.className = "carddivitem"
                    carddivfirstel.textContent = index + 1
                    carddivfirst.append(carddivfirstel)
                    card.append(carddivfirst)
                
                const arr = [[uniname,40], [countryname, 26]]
                for (let index = 0; arr.length > index; index++) {
                    const div = createl("div")
                    div.className = "carddiv"
                    div.style.width = `${arr[index][1]}%`
                        const divitem = createl("p")
                        divitem.className = "carddivitem"
                        divitem.textContent = arr[index][0]     
                        div.append(divitem)
                    card.append(div)
                }

                const div = createl("div")
                div.className = "carddiv"
                div.style.width = "30%"
                    const link = createl("a")
                    link.title = unilink
                    link.textContent = unilink
                    link.href = unilink
                    link.target="_blank"
                    div.append(link)
                card.append(div)

                main.append(card)
            }
          