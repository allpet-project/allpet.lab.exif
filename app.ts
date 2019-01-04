///<reference path="exif.d.ts"/>
enum Direction {
    normal = 0,
    home_up = 3,  //   11   180度
    home_right = 6,  //  110     90度
    home_left = 8,  // 1000       270度
}
var dirs: Direction[] = [Direction.normal, Direction.normal, Direction.normal];

function FixDir(img: HTMLImageElement, dir: Direction) {
    if (dir == Direction.home_right)
        img.style.transform = "rotate(90deg)";
    else if (dir == Direction.home_left)
        img.style.transform = "rotate(270deg)";
    else if (dir == Direction.home_up)
        img.style.transform = "rotate(180deg)";
    else
        img.style.transform = "rotate(0deg)";
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