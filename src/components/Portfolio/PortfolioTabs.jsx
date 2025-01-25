import { tabs } from "../../utils/data"

const PortfolioTabs = ({ activeTab, handleActiveTab }) => {
  const onClickTab = (id) => {
    handleActiveTab(id)
  }
  return (
    <ul className="bg-secondary-bg px-4 md:px-16 py-3 rounded-lg flex justify-center items-center gap-4 md:gap-8 shadow-lg w-full md:w-auto">
      {tabs.map((item) => (
        <li key={item.id}>
          <button
            className={`text-base md:text-lg font-semibold cursor-pointer ${
              activeTab === item.id
                ? "text-primary-text underline underline-offset-8"
                : "text-white"
            }`}
            onClick={() => onClickTab(item.id)}
          >
            {item.tab}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default PortfolioTabs
