/// <reference path="exif.d.ts" />
declare enum Direction {
    normal = 0,
    home_up = 3,
    home_right = 6,
    home_left = 8
}
declare var dirs: Direction[];
declare function FixDir(img: HTMLImageElement, dir: Direction): void;
declare function onGetAllOriInfo(): void;
