import Link from 'next/link'
import css from './HomeMain.module.scss'
import IdeaCard from '../common/IdeaCard'
const HomeMain: React.FC = () => {
  return (
    <div className={css.HomeMainContainer}>
      <main>
        <ol className={css.IdeaCardBox}>
          <IdeaCard
            username={'blanca'}
            viewCount={12}
            likeCount={23}
            photoSrc={
              'https://cdn.dribbble.com/users/702789/avatars/mini/62dc313bebbc78f08ffd3076b6228377.png?1646754829'
            }
            coverSrc={
              'https://cdn.dribbble.com/userupload/2799275/file/still-b06335efb8425ce7f94666a4aefa21de.png?compress=1&resize=450x338&vertical=top'
            }
          />
           <IdeaCard
            username={'blanca'}
            viewCount={12}
            likeCount={23}
            photoSrc={
              'https://cdn.dribbble.com/users/702789/avatars/mini/62dc313bebbc78f08ffd3076b6228377.png?1646754829'
            }
            coverSrc={
              'https://cdn.dribbble.com/userupload/2799275/file/still-b06335efb8425ce7f94666a4aefa21de.png?compress=1&resize=450x338&vertical=top'
            }
          />
           <IdeaCard
            username={'blanca'}
            viewCount={12}
            likeCount={23}
            photoSrc={
              'https://cdn.dribbble.com/users/702789/avatars/mini/62dc313bebbc78f08ffd3076b6228377.png?1646754829'
            }
            coverSrc={
              'https://cdn.dribbble.com/userupload/2799275/file/still-b06335efb8425ce7f94666a4aefa21de.png?compress=1&resize=450x338&vertical=top'
            }
          />
           <IdeaCard
            username={'blanca'}
            viewCount={12}
            likeCount={23}
            photoSrc={
              'https://cdn.dribbble.com/users/702789/avatars/mini/62dc313bebbc78f08ffd3076b6228377.png?1646754829'
            }
            coverSrc={
              'https://cdn.dribbble.com/userupload/2799275/file/still-b06335efb8425ce7f94666a4aefa21de.png?compress=1&resize=450x338&vertical=top'
            }
          />
          <IdeaCard
            username={'blanca'}
            viewCount={12}
            likeCount={23}
            photoSrc={
              'https://cdn.dribbble.com/users/702789/avatars/mini/62dc313bebbc78f08ffd3076b6228377.png?1646754829'
            }
            coverSrc={
              'https://cdn.dribbble.com/userupload/2799275/file/still-b06335efb8425ce7f94666a4aefa21de.png?compress=1&resize=450x338&vertical=top'
            }
          />
        </ol>
      </main>
    </div>
  )
}

export default HomeMain
