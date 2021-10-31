let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];



let formEl = document.getElementById("bookmarkForm");

let siteNameEl = document.getElementById("siteNameInput");
let siteNameerrMsgEl = document.getElementById("siteNameErrMsg");

let siteUrlEl = document.getElementById("siteUrlInput");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

let BtnEl = document.getElementById("submitBtn");

let unList = document.getElementById("bookmarkList");
let resultCont = document.createElement("div");

let validateSiteName = function() {
    if (siteNameEl.value === "") {
        siteNameerrMsgEl.textContent = "Required*";
    } else {
        siteNameerrMsgEl.textContent = "";
    }
};
let validateSiteUrl = function() {
    if (siteUrlEl.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
};

siteNameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameerrMsgEl.textContent = "Required*";
    } else {
        siteNameerrMsgEl.textContent = "";
    }
});

siteUrlEl.addEventListener("change", function() {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});

function addtodo(book) {

    //resultCont.appendChild(unList);
    let listEl = document.createElement("li");
    listEl.classList.add("list", "result", "mt-3");
    unList.appendChild(listEl);


    let innerdiv = document.createElement("div");
    innerdiv.classList.add("d-flex", "flex-row", "justify-content-between", "p-2");
    listEl.appendChild(innerdiv);

    let para = document.createElement("p");
    para.textContent = siteNameEl.value;
    innerdiv.appendChild(para);
    //console.log("hiii");
    let anchorEl = document.createElement("a");

    let urlEl9 = siteUrlEl.value;
    anchorEl.setAttribute("href", urlEl9);
    anchorEl.setAttribute("target", "_blank");

    let BtnEl9 = document.createElement("button");
    BtnEl9.classList.add("btn", "btn-primary");
    BtnEl9.textContent = "Visit";

    anchorEl.appendChild(BtnEl9);
    innerdiv.appendChild(anchorEl);
}

BtnEl.onclick = function() {
    if (siteNameEl.value != "" && siteUrlEl.value != "") {

        for (let book of bookmarks) {
            addtodo(book);
        }
        siteNameEl.value = "";
        siteNameerrMsgEl.textContent = "";
        siteUrlEl.value = "";
        siteUrlErrMsgEl.textContent = "";
    }
};

formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateSiteName();
    validateSiteUrl();
});