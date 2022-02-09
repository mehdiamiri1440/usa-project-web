<html>
    <body>
        <form>
        <input autocomplete="one-time-code" required/>
        <input type="submit">
        </form>
    </body>
    <script>

        if ('OTPCredential' in window) {
            alert('active');
        window.addEventListener('DOMContentLoaded', e => {
            const input = document.querySelector('input[autocomplete="one-time-code"]');
            if (!input) return;
            const ac = new AbortController();
            const form = input.closest('form');
            if (form) {
            form.addEventListener('submit', e => {
                ac.abort();
            });
            }
            navigator.credentials.get({
            otp: { transport:['sms'] },
            signal: ac.signal
            }).then(otp => {
            input.value = otp.code;
            alert(otp.code);
            }).catch(err => {
            console.log(err);
            });
        });
        }
    </script>

</html>