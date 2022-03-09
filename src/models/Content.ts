import { artFont } from "../styles/art";

class Content {
    word: string;
    style: string | undefined;

    constructor (word: string, style: string | undefined) {
      this.word = word.toLowerCase();
      this.style = style?.toLowerCase();
    }

    async convert () {
      switch (this.style) {
        case "rusted":
          artFont(this);
          break;
        case "doom":
        default:
          artFont(this);
          break;
      }
    }
}

export default Content;