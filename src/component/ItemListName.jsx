import ItemLists from "./ItemLists";
    const ItemListName = ({itemListName,onDeleteClick}) => {
        return <>
            {itemListName.map((item) => (<ItemLists key={item.Name} todoName= {item.Name} todoDate={item.date} onDeleteClick={onDeleteClick}></ItemLists>))}
    </>
}
export default ItemListName;