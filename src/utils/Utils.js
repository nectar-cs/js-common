const GCP_BASE = "https://storage.googleapis.com/";
const IMG_BASE = GCP_BASE + "nectar-mosaic-public/images";

export default class Utils{
  static image(name){
    return name && `${IMG_BASE}/${name}`;
  }
}
