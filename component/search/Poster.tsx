import css from './Poster.module.scss'
const Poster: React.FC = () => {
  return (
    <div className={css.PosterContainer}>
      <div className={css.title}>Search Ikhaos</div>
      <div className={css.subtitle}>18,300,000+ images from thousands of inspirational designers</div>
    </div>
  )
}

export default Poster