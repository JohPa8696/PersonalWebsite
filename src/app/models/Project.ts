export interface Project{
    id?: string;
    title?: string;
    type?: string[];
    repoUrl?: string;
    languages?:string[];
    technologies?:string[];
    frameworks?:string[];
    images?:string[];
    videos?:string;
    description?:string[];
    isML:boolean;
}
