const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const line = $('.tabs .line')
const tabActive = $('.tab-item.active')

//You can call requestIdleCallback() within an idle callback function to schedule another callback to take place no sooner than the next pass through the event loop.
//fix loi load lan dau bi thieu px
//Do chua load xong html ma da load js
requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
});

// console.log(tabs, panes)


tabs.forEach((tab, index) => {
  tab.onclick = function() {
    const pane = panes[index] 
    //'.tab-item.active' goi 2 class trong 1 the html
    $('.tab-item.active').classList.remove('active')
    $('.tab-pane.active').classList.remove('active')

    pane.classList.add('active')
    this.classList.add('active')

    line.style.left = this.offsetLeft + "px"
    line.style.width = this.offsetWidth + "px"
  }
});

