// show mind

function show() {
    const createe = document.querySelector(".create")
    createe.classList.toggle("show")
    document.querySelector(".layer").style.display = "block"
    document.querySelector("body").style.overflow = "hidden"
    window.scrollTo(0 , 0)
}

// hide mind

function hide() {
    const hide = document.querySelector(".show")
    hide.classList.remove("show")
    document.querySelector(".layer").style.display = "none"
    document.querySelector("body").style.overflow = "visible"
}

// add post

const postInput = document.querySelector(".post-input")
const postSubmit = document.querySelector(".post-submit")
let postsDivs;
if (localStorage.post != null) {
    postsDivs = JSON.parse(localStorage.post)
} else {
    postsDivs = [];
}

postSubmit.onclick = function () {
    let newpost = postInput.value
    postsDivs.push(newpost);
    // save localstorage
    localStorage.setItem('post', JSON.stringify(postsDivs))
    clearData()
    showPost()
}

// clear input

function clearData() {
    postInput.value = "";
    hide()
}

// show post 

function showPost() {
    let postBody = '';
    for (i = 0; i < postsDivs.length; i++) {
        postBody += `
        <div class="Fpost">
                <div class="postDetails">
                    <div class="postDetail">
                        <img src="images/mazen.jpg" alt="">
                        <div>
                            <h3>Mazen Emam </h3>
                            <p>1m ago</p>
                        </div>
                    </div>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div class="thepost">
                    <p>${postsDivs[i]}</p>
                </div>
                <div class="reacts">
                    <div class="like">
                        <i class="far fa-thumbs-up"></i>

                        <p>Like</p>
                    </div>
                    <div>
                        <i class="far fa-comment"></i>

                        <p>comment</p>
                    </div>
                    <div>
                        <i class="fas fa-share"></i>


                        <p>share</p>
                    </div>

                </div>
            </div>
        `
    }
    document.querySelector('.neww').innerHTML = postBody
}
showPost()

// like

const likes = document.querySelectorAll(".like");
likes.forEach((like) => {
    like.onclick = function () {
        this.classList.toggle("blue");
    };
});
