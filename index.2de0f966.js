var e=document.querySelector(".gallery__list");e.addEventListener("click",function(r){var t=r.target.closest("li");if(t&&e.contains(t)){var l,a=t.querySelector("a");a&&r.preventDefault(),l=a.href,document.querySelector(".gallery__large-img").src=l}},{capture:!0});
//# sourceMappingURL=index.2de0f966.js.map
