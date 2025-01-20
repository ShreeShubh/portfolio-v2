import { clientsData } from "../../utils/data"

const Clients = () => {
  return (
    <div className="space-y-5 max-w-3xl mx-auto">
      <h3 className="text-white font-extrabold text-2xl md:text-3xl text-center mt-10">
        <span className="text-primary-text">Client </span>I work for
      </h3>
      <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {clientsData.map((item, index) => (
          <li key={index} className="flex justify-center items-center">
            <img
              src={item.iconUrl}
              width={120}
              height={90}
              alt={`client icon ${index + 1}`}
              className="object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Clients
