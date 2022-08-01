export interface LoadingProps {
  children?: JSX.Element|JSX.Element[];
}

export interface Iimages {
      id: number
      src: string
      description: string
}

export interface Iloading {
    images: Iimages[] 
}

export const loadingInit = {
    images: [
      {
        id: 0,
        src: "",
        description: ""
      }
    ]
}