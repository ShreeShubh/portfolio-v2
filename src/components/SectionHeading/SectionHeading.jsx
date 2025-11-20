const SectionHeading = ({ t1, t2, st1, st2 }) => {
  return (
    <div className="text-center space-y-3 md:space-y-4 lg:space-y-6">
      <h3
        className="font-bold text-white tracking-wide
                 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
      >
        {t1}
        <span className="text-primary-text">{t2}</span>
      </h3>

      <h2
        className="text-white font-extrabold tracking-wide
                 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
      >
        {st1} <span className="text-primary-text">{st2}</span>
      </h2>
    </div>
  )
}

export default SectionHeading
