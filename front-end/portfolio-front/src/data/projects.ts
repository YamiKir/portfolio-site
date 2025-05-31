export type Project = {
  name: string;
  slug: string;
  image: string;
  file: string;
  categories: string[];
  description: string;
};

export const projects:Project[] =[

    {
        "name": "hi.cc",
        "slug":"hi-cc",
        "image": "/cpp_bw.png",
        "file": "/downloads/hi.cc",
        "categories":["Cpp","Command-Line",'tic-tac-toe'],
        "description":"A Hello World!"

    },
    {
        "name": "junk",
        "slug":"junk",
        "image": "/ruby_bw.png",
        "file": "/downloads/junk",
        "categories":["Cpp","Command-Line",'tic-tac-toe'],
        "description":"A Hello World!"

    }








]

