import { useState, useEffect } from "react";

const useSessionStorage = (name) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(sessionStorage.getItem(name))
  }, [])
  console.log(value)

  return value
}

export default useSessionStorage