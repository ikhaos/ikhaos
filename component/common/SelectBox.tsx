import css from './SelectBox.module.scss'
import { useState } from 'react'
interface IselectBox {
  itemList: string[]
  callback: (selectItem: string) => void
}
const SelectBox: React.FC<IselectBox> = ({ itemList, callback }) => {
  const [isShowbox, setIsShowBox] = useState<boolean>(false)
  const [selectItem, setSelectItem] = useState<string>(itemList[0])
  return (
    <>
      <div className={css.mainbox} onClick={() => setIsShowBox(!isShowbox)}>
        <div className={css.selectedBox}>{selectItem}</div>
        <div className={css.openSelectBox} style={{ transform: isShowbox ? 'rotateZ(180deg)' : '' }}>
          <svg viewBox="0 0 1024 1024" version="1.1">
            <path
              d="M832 340.992l-320 312-320-312a28.8 28.8 0 0 0-41.984 0 28.8 28.8 0 0 0-8.96 20.992c0 8 2.624 14.72 7.936 19.968l340.992 332.032c6.016 6.016 13.376 8.96 22.016 8.96 8.704 0 16-2.944 22.016-8.96l341.056-331.008a31.232 31.232 0 0 0 7.936-21.504c0-8.32-2.944-15.36-8.96-20.992a29.76 29.76 0 0 0-41.984 0.448L832 340.992z"
              p-id="3935"></path>
          </svg>
        </div>
      </div>

      {isShowbox && (
        <ol className={css.itemBox}>
          {itemList.map(item => {
            return (
              <li
                key={item}
                onClick={() => itemClickHandle(item)}
                className={selectItem === item ? css.selectItem : ''}>
                {item}
              </li>
            )
          })}
        </ol>
      )}
    </>
  )
  function itemClickHandle(item: string) {
    callback(item)
    setIsShowBox(false)
    setSelectItem(item)
  }
}
export default SelectBox
