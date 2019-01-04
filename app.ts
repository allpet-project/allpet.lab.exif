///<reference path="exif.d.ts"/>
enum Direction {
    normal = 0,
    home_up = 3,  //   11   180度
    home_right = 6,  //  110     90度
    home_left = 8,  // 1000       270度
}
var dirs: Direction[] = [Direction.normal, Direction.normal, Direction.normal];

function FixDir(img: HTMLImageElement, dir: Direction) {
    var stylestr = "rotate(0deg)";
    if (dir == Direction.home_right)
        stylestr = "rotate(90deg)";
    else if (dir == Direction.home_left)
        stylestr = "rotate(270deg)";
    else if (dir == Direction.home_up)
        stylestr = "rotate(180deg)";
    else
        stylestr = "rotate(0deg)";
    var pdiv = img.parentElement as HTMLDivElement;
    if (dir == Direction.home_left || dir == Direction.home_right) {
        pdiv.style.width = img.height + "px";
        pdiv.style.height = img.width + "px";
        var ppx = (img.width - img.height) / 2;
        var ppy = -(img.height - img.width) / 2;
        stylestr += " translate(" + ppx + "px," + ppy + "px)";
    }
    else {
        pdiv.style.width = img.width + "px";
        pdiv.style.height = img.height + "px";
       
    }
    img.style.transform = stylestr;
}
function onGetAllOriInfo() {
    var el = document.getElementById('content') as HTMLDivElement;
    var span1 = document.createElement("span");
    span1.textContent = "img1dir=" + Direction[dirs[0]];
    var span2 = document.createElement("span");
    span2.textContent = "img2dir=" + Direction[dirs[1]];
    var span3 = document.createElement("span");
    span3.textContent = "img3dir=" + Direction[dirs[2]];
    el.appendChild(span1);
    el.appendChild(document.createElement('hr'));
    el.appendChild(span2);
    el.appendChild(document.createElement('hr'));
    el.appendChild(span3);
    el.appendChild(document.createElement('hr'));

    var btn = document.createElement('button') as HTMLButtonElement;
    btn.textContent = "fix pic";
    btn.onclick = (e) => {
        var img1 = document.getElementById('img1') as HTMLImageElement;
        var img2 = document.getElementById('img2') as HTMLImageElement;
        var img3 = document.getElementById('img3') as HTMLImageElement;
        FixDir(img1, dirs[0]);
        FixDir(img2, dirs[1]);
        FixDir(img3, dirs[2]);
    }
    el.appendChild(btn);
}
window.onload = () => {


    var img1 = document.getElementById('img1') as HTMLImageElement;
    var img2 = document.getElementById('img2') as HTMLImageElement;
    var img3 = document.getElementById('img3') as HTMLImageElement;
    (img1.parentElement as HTMLDivElement).style.width = img1.width + "px";
    (img1.parentElement as HTMLDivElement).style.height = img1.height + "px";
  var dcount = 0;
    EXIF.getOrientation(img1,
        (dir) => {
            console.log("oritag1=" + dir);
            if (dir == undefined)
                dir = Direction.normal;

            dirs[0] = dir;
            dcount++;
            if (dcount == 3)
                onGetAllOriInfo();
        });
    EXIF.getOrientation(img2,
        (dir) => {
            console.log("oritag1=" + dir);
            if (dir == undefined)
                dir = Direction.normal;

            dirs[1] = dir;
            dcount++;
            if (dcount == 3)
                onGetAllOriInfo();
        });
    EXIF.getOrientation(img3,
        (dir) => {
            console.log("oritag1=" + dir);
            if (dir == undefined)
                dir = Direction.normal;

            dirs[2] = dir;
            dcount++;
            if (dcount == 3)
                onGetAllOriInfo();

        });
};