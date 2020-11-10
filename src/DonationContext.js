import { useState, useEffect, useRef, createContext, useContext } from "react";

const DonationContext = createContext({});

export const DonationProvider = props => {
  const socket = useRef(null);
  const [donations, setDonations] = useState({});
  const [lastDonation, setLastDonation] = useState({});

  useEffect(() => {
    socket.current = window.io(process.env.REACT_APP_API_URL+"/donation", {
      path:'/api/socket.io',
      transports : ['websocket']
    });
    socket.current.on('donations', res => {
      let curr_donations = res.reduce((acc, {pool, total}) => {
        acc[pool] = total
        return acc
      }, {})
      setDonations(curr_donations)
    })
  }, []);

  useEffect(() => {
    socket.current.on('donation', ({pool, amount}) => {
      setLastDonation({pool, amount})
      setDonations({
        ...donations,
        [pool]: donations[pool]+parseFloat(amount)
      })
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
