export interface IProduct{
    _id: string;
    name: string;
    imageUrl: string;
    count: number;
    size:{
        height: number;
        width: number;
    };
    weight: string;
}

export interface IProductInput{
    name: string;
    imageUrl: string;
    count: number;
        height: number;
        width: number;
    weight: string;
}

export interface IProductDetails{
    _id: string;
    name:string;
    imageUrl:string;
    count:number;
    size:{
        height:number;
        width:number;
    };
    weight:string;
    comments: IComment[]
}

export interface IComment{
    _id: string;
    prodId:string;
    description: string;
    date:string;
}