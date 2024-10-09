const questions = [
    // Guia 07
    {
        question: "Comando para ver los ficheros donde se guarda la información de los usuarios registrados en el sistema:",
        correctAnswer: "nano /etc/passwd",
        options: [
            "nano /etc/passwd",
            "cat /etc/passwd",
            "vi /etc/passwd"
        ]
    },
    {
        question: "Comando para ver información relativa de todos los usuarios del sistema GNU/Linux:",
        correctAnswer: "nano /etc/shadow",
        options: [
            "nano /etc/shadow",
            "cat /etc/shadow",
            "less /etc/shadow"
        ]
    },
    {
        question: "Comando para crear un usuario:",
        correctAnswer: "useradd [opciones] nombre-usuario",
        options: [
            "useradd [opciones] nombre-usuario",
            "adduser nombre-usuario",
            "createuser nombre-usuario"
        ]
    },
    {
        question: "Comando para ver los usuarios creados:",
        correctAnswer: "cat /etc/passwd",
        options: [
            "cat /etc/passwd",
            "showusers",
            "listusers"
        ]
    },
    {
        question: "Comando para establecer una contraseña:",
        correctAnswer: "passwd [usuario]",
        options: [
            "passwd [usuario]",
            "setpass [usuario]",
            "changepass [usuario]"
        ]
    },
    {
        question: "Comando para modificar un usuario:",
        correctAnswer: "usermod -lnombre-nuevo-usuario nombre-usuario-actual",
        options: [
            "usermod -lnombre-nuevo-usuario nombre-usuario-actual",
            "moduser nombre-usuario",
            "changeuser nombre-usuario"
        ]
    },
    {
        question: "Comando para eliminar un usuario:",
        correctAnswer: "userdel –r nombre-usuario",
        options: [
            "userdel –r nombre-usuario",
            "removeuser nombre-usuario",
            "deleteuser nombre-usuario"
        ]
    },
    {
        question: "Comando para crear un grupo:",
        correctAnswer: "groupadd nombre-grupo",
        options: [
            "groupadd nombre-grupo",
            "addgroup nombre-grupo",
            "creategroup nombre-grupo"
        ]
    },
    {
        question: "Comando para listar los grupos:",
        correctAnswer: "cat /etc/group",
        options: [
            "cat /etc/group",
            "listgroups",
            "showgroups"
        ]
    },
    {
        question: "Comando para agregar un usuario a un grupo:",
        correctAnswer: "adduser nombre-usuario nombre-grupo",
        options: [
            "adduser nombre-usuario nombre-grupo",
            "usermod -G nombre-grupo nombre-usuario",
            "groupadd nombre-usuario nombre-grupo"
        ]
    },
    {
        question: "Comando para eliminar un usuario de un grupo:",
        correctAnswer: "deluser nombre-usuario nombre-grupo",
        options: [
            "deluser nombre-usuario nombre-grupo",
            "removeuser nombre-usuario nombre-grupo",
            "deleteuser nombre-usuario nombre-grupo"
        ]
    },
    {
        question: "Comando para modificar un grupo:",
        correctAnswer: "groupmod [-g nuevo-gid] [-n nuevo-nombre] nombre-grupo",
        options: [
            "groupmod [-g nuevo-gid] [-n nuevo-nombre] nombre-grupo",
            "modgroup nombre-grupo",
            "editgroup nombre-grupo"
        ]
    },
    {
        question: "Comando para eliminar un grupo:",
        correctAnswer: "groupdel nombre-grupo",
        options: [
            "groupdel nombre-grupo",
            "removegroup nombre-grupo",
            "deletegroup nombre-grupo"
        ]
    },
    // Guia 8
    {
        question: "Comando para asignar contraseña a un usuario:",
        correctAnswer: "passwd nombre_usuario",
        options: [
            "passwd nombre_usuario",
            "setpass nombre_usuario",
            "changepass nombre_usuario"
        ]
    },
    {
        question: "Comando para crear un usuario con información:",
        correctAnswer: "adduser nombre_usuario",
        options: [
            "adduser nombre_usuario",
            "createuser nombre_usuario",
            "useradd nombre_usuario"
        ]
    },
    {
        question: "Comando para agregar un usuario a un grupo existente:",
        correctAnswer: "usermod -a -G grupo usuario",
        options: [
            "usermod -a -G grupo usuario",
            "adduser usuario grupo",
            "groupadd usuario grupo"
        ]
    },
    {
        question: "Comando para ver a qué grupos pertenece un usuario:",
        correctAnswer: "groups",
        options: [
            "groups",
            "usergroups",
            "showgroups usuario"
        ]
    },
    {
        question: "Comando para cambiar los permisos de un archivo o directorio:",
        correctAnswer: "chmod [permisos] [archivo/directorio] [opciones]",
        options: [
            "chmod [permisos] [archivo/directorio] [opciones]",
            "changeperm [archivo/directorio]",
            "setperm [archivo/directorio]"
        ]
    },
    {
        question: "Comando para cambiar el propietario de un archivo o directorio:",
        correctAnswer: "chown [nuevo_usuario_propietario] [archivo/directorio]",
        options: [
            "chown [nuevo_usuario_propietario] [archivo/directorio]",
            "setowner [nuevo_usuario_propietario] [archivo/directorio]",
            "changeowner [nuevo_usuario_propietario] [archivo/directorio]"
        ]
    },
    {
        question: "Comando para cambiar el grupo de un archivo o directorio:",
        correctAnswer: "chgrp [nuevo_grupo] [archivo/directorio]",
        options: [
            "chgrp [nuevo_grupo] [archivo/directorio]",
            "setgroup [nuevo_grupo] [archivo/directorio]",
            "changegroup [nuevo_grupo] [archivo/directorio]"
        ]
    },
    {
        question: "Comando para listar archivos y ver sus permisos:",
        correctAnswer: "ls -l",
        options: [
            "ls -l",
            "list -l",
            "show -l"
        ]
    },
    {
        question: "Comando para listar archivos por orden de modificación:",
        correctAnswer: "ls -lt",
        options: [
            "ls -lt",
            "list -lt",
            "show -lt"
        ]
    },
    {
        question: "Comando para cambiar el propietario de todos los archivos y subdirectorios dentro de un directorio:",
        correctAnswer: "chown nuevo_usuario directorio -R",
        options: [
            "chown nuevo_usuario directorio -R",
            "setowner nuevo_usuario directorio -R",
            "changeowner nuevo_usuario directorio -R"
        ]
    },
    {
        question: "Comando para cambiar el grupo de todos los subdirectorios dentro de un directorio:",
        correctAnswer: "chgrp nuevo_grupo directorio -R",
        options: [
            "chgrp nuevo_grupo directorio -R",
            "setgroup nuevo_grupo directorio -R",
            "changegroup nuevo_grupo directorio -R"
        ]
    },
    {
        question: "Comando para ver qué hace el comando chgrp en segundo plano:",
        correctAnswer: "chgrp -v nuevo_grupo archivo",
        options: [
            "chgrp -v nuevo_grupo archivo",
            "group -v nuevo_grupo archivo",
            "show -v nuevo_grupo archivo"
        ]
    },
    {
        question: "Comando para crear varios archivos .txt:",
        correctAnswer: "touch num{1..9}.txt",
        options: [
            "touch num{1..9}.txt",
            "create num{1..9}.txt",
            "new num{1..9}.txt"
        ]
    },
    {
        question: "Comando para quitarle los permisos a los archivos:",
        correctAnswer: "chmod a-rmx num*",
        options: [
            "chmod a-rmx num*",
            "removeperm num*",
            "setnoperm num*"
        ]
    },
    {
        question: "Comando para ingresar usuario a un archivo .txt:",
        correctAnswer: "chown marina num2.txt",
        options: [
            "chown marina num2.txt",
            "setowner marina num2.txt",
            "changeowner marina num2.txt"
        ]
    },
    {
        question: "Comando para cambiar el grupo de un archivo o directorio:",
        correctAnswer: "chgrp alumnos num2.txt",
        options: [
            "chgrp alumnos num2.txt",
            "setgroup alumnos num2.txt",
            "changegroup alumnos num2.txt"
        ]
    },
    {
        question: "Comando para modificar los permisos del archivo:",
        correctAnswer: "chmod 700 num2.txt",
        options: [
            "chmod 700 num2.txt",
            "setperm 700 num2.txt",
            "changeperm 700 num2.txt"
        ]
    },
    {
        question: "Comando para abrir un archivo e intentar modificar:",
        correctAnswer: "nano num2.txt",
        options: [
            "nano num2.txt",
            "edit num2.txt",
            "open num2.txt"
        ]
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = ""; // Limpiar opciones previas

    // Mezclar opciones antes de mostrarlas
    const shuffledOptions = shuffleArray([...currentQuestion.options]);

    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const resultElement = document.getElementById("result");
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        resultElement.textContent = "¡Correcto!";
        resultElement.style.color = "green";
        correctAnswers++;
    } else {
        resultElement.textContent = `Incorrecto. La respuesta correcta es: ${currentQuestion.correctAnswer}`;
        resultElement.style.color = "red";
        wrongAnswers++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            displayQuestion();
            resultElement.textContent = "";
        }, 1000);
    } else {
        setTimeout(() => {
            resultElement.textContent = "";
            displayScore();
        }, 3000);
    }
}

function displayScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Respuestas correctas: ${correctAnswers} | Respuestas incorrectas: ${wrongAnswers}`;
}

window.onload = function() {
    displayQuestion();
}