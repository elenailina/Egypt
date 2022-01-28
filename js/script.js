window.addEventListener('DOMContentLoaded', () => {

    //Tabs

    var tabs = document.querySelectorAll(".lists__tab");
    var tabsContent = document.querySelectorAll(".lists__content");

    function hideTabContent() {
        tabsContent.forEach( item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach( item => {
            item.classList.remove('lists__tab_active', 'fade');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('lists__tab_active', 'fade');
    }
    hideTabContent();
    showTabContent();

    tabs.forEach((item, i) => {
        item.addEventListener('click', function() {
            hideTabContent();
            showTabContent(i);
        });
    });

    //Toggle color of label by checking checkbox

    var checkbox = document.querySelectorAll("input[type='checkbox']");
    var li = document.querySelectorAll("label");


    checkbox.forEach((item)=> {
        item.addEventListener('change', ()=> {
            li.forEach((item) => {
                if(checkbox.checked){
                    item.classList.add('white');
                    item.classList.remove('green');
                }
                
            });
        });
    });

    //Slice the string

    li.forEach((item) => {
        if (item.lenght > 10) {
        item.slice(0, 10);
        }
    });
    

});