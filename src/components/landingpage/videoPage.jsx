import "./videoPage.css"

export const VideoPage = ()=>{
  return(
    <>
      <div className="videopagecontainer">
        <div style={{ position: 'relative', height: 0 }}>
          <iframe className="videoiframe"
            src="https://www.youtube.com/embed/QCoQ2PjdLJA?si=Fbpkn_VrbAMvIe0I"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player">
          </iframe>
        </div>
      </div>
      <div className="forscheduletest">
        <p>SCHEDULE A TEST RIDE</p>
      </div>
    </>
  )
}