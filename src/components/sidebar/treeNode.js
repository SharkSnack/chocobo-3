import React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, items, ...rest }) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;

  // crappy hardcoded fix to change sidebar item order and titles
  if (hasChildren) {
    switch (items[0].label) {
      case 'chapter-1': // guides
        items[0] = { items:[], label: 'chapter-1', title: 'Chapter 1', url: '/story-guide/chapter-1'};
        items[1] = { items:[], label: 'chapter-2', title: 'Chapter 2', url: '/story-guide/chapter-2'};
        items[2] = { items:[], label: 'chapter-3', title: 'Chapter 3', url: '/story-guide/chapter-3'};
        items[3] = { items:[], label: 'chapter-4', title: 'Chapter 4', url: '/story-guide/chapter-4'};
        items[4] = { items:[], label: 'chapter-5', title: 'Chapter 5', url: '/story-guide/chapter-5'};
        items[5] = { items:[], label: 'chapter-6', title: 'Chapter 6', url: '/story-guide/chapter-6'};
        break;
      case 'books': // items
        items[0] = { items:[], label: 'talons', title: 'Talons', url: '/items/talons'};
        items[1] = { items:[], label: 'saddles', title: 'Saddles', url: '/items/saddles'};
        items[2] = { items:[], label: 'collars', title: 'Collars', url: '/items/collars'};
        items[3] = { items:[], label: 'greens', title: 'Greens', url: '/items/greens'};
        items[4] = { items:[], label: 'medicines', title: 'Medicines', url: '/items/medicines'};
        items[5] = { items:[], label: 'books', title: 'Books', url: '/items/books'};
        items[6] = { items:[], label: 'flowers', title: 'Flowers', url: '/items/flowers'};
        items[7] = { items:[], label: 'magicite', title: 'Magicite', url: '/items/magicite'};
        items[8] = { items:[], label: 'other-items', title: 'Other', url: '/items/other-items'};
        items[9] = { items:[], label: 'key-items', title: 'Key Items', url: '/items/key-items'};
        break;
      case 'buddy-registry': // system
        items[0] = { items:[], label: 'jobs-and-stats', title: 'Jobs & Stats', url: '/system/jobs-and-stats'};
        items[1] = { items:[], label: 'buddy-registry', title: 'Buddy Registry', url: '/system/buddy-registry'};
        items[2] = { items:[], label: 'fishing', title: 'Fishing', url: '/system/fishing'};
        items[3] = { items:[], label: 'gardening', title: 'Gardening', url: '/system/gardening'};
        items[4] = { items:[], label: 'shops-and-forges', title: 'Shops & Forges', url: '/system/shops-and-forges'};
        items[5] = { items:[], label: "goblin's-fortune", title: "Goblin's Fortune", url: "/system/goblin's-fortune"};
        break;
      case "amouri's-memories": // story dungeons
        items[0] = { items:[], label: 'the-tower-in-the-sands', title: 'Tower', url: '/story-dungeons/the-tower-in-the-sands'};
        items[1] = { items:[], label: "mayor-gale's-memories", title: 'Gale', url: "/story-dungeons/mayor-gale's-memories"};
        items[2] = { items:[], label: "cid's-memories", title: "Cid", url: "/story-dungeons/cid's-memories"};
        items[3] = { items:[], label: "freja's-memories", title: "Freja", url: "/story-dungeons/freja's-memories"};
        items[4] = { items:[], label: "guardian-of-the-flame", title: "Flame", url: "/story-dungeons/guardian-of-the-flame"};
        items[5] = { items:[], label: "meja's-memories", title: "Meja", url: "/story-dungeons/meja's-memories"};
        items[6] = { items:[], label: "guardian-of-the-water", title: "Water", url: "/story-dungeons/guardian-of-the-water"};
        items[7] = { items:[], label: "shrima's-memories", title: "Shirma", url: "/story-dungeons/shirma's-memories"};
        items[8] = { items:[], label: "guardian-of-the-light", title: "Light", url: "/story-dungeons/guardian-of-the-light"};
        items[9] = { items:[], label: "ancient-ruins", title: "Ruins", url: "/story-dungeons/ancient-ruins"};
        items[10] = { items:[], label: "amouri's-memories", title: "Amouri", url: "/story-dungeons/amouri's-memories"};
        items[11] = { items:[], label: "guardian-of-the-dark", title: "Dark", url: "/story-dungeons/guardian-of-the-dark"};
        items[12] = { items:[], label: "chocobo's-memories", title: "Chocobo", url: "/story-dungeons/chocobo's-memories"};
        break;
      case "a-maiden's-memories": // extra dungeons
        items[0] = { items:[], label: "pastor-roche's-memories", title: "Roche", url: "/extra-dungeons/pastor-roche's-memories"};
        items[1] = { items:[], label: "flora's-memories", title: "Flora", url: "/extra-dungeons/flora's-memories"};
        items[2] = { items:[], label: "marris's-memories", title: "Marris", url: "/extra-dungeons/marris's-memories"};
        items[3] = { items:[], label: "meddit's-memories", title: "Meddit", url: "/extra-dungeons/meddit's-memories"};
        items[4] = { items:[], label: "harry's-memories", title: "Harry", url: "/extra-dungeons/harry's-memories"};
        items[5] = { items:[], label: "charlotte's-memories", title: "Charlotte", url: "/extra-dungeons/charlotte's-memories"};
        items[6] = { items:[], label: "stella's-memories", title: "Stella", url: "/extra-dungeons/stella's-memories"};
        items[7] = { items:[], label: "dardola's-memories", title: "Dardola", url: "/extra-dungeons/dardola's-memories"};
        items[8] = { items:[], label: "roddy's-memories", title: "Roddy", url: "/extra-dungeons/roddy's-memories"};
        items[9] = { items:[], label: "claire's-memories", title: "Claire", url: "/extra-dungeons/claire's-memories"};
        items[10] = { items:[], label: "volg's-memories", title: "Volg", url: "/extra-dungeons/volg's-memories"};
        items[11] = { items:[], label: "croma's-memories", title: "Croma", url: "/extra-dungeons/croma's-memories"};
        items[12] = { items:[], label: "a-maiden's-memories", title: "Maiden", url: "/extra-dungeons/a-maiden's-memories"};
        items[13] = { items:[], label: "a-treasure-hunter's-memories", title: "Treasure", url: "/extra-dungeons/a-treasure-hunter's-memories"};
        items[14] = { items:[], label: "insatiable-hunger", title: "Insatiable", url: "/extra-dungeons/insatiable-hunger"};
        items[15] = { items:[], label: "another-white-mage's-memories", title: "White Mage", url: "/extra-dungeons/another-white-mage's-memories"};
        items[16] = { items:[], label: "the-genius-inventor's-memories", title: "Inventor", url: "/extra-dungeons/the-genius-inventor's-memories"};
        items[17] = { items:[], label: "the-keeper's-memories", title: "The Keeper", url: "/extra-dungeons/the-keeper's-memories"};
        items[18] = { items:[], label: "pain-for-gain", title: "Pain for Gain", url: "/extra-dungeons/pain-for-gain"};
        items[19] = { items:[], label: "flames-of-rebirth", title: "Rebirth", url: "/extra-dungeons/flames-of-rebirth"};
        items[20] = { items:[], label: "lord-of-the-sea", title: "Sea Lord", url: "/extra-dungeons/lord-of-the-sea"};
        items[21] = { items:[], label: "divine-judgment", title: "Judgment", url: "/extra-dungeons/divine-judgment"};
        items[22] = { items:[], label: "the-great-dragon-king", title: "Dragon King", url: "/extra-dungeons/the-great-dragon-king"};
        items[23] = { items:[], label: "six-elements", title: "Six Elements", url: "/extra-dungeons/six-elements"};
        items[24] = { items:[], label: "dungeon-of-heroes", title: "Heroes", url: "/extra-dungeons/dungeon-of-heroes"};
        items[25] = { items:[], label: "mystery-dungeon", title: "Mystery", url: "/extra-dungeons/mystery-dungeon"};
        items[26] = { items:[], label: "interdimensional-rift", title: "Rift", url: "/extra-dungeons/interdimensional-rift"};
        break;
      case 'unused-data': // other
        items[0] = { items:[], label: 'unused-data', title: 'Unused Data', url: '/other/unused-data'};
        break;
      default:
        // do nothing
    }
  }

  return (
    <li className={calculatedClassName}>
      {title && (
        <Link to={url}>
          {title}
          {!config.sidebar.frontLine && title && hasChildren ? (
            <button onClick={collapse} aria-label="collapse" className="collapser">
              {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
            </button>
          ) : null}
        </Link>
      )}

      {!isCollapsed && hasChildren ? (
        <ul>
          {items.map((item, index) => (
            <TreeNode
              key={item.url + index.toString()}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
