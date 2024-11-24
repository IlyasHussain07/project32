import { useState } from 'react'
import './App.css'
import CloseIcon from './assets/close.png'

function App() {

  const [isActive, setIsActive] = useState(false)

  if (isActive) {
    return <ImageGallary />
  }

  return <VerificationScreen setIsActive={setIsActive} />
}
export default App;


// eslint-disable-next-line react/prop-types
function VerificationScreen({ setIsActive }) {

  const [code, setCode] = useState('')
  const [isCodeRight, setIsCodeRight] = useState(false)

  const handleVerify = () => {

    if (code === ACTUAL_CODE.split('/').join('').split('0').join('')) {
      setIsActive(true)
    }
    else {
      setIsCodeRight(true)
    }

  }

  return (
    <div className='verify_container'>
      <div className='verify_card'>
        {
          isCodeRight ?
            <>
              <p>Verification is failed</p>
              <p style={{ fontSize: "18px" }}>You are an <b>Intruder</b></p>
              <img src={'https://images.freeimages.com/fic/images/icons/767/wp_woothemes_ultimate/256/intruder.png'} alt='' />
            </>
            :
            <>
              <p>Please Enter the code</p>
              <input
                type='password'
                name='code'
                placeholder='You know the code right?'
                value={code}
                onChange={(e) => setCode(e.target.value)}
                autoFocus={true}
              />
              <button onClick={handleVerify}>Verify</button>
            </>
        }
      </div>
    </div>
  )
}


function ImageGallary() {

  const [isFullScreen, setIsFullScreen] = useState({
    active: false,
    details: null
  })

  const handleSetImage = (val) => {
    setIsFullScreen({
      active: true,
      details: val
    })
  }

  const handleClose = () => {
    setIsFullScreen({
      active: false,
      details: null
    })
  }

  return (
    <div className='image_gallery'>
      {
        IMAGES_URIS.map((item, index) => {
          return <ImageSlider
            key={index}
            images={item}
            handleSetImage={handleSetImage}
            direction={(index + 1) % 2 === 0}
          />
        })
      }
      {
        isFullScreen.active && (
          <ShowFullScreen
            handleClose={handleClose}
            details={isFullScreen.details}
          />
        )
      }
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function ImageSlider({ images, handleSetImage, direction }) {
  return (
    <div className='image_slider_container'>
      <div className={`slider-container ${direction ? 'slider-bottom' : "slider-top"}`}>
        {
          // eslint-disable-next-line react/prop-types
          images.map((item, index) => {
            return item.type === 'img' ? <img
              key={index}
              onClick={() => handleSetImage(item)}
              src={item.uri}
              alt=''
            /> : <>
              <video autoPlay muted loop height={400} key={index} onClick={() => handleSetImage(item)}>
                <source src={item.uri} />
              </video>
            </>
          })
        }
      </div>
    </div>
  )
}


// eslint-disable-next-line react/prop-types
function ShowFullScreen({ handleClose, details }) {

  // eslint-disable-next-line react/prop-types
  const { uri, type, date, caption } = details

  return (
    <div className='full-screen'>
      {
        type === 'img' ?
          <img src={uri} alt='' className='img--fullscreen' />
          :
          <video controls className='video--fullscreen'>
            <source src={uri} />
          </video>
      }
      <p className='full-screen-caption'>{caption}</p>
      <span className='full-screen-date'>{date}</span>
      <img className='img-close' onClick={handleClose} src={CloseIcon} alt='' />
    </div>
  )
}


const ACTUAL_CODE = '/////000000000///////0000000000E/////////000000P000000000000000000000000//////////////000000///////-///0000000000000000000000/////////////////00000000000000003////////////////2///////////////000000000000000000'


const IMAGES_URIS = [
  [
    {
      id: 0,
      uri: '/images/01.05-121-2021-The-day-when-it-is-started.jpeg',
      caption: "The Day When It Is Started",
      date: "05-12-2021",
      type: "img"
    },
    {
      id: 1,
      uri: '/images/02.05-01-2022-first-gang.jpg',
      caption: "First Gang, one missing",
      date: "05-01-2022",
      type: "img"
    },
    {
      id: 2,
      uri: '/images/03.11-01-2022-worst-pizza.jpg',
      caption: "Worst Pizza, but still we ate",
      date: "11-01-2022",
      type: "img"
    },
    {
      id: 3,
      uri: '/images/04.12-01-2022-flight.jpg',
      caption: "Big Fight",
      date: "12-01-2022",
      type: "img"
    },
    {
      id: 4,
      uri: '/images/05.First-Gang.jpg',
      caption: "First Office Gang",
      date: "",
      type: "img"
    },
    {
      id: 20,
      uri: "/images/row-1-about-to-flight.mp4",
      caption: "About to Fight",
      date: "",
      type: "video"
    },
    {
      id: 21,
      uri: "/images/06.villan-is-behind-you.jpg",
      caption: "Villan is behind you",
      date: "",
      type: "img"
    },
    {
      id: 22,
      uri: "/images/07.first-lunch-first-office.jpg",
      caption: "First Lunch! First Office!",
      date: "",
      type: "img"
    },
    {
      id: 23,
      uri: "/images/08-First-KFC.jpg",
      caption: "First KFC",
      date: "",
      type: "img"
    },
  ],
  [
    {
      id: 5,
      uri: '/images/09-Xmus.jpg',
      caption: "Santa - XMUS",
      date: "25-12-2021",
      type: "img"
    },
    {
      id: 6,
      uri: '/images/10.Akshay-hai-na-comedy-hoti-ab.jpg',
      caption: "Akshay aaya na ab hoti comedy",
      date: "",
      type: "img"
    },
    {
      id: 7,
      uri: '/images/row-2-kuch tho tha event ka naam.mp4',
      caption: "Kuch tho tha event ka naam",
      date: "",
      type: "video"
    },
    {
      id: 8,
      uri: '/images/Snapchat-2083683196.jpg',
      caption: "AC Problems",
      date: "",
      type: "img"
    },
    {
      id: 9,
      uri: '/images/12.Diwali.jpeg',
      caption: "Diwali",
      date: "",
      type: "img"
    },
    {
      id: 24,
      uri: "/images/13.Lotte-choco-pi-first-prize.jpeg",
      caption: "After getting Lottie Choco pie as First Prize",
      date: "",
      type: "img"
    },
    {
      id: 25,
      uri: "/images/14.red-red.jpeg",
      caption: "Red Red",
      date: "",
      type: "img"
    },
    {
      id: 26,
      uri: "/images/15.the-yellow-day.jpeg",
      caption: "The Yellow Day",
      date: "",
      type: "img"
    },
    {
      id: 27,
      uri: "/images/16.golcunda.jpeg",
      caption: "Golcunda Fort",
      date: "",
      type: "img"
    },
  ],
  [
    {
      id: 10,
      uri: '/images/17.rememeber-who-is-behind-me.jpeg',
      caption: "Remember who is behind me?",
      date: "",
      type: "img"
    },
    {
      id: 11,
      uri: '/images/18.firefly.jpeg',
      caption: "Firefly",
      date: "",
      type: "img"
    },
    {
      id: 12,
      uri: '/images/19.zoo.jpeg',
      caption: "Zoo - Me with bunch of Monkeys",
      date: "",
      type: "img"
    },
    {
      id: 13,
      uri: '/images/20.sharath-city-mall.jpeg',
      caption: "Sharath City Mall",
      date: "",
      type: "img"
    },
    {
      id: 14,
      uri: '/images/21.foram-mall.jpeg',
      caption: "Foram Mall",
      date: "",
      type: "img"
    },
    {
      id: 28,
      uri: "/images/22.Pakka-local.jpeg",
      caption: "Did you forgot your managers?",
      date: "",
      type: "img"
    },
    {
      id: 29,
      uri: "/images/23.cable-bridge.jpeg",
      caption: "Cable Bridge",
      date: "",
      type: "img"
    },
    {
      id: 30,
      uri: "/images/24.my-birthday-bash.jpeg",
      caption: "My Birthday bash",
      date: "",
      type: "img"
    },
    {
      id: 31,
      uri: "/images/25.trio.jpeg",
      caption: "Trio",
      date: "",
      type: "img"
    },
  ],
  [
    {
      id: 15,
      uri: '/images/26.red-rhino.jpeg',
      caption: "Red Rhino",
      date: "",
      type: "img"
    },
    {
      id: 16,
      uri: '/images/27.Voice hmmmm.jpeg',
      caption: "Voice hmmmmmmmm",
      date: "",
      type: "img"
    },
    {
      id: 17,
      uri: '/images/row-3-flight-flight.mp4',
      caption: "Finally - Fight Fight",
      date: "",
      type: "video"
    },
    {
      id: 18,
      uri: '/images/28.another trio.jpeg',
      caption: "Another Trio",
      date: "",
      type: "img"
    },
    {
      id: 19,
      uri: '/images/29.T-Hub.jpeg',
      caption: "T-Hub",
      date: "",
      type: "img"
    },
    {
      id: 32,
      uri: "/images/30.Remember-when.jpeg",
      caption: "Rememeber Wehen",
      date: "",
      type: "img"
    },
    {
      id: 33,
      uri: "/images/35-unforgettable.jpg",
      caption: "Unforgettable",
      date: "",
      type: "img"
    },
    {
      id: 34,
      uri: "/images/36-unforgettable.jpg",
      caption: "Unforgettable",
      date: "",
      type: "img"
    },
    {
      id: 35,
      uri: "/images/WhatsApp Image 2024-11-24 at 10.37.56 AM.jpeg",
      caption: "END",
      date: "",
      type: "img"
    },
  ]
]
