/*==========Typing Animation==========*/ 
var typed = new Typed(".typing",{
    strings:["Data Analyst","Data Scientist","Data Engineer","Machine Learning Engineer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/*==========Aside==========*/ 
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSecton = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function()
        {
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                    // allSection[j].classList.add("back-section")
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 200)
            {
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection()
    {
        for(let i=0; i<totalSecton; i++)
        {
            allSection[i].classList.remove("back-section")
        }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section")
    }
    function showSection(element)
    {
        for(let i=0; i<totalSecton; i++)
        {
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.remove("active");  
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        // console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () =>
        {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSecton; i++)
        {
            allSection[i].classList.toggle("open")
        }
        }
        document.getElementById("downloadButton").addEventListener("click", function() {
            // Create an anchor element
            var downloadLink = document.createElement("a");
            // Set the href attribute to the path of your CV file
            downloadLink.href = "Venkatesh Resume.pdf";
            // Set the download attribute to force download
            downloadLink.download = "Venkatesh Resume.pdf";
            // Append the anchor element to the document body
            document.body.appendChild(downloadLink);
            // Trigger a click event on the anchor element
            downloadLink.click();
            // Remove the anchor element from the document body
            document.body.removeChild(downloadLink);
        });