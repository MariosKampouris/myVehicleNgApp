export class MyCars{
    public carName: string;
    public carDescription: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string){
        this.carName = name;
        this.carDescription = desc;
        this.imagePath = imagePath;
    }
}