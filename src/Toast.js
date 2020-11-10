import { useEffect } from "react";
import $ from 'jquery';
import bootstrap from 'bootstrap';
import useDonations from './DonationContext';

const Toast = () => {
  let {lastDonation} = useDonations();

  useEffect(() => {
    $('.toast').toast({
      autohide: true,
      animation: true,
      delay: 10000
    })
  })

  useEffect(() => {
    if (typeof lastDonation.pool !== "undefined") {
      $('.toast').toast('show')
    }
  }, [lastDonation])

  return (
    <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" style={{ position: "fixed", top: "74px", right: "10px"}}>
      <div className="toast-header bg-dark text-warning" style={{borderBottom:"none"}}>
        <span><b>Donation of {lastDonation.amount}€</b> via {lastDonation.pool}!</span>
        <button type="button" className="ml-2 mb-1 close text-light" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  )
}

export default Toast;
