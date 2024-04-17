import { CardList } from "../../layouts/card.js";
import TopMenu from "../../layouts/menu.js";

import catData from "../../data/cats-offline.json";
import tagData from "../../data/tags-offline.json";


/* API Offline
async function getTags (){
    const res = await fetch('https://cataas.com/api/tags')
    return res.json()
}

async function getCats (){
    const res = await fetch('https://cataas.com/api/cats?limit=100')
    return res.json()
}
*/

export default async function CatList() {
  /*
    const initTags = getTags()
    const initCats = getCats()

    let [tagData, catData] = await Promise.all([initTags, initCats])
  */

  const result = tagData.map((tagName) => {
    const catIds = catData
      .filter((cat) => cat.tags && cat.tags.includes(tagName))
      .map((cat) => cat.id);

    return {
      tag: tagName,
      idList: catIds,
    };
  });

  return (
    <div className="content">
      <div>
        <TopMenu />
      </div>
      <div>
        <CardList data={result} />
      </div>
    </div>
  );
}
