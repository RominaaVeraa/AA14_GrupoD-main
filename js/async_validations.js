import { setApprovedState, setCheckingState, setRejectedState, clearFieldState } from "./states.js";

// Función asíncrona que se ejecuta a sí misma.
(async () => {

    // Carga los datos simulados.
    let simulatedData;
    try {
        const response = await fetch("../data/simulatedData.json");
        simulatedData = await response.json();
    } catch (error) {
        console.error("No se pudieron cargar los datos simulados.", error);
        return;
    }

    // Se cargan los elementos de inputs.
    const inputLoginEmail = document.getElementById("login-email");
    const inputLoginPass = document.getElementById("login-password");

    const inputRegisterName = document.getElementById("register-name");
    const inputRegisterEmail = document.getElementById("register-email");
    const inputRegisterUsername = document.getElementById("register-username");
    const inputRegisterPass = document.getElementById("register-password");
    const inputRegisterConfirmPass = document.getElementById("register-confirm-password");


    /////////   Formulario de Regitro   /////////

    // Validador para el nombre de registro.
    inputRegisterName.addEventListener("input", () => {
        const value = inputRegisterName.value;
        const inputId = inputRegisterName.id;

        if (value.trim() === "") {
            clearFieldState(inputId);
        } else {
            setApprovedState(inputId);
        }
    });

    // Validador para el email de registro.
    inputRegisterEmail.addEventListener("input", async () => {
        const value = inputRegisterEmail.value;
        const inputId = inputRegisterEmail.id;

        if (value.trim() === "") {
            clearFieldState(inputId);
            return;
        }

        setCheckingState(inputId);
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Se utiliza el validador del navegador para el formato.
        if (!inputRegisterEmail.validity.valid) {
            setRejectedState(inputId);
            return;
        }

        const emailExists = simulatedData.users.some(user => user.email === value);

        if (emailExists) {
            setRejectedState(inputId);
        } else {
            setApprovedState(inputId);
        }
    });

    // Validador de nombre de usuario de registro.
    inputRegisterUsername.addEventListener("input", async () => {
        const value = inputRegisterUsername.value;
        const inputId = inputRegisterUsername.id;

        if (value.trim() === "") {
            clearFieldState(inputId);
            return;
        }

        setCheckingState(inputId);
        await new Promise(resolve => setTimeout(resolve, 1000));

        const usernameExists = simulatedData.users.some(user => user.username === value);

        if (usernameExists) {
            setRejectedState(inputId);
        } else {
            setApprovedState(inputId);
        }
    });

    // Validador de contraseña de registro.
    inputRegisterPass.addEventListener("input", () => {
        const value = inputRegisterPass.value;
        const inputId = inputRegisterPass.id;

        if (value.trim() === "") {
            clearFieldState(inputId);
            return;
        }

        if (value.length >= 8) {
            setApprovedState(inputId);
        } else {
            setRejectedState(inputId);
        }
        
        // Vuelve a validar en caso de que se haya ingresado la confirmación de la contraseña.
        if(inputRegisterConfirmPass.value.length > 0) {
             inputRegisterConfirmPass.dispatchEvent(new Event("input"));
        }
    });

    // Validador de confirmación de contraseña de registro.
    inputRegisterConfirmPass.addEventListener("input", () => {
        const value = inputRegisterConfirmPass.value;
        const inputId = inputRegisterConfirmPass.id;
        const originalPassword = inputRegisterPass.value;

        if (value.trim() === "") {
            clearFieldState(inputId);
            return;
        }
        
        if (value === originalPassword) {
            setApprovedState(inputId);
        } else {
            setRejectedState(inputId);
        }
    });


    /////////   Formulario de login   /////////

    // Validador de email de login.
    inputLoginEmail.addEventListener("input", async () => {
        const value = inputLoginEmail.value;
        const inputId = inputLoginEmail.id;

        if (value.trim() === "") {
            clearFieldState(inputId);
            return;
        }

        setCheckingState(inputId);
        await new Promise(resolve => setTimeout(resolve, 1000));

        const emailExists = simulatedData.users.some(user => user.email === value);

        if (emailExists) {
            setApprovedState(inputId);
        } else {
            setRejectedState(inputId);
        }
    });

    // Validador para la contraseña de login.
    inputLoginPass.addEventListener("input", () => {
        const value = inputLoginPass.value;
        const inputId = inputLoginPass.id;

        if (value.trim() === "") {
            clearFieldState(inputId);
        } else {
            setApprovedState(inputId);
        }
    });
})();

