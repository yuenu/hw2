import Logo from '@/assets/images/taipeilogo.png'

const Tab = () => {
  return (
    <div className="tab">
      <div className="tab-logo">
        <img src={Logo} alt="" />
      </div>
      <span>110年人口戶數及性別</span>
      <div className="years">
        <button className="active" data-year="110" type="button">
          110年
        </button>
        <button data-year="109" type="button">
          109年
        </button>
        <button data-year="108" type="button">
          108年
        </button>
        <button data-year="107" type="button">
          107年
        </button>
        <button data-year="106" type="button">
          106年
        </button>
      </div>
    </div>
  )
}

export default Tab
