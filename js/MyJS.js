

const CommentContainer = document.getElementById("AllComments")
document.getElementById("CButton").addEventListener("click",function(ev){
    pullUpBox(ev)
})
function pullUpBox( ){
    const input = document.createElement("input");
    input.setAttribute("id","inputId");
    input.setAttribute("type", "text",)
    input.setAttribute("size","100")
    input.setAttribute("height", "50")
    CommentContainer.appendChild(input);

    const SubmitButton=document.createElement("button")
    SubmitButton.innerHTML = "submit"
    SubmitButton.setAttribute("id","submitbutton")
    CommentContainer.appendChild(SubmitButton)

}
if(document.getElementById("submitbutton")){
    document.getElementById("submitbutton").addEventListener("click",function(ev){
        addComment(ev)
    })    
}
function addComment(){
    let commentText = document.getElementById("inputId").value;
    const textBox = document.createElement("div")
    textBox.className = "comment"
    textBox.innerHTML = commentText
    CommentContainer.appendChild(textBox)


}



