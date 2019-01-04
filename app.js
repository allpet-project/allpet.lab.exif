///<reference path="exif.d.ts"/>
var Direction;
///<reference path="exif.d.ts"/>
(function (Direction) {
    Direction[Direction["normal"] = 0] = "normal";
    Direction[Direction["home_up"] = 3] = "home_up";
    Direction[Direction["home_right"] = 6] = "home_right";
    Direction[Direction["home_left"] = 8] = "home_left";
})(Direction || (Direction = {}));
var dirs = [Direction.normal, Direction.normal, Direction.normal];
function FixDir(img, dir) {
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
    var el = document.getElementById('content');
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
    var btn = document.createElement('button');
    btn.textContent = "fix pic";
    btn.onclick = function (e) {
        var img1 = document.getElementById('img1');
        var img2 = document.getElementById('img2');
        var img3 = document.getElementById('img3');
        FixDir(img1, dirs[0]);
        FixDir(img2, dirs[1]);
        FixDir(img3, dirs[2]);
    };
    el.appendChild(btn);
}
window.onload = function () {
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var dcount = 0;
    EXIF.getOrientation(img1, function (dir) {
        console.log("oritag1=" + dir);
        if (dir == undefined)
            dir = Direction.normal;
        dirs[0] = dir;
        dcount++;
        if (dcount == 3)
            onGetAllOriInfo();
    });
    EXIF.getOrientation(img2, function (dir) {
        console.log("oritag1=" + dir);
        if (dir == undefined)
            dir = Direction.normal;
        dirs[1] = dir;
        dcount++;
        if (dcount == 3)
            onGetAllOriInfo();
    });
    EXIF.getOrientation(img3, function (dir) {
        console.log("oritag1=" + dir);
        if (dir == undefined)
            dir = Direction.normal;
        dirs[2] = dir;
        dcount++;
        if (dcount == 3)
            onGetAllOriInfo();
    });
};
//# sourceMappingURL=app.js.map