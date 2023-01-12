            ////////////////
            //Data Handler//
            ////////////////

            let dataarray = []
            let filteredarray = []
            
            const enter = document.getElementById("field");
            enter.addEventListener("keydown", function (e) {
                if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
                    initiate();
                }
            });
            

            const createl = (type) => document.createElement(type)

            async function getData(){
                const data = await fetch('./data.json')
                .then(datapromise => datapromise.json())
                .then(data => dataarray = data)
            }

