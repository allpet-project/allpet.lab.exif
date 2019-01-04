
//declare enum Direction {
//    normal = 0,
//    home_up = 3,  //   11   180¶È
//    home_right = 6,  //  110     90¶È
//    home_left = 8,  // 1000       270¶È
//}

interface EXIFStatic {
    getOrientation(url: string | HTMLImageElement, callback: (dir: Direction) => void);
    getData(url: string | HTMLImageElement, callback: any): any;
    getTag(img: any, tag: any): any;
    getAllTags(img: any): any;
    pretty(img: any): string;
    readFromBinaryFile(file: any): any;
}

declare var EXIF: EXIFStatic;
