import css from './SearchInput.module.scss'
import SelectBox from '../common/SelectBox'
const SearchInput: React.FC = () => {
  return (
    <div className={css.inputContainer}>
      <div className={css.inputWrapper}>
        <div className={css.searchSvg}>
          <svg viewBox="0 0 1024 1024" version="1.1">
            <path
              d="M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496l-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"
              p-id="5532"></path>
          </svg>
        </div>

        <input className={css.inputBox} type="text" placeholder="Search..." />
        <div className={css.selectBox}>
          <SelectBox itemList={['1', '2', '3']} callback={searchTypeChange} />
        </div>
      </div>
    </div>
  )
  function searchTypeChange(item: string) {
    console.log(item)
  }
}
export default SearchInput
