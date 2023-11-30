import "/src/styles/FilterOptions.css";
export const FilterOptions = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      <input
        placeholder="Buscar"
        className="TaskSearch"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
            ;
        }}
      />
    </div>
  )
}

