import Link from 'next/link'
import Image from 'next/image'
import css from './IdeaCard.module.scss'

interface IIdeaCard {
  coverSrc: string
  photoSrc: string
  username: string
  likeCount: number
  viewCount: number
}
const IdeaCard: React.FC<IIdeaCard> = ({ coverSrc, photoSrc, username, likeCount, viewCount }) => {
  return (
    <li className={css.IdeaCardContainer}>
      <div className={css.ideaCover}>
        <Image src={coverSrc} alt="ideaCover" layout="fill" />
      </div>
      <div className={css.cardDetail}>
        <div className={css.userInfoBox}>
          <div className={css.photoImg}>
            <Image src={photoSrc} alt="photoSrc" layout="fill" />
          </div>
          <div className={css.username}>{username}</div>
        </div>
        <div className={css.ideaInfo}>
          <span>like:{likeCount}</span>
          <span>view:{viewCount}</span>
        </div>
      </div>
    </li>
  )
}

export default IdeaCard
