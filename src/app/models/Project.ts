export interface Project{
    $key: string;
    title?: string;
    projectType?: string;
    repoUrl?: string;
    languages?:{};
    technologies?:{};
    framework?:{};
    images?:{};
    videos?:{};
    description?:string;
}
