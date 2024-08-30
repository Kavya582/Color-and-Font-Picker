let text = document.getElementById('text-editor');
let color = document.getElementsByClassName('color-picker');
let colors = document.getElementsByClassName('color-picker1');
let font = document.getElementsByClassName('font');
let download = document.getElementById('download');
let heading3 = document.getElementById("heading3");






download.addEventListener('click',myfun)

function myfun(){
    html2canvas(document.getElementById("text-editor")).then(canvas=>{
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = "image.png";
        link.click();
    })
}





color[0].addEventListener('click',()=>{
    text.style.background = "white";
})

color[1].addEventListener('click',()=>{
    text.style.background = "rgb(207, 128, 24)";
})

color[2].addEventListener('click',()=>{
    text.style.background = "rgb(14, 13, 11)";
})

color[3].addEventListener('click',()=>{
    text.style.background = "rgb(165, 154, 140)";
})

color[4].addEventListener('click',()=>{
    text.style.background = "pink";
})

color[5].addEventListener('click',()=>{
    text.style.background = "blue";
})

color[6].addEventListener('click',()=>{
    text.style.background = "navy";
})

color[7].addEventListener('click',()=>{
    text.style.background = "purple";
})

color[8].addEventListener('click',()=>{
    text.style.background = "rgb(110, 110, 161)";
})

color[9].addEventListener('click',()=>{
    text.style.background = "violet";
})

color[10].addEventListener('click',()=>{
    text.style.background = "skyblue";
})

color[11].addEventListener('click',()=>{
    text.style.background = "green";
})

color[12].addEventListener('click',()=>{
    text.style.background = "lightgreen";
})

color[13].addEventListener('click',()=>{
    text.style.background = "rgb(241, 234, 234)";
})

color[14].addEventListener('click',()=>{
    text.style.background = "yellow";
})

color[15].addEventListener('click',()=>{
    text.style.background = "orange";
})

color[16].addEventListener('click',()=>{
    text.style.background = "red";
})

color[17].addEventListener('click',()=>{
    text.style.background = "orangered";
})

color[18].addEventListener('click',()=>{
    text.style.background = "rgb(192, 180, 180)";
})

color[19].addEventListener('click',()=>{
    text.style.background = "rgb(68, 228, 151)";
})

color[20].addEventListener('click',()=>{
    text.style.background = "rgb(21, 193, 178)";
})

color[21].addEventListener('click',()=>{
    text.style.background = "rgb(9, 248, 25)";
})

color[22].addEventListener('click',()=>{
    text.style.background = "rgb(122, 27, 27)";
})

color[23].addEventListener('click',()=>{
    text.style.background = "rgb(222, 248, 188)";
})

color[24].addEventListener('click',()=>{
    text.style.background = "rgb(233, 193, 15)";
})

color[25].addEventListener('click',()=>{
    text.style.background = "rgb(255, 206, 160)";
})

color[26].addEventListener('click',()=>{
    text.style.background = "rgb(255, 101, 224)";
})

color[27].addEventListener('click',()=>{
    text.style.background = "rgb(14, 124, 102)";
})

color[28].addEventListener('click',()=>{
    text.style.background = "rgb(4, 78, 36)";
})

color[29].addEventListener('click',()=>{
    text.style.background = "rgb(204, 232, 16)";
})



colors[0].addEventListener('click',()=>{
    text.style.color = "white";
})

colors[1].addEventListener('click',()=>{
    text.style.color = " rgb(207, 128, 24)";
})

colors[2].addEventListener('click',()=>{
    text.style.color = "rgb(14, 13, 11)";
})

colors[3].addEventListener('click',()=>{
    text.style.color = "rgb(165, 154, 140)";
})

colors[4].addEventListener('click',()=>{
    text.style.color = "pink";
})

colors[5].addEventListener('click',()=>{
    text.style.color = "blue";
})

colors[6].addEventListener('click',()=>{
    text.style.color = "navy";
})

colors[7].addEventListener('click',()=>{
    text.style.color = "purple";
})

colors[8].addEventListener('click',()=>{
    text.style.color = "rgb(110, 110, 161)";
})

colors[9].addEventListener('click',()=>{
    text.style.color = "violet";
})

colors[10].addEventListener('click',()=>{
    text.style.color = "skyblue";
})

colors[11].addEventListener('click',()=>{
    text.style.color = "green";
})

colors[12].addEventListener('click',()=>{
    text.style.color = "lightgreen";
})

colors[13].addEventListener('click',()=>{
    text.style.color = "rgb(241, 234, 234)";
})

colors[14].addEventListener('click',()=>{
    text.style.color = "yellow";
})

colors[15].addEventListener('click',()=>{
    text.style.color = "orange";
})

colors[16].addEventListener('click',()=>{
    text.style.color = "red";
})

colors[17].addEventListener('click',()=>{
    text.style.color = "orangered";
})

colors[18].addEventListener('click',()=>{
    text.style.color = "rgb(192, 180, 180)";
})

colors[19].addEventListener('click',()=>{
    text.style.color = "rgb(68, 228, 151)";
})

colors[20].addEventListener('click',()=>{
    text.style.color = "rgb(21, 193, 178)";
})

colors[21].addEventListener('click',()=>{
    text.style.color = "rgb(9, 248, 25)";
})

colors[22].addEventListener('click',()=>{
    text.style.color = "rgb(122, 27, 27)";
})

colors[23].addEventListener('click',()=>{
    text.style.color = "rgb(222, 248, 188)";
})

colors[24].addEventListener('click',()=>{
    text.style.color = "rgb(233, 193, 15)";
})

colors[25].addEventListener('click',()=>{
    text.style.color = "rgb(255, 206, 160)";
})

colors[26].addEventListener('click',()=>{
    text.style.color = "rgb(255, 101, 224)";
})

colors[27].addEventListener('click',()=>{
    text.style.color = "rgb(14, 124, 102)";
})

colors[28].addEventListener('click',()=>{
    text.style.color = "rgb(4, 78, 36)";
})

colors[29].addEventListener('click',()=>{
    text.style.color = "rgb(204, 232, 16)";
})


font[0].addEventListener('click',()=>{
    text.style.fontFamily = "'Courier New', Courier, monospace";
})

font[1].addEventListener('click',()=>{
    text.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
})

font[2].addEventListener('click',()=>{
    text.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
})

font[3].addEventListener('click',()=>{
    text.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
})

font[4].addEventListener('click',()=>{
    text.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
})

font[5].addEventListener('click',()=>{
    text.style.fontFamily = "'Times New Roman', Times, serif";
})

font[6].addEventListener('click',()=>{
    text.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
})

font[7].addEventListener('click',()=>{
    text.style.fontFamily = "Arial, Helvetica, sans-serif";
})

font[8].addEventListener('click',()=>{
    text.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
})

font[9].addEventListener('click',()=>{
    text.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
})

font[10].addEventListener('click',()=>{
    text.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
})

font[11].addEventListener('click',()=>{
    text.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
})

font[12].addEventListener('click',()=>{
    text.style.fontFamily = "sans-serif";
})

font[13].addEventListener('click',()=>{
    text.style.fontFamily = "serif";
})

font[14].addEventListener('click',()=>{
    text.style.fontFamily = "cursive";
})