import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="Summary" className='w-28 object-contain' />
      </nav>

      <h1 className='head_text'>Summarize articles with <span className='orange_gradient'>AI</span></h1>
      <h2 className='desc'>Summarize lengthy articles with the click of a button</h2>
    </header>
  )
}

export default Hero