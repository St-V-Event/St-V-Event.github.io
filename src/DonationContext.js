import { useState, useEffect, useRef, createContext, useContext } from "react";

const DonationContext = createContext({});

export const DonationProvider = props => {
  const socket = useRef(null);
  const [lastDonation, setLastDonation] = useState(0);
  const [donations, setDonations] = useState(0);

  useEffect(() => {
    socket.current = window.io(process.env.REACT_APP_API_URL+"/donation", {});
    socket.current.on('donations', res => {
      setDonations(res)
    })
  }, []);

  useEffect(() => {
    socket.current.on('donation', amount => {
      setLastDonation(amount)
      setDonations(donations+parseFloat(amount))
    })
  }, [donations])

return(
    <DonationContext.Provider value={{donations, lastDonation}}>
      { props.children }
    </DonationContext.Provider>
  )
};

const useDonations = () => useContext(DonationContext)

export default useDonations;
