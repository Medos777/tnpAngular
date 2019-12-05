export class Pc {
    public get marque(): string {
        return this._marque;
    }
    public set marque(value: string) {
        this._marque = value;
    }
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }
    public get date_fabrication(): Date {
        return this._date_fabrication;
    }
    public set date_fabrication(value: Date) {
        this._date_fabrication = value;
    }
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
    public get libelle(): string {
        return this._libelle;
    }
    public set libelle(value: string) {
        this._libelle = value;
    }
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id= value;
    }




    constructor(private _id: number, private _image: string,  private _libelle: string, private _prix: number, private _stock:boolean ,private _date_fabrication: Date,private _quantity: number,private _type: string, private _marque: string,) {
        
    }
}
