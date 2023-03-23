document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("textBtn").addEventListener("click", createWindow);
}
);//end DOMContentLoaded    

function createWindow() {
    const boxValue = document.getElementById("valueText").value;
    const windowPop = window.open("about:blank", "Name_Window", "width=450, height=300, screenX=500, screeny=200;");
    windowPop.document.write("<body style='background-color: beige; font-family: Comic Sans MS, Comic Sans, cursive; font-size: 20px'>")
    windowPop.document.write("<div style='text-align: center;'>")
    windowPop.document.write("<div style='color: red; font-weight: bold; text-align: center; text-decoration: underline'>");
    windowPop.document.write("Hello " + boxValue);
    windowPop.document.write("</div>");
    windowPop.document.write("<p>");
    windowPop.document.write("How are you doing, " + boxValue + "?");
    windowPop.document.write("</p>");
    windowPop.document.write("<p>");
    windowPop.document.write("When you are done reading this, please click<br> the \"close\" button.");
    windowPop.document.write("<p>");
    windowPop.document.write("Thanks " + boxValue + "!!!");
    windowPop.document.write("</p>");
    windowPop.document.write("<form>");
    windowPop.document.write("<input type='button' value='Close This Window' class = 'closeWindowBtn' id='closeWindowBtn'>");
    windowPop.document.write("</form>");
    windowPop.document.write("</div>")
    windowPop.document.getElementById("closeWindowBtn").addEventListener("click", closeWindow);
    windowPop.document.querySelectorAll("text").css("text-align='center'")

    function closeWindow() {
        windowPop.close();
    }
}