export interface Project{
    $key?: string;
    title?: string;
    type?: string;
    repoUrl?: string;
    languages?:{};
    technologies?:{};
    framework?:{};
    images?:{};
    videos?:{};
    description?:string;
}