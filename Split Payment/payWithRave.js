const API_publicKey = "<ADD YOUR PUBLIC KEY HERE>";

function payWithRave() {
    var x = getpaidSetup({
        PBFPubKey: API_publicKey,
        customer_email: "user@example.com",
        amount: 2000,
        currency: "NGN",
        txref: "rave-123456",
        subaccounts: [
          {
            id: "RS_D87A9EE339AE28BFA2AE86041C6DE70E" // This assumes you have setup your commission on the dashboard.
          }
        ],
        meta: [{
            metaname: "flightID",
            metavalue: "AP1234"
        }],
        onclose: function() {},
        callback: function(response) {
            var txref = response.tx.txRef; // collect flwRef returned and pass to a 					server page to complete status check.
            console.log("This is the response returned after a charge", response);
            if (
                response.tx.chargeResponseCode == "00" ||
                response.tx.chargeResponseCode == "0"
            ) {
                // redirect to a success page
            } else {
                // redirect to a failure page.
            }

            x.close(); // use this to close the modal immediately after payment.
        }
    });
}          
