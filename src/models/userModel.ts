// Modelo principal para la respuesta de la API
export interface allCharactersModel {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: Data;
    etag: string;
    error: string
  }
  
  // Modelo para la propiedad "data"
  export interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Result[];
  }
  
  // Modelo para los resultados individuales dentro de "results"
  export interface Result {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    urls: Url[];
    thumbnail: Thumbnail;
    comics: Comics;
    stories: Stories;
    events: Events;
    series: Series;
  }
  
  // Modelo para la propiedad "urls"
  export interface Url {
    type: string;
    url: string;
  }
  
  // Modelo para la propiedad "thumbnail"
  export interface Thumbnail {
    path: string;
    extension: string;
  }
  
  // Modelo para la propiedad "comics"
  export interface Comics {
    available: number;
    returned: number;
    collectionURI: string;
    items: ComicItem[];
  }
  
  // Modelo para los elementos dentro de "comics.items"
  export interface ComicItem {
    resourceURI: string;
    name: string;
  }
  
  // Modelo para la propiedad "stories"
  export interface Stories {
    available: number;
    returned: number;
    collectionURI: string;
    items: StoryItem[];
  }
  
  // Modelo para los elementos dentro de "stories.items"
  export interface StoryItem {
    resourceURI: string;
    name: string;
    type: string;
  }
  
  // Modelo para la propiedad "events"
  export interface Events {
    available: number;
    returned: number;
    collectionURI: string;
    items: EventItem[];
  }
  
  // Modelo para los elementos dentro de "events.items"
  export interface EventItem {
    resourceURI: string;
    name: string;
  }
  
  // Modelo para la propiedad "series"
  export interface Series {
    available: number;
    returned: number;
    collectionURI: string;
    items: SeriesItem[];
  }
  
  // Modelo para los elementos dentro de "series.items"
  export interface SeriesItem {
    resourceURI: string;
    name: string;
  }