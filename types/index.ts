export type Project = {
    id: number;
    name: string;
    slug: string;
    description: string;
    fullDescription: string;
    type: string,
    img: string;
    formatOfImg: 
        {
          src: string;
          width: number;
          height: number;
        },
};