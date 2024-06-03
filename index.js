const Notification = props => {
  //  Write your code here.
  const {className, textContent, src} = props
  return (
    <div className={`notification ${className}`}>
      <img src={`${src}`} />
      <p>{textContent}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div>
    <h1>Notifications</h1>
    <div>
      <Notification
        className='info'
        textContent='Information Message'
        src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      />
      <Notification
        className='success'
        textContent='Success Message'
        src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      />
      <Notification
        className='warning'
        textContent='Warning Message'
        src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      />
      <Notification
        className='error'
        textContent='Error Message'
        src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
