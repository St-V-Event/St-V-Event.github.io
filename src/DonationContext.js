import { useState, useEffect, useRef, createContext, useContext } from "react";

const DonationContext = createContext({});

export const DonationProvider = props => {
  const socket = useRef(null);
  const [donations, setDonations] = useState({});

  useEffect(() => {
    socket.current = window.io("https://stvevent.francoisdonnay.be/donation", {
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
      console.log(pool)
      console.log(amount)
      setDonations({
        ...donations,
        [pool]: donations[pool]+amount
      })
    })
  }, [donations])

return(
    <DonationContext.Provider value={donations}>
      { props.children }
    </DonationContext.Provider>
  )
};

const useDonations = () => useContext(DonationContext)

export default useDonations;
