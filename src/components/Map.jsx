import React from 'react'

function Map() {
  return (
        <div className='map-section w-full h-min-screen'>
          <div className='gmap-frame' style={{ width: '100%'}}>
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3rd%20Floor,%20Dubai%20Tower,%20Shalimar%20Link%20road,%20Lahore+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
            </iframe>
          </div>
        </div>
  )
}

export default Map
