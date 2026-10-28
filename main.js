const bestTabs = document.querySelectorAll(".best__tab");

bestTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        console.log(tab);
        
        if(!tab.classList.contains("current")) {
            tab.classList.add("current");

            bestTabs.forEach((tab2, index2) => {
                if(index2 !== index && tab2.classList.contains("current")) tab2.classList.remove("current");
            });
        };
    });
});