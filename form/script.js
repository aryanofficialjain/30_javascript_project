
        const nameError = document.querySelector("#name-error");
        const emailError = document.querySelector("#email-error");
        const numberError = document.querySelector("#number-error");
        const msgError = document.querySelector("#msg-error");

        function namefunc() {
            const nameinput = document.querySelector("#nameinput").value;

            if (nameinput.length == 0) {
                nameError.innerHTML = "Name Required";
                nameError.style.color = "red";
                return false;
            }

            if (!nameinput.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
                nameError.innerHTML = "Write Full Name";
                nameError.style.color = "red";
                return false;
            }

            nameError.innerHTML = "<i class='fa-solid fa-check'></i>";
            return true;
        }

        function numfunc() {
            const numberinput = document.querySelector("#numberinput").value;

            if (numberinput.length !== 10) {
                numberError.innerHTML = "Number should be 10 digits";
                numberError.style.color = "red";
                return false;
            }

            if (!numberinput.match(/^[0-9]{10}$/)) {
                numberError.innerHTML = "Number Required";
                numberError.style.color = "red";
                return false;
            }

            numberError.innerHTML = "<i class='fa-solid fa-check'></i>";
            return true;
        }

        function emailfunc() {
            const emailinput = document.querySelector("#emailinput").value;
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (emailinput.length == 0) {
                emailError.innerHTML = "Email Required";
                emailError.style.color = "red";
                return false;
            }

            if (!emailRegex.test(emailinput)) {
                emailError.innerHTML = "Invalid Email Format";
                emailError.style.color = "red";
                return false;
            }

            emailError.innerHTML = "<i class='fa-solid fa-check'></i>";
            return true;
        }

        function msgfunc() {
            const msginput = document.querySelector("#msginput").value;
            let required = 30;
            let left = required - msginput.length;

            if (left > 0) {
                msgError.innerHTML = left + " more characters required";
                msgError.style.color = "red";
                return false;
            }

            if (msginput.length == required) {
                msgError.innerHTML = "";
            }

            msgError.innerHTML = "<i class='fa-solid fa-check'></i>";
            return true;
        }

        function formis(){
            if (!namefunc() || !numfunc() || !emailfunc() || !msgfunc()) {
                let submiterror = document.querySelector("#submit-error");
                submiterror.style.display = "block";
                submiterror.innerHTML = "FIX ERROR";
                submiterror.style.color = "red";
                setTimeout(function () {
                    submiterror.style.display = "none";
                }, 3000);
                return false;
            }
            
        }    