/* --- script.js --- */

document.addEventListener('DOMContentLoaded', () => {

    // --- ELEMENTOS DEL DOM ---
    const loginView = document.getElementById('login-view');
    const mainPortalView = document.getElementById('main-portal-view');
    const loginForm = document.getElementById('login-form');
    const rudeInput = document.getElementById('rude');
    const loginMessage = document.getElementById('login-message');
    const logoutButton = document.getElementById('logout-button');
    const studentName = document.getElementById('student-name');
    const studentRudeDisplay = document.getElementById('student-rude-display');
    const studentCourse = document.getElementById('student-course');
    const studentGrade = document.getElementById('student-grade');
    const studentShift = document.getElementById('student-shift');
    const studentObservations = document.getElementById('student-observations');
    const tabs = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // --- BASE DE DATOS DE ESTUDIANTES ---
    const estudiantesDB = {
        "519500012018022": {
            rude: "519500012018022",
            nombreCompleto: "ALEXANDRA ALGARAÑAZ CESPEDES",
            curso: "1ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "26-03-2025", area: "Biologia", descripcion: "No hizo practica", Docente:"Profesora Nancy Fernandez" },
                { fecha: "11-03-2025", area: "Ciencias Sociales", descripcion: "No presento produccion(Mapa mental)", Docente:"Profesora Silvia Delgado" },
                { fecha: "01-04-2025", area: "Ciencias Sociales", descripcion: "No presento produccion (mapa actividades economicas)", Docente:"Profesora Silvia Delgado" },
                { fecha: "02-04-2025", area: "Matematica", descripcion: "No presento practico de angulo", Docente:"Profesor Erlan Escobar" },
                { fecha: "02-06-2025", area: "Artes Plasticas", descripcion: "no Presento trabajo en venesta", Docente:"Profesora Zulema Pinto" },
                { fecha: "20-06-2025", area: "Tecnica Tecnologica", descripcion: "No presento cuestionario no presento robot", Docente:"Profesora Zulema Pinto" },
                { fecha: "26-06-2025", area: "Matematica", descripcion: "no presento practico de numeros desimales", Docente:"Profesora Zulema Pinto" },
                { fecha: "03-09-2025", area: "Matematica", descripcion: "No presento practico de operaciones combinadas", Docente:"Profesora Silvia Delgado" },

            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 54, t2: 62, t3: 70 },
                "Lengua Extranjera": { t1: 54, t2: 81, t3: 0 },
                "Ciencias Sociales": { t1: 63, t2: 80, t3: 0 },
                "Educación Musical": { t1: 79, t2: 87, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 54, t2: 70, t3: 0 },
                "Educación Física y Deportes": { t1: 77, t2: 83, t3: 0 },
                "Matemáticas": { t1: 80, t2: 66, t3: 0 },
                "Técnica Tecnológica General": { t1: 86, t2: 76, t3: 0 },
                "Biología - Geografía": { t1: 67, t2: 75, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 52, t2: 84, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 83, t2: 57, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "519500012017015": {
            rude: "519500012017015",
            nombreCompleto: "AÑEZ CESARI ROSARIO",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 66, t3: 0 },
                "Lengua Extranjera": { t1: 37, t2: 55, t3: 0 },
                "Ciencias Sociales": { t1: 35, t2: 57, t3: 0 },
                "Educación Musical": { t1: 77, t2: 98, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 42, t2: 54, t3: 0 },
                "Educación Física y Deportes": { t1: 51, t2: 78, t3: 0 },
                "Matemáticas": { t1: 80, t2: 72, t3: 0 },
                "Técnica Tecnológica General": { t1: 51, t2: 63, t3: 0 },
                "Biología - Geografía": { t1: 54, t2: 56, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 51, t2: 63, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 59, t2: 51, t3: 0 }
            },
            reuniones: []
        },
        "819813332018048": {
            rude: "819813332018048",
            nombreCompleto: "GENESIS ABRIL APIRANZAY CHURIÑO",
            curso: "1ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 52, t3: 0 },
                "Lengua Extranjera": { t1: 52, t2: 75, t3: 0 },
                "Ciencias Sociales": { t1: 66, t2: 63, t3: 0 },
                "Educación Musical": { t1: 78, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 51, t2: 51, t3: 0 },
                "Educación Física y Deportes": { t1: 70, t2: 80, t3: 0 },
                "Matemáticas": { t1: 84, t2: 65, t3: 0 },
                "Técnica Tecnológica General": { t1: 80, t2: 54, t3: 0 },
                "Biología - Geografía": { t1: 52, t2: 52, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 51, t2: 69, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 76, t2: 60, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "5195000120178100": {
            rude: "5195000120178100",
            nombreCompleto: "NICOL ARACELY ARIORI CARABALLO",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "02-03-2025", area: "Psicologia", descripcion: "Su mesa esta pintada y debe lijar y pintar", Docente:"Silvia Delgado" },
                { fecha: "11-03-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion (se comporta mal en clases)", Docente:"Profesora Silvia Delgado" },
                { fecha: "01-04-2025", area: "Ingles", descripcion: "No presento su produccion (Dibujo)", Docente:"Profesora Silvia Delgado" },
                { fecha: "01-04-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(Mapa con actividades economicas", Docente:"Profesora Silvia Delgado" },
                { fecha: "02-04-2025", area: "Matematica", descripcion: "No presento practico de angulos", Docente:"Profesora Zulema Pinto" },
                { fecha: "20-06-2025", area: "Tecnica Tecnologica", descripcion: "No presento su cuestionario no presento robot", Docente:"Profesora Zulema Pinto" },
                { fecha: "03-09-2025", area: "Matematica", descripcion: "No presento practico de operaciones combinadas", Docente:"Profesor Erlan Escobar" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 68, t3: 0 },
                "Lengua Extranjera": { t1: 77, t2: 77, t3: 0 },
                "Ciencias Sociales": { t1: 71, t2: 72, t3: 0 },
                "Educación Musical": { t1: 55, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 65, t2: 80, t3: 0 },
                "Educación Física y Deportes": { t1: 83, t2: 90, t3: 0 },
                "Matemáticas": { t1: 77, t2: 84, t3: 0 },
                "Técnica Tecnológica General": { t1: 80, t2: 64, t3: 0 },
                "Biología - Geografía": { t1: 74, t2: 75, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 52, t2: 65, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 87, t2: 59, t3: 0 }
            },
            reuniones: []
        },
        "519500012019035": {
            rude: "519500012019035",
            nombreCompleto: "WALTER BURGOS SURUBI",
            curso: "1ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "12-03-2025", area: "Biologia", descripcion: "No hizo practica", Docente:"Profesora Nancy Fernandez" },
                { fecha: "02-04-2025", area: "Matematica", descripcion: "No presento practico de angulos", Docente:"Profesor Erlan Escobar" },
                { fecha: "26-06-2025", area: "Matematica", descripcion: "No presento practico de numeros desimales", Docente:"Profesor Erlan Escobar" },
                { fecha: "03-09-2025", area: "Matematica", descripcion: "Falto a clases", Docente:"Profesor Erlan Escobar" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 54, t3: 0 },
                "Lengua Extranjera": { t1: 51, t2: 63, t3: 0 },
                "Ciencias Sociales": { t1: 62, t2: 57, t3: 0 },
                "Educación Musical": { t1: 79, t2: 81, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 43, t2: 56, t3: 0 },
                "Educación Física y Deportes": { t1: 68, t2: 75, t3: 0 },
                "Matemáticas": { t1: 66, t2: 69, t3: 0 },
                "Técnica Tecnológica General": { t1: 61, t2: 86, t3: 0 },
                "Biología - Geografía": { t1: 44, t2: 69, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 51, t2: 57, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 80, t2: 70, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "719500192017018": {
            rude: "719500192017018",
            nombreCompleto: "MARIA JESUS CALUSTRO SARAVIA",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones:  [ 
                { fecha: "13-03-2025", area: "Biologia", descripcion: "llego tarde", Docente:"Profesora Nancy Fernandez" },
                { fecha: "02-04-2025", area: "Matematica", descripcion: "No presento tarea de angulos", Docente:"Profesor Erlan Escobar" },
                { fecha: "03-09-2025", area: "Matematica", descripcion: "No presento practico de opera combinadas", Docente:"Profesor Erlan Escobar" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 53, t2: 71, t3: 0 },
                "Lengua Extranjera": { t1: 78, t2: 79, t3: 0 },
                "Ciencias Sociales": { t1: 84, t2: 82, t3: 0 },
                "Educación Musical": { t1: 77, t2: 79, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 85, t2: 63, t3: 0 },
                "Educación Física y Deportes": { t1: 62, t2: 70, t3: 0 },
                "Matemáticas": { t1: 71, t2: 65, t3: 0 },
                "Técnica Tecnológica General": { t1: 85, t2: 76, t3: 0 },
                "Biología - Geografía": { t1: 72, t2: 78, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 87, t2: 84, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 88, t2: 73, t3: 0 }
            },
            reuniones: []
        },
        "719500632018085": {
            rude: "719500632018085",
            nombreCompleto: "YHEREMI CONDORI URAEZAÑA",
            curso: "1ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "12-03-2025", area: "Biologia", descripcion: "No hizo practico", Docente:"Profesora Nancy Fernandez" },
                { fecha: "26-03-2025", area: "Biologia", descripcion: "No hizo practico", Docente:"Profesora Nancy Fernandez" },
                { fecha: "11-03-2025", area: "Ciencias Sociales", descripcion: "No presento produccion (mapa mental)", Docente:"Profesora Silvia Delgado" },
                { fecha: "01-04-2025", area: "Ingles", descripcion: "No presento su produccion (Dibujo e interpretacion)", Docente:"Profesora Silvia Delgado" },
                { fecha: "01-04-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(Mapa con actividades economicas)", Docente:"Profesora Silvia Delgado" },
                { fecha: "02-04-2025", area: "Matematica", descripcion: "No presento practico de angulos", Docente:"Profesor Erlan Escobar" },
                { fecha: "26-06-2025", area: "Matematica", descripcion: "No completo su practico de desimales", Docente:"Profesor Erlan Escobar" },
                { fecha: "03-09-2025", area: "Matematica", descripcion: "No presento practico de operaciones combinadas", Docente:"Profesor Erlan Escobar" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 56, t3: 0 },
                "Lengua Extranjera": { t1: 52, t2: 66, t3: 0 },
                "Ciencias Sociales": { t1: 60, t2: 55, t3: 0 },
                "Educación Musical": { t1: 82, t2: 87, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 54, t2: 56, t3: 0 },
                "Educación Física y Deportes": { t1: 60, t2: 65, t3: 0 },
                "Matemáticas": { t1: 71, t2: 58, t3: 0 },
                "Técnica Tecnológica General": { t1: 72, t2: 63, t3: 0 },
                "Biología - Geografía": { t1: 63, t2: 62, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 56, t2: 61, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 78, t2: 60, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "719500632018021": {
            rude: "719500632018021",
            nombreCompleto: "EVA MARIEL ESCOBAR RODRIGUEZ",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "12-03-2025", area: "Biologia", descripcion: "No hizo practico", Docente:"Profesora Nancy Fernandez" },
                { fecha: "20-06 2025", area: "Tecnica Tecnologica", descripcion: "No presento su cuestionario no presento robot", Docente:"Profesora Zulema Pinto" },
                { fecha: "26-06-2025", area: "Matematica", descripcion: "No presento su practico completo de numeros decimales", Docente:"Profesor Erlan Escobar" },
                { fecha: "03-09-2025", area: "Matematica", descripcion: "No presento su practico de operaciones combinadas", Docente:"Profesor Erlan Escobar" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 53, t3: 0 },
                "Lengua Extranjera": { t1: 57, t2: 63, t3: 0 },
                "Ciencias Sociales": { t1: 71, t2: 73, t3: 0 },
                "Educación Musical": { t1: 79, t2: 98, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 60, t2: 59, t3: 0 },
                "Educación Física y Deportes": { t1: 78, t2: 83, t3: 0 },
                "Matemáticas": { t1: 83, t2: 84, t3: 0 },
                "Técnica Tecnológica General": { t1: 78, t2: 57, t3: 0 },
                "Biología - Geografía": { t1: 66, t2: 60, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 64, t2: 64, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 78, t2: 61, t3: 0 }
            },
            reuniones: []
        },
        "519500012018013": {
            rude: "519500012018013",
            nombreCompleto: "RICARDO FERNANDEZ JUSTINIANO",
            curso: "1ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "20-06-2025", area: "Tecnica Tecnologica", descripcion: "No presento su cuestionario", Docente:"Profesora Zulema Pinto" },
                { fecha: "03-09-2025", area: "Matematica", descripcion: "No presento practico de operaciones combinadas", Docente:"Profesor Erlan Escobar" },

            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 68, t2: 80, t3: 0 },
                "Lengua Extranjera": { t1: 73, t2: 78, t3: 0 },
                "Ciencias Sociales": { t1: 82, t2: 65, t3: 0 },
                "Educación Musical": { t1: 75, t2: 97, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 76, t2: 78, t3: 0 },
                "Educación Física y Deportes": { t1: 81, t2: 85, t3: 0 },
                "Matemáticas": { t1: 85, t2: 85, t3: 0 },
                "Técnica Tecnológica General": { t1: 93, t2: 82, t3: 0 },
                "Biología - Geografía": { t1: 89, t2: 83, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 75, t2: 78, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 89, t2: 65, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "719500632017009": {
            rude: "719500632017009",
            nombreCompleto: "KATHERINE GUERRA YAMBAMINI",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "12-03-2025", area: "Biologia", descripcion: "No hizo practico", Docente:"Profesora Nancy Fernandez" },
                { fecha: "26-03-2025", area: "Biologia", descripcion: "No hizo practico", Docente:"Profesora Nancy Fernandez" },
                { fecha: "11-03-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(mapa mental)", Docente:"Profesora Silvia Delgado" },
                { fecha: "01-04-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion (mapa con actividades economicas", Docente:"Profesora Silvia Delgado" },
                { fecha: "02-04-2025", area: "Matematica", descripcion: "No presento practico de angulos", Docente:"Profesora Erlan Escobar" },
                { fecha: "08-04-2025", area: "Ingles", descripcion: "No presento su produccion (Los numeros", Docente:"Profesora Silvia Delgado" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 59, t3: 0 },
                "Lengua Extranjera": { t1: 51, t2: 78, t3: 0 },
                "Ciencias Sociales": { t1: 51, t2: 65, t3: 0 },
                "Educación Musical": { t1: 79, t2: 90, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 51, t2: 53, t3: 0 },
                "Educación Física y Deportes": { t1: 91, t2: 93, t3: 0 },
                "Matemáticas": { t1: 52, t2: 63, t3: 0 },
                "Técnica Tecnológica General": { t1: 79, t2: 75, t3: 0 },
                "Biología - Geografía": { t1: 57, t2: 63, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 51, t2: 68, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 73, t2: 56, t3: 0 }
            },
            reuniones: []
        },
        "5195000120176578": {
            rude: "5195000120176578",
            nombreCompleto: "AKANE JAZMIN KARASUYAMA TORREZ",
            curso: "1ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "12-03-2025", area: "Biologia", descripcion: "No hizo practico", Docente:"Profesora Nancy Fernandez" },
                { fecha: "26-03-2025", area: "Biologia", descripcion: "No hizo practico", Docente:"Profesora Nancy Fernandez" },
                { fecha: "02-08-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion (mapa mental)", Docente:"Profesora Silvia Delgado" },
                { fecha: "02-04-2025", area: "Matematica", descripcion: "No presento practico de angulos", Docente:"Profesora Zulema Pinto" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 56, t2: 63, t3: 0 },
                "Lengua Extranjera": { t1: 54, t2: 52, t3: 0 },
                "Ciencias Sociales": { t1: 56, t2: 54, t3: 0 },
                "Educación Musical": { t1: 78, t2: 88, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 57, t2: 59, t3: 0 },
                "Educación Física y Deportes": { t1: 64, t2: 68, t3: 0 },
                "Matemáticas": { t1: 51, t2: 61, t3: 0 },
                "Técnica Tecnológica General": { t1: 76, t2: 61, t3: 0 },
                "Biología - Geografía": { t1: 71, t2: 74, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 59, t2: 58, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 72, t2: 62, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "519500012017012": {
            rude: "519500012017012",
            nombreCompleto: "LORENA DENISE LABERAN ARIORI",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "13-03-2025", area: "Biologia", descripcion: "No hizo practico", Docente:"Profesora Nancy Fernandez" },
                { fecha: "26-03-2025", area: "Biologia", descripcion: "No hizo practico", Docente:"Profesora Nancy Fernandez" },
                { fecha: "11-03-2025", area: "Ciencias Sociales", descripcion: "No presento produccion (mapa mental)", Docente:"Profesora Silvia Delgado" },
                { fecha: "01-04-2025", area: "Ingles", descripcion: "Falto a clases sin licencia", Docente:"Profesora Nancy Fernandez" },
                { fecha: "08-04-2025", area: "Ingles", descripcion: "No preento su produccion(los numeros)", Docente:"Profesora Silvia Delgado" },
                { fecha: "16-04-2025", area: "Psicologia", descripcion:"Falto a clases sin licencia", Docente:"Profesora Silvia Delgado" },
                { fecha: "20-06-2025", area: "Tecnica Tecnologica", descripcion: "No presento su cuestioario, no presento su robor", Docente:"Profesora Zulema Pinto" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 43, t2: 53, t3: 0 },
                "Lengua Extranjera": { t1: 35, t2: 51, t3: 0 },
                "Ciencias Sociales": { t1: 35, t2: 51, t3: 0 },
                "Educación Musical": { t1: 77, t2: 87, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 42, t2: 51, t3: 0 },
                "Educación Física y Deportes": { t1: 51, t2: 62, t3: 0 },
                "Matemáticas": { t1: 51, t2: 62, t3: 0 },
                "Técnica Tecnológica General": { t1: 46, t2: 68, t3: 0 }, 
                "Biología - Geografía": { t1: 33, t2: 29, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 35, t2: 53, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 54, t2: 44, t3: 0 }
            },
            reuniones: []
        },
        "5195000120176253": {
            rude: "5195000120176253",
            nombreCompleto: "ANA YUSELY LINO SURUBI",
            curso: "1ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "11-03-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion (mapa mental", Docente:"Profesora Silvia Delgado" },
                { fecha: "01-04-2025", area: "Ingles", descripcion: "No presento su produccion(Dibujo)", Docente:"Profesora Silvia Delgado" },
                { fecha: "01-04-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(mapa con actividades economicas)", Docente:"Profesora Silvia Delgado" },
                { fecha: "08-04-2025", area: "Ingles", descripcion: "No presento produccion (Los numeros)", Docente:"Profesora Silvia Delgado" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 69, t3: 0 },
                "Lengua Extranjera": { t1: 61, t2: 83, t3: 0 },
                "Ciencias Sociales": { t1: 72, t2: 61, t3: 0 },
                "Educación Musical": { t1: 79, t2: 82, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 72, t2: 61, t3: 0 },
                "Educación Física y Deportes": { t1: 73, t2: 63, t3: 0 },
                "Matemáticas": { t1: 79, t2: 68, t3: 0 },
                "Técnica Tecnológica General": { t1: 77, t2: 81, t3: 0 },
                "Biología - Geografía": { t1: 64, t2: 83, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 51, t2: 77, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 84, t2: 73, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "519500012018014": {
            rude: "519500012018014",
            nombreCompleto: "IVANIR NACIF MEJIA SALAZAR",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "11-02-2025", area: "Psicologia", descripcion: "Su mesa esta pintada debe lijar y pintar en el final de carnaval", Docente:"Profesora Silvia Delgado" },
                { fecha: "11-03-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(mapa mental)", Docente:"Profesora Silvia Delgado" },
                { fecha: "08-04-2025", area: "Ingles", descripcion: "No presento su produccion(los numeros)", Docente:"Profesora Silvia Delgado" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 71, t3: 0 },
                "Lengua Extranjera": { t1: 51, t2: 80, t3: 0 },
                "Ciencias Sociales": { t1: 65, t2: 81, t3: 0 },
                "Educación Musical": { t1: 75, t2: 98, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 51, t2: 54, t3: 0 },
                "Educación Física y Deportes": { t1: 93, t2: 92, t3: 0 },
                "Matemáticas": { t1: 67, t2: 62, t3: 0 },
                "Técnica Tecnológica General": { t1: 70, t2: 71, t3: 0 },
                "Biología - Geografía": { t1: 74, t2: 65, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 55, t2: 65, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 81, t2: 57, t3: 0 }
            },
            reuniones: []
        },
        "819600302018045": {
            rude: "819600302018045",
            nombreCompleto: "CARLA YAMILE ORRURI TOMICHA",
            curso: "1ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "11-03-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(mapa mental)", Docente:"Profesora Silvia Delgado" },
                { fecha: "01-04-2025", area: "Ingles", descripcion: "No presento produccion(Dibujo)", Docente:"Profesora Silvia Delgado" },
                { fecha: "01-04-2025", area: "Ciencias Sociales", descripcion: "No presento su practico (mapa con actividadeseconomicas)", Docente:"Profesor Silvia Delgado" },
                { fecha: "02-04-2025", area: "Matematica", descripcion: "No presento practico de angulos", Docente:"Profesora Erlan Escobar" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 62, t3: 0 },
                "Lengua Extranjera": { t1: 73, t2: 69, t3: 0 },
                "Ciencias Sociales": { t1: 65, t2: 66, t3: 0 },
                "Educación Musical": { t1: 78, t2: 87, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 60, t2: 59, t3: 0 },
                "Educación Física y Deportes": { t1: 65, t2: 67, t3: 0 },
                "Matemáticas": { t1: 80, t2: 66, t3: 0 },
                "Técnica Tecnológica General": { t1: 70, t2: 61, t3: 0 },
                "Biología - Geografía": { t1: 54, t2: 74, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 53, t2: 65, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 54, t2: 74, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "719500692018032": {
            rude: "719500692018032",
            nombreCompleto: "ROSA ORTIZ CHURA",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "11-03-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(mapa mental)", Docente:"Profesora Silvia Delgado" },
                { fecha: "01-04-2025", area: "Ciencias Sociales", descripcion: "No presentop produccion(mapa con actividades economicas)", Docente:"Profesora Silvia Delgado" },
                { fecha: "02-04-2025", area: "Matematica", descripcion: "No presento pracctico de angulos", Docente:"Profesor Erlan Escobar" },
                { fecha: "08-04-2025", area: "Ingles", descripcion: "No presento su produccion(los numeros)", Docente:"Profesora Silvia Delgado" },
                { fecha: "29-09-2025", area: "Artes Pllasticas", descripcion: "No trabajo el tema del color no realiza el tema en clase", Docente:"Profesora Nancy Fernandez" },

            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 61, t3: 0 },
                "Lengua Extranjera": { t1: 52, t2: 44, t3: 0 },
                "Ciencias Sociales": { t1: 40, t2: 53, t3: 0 },
                "Educación Musical": { t1: 77, t2: 89, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 51, t2: 54, t3: 0 },
                "Educación Física y Deportes": { t1: 82, t2: 78, t3: 0 },
                "Matemáticas": { t1: 58, t2: 58, t3: 0 },
                "Técnica Tecnológica General": { t1: 60, t2: 51, t3: 0 },
                "Biología - Geografía": { t1: 40, t2: 55, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 35, t2: 59, t3: 0 }, 
                "Valores Espiritualidad y Religiones": { t1: 70, t2: 54, t3: 0 }
            },
            reuniones: []
        },
        "819800762017044": {
            rude: "819800762017044",
            nombreCompleto: "ANTHONY BRISS PAREDES OROPEZA",
            curso: "1ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "13-02-2025", area: "Psicologia", descripcion: "Esta su mesa pintado debe lijar y pintar", Docente:"Profesora Silvia Delgado" },
                { fecha: "02-04-2025", area: "Biologia", descripcion: "Mal comportamiento", Docente:"Profesora Nancy Fernandez" },
                { fecha: "02-04-2025", area: "Psicologia", descripcion: "Se comporto mal en clases es distraido", Docente:"Profesora Silvia Delgado" },
                { fecha: "08-04-2025", area: "Ingles", descripcion: "No presento su produccion(los numeros)", Docente:"Profesora Silvia Delgado" }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 58, t3: 0 },
                "Lengua Extranjera": { t1: 63, t2: 73, t3: 0 },
                "Ciencias Sociales": { t1: 65, t2: 61, t3: 0 },
                "Educación Musical": { t1: 79, t2: 89, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 51, t2: 60, t3: 0 },
                "Educación Física y Deportes": { t1: 91, t2: 93, t3: 0 },
                "Matemáticas": { t1: 60, t2: 74, t3: 0 },
                "Técnica Tecnológica General": { t1: 77, t2: 65, t3: 0 },
                "Biología - Geografía": { t1: 57, t2: 69, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 62, t2: 73, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 80, t2: 70, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "5195000120171314": {
            rude: "5195000120171314",
            nombreCompleto: "MEIVER STELIN PATICU SURUBI",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "02-04-2025", area: "Matematica", descripcion: "No presento su practico de angulo", Docente:"Profesor Erlan Escobar" },
                { fecha: "08-04-2025", area: "Ingles", descripcion: "No presento su produccion los numeros", Docente:"Profesora Silviia Delgado" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 66, t3: 0 },
                "Lengua Extranjera": { t1: 69, t2: 70, t3: 0 },
                "Ciencias Sociales": { t1: 66, t2: 62, t3: 0 },
                "Educación Musical": { t1: 78, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 52, t2: 56, t3: 0 },
                "Educación Física y Deportes": { t1: 98, t2: 94, t3: 0 },
                "Matemáticas": { t1: 64, t2: 67, t3: 0 },
                "Técnica Tecnológica General": { t1: 74, t2: 73, t3: 0 },
                "Biología - Geografía": { t1: 61, t2: 72, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 65, t2: 55, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 87, t2: 75, t3: 0 }
            },
            reuniones: []
        },
        "719500632018011": {
            rude: "719500632018011",
            nombreCompleto: "DAVID MANUEL POIQUI CUELLAR",
            curso: "1ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 42, t2: 58, t3: 0 },
                "Lengua Extranjera": { t1: 36, t2: 52, t3: 0 },
                "Ciencias Sociales": { t1: 41, t2: 52, t3: 0 },
                "Educación Musical": { t1: 75, t2: 98, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 46, t2: 55, t3: 0 },
                "Educación Física y Deportes": { t1: 29, t2: 89, t3: 0 },
                "Matemáticas": { t1: 54, t2: 77, t3: 0 },
                "Técnica Tecnológica General": { t1: 51, t2: 54, t3: 0 },
                "Biología - Geografía": { t1: 51, t2: 71, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 51, t2: 51, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 58, t2: 55, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "719500632018013": {
            rude: "719500632018013",
            nombreCompleto: "ROSARIO ROCA PECHO",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "11-03-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(mapa mental", Docente:"Profesora Silvia Delgado" },
                { fecha: "02-04-2025", area: "Matematica", descripcion: "No presento practico de angulo", Docente:"Profesor Erlan Escobar" },
                { fecha: "08-04-2025", area: "Ingles", descripcion: "No presento su produccion(Los numeros)", Docente:"Profesora Silvia Delgado" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 55, t3: 0 },
                "Lengua Extranjera": { t1: 51, t2: 76, t3: 0 },
                "Ciencias Sociales": { t1: 59, t2: 52, t3: 0 },
                "Educación Musical": { t1: 77, t2: 90, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 51, t2: 58, t3: 0 },
                "Educación Física y Deportes": { t1: 88, t2: 90, t3: 0 },
                "Matemáticas": { t1: 51, t2: 57, t3: 0 },
                "Técnica Tecnológica General": { t1: 74, t2: 51, t3: 0 },
                "Biología - Geografía": { t1: 46, t2: 53, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 36, t2: 54, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 77, t2: 55, t3: 0 }
            },
            reuniones: []
        },
        "519500012018026": {
            rude: "519500012018026",
            nombreCompleto: "MISAEL ROJAS BARRIENTOS",
            curso: "1ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "11-03-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(mapa mental)", Docente:"Profesor Silvia Delgado" },
                { fecha: "02-04-2025", area: "Matematica", descripcion: "No presento practico de angulo", Docente:"Profesor Erlan Escobar" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 64, t3: 0 },
                "Lengua Extranjera": { t1: 51, t2: 53, t3: 0 },
                "Ciencias Sociales": { t1: 51, t2: 62, t3: 0 },
                "Educación Musical": { t1: 78, t2: 98, t3: 0 },  
                "Artes Plásticas y Visuales": { t1: 51, t2: 53, t3: 0 },
                "Educación Física y Deportes": { t1: 80, t2: 79, t3: 0 }, 
                "Matemáticas": { t1: 52, t2: 59, t3: 0 },
                "Técnica Tecnológica General": { t1: 68, t2: 51, t3: 0 },
                "Biología - Geografía": { t1: 58, t2: 57, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 38, t2: 57, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 81, t2: 64, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "719500632017018": {
            rude: "719500632017018",
            nombreCompleto: "MARIA ANGELICA SAAVEDRA PECHO",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "26-03-2025", area: "Biologia", descripcion: "No presento practico ", Docente:"Profesora Nancy Fernandez" },
                { fecha: "11-03-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(mapa mental)", Docente:"Profesora Silvia Delgado Cruz" },
                { fecha: "01-04-2025", area: "Ingles", descripcion: "No presento su produccion(Dibujo)", Docente:"Profesora Silvia Delgado Cruz" },
                { fecha: "01-04-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(mapa con actividades economicas)", Docente:"Profesora Silvia Delgado" },
                { fecha: "02-04-2025", area: "Matematica", descripcion: "No presento practico de angulo", Docente:"Profesor Erlan Escobar" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 57, t3: 0 },
                "Lengua Extranjera": { t1: 55, t2: 73, t3: 0 },
                "Ciencias Sociales": { t1: 40, t2: 52, t3: 0 },
                "Educación Musical": { t1: 79, t2: 89, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 77, t2: 67, t3: 0 },
                "Educación Física y Deportes": { t1: 52, t2: 72, t3: 0 },
                "Matemáticas": { t1: 62, t2: 56, t3: 0 },
                "Técnica Tecnológica General": { t1: 80, t2: 65, t3: 0 },
                "Biología - Geografía": { t1: 49, t2: 51, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 35, t2: 63, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 76, t2: 47, t3: 0 }
            },
            reuniones: []
        },
        "519500012019034": {
            rude: "519500012019034",
            nombreCompleto: "JOSEPH SAARAVIA PACHURY",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "11-03-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(mapa mental)", Docente:"Profesor Silvia Delgado" },
                { fecha: "02-04-2025", area: "Matematica", descripcion: "No presento practico de angulo", Docente:"Profesor Erlan Escobar" },
                { fecha: "08-04-2025", area: "Ingles", descripcion: "No presento su produccion(Los numeros)", Docente:"Profesor Silvia Delgado" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 53, t2: 59, t3: 0 },
                "Lengua Extranjera": { t1: 82, t2: 62, t3: 0 },
                "Ciencias Sociales": { t1: 51, t2: 61, t3: 0 },
                "Educación Musical": { t1: 78, t2: 98, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 52, t2: 53, t3: 0 },
                "Educación Física y Deportes": { t1: 77, t2: 78, t3: 0 },
                "Matemáticas": { t1: 60, t2: 63, t3: 0 },
                "Técnica Tecnológica General": { t1: 72, t2: 51, t3: 0 },
                "Biología - Geografía": { t1: 65, t2: 70, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 53, t2: 56, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 78, t2: 60, t3: 0 }
            },
            reuniones: []
        },
        "5195000120191102": {
            rude: "5195000120191102",
            nombreCompleto: "KENIA SOLIZ SAMEJA",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "26-03-2025", area: "Biologia", descripcion: "No vino a clases", Docente:"Profesora Nancy Fernandez<" },
                { fecha: "11-03-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(mapa mental)", Docente:"Profesora Silvia Delgado" },
                { fecha: "01-04-2025", area: "Ingles", descripcion: "No presento su produccion(Dibujo)", Docente:"Profesora Silvia Delgado" },
                { fecha: "01-04-2025", area: "Ciencias Sociales", descripcion: "No presento su produccion (mapa con ctividades economicas)", Docente:"Profesora Silvia Delgado" },
                { fecha: "02-04-2025", area: "Matematica", descripcion: "No presento practico de angulo", Docente:"Profesor Erlan Escobar" },
                { fecha: "08-04-2025", area: "Ingles", descripcion: "No presento su produccion(los numeros)", Docente:"Profesora Silvia Delgado" },
            ],
            asistencia: [
                { fecha: "10-05-2025", materia: "Física", estado: "Presente" },
                { fecha: "10-05-2025", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 46, t3: 0 },
                "Lengua Extranjera": { t1: 33, t2: 51, t3: 0 },
                "Ciencias Sociales": { t1: 43, t2: 52, t3: 0 },
                "Educación Musical": { t1: 55, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 42, t2: 51, t3: 0 },
                "Educación Física y Deportes": { t1: 52, t2: 67, t3: 0 },
                "Matemáticas": { t1: 51, t2: 54, t3: 0 },
                "Técnica Tecnológica General": { t1: 46, t2: 51, t3: 0 },
                "Biología - Geografía": { t1: 37, t2: 40, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 32, t2: 52, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 75, t2: 47, t3: 0 }
            },
            reuniones: []
        },
        "519500012017008": {
            rude: "519500012017008",
            nombreCompleto: "RUBEN SOLIZ PEÑA",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "26-03-2025", area: "Biologia", descripcion: "No vino a clases", Docente:"Profesora Nancy Fernandez<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 53, t2: 61, t3: 0 },
                "Lengua Extranjera": { t1: 52, t2: 72, t3: 0 },
                "Ciencias Sociales": { t1: 60, t2: 74, t3: 0 },
                "Educación Musical": { t1: 75, t2: 90, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 51, t2: 52, t3: 0 },
                "Educación Física y Deportes": { t1: 89, t2: 91, t3: 0 },
                "Matemáticas": { t1: 67, t2: 69, t3: 0 },
                "Técnica Tecnológica General": { t1: 71, t2: 69, t3: 0 },
                "Biología - Geografía": { t1: 56, t2: 62, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 52, t2: 73, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 69, t2: 54, t3: 0 }
            },
            reuniones: []
        },
        "519500012018018": {
            rude: "519500012018018",
            nombreCompleto: "ROSARIO JIMENA TOMICHA ARIAS",
            curso: "1ro de Secundaria", 
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "26-03--2025", area: "Biologia", descripcion: "No presento practico", Docente:"Profesora Nancy Fernandez<" },
                { fecha: "11-03--2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(mapa mental)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "08-04--2025", area: "Ingles", descripcion: "No presento su produccion(los numeros)", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 55, t2: 65, t3: 0 },
                "Lengua Extranjera": { t1: 55, t2: 65, t3: 0 },
                "Ciencias Sociales": { t1: 63, t2: 62, t3: 0 },
                "Educación Musical": { t1: 74, t2: 79, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 58, t2: 72, t3: 0 },
                "Educación Física y Deportes": { t1: 86, t2: 80, t3: 0 },
                "Matemáticas": { t1: 74, t2: 65, t3: 0 },
                "Técnica Tecnológica General": { t1: 75, t2: 64, t3: 0 },
                "Biología - Geografía": { t1: 76, t2: 73, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 41, t2: 61, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 86, t2: 62, t3: 0 }
            },
            reuniones: []
        },
        "5195000120176857": {
            rude: "5195000120176857",
            nombreCompleto: "BRIANA ALEJANDRA VACA PEÑA",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "11-02--2025", area: "Psicologia", descripcion: "Esta pintado su mesa tambien pinto otro pupitre", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 72, t3: 0 },
                "Lengua Extranjera": { t1: 80, t2: 86, t3: 0 },
                "Ciencias Sociales": { t1: 67, t2: 79, t3: 0 },
                "Educación Musical": { t1: 76, t2: 82, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 54, t2: 62, t3: 0 },
                "Educación Física y Deportes": { t1: 75, t2: 73, t3: 0 },
                "Matemáticas": { t1: 74, t2: 91, t3: 0 },
                "Técnica Tecnológica General": { t1: 82, t2: 71, t3: 0 },
                "Biología - Geografía": { t1: 66, t2: 71, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 68, t2: 83, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 86, t2: 73, t3: 0 }
            },
            reuniones: []
        },
        "519500012017009": {
            rude: "519500012017009",
            nombreCompleto: "GUILLERMO VERA TELMO",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "11-02--2025", area: "Psicologia", descripcion: "esta pintado su mesa tambien pinto otro", Docente:"Profesora Silvia Delgado<" },
                { fecha: "12-03--2025", area: "Psicologia", descripcion: "No paso clases de psicologia en la septima", Docente:"Profesora Silvia Delgado<" },
                { fecha: "26-03--2025", area: "Biologia", descripcion: "No presento practico", Docente:"Profesora Nancy Fernandez<" },
                { fecha: "11-03--2025", area: "Ciencias Sociales", descripcion: "no presento su produccion(mapa mental)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "01-04--2025", area: "Ingles", descripcion: "No presento su produccion(Dibujo)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "01-04--2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(mapa con actividades economicas)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "08-04--2025", area: "Ingles", descripcion: "No presento su produccion(los numeros)", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 43, t2: 64, t3: 0 },
                "Lengua Extranjera": { t1: 36, t2: 51, t3: 0 },
                "Ciencias Sociales": { t1: 45, t2: 58, t3: 0 },
                "Educación Musical": { t1: 77, t2: 90, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 43, t2: 55, t3: 0 },
                "Educación Física y Deportes": { t1: 90, t2: 95, t3: 0 },
                "Matemáticas": { t1: 60, t2: 58, t3: 0 },
                "Técnica Tecnológica General": { t1: 60, t2: 51, t3: 0 },
                "Biología - Geografía": { t1: 51, t2: 60, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 51, t2: 54, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 73, t2: 55, t3: 0 }
            },
            reuniones: []
        },
        "5195000120177131": {
            rude: "5195000120177131",
            nombreCompleto: "ELIEZER YAPORI ROJAS",
            curso: "1ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "26-06--2025", area: "Biologia", descripcion: "No vino a clases", Docente:"Profesora Nancy Fernandez<" },
                { fecha: "11-02--2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(mapa mental)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "01-04--2025", area: "Ingles", descripcion: "No presento su produccion(Dibujo)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "01-04--2025", area: "Ciencias Sociales", descripcion: "No presento su produccion(mapa con actividades economicas)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "02-04--2025", area: "Matematica", descripcion:"No presento su practico de angulos", Docente:"Profesor Erlan Escobar<" },
                { fecha: "08-04--2025", area: "Ingles", descripcion: "No presento su produccion(los numeros)", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 55, t3: 0 },
                "Lengua Extranjera": { t1: 51, t2: 54, t3: 0 },
                "Ciencias Sociales": { t1: 53, t2: 58, t3: 0 },
                "Educación Musical": { t1: 78, t2: 88, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 51, t2: 51, t3: 0 },
                "Educación Física y Deportes": { t1: 81, t2: 83, t3: 0 },
                "Matemáticas": { t1: 62, t2: 55, t3: 0 },
                "Técnica Tecnológica General": { t1: 61, t2: 51, t3: 0 },
                "Biología - Geografía": { t1: 56, t2: 65, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 42, t2: 53, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 73, t2: 62, t3: 0 }
            },
            reuniones: []
        },
        "519500012018027": {
            rude: "519500012018027",
            nombreCompleto: "KELLY ALGARAÑAZ CESPEDES",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 1 PRIMERO.png",
            observaciones: [
                { fecha: "15-02--2025", area: "Matematica", descripcion: "No presento practico", Docente:"Profesor Erlan Escobar<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 61, t2: 77, t3: 0 },
                "Lengua Extranjera": { t1: 71, t2: 84, t3: 0 },
                "Ciencias Sociales": { t1: 88, t2: 89, t3: 0 },
                "Educación Musical": { t1: 81, t2: 89, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 85, t2: 81, t3: 0 },
                "Educación Física y Deportes": { t1: 88, t2: 86, t3: 0 },
                "Matemáticas": { t1: 80, t2: 74, t3: 0 },
                "Técnica Tecnológica General": { t1: 80, t2: 92, t3: 0 },
                "Biología - Geografía": { t1: 79, t2: 81, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 79, t2: 82, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 83, t2: 81, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "719500632017028": {
            rude: "719500632017028",
            nombreCompleto: "DAYANA FIORELLA ARAUZ APARICIO",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "25-02--2025", area: "Matematica", descripcion: "No presento su practico", Docente:"Profesor Erlan Escobar<" },
                { fecha: "26-02--2025", area: "Matematica", descripcion: "No presento practico de fraccion", Docente:"Profesor Erlan Escobar<" },
                { fecha: "14-03--2025", area: "Artes Plsticas", descripcion: "No presento el tema de dibujo tecnico decrativo", Docente:"Profesora Zulema Pinto<" },
                { fecha: "21-03--2025", area: "Artes Plasticas", descripcion: "No presento su trabajo de construccion del cuadrado y su producto", Docente:"Profesora Zulema Pinto<" },
                { fecha: "05-08--2025", area: "Matematica", descripcion: "No presento practicas de expresiones algebraicas", Docente:"Profesor Erlan Escobar<" },
                { fecha: "05-08--2025", area: "Matematica", descripcion: "No presento practico", Docente:"Profesor Erlan Escobar<" },
                { fecha: "05-08--2025", area: "Matematica", descripcion: "No presento practico", Docente:"Profesor Erlan Escobar<" },
                { fecha: "25-08--2025", area: "Ciencias Sociales", descripcion: "No presento su cuestionario y mapa mental y carpeta", Docente:"Profesora Silvia Delgado<" },
                { fecha: "02-10--2025", area: "Tecnica Tecnologica", descripcion: "No dio su evaluacion", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 57, t2: 69, t3: 0 },
                "Lengua Extranjera": { t1: 61, t2: 72, t3: 0 },
                "Ciencias Sociales": { t1: 78, t2: 61, t3: 0 },
                "Educación Musical": { t1: 80, t2: 87, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 64, t2: 72, t3: 0 },
                "Educación Física y Deportes": { t1: 55, t2: 70, t3: 0 },
                "Matemáticas": { t1: 65, t2: 70, t3: 0 },
                "Técnica Tecnológica General": { t1: 76, t2: 61, t3: 0 },
                "Biología - Geografía": { t1: 75, t2: 71, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 72, t2: 78, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 85, t2: 78, t3: 0 }
            },
            reuniones: []
        },
        "519500012017004": {
            rude: "519500012017004",
            nombreCompleto: "KATHERIN DAVID BARRIENTOS PEÑA",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "25-02--2025", area: "Matematica", descripcion: "No presento practico", Docente:"Profesor Erlan Escobar<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento produccion(tabla con datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "16-04--2025", area: "Matematica", descripcion: "No realizo su practico sobre algebra", Docente:"Profesora Silvia Delgado<" },
                { fecha: "05-05--2025", area: "Cienias Sociales", descripcion: "No presento su actividad de produccion(investigacion dibujo maqueta)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "22-05--2025", area: "Cosmovicion", descripcion: "No presento su produccion ", Docente:"Profesora Silvia Delgado<" },
                { fecha: "11-06--2025", area: "Matematica", descripcion: "No presento su mapa conceptual", Docente:"Profesor Erlan Escobar<" },
                { fecha: "05-08--2025", area: "Matematica", descripcion: "No presento practico de expresiones algebraicas", Docente:"Profesor Erlan Escobar<" },
                { fecha: "27-08--2025", area: "Matematica", descripcion: "No asistio y no dio examen", Docente:"Profesor Erlan Escobar<" },
                { fecha: "25-08--2025", area: "Ciencias Sociales", descripcion: "No presento su cuadro crusigrama cuestionario mapa", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Tecnica Tecnologica", descripcion: "No presento su factura cuento historieta", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Cosmovicion", descripcion: "No presento su poema lectura frase", Docente:"Profesora Silvia Delgado<" },
                { fecha: "30-09--2025", area: "Tecnologia", descripcion: "No presento el cuadro de presupuesto", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 53, t2: 54, t3: 0 },
                "Lengua Extranjera": { t1: 66, t2: 60, t3: 0 },
                "Ciencias Sociales": { t1: 66, t2: 54, t3: 0 },
                "Educación Musical": { t1: 80, t2: 86, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 44, t2: 47, t3: 0 },
                "Educación Física y Deportes": { t1: 77, t2: 72, t3: 0 },
                "Matemáticas": { t1: 67, t2: 51, t3: 0 },
                "Técnica Tecnológica General": { t1: 41, t2: 51, t3: 0 },
                "Biología - Geografía": { t1: 66, t2: 45, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 51, t2: 54, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 49, t2: 61, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "519500012017021": {
            rude: "519500012017021",
            nombreCompleto: "DIEGO MAYCOL BECERRA RODRIGUEZ",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "14-03--2025", area: "Artes Plasticas", descripcion: "No presento su tema de dibujo", Docente:"Profesora <" },
                { fecha: "05-08--2025", area: "Matematica", descripcion: "No presento practico expresiones algebraicas", Docente:"Profesor Erlan Escobar<" },
                { fecha: "07-08--2025", area: "Matematica", descripcion: "No completo su practico de polinomio", Docente:"Profesor Erlan Escobar<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 53, t2: 73, t3: 0 },
                "Lengua Extranjera": { t1: 63, t2: 91, t3: 0 },
                "Ciencias Sociales": { t1: 79, t2: 86, t3: 0 },
                "Educación Musical": { t1: 80, t2: 89, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 61, t2: 76, t3: 0 },
                "Educación Física y Deportes": { t1: 81, t2: 87, t3: 0 },
                "Matemáticas": { t1: 72, t2: 63, t3: 0 },
                "Técnica Tecnológica General": { t1: 75, t2: 85, t3: 0 },
                "Biología - Geografía": { t1: 82, t2: 76, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 86, t2: 85, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 85, t2: 77, t3: 0 }
            },
            reuniones: []
        },
        "719500632017173A": {
            rude: "719500632017173A",
            nombreCompleto: "YOISY CANO AGUILAR",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 62, t2: 60, t3: 0 },
                "Lengua Extranjera": { t1: 77, t2: 68, t3: 0 },
                "Ciencias Sociales": { t1: 91, t2: 66, t3: 0 },
                "Educación Musical": { t1: 61, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 71, t2: 62, t3: 0 },
                "Educación Física y Deportes": { t1: 68, t2: 75, t3: 0 },
                "Matemáticas": { t1: 57, t2: 69, t3: 0 },
                "Técnica Tecnológica General": { t1: 51, t2: 70, t3: 0 },
                "Biología - Geografía": { t1: 65, t2: 63, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 62, t2: 53, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 85, t2: 55, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "519500012017018": {
            rude: "519500012017018",
            nombreCompleto: "HADASSA CASTEDO CACERES",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion", Docente:"Profesora Silvia Delgado<" },
                { fecha: "22-05--2025", area: "Cosmovicion", descripcion: "No presento su produccion", Docente:"Profesora Silvia Delgado<" },
                { fecha: "05-08--2025", area: "Matematica", descripcion: "No presento practico de expresiones algebraicas", Docente:"Profesor Erlan Escobar<" },
                { fecha: "25-08--2025", area: "Matematica", descripcion: "No tiene deber al dia", Docente:"Profesor Erlan Escobar<" },
                { fecha: "27-08--2025", area: "Ciencias Sociales", descripcion: "No presento cuestionario y mapa mental", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Tecnica Tecnologica", descripcion: "No presento su cuento historieta", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Cosmovicion", descripcion: "No presento su poema cuestionario", Docente:"Profesora Silvia Delgado<" },
                { fecha: "30-09--2025", area: "Cosmovicion", descripcion: "No presento su cuadro de presupuesto", Docente:"Profesora Silvia Delgado<" },
                { fecha: "02-10--2025", area: "Tecnica Tecnologica", descripcion: "No dio su evaluacion", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 64, t2: 63, t3: 0 },
                "Lengua Extranjera": { t1: 66, t2: 70, t3: 0 },
                "Ciencias Sociales": { t1: 74, t2: 80, t3: 0 },
                "Educación Musical": { t1: 79, t2: 99, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 58, t2: 51, t3: 0 },
                "Educación Física y Deportes": { t1: 71, t2: 81, t3: 0 },
                "Matemáticas": { t1: 73, t2: 65, t3: 0 },
                "Técnica Tecnológica General": { t1: 64, t2: 59, t3: 0 },
                "Biología - Geografía": { t1: 83, t2: 61, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 52, t2: 55, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 76, t2: 66, t3: 0 }
            },
            reuniones: []
        },
        "818700302017012": {
            rude: "818700302017012",
            nombreCompleto: "MARIELA CATARI MARTINEZ",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion", Docente:"Profesora Silvia Delgado<" },
                { fecha: "08-25--2025", area: "Cosmovicion", descripcion: "No presento sus actividades de produccion", Docente:"Profesora Silvia Delgado<" },
                { fecha: "15-05--2025", area: "Cosmovicion", descripcion: "No trajo materiales a clases", Docente:"Profesora Silvia Delgado<" },
                { fecha: "22-05--2025", area: "Cosmovicion", descripcion: "No presento su produccion", Docente:"Profesora Silvia Delgado<" },
                { fecha: "05-08--2025", area: "Matematica", descripcion: "No presento practico de expresiones algebraicas", Docente:"Profesor Erlan Escobar<" },
                { fecha: "27-08--2025", area: "Matematica", descripcion: "No tiene deber al dia", Docente:"Profesor Erlan Escobar<" },
                { fecha: "28-08--2025", area: "Ciencias Sociales", descripcion: "No presento su cuadro crusigrama", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Tecnica Tecnologica", descripcion: "No presento su factur historieta", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Cosmovicion", descripcion: "No presento su lectura poema cuestionario", Docente:"Profesora Silvia Delgado<" },
                { fecha: "30-09--2025", area: "Cosmovicion", descripcion: "No presento su cuadro de tecnica", Docente:"Profesora Silvia Delgado<" },
                { fecha: "02-10--2025", area: "Tecnica Tecnologica", descripcion: "No presento su cuadro de presupuesto", Docente:"Profesora Silvia Delgado<" }, 
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 61, t3: 0 },
                "Lengua Extranjera": { t1: 54, t2: 55, t3: 0 },
                "Ciencias Sociales": { t1: 64, t2: 55, t3: 0 },
                "Educación Musical": { t1: 78, t2: 89, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 47, t2: 51, t3: 0 },
                "Educación Física y Deportes": { t1: 77, t2: 83, t3: 0 },
                "Matemáticas": { t1: 54, t2: 61, t3: 0 },
                "Técnica Tecnológica General": { t1: 63, t2: 57, t3: 0 },
                "Biología - Geografía": { t1: 68, t2: 54, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 41, t2: 53, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 63, t2: 68, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "519500012017006": {
            rude: "519500012017006",
            nombreCompleto: "MARIANA CESARI CHUVIRU",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "05-08--2025", area: "Matematica", descripcion: "No presento practico de matematicas", Docente:"Profesor Erlan Escobar<" },
                { fecha: "28-08--2025", area: "Tecnica Tecnologica", descripcion: "No presento su historieta cuento", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 62, t3: 0 },
                "Lengua Extranjera": { t1: 70, t2: 79, t3: 0 },
                "Ciencias Sociales": { t1: 84, t2: 87, t3: 0 },
                "Educación Musical": { t1: 79, t2: 100, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 74, t2: 58, t3: 0 },
                "Educación Física y Deportes": { t1: 73, t2: 93, t3: 0 },
                "Matemáticas": { t1: 61, t2: 68, t3: 0 },
                "Técnica Tecnológica General": { t1: 68, t2: 66, t3: 0 },
                "Biología - Geografía": { t1: 76, t2: 65, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 76, t2: 79, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 66, t2: 64, t3: 0 }
            },
            reuniones: []
        },
        "719500632016032": {
            rude: "719500632016032",
            nombreCompleto: "ROSA MEREDI CHOQUE DELGADO",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [

            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 82, t2: 89, t3: 0 },
                "Lengua Extranjera": { t1: 99, t2: 97, t3: 0 },
                "Ciencias Sociales": { t1: 96, t2: 95, t3: 0 },
                "Educación Musical": { t1: 90, t2: 100, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 97, t2: 94, t3: 0 },
                "Educación Física y Deportes": { t1: 81, t2: 90, t3: 0 },
                "Matemáticas": { t1: 91, t2: 95, t3: 0 },
                "Técnica Tecnológica General": { t1: 99, t2: 97, t3: 0 },
                "Biología - Geografía": { t1: 92, t2: 93, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 97, t2: 97, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 98, t2: 93, t3: 0 }
            },
            reuniones: []
        },
        "719500632016087": {
            rude: "719500632016087",
            nombreCompleto: "JUAN FERNANDEZ CRUZ",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 49, t2: 57, t3: 0 },
                "Lengua Extranjera": { t1: 55, t2: 61, t3: 0 },
                "Ciencias Sociales": { t1: 51, t2: 52, t3: 0 },
                "Educación Musical": { t1: 70, t2: 78, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 48, t2: 47, t3: 0 },
                "Educación Física y Deportes": { t1: 51, t2: 72, t3: 0 },
                "Matemáticas": { t1: 57, t2: 54, t3: 0 },
                "Técnica Tecnológica General": { t1: 41, t2: 54, t3: 0 },
                "Biología - Geografía": { t1: 25, t2: 61, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 51, t2: 52, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 70, t2: 52, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "519500012017017": {
            rude: "519500012017017",
            nombreCompleto: "ELIAS FLORES CAVA",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "10-03--2025", area: "Ciencias Sociales", descripcion: "No presento el cuadro de caracteristica", Docente:"Profesora Silvia Delgado<" },
                { fecha: "18-03--2025", area: "Tecnica Tecnologica", descripcion: "No presento su produccion(cartel de prevencion)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "22-05--2025", area: "Cosmovicion", descripcion: "No presento su produccion", Docente:"Profesora Silvia Delgado<" },
                { fecha: "11-06--2025", area: "Matematica", descripcion: "No presento su mapa conceptual", Docente:"Profesor Erlan Escobar<" },
                { fecha: "27-08--2025", area: "Matematica", descripcion: "No tiene deber ni practico al dia y no dio examen", Docente:"Profesor Erlan Escobar<" },
                { fecha: "28-08--2025", area: "Ciencias Sociales", descripcion: "No presento su cuaderno,crusigrama,cuestionario,mapa mental y cartel y carpeta", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Tecnica Tecnologica", descripcion: "No presento su factura,historieta,cuento,word y carpeta", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Cosmovicion", descripcion: "No presento su poema, cuestionario, frases y carpeta", Docente:"Profesora Silvia Delgado<" },
                { fecha: "30-02--2025", area: "Cosmovicion", descripcion: "No trajo a clases ss materiales no presento su cuadro de propuestas", Docente:"Profesora Silvia Delgado<" },
                { fecha: "02-10--2025", area: "Tecnica Tecnologica", descripcion: "No dio su evaluacion", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 53, t3: 0 },
                "Lengua Extranjera": { t1: 57, t2: 64, t3: 0 },
                "Ciencias Sociales": { t1: 69, t2: 58, t3: 0 },
                "Educación Musical": { t1: 82, t2: 86, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 68, t2: 56, t3: 0 },
                "Educación Física y Deportes": { t1: 66, t2: 74, t3: 0 },
                "Matemáticas": { t1: 71, t2: 57, t3: 0 },
                "Técnica Tecnológica General": { t1: 51, t2: 53, t3: 0 }, 
                "Biología - Geografía": { t1: 47, t2: 61, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 52, t2: 53, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 74, t2: 60, t3: 0 }
            },
            reuniones: []
        },
        "719500632016057": {
            rude: "719500632016057",
            nombreCompleto: "ROLY GONZALES COCA",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "22-05--2025", area: "Cosmovicion", descripcion: "No presento su produccion", Docente:"Profesora Silvia Delgado<" },
                { fecha: "05-08--2025", area: "Matematica", descripcion: "No presento practico de expresiones algebraicas", Docente:"Profesor Erlan Escobar<" },
                { fecha: "25-08--2025", area: "Ciencias Sociales", descripcion: "No presento su crusigrama,mapa mental y carpeta", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Tecnica Tecnologica", descripcion: "No presento su factura, cuentos, word y carpeta", Docente:"Profesora Silvia Delgado<" },
                { fecha: "20-08--2025", area: "Cosmovicion", descripcion: "No presento su lectura, poema,cuestionario, frase y carpeta", Docente:"Profesora Silvia Delgado<" },
                { fecha: "30-09--2025", area: "Tecnica Tecnologica", descripcion: "No presento el cuadro y los materiales", Docente:"Profesora Silvia Delgado<" },
                { fecha: "02-10--2025", area: "Tecnica Tecnologica", descripcion: "No dio su evaluacion", Docente:"Profesora Silvia Delgado<" },   
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 60, t3: 0 },
                "Lengua Extranjera": { t1: 51, t2: 74, t3: 0 },
                "Ciencias Sociales": { t1: 65, t2: 64, t3: 0 },
                "Educación Musical": { t1: 79, t2: 86, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 66, t2: 64, t3: 0 },
                "Educación Física y Deportes": { t1: 52, t2: 64, t3: 0 },
                "Matemáticas": { t1: 62, t2: 72, t3: 0 },
                "Técnica Tecnológica General": { t1: 77, t2: 56, t3: 0 },
                "Biología - Geografía": { t1: 81, t2: 65, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 62, t2: 57, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 78, t2: 62, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "719500632016011": {
            rude: "719500632016011",
            nombreCompleto: "HIROSHI ISHIZAKI ORELLANO",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 0, t2: 0, t3: 0 },
                "Lengua Extranjera": { t1: 0, t2: 0, t3: 0 },
                "Ciencias Sociales": { t1: 0, t2: 0, t3: 0 },
                "Educación Musical": { t1: 0, t2: 0, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 0, t2: 0, t3: 0 },
                "Educación Física y Deportes": { t1: 0, t2: 0, t3: 0 },
                "Matemáticas": { t1: 0, t2: 0, t3: 0 },
                "Técnica Tecnológica General": { t1: 0, t2: 0, t3: 0 },
                "Biología - Geografía": { t1: 0, t2: 0, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 0, t2: 0, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 0, t2: 0, t3: 0 }
            },
            reuniones: []
        },
        "719500632016084": {
            rude: "719500632016084",
            nombreCompleto: "YALIXA LINO YOPIE",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "18-03--2025", area: "Tecnica Tecnologica", descripcion: "No presento su produccion(no presento su cartel de prevencion)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "08-05--2025", area: "Matematica", descripcion: "Presento incompleto practico expresion algebraica", Docente:"Profesor Erlan Escobar<" },
                { fecha: "28-08--2025", area: "Tecnica Tecnologica", descripcion: "No presento su historieta cuento,word y carpeta", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Cosmovicion", descripcion: "No presento su poema", Docente:"Profesora Silvia Delgado<" },
                { fecha: "02-10--2025", area: "Tecnica Tecnologica", descripcion: "No dio su evaluacion", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 67, t2: 69, t3: 0 },
                "Lengua Extranjera": { t1: 67, t2: 66, t3: 0 },
                "Ciencias Sociales": { t1: 85, t2: 75, t3: 0 },
                "Educación Musical": { t1: 79, t2: 87, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 68, t2: 83, t3: 0 },
                "Educación Física y Deportes": { t1: 58, t2: 66, t3: 0 },
                "Matemáticas": { t1: 62, t2: 75, t3: 0 },
                "Técnica Tecnológica General": { t1: 77, t2: 64, t3: 0 },
                "Biología - Geografía": { t1: 70, t2: 64, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 86, t2: 80, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 69, t2: 73, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "819700282015269": {
            rude: "819700282015269",
            nombreCompleto: "ROSARIO LINO CUELLAR",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "26-03--2025", area: "Matematica", descripcion: "No tiene dever al dia no dio examen de numeros irreales", Docente:"Profesor Erlan Escobar<" },
                { fecha: "18-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "21-04--2025", area: "Ciencias Sociales", descripcion: "No presento su actividad de produccion cuadro de caracteristicas, mapa conceptual", Docente:"Profesora Silvia Delgado<" },
                { fecha: "22-05--2025", area: "Cosmovicion", descripcion: "No presento su produccion ", Docente:"Profesora Silvia Delgado<" },
                { fecha: "05-08--2025", area: "Matematica", descripcion: "No presento practico de expresiones algebraicas", Docente:"Profesor Erlan Esobar <" },
                { fecha: "27-08--2025", area: "Matematica", descripcion: "No tiene deber y practico", Docente:"Profesor Erlan Escobar<" },
                { fecha: "25-08--2025", area: "Tecnica Tecnologica", descripcion: "No tiene deber al dia", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Cosmovicion", descripcion: "No presento su lectura cuestionario, mapa conceptual y carpeta", Docente:"Profesora Silvia Delgado<" },
                { fecha: "30-09--2025", area: "Tecnica Tecnologica", descripcion: "No presento su historieta", Docente:"Profesora Silvia Delgado<" },
                { fecha: "02-10--2025", area: "Tecnica Tecnologica", descripcion: "No presento su cuestionario, frase, carpeta", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 32, t3: 0 },
                "Lengua Extranjera": { t1: 61, t2: 45, t3: 0 },
                "Ciencias Sociales": { t1: 71, t2: 51, t3: 0 },
                "Educación Musical": { t1: 78, t2: 87, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 51, t2: 60, t3: 0 },
                "Educación Física y Deportes": { t1: 58, t2: 58, t3: 0 },
                "Matemáticas": { t1: 57, t2: 49, t3: 0 },
                "Técnica Tecnológica General": { t1: 52, t2: 52, t3: 0 },
                "Biología - Geografía": { t1: 53, t2: 33, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 62, t2: 54, t3: 0 }, 
                "Valores Espiritualidad y Religiones": { t1: 58, t2: 49, t3: 0 }
            },
            reuniones: []
        },
        "619500392016021": {
            rude: "619500392016021",
            nombreCompleto: "JAIRO MAMANI MARTINEZ",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "08-05--2025", area: "Matematica", descripcion: "No presento su practico de expresiones algebraicas", Docente:"Profesor Erlan Escobar<" },
                { fecha: "25-08--2025", area: "Ciencias Sociales", descripcion: "No presento su mapa mental", Docente:"Profesora Silvia Delgado<" },
                { fecha: "02-10--2025", area: "Tecnica Tecnologica", descripcion: "No dio su evaluacion", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 69, t2: 77, t3: 0 },
                "Lengua Extranjera": { t1: 74, t2: 94, t3: 0 },
                "Ciencias Sociales": { t1: 80, t2: 86, t3: 0 },
                "Educación Musical": { t1: 80, t2: 100, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 66, t2: 64, t3: 0 },
                "Educación Física y Deportes": { t1: 76, t2: 81, t3: 0 },
                "Matemáticas": { t1: 79, t2: 72, t3: 0 },
                "Técnica Tecnológica General": { t1: 85, t2: 89, t3: 0 },
                "Biología - Geografía": { t1: 84, t2: 80, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 76, t2: 87, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 88, t2: 80, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "519500012017007": {
            rude: "519500012017007",
            nombreCompleto: "KAROL LORENA MERCADO CUELLAR",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 55, t2: 60, t3: 0 },
                "Lengua Extranjera": { t1: 71, t2: 63, t3: 0 },
                "Ciencias Sociales": { t1: 55, t2: 57, t3: 0 },
                "Educación Musical": { t1: 82, t2: 94, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 53, t2: 48, t3: 0 },
                "Educación Física y Deportes": { t1: 68, t2: 77, t3: 0 },
                "Matemáticas": { t1: 60, t2: 65, t3: 0 },
                "Técnica Tecnológica General": { t1: 41, t2: 52, t3: 0 },
                "Biología - Geografía": { t1: 65, t2: 59, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 52, t2: 51, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 81, t2: 60, t3: 0 }
            },
            reuniones: []
        },
        "5195000120152200": {
            rude: "5195000120152200",
            nombreCompleto: "SIMON PAREDES CUELLAR",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "10-03--2025", area: "Ciencias Sociales", descripcion: "No presento su cuadro de caracteristicas", Docente:"Profesora Silvia Delgado<" },
                { fecha: "18-03--2025", area: "Tecnica Tecnlogica", descripcion: "No presento su produccion(cartel de prevencion)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "09-04--2025", area: "Matematica", descripcion: "No presento investigacion", Docente:"Profesora Silvia Delgado<" },
                { fecha: "06-05--2025", area: "Tecnica Tecnologica", descripcion: "No presento sus actividades de produccion", Docente:"Profesora Silvia Delgado<" },
                { fecha: "22-05--2025", area: "Cosmovicion", descripcion: "No presento su produccion", Docente:"Profesora Silvia Delgado<" },
                { fecha: "11-06--2025", area: "Matematica", descripcion: "No presento mapa conceptual", Docente:"Profesora Silvia Delgado<" },
                { fecha: "08-08--2025", area: "Matematica", descripcion: "No presento practico de expresiones algebraicas", Docente:"Profesor Erlan Escobar<" },
                { fecha: "27-08--2025", area: "Matematica", descripcion: "No presento deber al dia y no tiene practico", Docente:"Profesor Erlan Escobar<" },
                { fecha: "25-08--2025", area: "Ciencias Sociales", descripcion: "No presento su cuaderno crusigrama", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Tecnica Tecnologica", descripcion: "No presento su factura historieta, cuento ", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Cosmovicion", descripcion: "No presento lectura poema", Docente:"Profesora Silvia Delgado<" },
                { fecha: "30-08--2025", area: "Tecnica Tecnologica", descripcion: "No presento el cuadro de presupuesto familiar", Docente:"Profesora Silvia Delgado<" },
                { fecha: "02-10--2025", area: "Tecnica Tecnologica", descripcion: "No dio su evaluacion falta a clases", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 46, t2: 67, t3: 0 },
                "Lengua Extranjera": { t1: 61, t2: 89, t3: 0 },
                "Ciencias Sociales": { t1: 68, t2: 51, t3: 0 },
                "Educación Musical": { t1: 79, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 53, t2: 51, t3: 0 },
                "Educación Física y Deportes": { t1: 70, t2: 95, t3: 0 },
                "Matemáticas": { t1: 85, t2: 49, t3: 0 },
                "Técnica Tecnológica General": { t1: 40, t2: 51, t3: 0 },
                "Biología - Geografía": { t1: 70, t2: 68, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 58, t2: 51, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 66, t2: 55, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "519500012017003": {
            rude: "519500012017003",
            nombreCompleto: "LIZ ALEJANDRA PEÑARANDA GOMEZ",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "26-02--2025", area: "Matematica", descripcion: "No presento su practico de fracciones", Docente:"Profesor Erlan Escobar<" },
                { fecha: "18-03--2025", area: "Tecnica Tecnologica", descripcion: "No presento su produccion(Cartel de prevencion)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "01-05--2025", area: "Cosmovicion", descripcion: "No presento sus actividades de produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "15-05--2025", area: "Cosmovicion", descripcion: "No trajo sus materiales a clases para su produccion", Docente:"Profesora Silvia Delgado<" },
                { fecha: "22-05--2025", area: "Cosmovicion", descripcion: "No presento su produccion", Docente:"Profesora Silvia Delgado<" },
                { fecha: "11-05--2025", area: "Matematica", descripcion: "No presento su mapa conceptual del tema", Docente:"Profesor Erlan Escobar<" },
                { fecha: "05-08--2025", area: "Matematica", descripcion: "No presento su practico de expresiones algebraicas", Docente:"Profesor Erlan Escobar<" },
                { fecha: "27-08--2025", area: "Matematica", descripcion: "No presento deber ni practico", Docente:"Profesor Erlan Escobar<" },
                { fecha: "25-08--2025", area: "Ciencias Sociales", descripcion: "No presento su cuadro,crusigrama y cuestionario", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Tecnica Tecnologica", descripcion: "No presento su factura historieta cuento", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Cosmovicion", descripcion: "No presento su lectura poema cuestionario)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "30-09--2025", area: "Tecnica Tecnologica", descripcion: "No presento su cuadro de presupuesto", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 58, t3: 0 },
                "Lengua Extranjera": { t1: 53, t2: 64, t3: 0 },
                "Ciencias Sociales": { t1: 56, t2: 55, t3: 0 },
                "Educación Musical": { t1: 80, t2: 79, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 44, t2: 46, t3: 0 },
                "Educación Física y Deportes": { t1: 51, t2: 70, t3: 0 },
                "Matemáticas": { t1: 54, t2: 51, t3: 0 },
                "Técnica Tecnológica General": { t1: 48, t2: 51, t3: 0 },
                "Biología - Geografía": { t1: 63, t2: 48, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 41, t2: 52, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 56, t2: 61, t3: 0 }
            },
            reuniones: []
        },
        "804400512016005": {
            rude: "804400512016005",
            nombreCompleto: "MARIANA GUADALUPE PLATA ALVAREZ",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
               { fecha: "26-03--2025", area: "Matematica", descripcion: "No tiene deber al dia no dio examen", Docente:"Profesor Erlan Escobar<" },
               { fecha: "18-03--2025", area: "Tecnica Tecnologica", descripcion: "No presento su produccion(cartel de prevencion)", Docente:"Profesora Silvia Delgado<" },
               { fecha: "18-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
               { fecha: "09-04--2025", area: "Matematica", descripcion: "No presento investigacion", Docente:"Profesor Erlan Escobar<" },
               { fecha: "15-05--2025", area: "Cosmovicion", descripcion: "No trajo materiales de produccion", Docente:"Profesora Silvia Delgado<" },
               { fecha: "22-05--2025", area: "Cosmovicion", descripcion: "No presento su produccion", Docente:"Profesora Silvia Delgado<" },
               { fecha: "11-06--2025", area: "Matematica", descripcion: "No presento su mapa conceptual", Docente:"ProfesorErlan Escobar<" },
               { fecha: "05-08--2025", area: "Matematica", descripcion: "No presento su practico de expresiones algebraicas", Docente:"Profesor Erlan Escobar<" },
               { fecha: "25-08--2025", area: "Ciencias Sociales", descripcion: "No presento su cuadro crucigrama cuestionario", Docente:"Profesora Silvia Delgado<" },
               { fecha: "28-08--2025", area: "Tecnica Tecnologica", descripcion: "No presento su factura historieta", Docente:"Profesora Silvia Delgado<" },
               { fecha: "28-08--2025", area: "Cosmovicion", descripcion: "No presento su poema cuestionario y carpeta", Docente:"Profesora Silvia Delgado<" },
               { fecha: "30-09--2025", area: "Tecnica Tecnologica", descripcion: "No presento el cuadro de presupuesto", Docente:"Profesora Silvia Delgado<" }, 
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 58, t2: 67, t3: 0 },
                "Lengua Extranjera": { t1: 68, t2: 83, t3: 0 },
                "Ciencias Sociales": { t1: 77, t2: 56, t3: 0 },
                "Educación Musical": { t1: 79, t2: 80, t3: 0 },  
                "Artes Plásticas y Visuales": { t1: 51, t2: 63, t3: 0 },
                "Educación Física y Deportes": { t1: 66, t2: 73, t3: 0 }, 
                "Matemáticas": { t1: 63, t2: 64, t3: 0 },
                "Técnica Tecnológica General": { t1: 65, t2: 56, t3: 0 },
                "Biología - Geografía": { t1: 72, t2: 65, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 56, t2: 70, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 89, t2: 79, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "719500632017039": {
            rude: "719500632017039",
            nombreCompleto: "ELIANA QUINTANA MEJIAS",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "18-03--2025", area: "Tecnica Tecnologica", descripcion: "No presento su cartel de prevencion", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "22-05--2025", area: "Cosmovicion", descripcion: "No presento su produccion", Docente:"Profesora Silvia Delgado<" },
                { fecha: "11-06--2025", area: "Matematica", descripcion: "No presento mapa conceptual", Docente:"Profesora Silvia Delgado<" },
                { fecha: "05-06--2025", area: "Matematica", descripcion: "No presento practico de expresiones algebraicas", Docente:"Profesora Silvia Delgado<" },
                { fecha: "27-08--2025", area: "Matematica", descripcion: "No presento practico ni deber", Docente:"Profesora Silvia Delgado<" },
                { fecha: "25-08--2025", area: "Ciencias Sociales", descripcion: "No presento cuadro crucigrama cuestionario", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Tecnica Tecnologica", descripcion: "No presento su factura historieta cuento word", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Cosmovicion", descripcion: "No presento su poema lectura cuestionario", Docente:"Profesora Silvia Delgado<" },
                { fecha: "02-10--2025", area: "Tecnica Tecnologica", descripcion: "No presento su cuadro de presupuesto", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 56, t2: 58, t3: 0 },
                "Lengua Extranjera": { t1: 73, t2: 63, t3: 0 },
                "Ciencias Sociales": { t1: 76, t2: 60, t3: 0 },
                "Educación Musical": { t1: 78, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 76, t2: 68, t3: 0 },
                "Educación Física y Deportes": { t1: 69, t2: 84, t3: 0 },
                "Matemáticas": { t1: 77, t2: 68, t3: 0 },
                "Técnica Tecnológica General": { t1: 71, t2: 51, t3: 0 },
                "Biología - Geografía": { t1: 82, t2: 56, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 67, t2: 52, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 70, t2: 58, t3: 0 }
            },
            reuniones: []
        },
        "71950047201598": {
            rude: "71950047201598",
            nombreCompleto: "DARIO RODRIGUEZ ROCA",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "10-03--2025", area: "Ciencias Sociales", descripcion: "No presento su cuadro de caracteristicas", Docente:"Profesora Silvia Delgado<" },
                { fecha: "26-03--2025", area: "Matematica", descripcion: "No tiene deber al dia ", Docente:"Profesor Erlan Escobar<" },
                { fecha: "28-03--2025", area: "Tecnica Tecnologica", descripcion: "No presento su produccion(cartel de prevencion)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "09-04--2025", area: "Matematica", descripcion: "No presento investigacion", Docente:"Profesor Erlan Escobar<" },
                { fecha: "27-08--2025", area: "Matematica", descripcion: "No presenta deber no dio examen", Docente:"Profesor Erlan Escobar<" },
                { fecha: "25-08--2025", area: "Ciencias Sociales", descripcion: "No presento su cuadro crucigrama, cuestionario", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Tecnica Tecnologica", descripcion: "No presento su factura historieta cuento word", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Cosmovicion", descripcion: "No presento su lectura poema cuestionario", Docente:"Profesora Silvia Delgado<" },
                { fecha: "29-09--2025", area: "Cosmovicion", descripcion: "No volvio a clases", Docente:"Profesora Silvia Delgado<" },
                { fecha: "02-10--2025", area: "Tecnica Tecnologica", descripcion: "No dio su evaluacion", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 44, t3: 0 },
                "Lengua Extranjera": { t1: 55, t2: 61, t3: 0 },
                "Ciencias Sociales": { t1: 54, t2: 52, t3: 0 },
                "Educación Musical": { t1: 79, t2: 79, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 59, t2: 42, t3: 0 },
                "Educación Física y Deportes": { t1: 81, t2: 83, t3: 0 },
                "Matemáticas": { t1: 52, t2: 51, t3: 0 },
                "Técnica Tecnológica General": { t1: 63, t2: 51, t3: 0 },
                "Biología - Geografía": { t1: 37, t2: 38, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 65, t2: 51, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 67, t2: 48, t3: 0 }
            },
            reuniones: []
        },
        "70900042201510": {
            rude: "70900042201510",
            nombreCompleto: "ISABEL RODRIGUEZ VELIS",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "18-03--2025", area: "Tecnica Tecnologica", descripcion: "No presento su produccion(Cartel de prevencion)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "22-05--2025", area: "Cosmovicion", descripcion: "No presento su produccion", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Tecnica Tecnologica", descripcion: "No presento su historieta cuento", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Cosmovicion", descripcion: "No presento lectura poema frase", Docente:"Profesora Silvia Delgado<" },
                { fecha: "30-09--2025", area: "Tecnica Tecnologica", descripcion: "No presento el cuadro de presupuesto", Docente:"Profesora Silvia Delgado<" },
                { fecha: "02-10--2025", area: "Tecnica Tecnologica", descripcion: "No dio su evaluacion falto a clases", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 54, t2: 54, t3: 0 },
                "Lengua Extranjera": { t1: 62, t2: 75, t3: 0 },
                "Ciencias Sociales": { t1: 62, t2: 70, t3: 0 },
                "Educación Musical": { t1: 77, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 65, t2: 60, t3: 0 },
                "Educación Física y Deportes": { t1: 53, t2: 75, t3: 0 },
                "Matemáticas": { t1: 52, t2: 63, t3: 0 },
                "Técnica Tecnológica General": { t1: 71, t2: 67, t3: 0 },
                "Biología - Geografía": { t1: 54, t2: 66, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 53, t2: 66, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 79, t2: 74, t3: 0 }
            },
            reuniones: []
        },
        "5195000120152143": {
            rude: "5195000120152143",
            nombreCompleto: "CARLA DENISE SALAZAR GRANULAR",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "26-02--2025", area: "Matematica", descripcion: "No presento practico de fracciones", Docente:"Profesor Erlan Escobar<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "22-05--2025", area: "Cosmovicion", descripcion: "No presento su produccion", Docente:"Profesora Silvia Delgado<" },
                { fecha: "08-05--2025", area: "Matematica", descripcion: "No presento su practico de expresiones algebraicas", Docente:"Profesor Erlan Escobar<" },
                { fecha: "27-08--2025", area: "Matematica", descripcion: "No tiene deber al dia no dio examen", Docente:"Profesor Erlan Escobar<" },
                { fecha: "25-08--2025", area: "Ciencias Sociales", descripcion: "No presento su cuestionario mapa mental", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Tecnica Tecnologica", descripcion: "No presento su historieta cuento word", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-08--2025", area: "Cosmovicion", descripcion: "No presento cuestionario frase carpeta", Docente:"Profesora Silvia Delgado<" },
                { fecha: "02-10--2025", area: "Tecnica Tecnologica", descripcion: "No dio evaluacion", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 53, t2: 66, t3: 0 },
                "Lengua Extranjera": { t1: 52, t2: 73, t3: 0 },
                "Ciencias Sociales": { t1: 56, t2: 55, t3: 0 },
                "Educación Musical": { t1: 78, t2: 78, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 55, t2: 59, t3: 0 },
                "Educación Física y Deportes": { t1: 64, t2: 76, t3: 0 },
                "Matemáticas": { t1: 67, t2: 60, t3: 0 },
                "Técnica Tecnológica General": { t1: 75, t2: 78, t3: 0 },
                "Biología - Geografía": { t1: 68, t2: 51, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 78, t2: 66, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 65, t2: 51, t3: 0 }
            },
            reuniones: []
        },
        "519500012016009": {
            rude: "519500012016009",
            nombreCompleto: "FAVIO ANDRES SURUBI VACA",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
                { fecha: "28-03--2025", area: "Cosmovicion", descripcion: "No presento su produccion(tabla de datos)", Docente:"Profesora Silvia Delgado<" },
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 53, t2: 57, t3: 0 },
                "Lengua Extranjera": { t1: 72, t2: 86, t3: 0 },
                "Ciencias Sociales": { t1: 40, t2: 51, t3: 0 },
                "Educación Musical": { t1: 79, t2: 79, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 46, t2: 61, t3: 0 },
                "Educación Física y Deportes": { t1: 74, t2: 92, t3: 0 },
                "Matemáticas": { t1: 59, t2: 61, t3: 0 },
                "Técnica Tecnológica General": { t1: 42, t2: 56, t3: 0 },
                "Biología - Geografía": { t1: 51, t2: 55, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 52, t2: 51, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 63, t2: 61, t3: 0 }
            },
            reuniones: []
        },
        "819600602016039": {
            rude: "819600602016039",
            nombreCompleto: "FERNANDO TOMICHA CHAMO",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 65, t3: 0 },
                "Lengua Extranjera": { t1: 77, t2: 88, t3: 0 },
                "Ciencias Sociales": { t1: 81, t2: 74, t3: 0 },
                "Educación Musical": { t1: 78, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 66, t2: 61, t3: 0 },
                "Educación Física y Deportes": { t1: 93, t2: 92, t3: 0 },
                "Matemáticas": { t1: 70, t2: 65, t3: 0 },
                "Técnica Tecnológica General": { t1: 61, t2: 56, t3: 0 },
                "Biología - Geografía": { t1: 74, t2: 61, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 84, t2: 60, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 69, t2: 63, t3: 0 }
            },
            reuniones: []
        },
        "71950037201526": {
            rude: "71950037201526",
            nombreCompleto: "JOSE MAURICIO TORREZ QUIROGA",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 57, t2: 54, t3: 0 },
                "Lengua Extranjera": { t1: 55, t2: 62, t3: 0 },
                "Ciencias Sociales": { t1: 47, t2: 51, t3: 0 },
                "Educación Musical": { t1: 80, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 44, t2: 63, t3: 0 },
                "Educación Física y Deportes": { t1: 76, t2: 91, t3: 0 },
                "Matemáticas": { t1: 51, t2: 52, t3: 0 },
                "Técnica Tecnológica General": { t1: 38, t2: 51, t3: 0 },
                "Biología - Geografía": { t1: 42, t2: 60, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 51, t2: 51, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 57, t2: 61, t3: 0 }
            },
            reuniones: []
        },
        "719500632017070": {
            rude: "719500632017070",
            nombreCompleto: "LEONARDO URAEZAÑA RODRIGUEZ",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 56, t3: 0 },
                "Lengua Extranjera": { t1: 73, t2: 80, t3: 0 },
                "Ciencias Sociales": { t1: 58, t2: 58, t3: 0 },
                "Educación Musical": { t1: 79, t2: 97, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 51, t2: 48, t3: 0 },
                "Educación Física y Deportes": { t1: 89, t2: 92, t3: 0 },
                "Matemáticas": { t1: 61, t2: 58, t3: 0 },
                "Técnica Tecnológica General": { t1: 40, t2: 52, t3: 0 },
                "Biología - Geografía": { t1: 53, t2: 47, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 61, t2: 72, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 54, t2: 56, t3: 0 }
            },
            reuniones: []
        },
        "519500012017013": {
            rude: "519500012017013",
            nombreCompleto: "LEONELA VELASCO TORRICO",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 90, t2: 92, t3: 0 },
                "Lengua Extranjera": { t1: 99, t2: 97, t3: 0 },
                "Ciencias Sociales": { t1: 90, t2: 93, t3: 0 },
                "Educación Musical": { t1: 85, t2: 100, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 90, t2: 93, t3: 0 },
                "Educación Física y Deportes": { t1: 95, t2: 95, t3: 0 },
                "Matemáticas": { t1: 92, t2: 93, t3: 0 },
                "Técnica Tecnológica General": { t1: 95, t2: 96, t3: 0 },
                "Biología - Geografía": { t1: 97, t2: 97, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 90, t2: 95, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 92, t2: 86, t3: 0 }
            },
            reuniones: []
        },
        "81950040201600203": {
            rude: "81950040201600203",
            nombreCompleto: "GUNTHER RICARDO ZARATE OJEDA",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 2 SEGUNDO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 71, t2: 0, t3: 0 },
                "Lengua Extranjera": { t1: 69, t2: 0, t3: 0 },
                "Ciencias Sociales": { t1: 77, t2: 0, t3: 0 },
                "Educación Musical": { t1: 72, t2: 0, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 63, t2: 0, t3: 0 },
                "Educación Física y Deportes": { t1: 69, t2: 0, t3: 0 },
                "Matemáticas": { t1: 55, t2: 0, t3: 0 },
                "Técnica Tecnológica General": { t1: 57, t2: 0, t3: 0 },
                "Biología - Geografía": { t1: 53, t2: 0, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 58, t2: 0, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 57, t2: 62, t3: 0 }
            },
            reuniones: []
        },
        "5195000120152105": {
            rude: "5195000120152105",
            nombreCompleto: "VALENTINA ARAUZ TOMICHA",
            curso: "3ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 80, t2: 63, t3: 0 },
                "Lengua Extranjera": { t1: 90, t2: 95, t3: 0 },
                "Ciencias Sociales": { t1: 100, t2: 97, t3: 0 },
                "Educación Musical": { t1: 80, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 92, t2: 88, t3: 0 },
                "Educación Física y Deportes": { t1: 75, t2: 78, t3: 0 },
                "Matemáticas": { t1: 84, t2: 95, t3: 0 },
                "Técnica Tecnológica General": { t1: 89, t2: 88, t3: 0 },
                "Física": { t1: 90, t2: 95, t3: 0 },
                "Química": { t1: 95, t2: 95, t3: 0 },
                "Biología - Geografía": { t1: 82, t2: 94, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 81, t2: 84, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 96, t2: 65, t3: 0 }
            },
            reuniones: []
        },
        "5195000120142791": {
            rude: "5195000120142791",
            nombreCompleto: "SHIRLEN ANAHI BARRIENTOS PEÑA",
            curso: "3ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 53, t2: 66, t3: 0 },
                "Lengua Extranjera": { t1: 65, t2: 55, t3: 0 },
                "Ciencias Sociales": { t1: 62, t2: 62, t3: 0 },
                "Educación Musical": { t1: 80, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 60, t2: 59, t3: 0 },
                "Educación Física y Deportes": { t1: 66, t2: 100, t3: 0 },
                "Matemáticas": { t1: 70, t2: 52, t3: 0 },
                "Técnica Tecnológica General": { t1: 60, t2: 52, t3: 0 },
                "Física": { t1: 70, t2: 55, t3: 0 },
                "Química": { t1: 75, t2: 55, t3: 0 },
                "Biología - Geografía": { t1: 44, t2: 49, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 40, t2: 51, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 51, t2: 51, t3: 0 }
            },
            reuniones: []
        },
        "719500632014275": {
            rude: "719500632014275",
            nombreCompleto: "ADRIANA BEJARANO CONDORI",
            curso: "3ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 57, t2: 0, t3: 0 },
                "Lengua Extranjera": { t1: 65, t2: 0, t3: 0 },
                "Ciencias Sociales": { t1: 65, t2: 0, t3: 0 }, 
                "Educación Musical": { t1: 79, t2: 0, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 61, t2: 0, t3: 0 },
                "Educación Física y Deportes": { t1: 66, t2: 0, t3: 0 },
                "Matemáticas": { t1: 79, t2: 0, t3: 0 },
                "Técnica Tecnológica General": { t1: 40, t2: 0, t3: 0 },
                "Física": { t1: 65, t2: 0, t3: 0 },
                "Química": { t1: 55, t2: 0, t3: 0 },
                "Biología - Geografía": { t1: 51, t2: 0, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 63, t2: 0, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 79, t2: 0, t3: 0 }
            },
            reuniones: []
        },
        "5195000120152139": {
            rude: "5195000120152139",
            nombreCompleto: "LUCIANA FERNANDEZ APIRANZAY",
            curso: "3ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 70, t2: 72, t3: 0 },
                "Lengua Extranjera": { t1: 70, t2: 70, t3: 0 },
                "Ciencias Sociales": { t1: 87, t2: 87, t3: 0 },
                "Educación Musical": { t1: 79, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 83, t2: 84, t3: 0 },
                "Educación Física y Deportes": { t1: 75, t2: 80, t3: 0 },
                "Matemáticas": { t1: 64, t2: 80, t3: 0 },
                "Técnica Tecnológica General": { t1: 54, t2: 69, t3: 0 },
                "Física": { t1: 75, t2: 60, t3: 0 },
                "Química": { t1: 70, t2: 60, t3: 0 },
                "Biología - Geografía": { t1: 54, t2: 78, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 64, t2: 76, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 65, t2: 68, t3: 0 }
            },
            reuniones: []
        },
        "519500012016008": {
            rude: "519500012016008",
            nombreCompleto: "MERLIN YESSICA FERREIRA CHORE",
            curso: "3ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 47, t2: 65, t3: 0 },
                "Lengua Extranjera": { t1: 55, t2: 71, t3: 0 },
                "Ciencias Sociales": { t1: 46, t2: 69, t3: 0 },
                "Educación Musical": { t1: 79, t2: 100, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 57, t2: 52, t3: 0 },
                "Educación Física y Deportes": { t1: 56, t2: 73, t3: 0 },
                "Matemáticas": { t1: 55, t2: 76, t3: 0 },
                "Técnica Tecnológica General": { t1: 33, t2: 66, t3: 0 },
                "Física": { t1: 51, t2: 60, t3: 0 },
                "Química": { t1: 55, t2: 67, t3: 0 },
                "Biología - Geografía": { t1: 31, t2: 56, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 59, t2: 56, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 57, t2: 60, t3: 0 }
            },
            reuniones: []
        },
        "8198105720141613": {
            rude: "8198105720141613",
            nombreCompleto: "JHISEL LABERAN ARIORI",
            curso: "3ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 70, t2: 80, t3: 0 },
                "Lengua Extranjera": { t1: 70, t2: 90, t3: 0 },
                "Ciencias Sociales": { t1: 90, t2: 95, t3: 0 },
                "Educación Musical": { t1: 79, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 63, t2: 74, t3: 0 },
                "Educación Física y Deportes": { t1: 75, t2: 79, t3: 0 },
                "Matemáticas": { t1: 75, t2: 94, t3: 0 },
                "Técnica Tecnológica General": { t1: 67, t2: 77, t3: 0 },
                "Física": { t1: 80, t2: 90, t3: 0 },
                "Química": { t1: 85, t2: 90, t3: 0 },
                "Biología - Geografía": { t1: 76, t2: 80, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 63, t2: 76, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 85, t2: 59, t3: 0 }
            },
            reuniones: []
        },
        "519500012016002": {
            rude: "519500012016002",
            nombreCompleto: "PARIS YHERALDINE MEJIA SALAZ",
            curso: "3ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 67, t2: 84, t3: 0 },
                "Lengua Extranjera": { t1: 90, t2: 95, t3: 0 },
                "Ciencias Sociales": { t1: 80, t2: 94, t3: 0 },
                "Educación Musical": { t1: 85, t2: 99, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 77, t2: 73, t3: 0 },
                "Educación Física y Deportes": { t1: 85, t2: 76, t3: 0 },
                "Matemáticas": { t1: 80, t2: 94, t3: 0 },
                "Técnica Tecnológica General": { t1: 71, t2: 76, t3: 0 },
                "Física": { t1: 90, t2: 80, t3: 0 },
                "Química": { t1: 95, t2: 95, t3: 0 },
                "Biología - Geografía": { t1: 75, t2: 81, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 76, t2: 84, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 87, t2: 65, t3: 0 }
            },
            reuniones: []
        },
        "819600022013955": {
            rude: "819600022013955",
            nombreCompleto: "YANELA ORRURI TOMICHA",
            curso: "3ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 63, t2: 73, t3: 0 },
                "Lengua Extranjera": { t1: 85, t2: 75, t3: 0 },
                "Ciencias Sociales": { t1: 69, t2: 85, t3: 0 },
                "Educación Musical": { t1: 79, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 78, t2: 51, t3: 0 },
                "Educación Física y Deportes": { t1: 57, t2: 65, t3: 0 },
                "Matemáticas": { t1: 68, t2: 75, t3: 0 },
                "Técnica Tecnológica General": { t1: 52, t2: 67, t3: 0 },
                "Física": { t1: 90, t2: 75, t3: 0 },
                "Química": { t1: 90, t2: 75, t3: 0 },
                "Biología - Geografía": { t1: 57, t2: 68, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 64, t2: 66, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 71, t2: 58, t3: 0 }
            },
            reuniones: []
        },
        "719500632014990": {
            rude: "719500632014990",
            nombreCompleto: "JOSE EDUARDO PEDRAZA PEDRAZA",
            curso: "3ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 61, t2: 73, t3: 0 },
                "Lengua Extranjera": { t1: 55, t2: 60, t3: 0 },
                "Ciencias Sociales": { t1: 83, t2: 60, t3: 0 },
                "Educación Musical": { t1: 79, t2: 77, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 43, t2: 51, t3: 0 },
                "Educación Física y Deportes": { t1: 86, t2: 96, t3: 0 },
                "Matemáticas": { t1: 66, t2: 81, t3: 0 },
                "Técnica Tecnológica General": { t1: 57, t2: 47, t3: 0 },
                "Física": { t1: 65, t2: 60, t3: 0 },
                "Química": { t1: 60, t2: 60, t3: 0 },
                "Biología - Geografía": { t1: 49, t2: 70, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 49, t2: 53, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 62, t2: 48, t3: 0 }
            },
            reuniones: []
        },
        "719500632013577": {
            rude: "719500632013577",
            nombreCompleto: "BRIANA ASHLEY PEÑA BECERRA",
            curso: "3ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 70, t3: 0 },
                "Lengua Extranjera": { t1: 75, t2: 77, t3: 0 },
                "Ciencias Sociales": { t1: 83, t2: 80, t3: 0 },
                "Educación Musical": { t1: 80, t2: 90, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 59, t2: 67, t3: 0 },
                "Educación Física y Deportes": { t1: 55, t2: 69, t3: 0 },
                "Matemáticas": { t1: 64, t2: 74, t3: 0 },
                "Técnica Tecnológica General": { t1: 73, t2: 64, t3: 0 },
                "Física": { t1: 70, t2: 80, t3: 0 },
                "Química": { t1: 75, t2: 80, t3: 0 },
                "Biología - Geografía": { t1: 66, t2: 62, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 76, t2: 60, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 60, t2: 64, t3: 0 }
            },
            reuniones: []
        },
        "519500012015222A": {
            rude: "519500012015222A",
            nombreCompleto: "GABRIELA RODRIGUEZ YOPIE",
            curso: "3ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 70, t2: 0, t3: 0 },
                "Lengua Extranjera": { t1: 90, t2: 0, t3: 0 },
                "Ciencias Sociales": { t1: 90, t2: 0, t3: 0 },
                "Educación Musical": { t1: 78, t2: 0, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 51, t2: 0, t3: 0 },
                "Educación Física y Deportes": { t1: 70, t2: 0, t3: 0 },
                "Matemáticas": { t1: 80, t2: 0, t3: 0 },
                "Técnica Tecnológica General": { t1: 77, t2: 0, t3: 0 },
                "Física": { t1: 90, t2: 0, t3: 0 },
                "Química": { t1: 95, t2: 0, t3: 0 },
                "Biología - Geografía": { t1: 71, t2: 0, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 73, t2: 0, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 79, t2: 0, t3: 0 }
            },
            reuniones: []
        },
        "81950042201474": {
            rude: "81950042201474",
            nombreCompleto: "DAVID RODRIGUEZ ROJAS",
            curso: "3ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 57, t3: 0 },
                "Lengua Extranjera": { t1: 75, t2: 61, t3: 0 },
                "Ciencias Sociales": { t1: 75, t2: 58, t3: 0 },
                "Educación Musical": { t1: 79, t2: 79, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 75, t2: 61, t3: 0 },
                "Educación Física y Deportes": { t1: 64, t2: 81, t3: 0 },
                "Matemáticas": { t1: 60, t2: 66, t3: 0 },
                "Técnica Tecnológica General": { t1: 40, t2: 52, t3: 0 },
                "Física": { t1: 65, t2: 61, t3: 0 },
                "Química": { t1: 60, t2: 61, t3: 0 },
                "Biología - Geografía": { t1: 64, t2: 62, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 54, t2: 58, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 59, t2: 53, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "719500632016076": {
            rude: "719500632016076",
            nombreCompleto: "NATALY SOSA PATICU",
            curso: "3ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 47, t2: 58, t3: 0 },
                "Lengua Extranjera": { t1: 85, t2: 80, t3: 0 },
                "Ciencias Sociales": { t1: 63, t2: 70, t3: 0 },
                "Educación Musical": { t1: 79, t2: 79, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 64, t2: 51, t3: 0 },
                "Educación Física y Deportes": { t1: 61, t2: 75, t3: 0 },
                "Matemáticas": { t1: 51, t2: 63, t3: 0 },
                "Técnica Tecnológica General": { t1: 25, t2: 44, t3: 0 },
                "Física": { t1: 90, t2: 80, t3: 0 },
                "Química": { t1: 75, t2: 80, t3: 0 },
                "Biología - Geografía": { t1: 53, t2: 49, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 38, t2: 51, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 63, t2: 54, t3: 0 }
            },
            reuniones: []
        },
        "719500632013332": {
            rude: "719500632013332",
            nombreCompleto: "ANABEL SOSA PATICU",
            curso: "3ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 53, t2: 65, t3: 0 },
                "Lengua Extranjera": { t1: 65, t2: 65, t3: 0 },
                "Ciencias Sociales": { t1: 52, t2: 58, t3: 0 },
                "Educación Musical": { t1: 55, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 41, t2: 51, t3: 0 },
                "Educación Física y Deportes": { t1: 57, t2: 61, t3: 0 },
                "Matemáticas": { t1: 60, t2: 49, t3: 0 },
                "Técnica Tecnológica General": { t1: 25, t2: 59, t3: 0 },
                "Física": { t1: 65, t2: 58, t3: 0 },
                "Química": { t1: 60, t2: 60, t3: 0 },
                "Biología - Geografía": { t1: 31, t2: 41, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 35, t2: 51, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 62, t2: 45, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "719500632013299": {
            rude: "719500632013299",
            nombreCompleto: "ANGELA URAESAÑA RODRIGUEZ ",
            curso: "3ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 67, t2: 67, t3: 0 },
                "Lengua Extranjera": { t1: 75, t2: 75, t3: 0 },
                "Ciencias Sociales": { t1: 97, t2: 94, t3: 0 },
                "Educación Musical": { t1: 80, t2: 85, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 66, t2: 61, t3: 0 },
                "Educación Física y Deportes": { t1: 69, t2: 71, t3: 0 },
                "Matemáticas": { t1: 59, t2: 61, t3: 0 },
                "Técnica Tecnológica General": { t1: 76, t2: 51, t3: 0 },
                "Física": { t1: 70, t2: 75, t3: 0 },
                "Química": { t1: 85, t2: 75, t3: 0 },
                "Biología - Geografía": { t1: 76, t2: 70, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 52, t2: 65, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 87, t2: 59, t3: 0 }
            },
            reuniones: []
        },
        "719500632014644": {
            rude: "719500632014644",
            nombreCompleto: "JULIO CESAR VELASCO RAMOS",
            curso: "3ero de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 48, t3: 0 },
                "Lengua Extranjera": { t1: 65, t2: 52, t3: 0 },
                "Ciencias Sociales": { t1: 59, t2: 34, t3: 0 },
                "Educación Musical": { t1: 79, t2: 77, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 43, t2: 51, t3: 0 },
                "Educación Física y Deportes": { t1: 81, t2: 95, t3: 0 },
                "Matemáticas": { t1: 97, t2: 62, t3: 0 },
                "Técnica Tecnológica General": { t1: 52, t2: 49, t3: 0 },
                "Fisica": { t1: 75, t2: 52, t3: 0 },
                "Quimica": { t1: 70, t2: 52, t3: 0 },
                "Biología - Geografía": { t1: 54, t2: 47, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 41, t2: 51, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 58, t2: 54, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "8195003920154363": {
            rude: "8195003920154363",
            nombreCompleto: "YENNYFER YOPIE RODA",
            curso: "3ro de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 3 TERCERO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 53, t2: 74, t3: 0 },
                "Lengua Extranjera": { t1: 75, t2: 92, t3: 0 },
                "Ciencias Sociales": { t1: 75, t2: 87, t3: 0 },
                "Educación Musical": { t1: 78, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 64, t2: 59, t3: 0 },
                "Educación Física y Deportes": { t1: 65, t2: 61, t3: 0 },
                "Matemáticas": { t1: 67, t2: 70, t3: 0 },
                "Técnica Tecnológica General": { t1: 51, t2: 60, t3: 0 },
                "Fisica": { t1: 85, t2: 74, t3: 0 },
                "Quimica": { t1: 80, t2: 74, t3: 0 },
                "Biología - Geografía": { t1: 66, t2: 57, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 74, t2: 80, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 62, t2: 58, t3: 0 }
            },
            reuniones: []
        },
        "5195000120142605": {
            rude: "5195000120142605",
            nombreCompleto: "LEONEL FRANCO BECERRA RODRIGUEZ",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 64, t2: 89, t3: 0 },
                "Lengua Extranjera": { t1: 65, t2: 95, t3: 0 },
                "Ciencias Sociales": { t1: 96, t2: 98, t3: 0 },
                "Educación Musical": { t1: 81, t2: 90, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 84, t2: 77, t3: 0 },
                "Educación Física y Deportes": { t1: 77, t2: 74, t3: 0 },
                "Matemáticas": { t1: 89, t2: 84, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 85, t2: 87, t3: 0 },
                "Fisica": { t1: 70, t2: 95, t3: 0 },
                "Quimica": { t1: 65, t2: 95, t3: 0 },
                "Biología - Geografía": { t1: 83, t2: 75, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 84, t2: 88, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 90, t2: 91, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "519500012016005": {
            rude: "519500012016005",
            nombreCompleto: "BELEN BURGOS SURUBI",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 46, t2: 32, t3: 0 },
                "Lengua Extranjera": { t1: 55, t2: 40, t3: 0 },
                "Ciencias Sociales": { t1: 73, t2: 44, t3: 0 },
                "Educación Musical": { t1: 80, t2: 85, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 57, t2: 49, t3: 0 },
                "Educación Física y Deportes": { t1: 54, t2: 25, t3: 0 },
                "Matemáticas": { t1: 49, t2: 25, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 71, t2: 25, t3: 0 },
                "Fisica": { t1: 55, t2: 40, t3: 0 },
                "Quimica": { t1: 60, t2: 30, t3: 0 },
                "Biología - Geografía": { t1: 51, t2: 42, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 52, t2: 33, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 57, t2: 42, t3: 0 }
            },
            reuniones: []
        },
        "7195006320132539": {
            rude: "7195006320132539",
            nombreCompleto: "MARIA YULIANA CABELLO CUELLAR",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 48, t2: 74, t3: 0 },
                "Lengua Extranjera": { t1: 60, t2: 70, t3: 0 },
                "Ciencias Sociales": { t1: 58, t2: 55, t3: 0 },
                "Educación Musical": { t1: 80, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 59, t2: 73, t3: 0 },
                "Educación Física y Deportes": { t1: 54, t2: 62, t3: 0 },
                "Matemáticas": { t1: 51, t2: 66, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 57, t2: 70, t3: 0 },
                "Fisica": { t1: 70, t2: 70, t3: 0 },
                "Quimica": { t1: 65, t2: 70, t3: 0 },
                "Biología - Geografía": { t1: 58, t2: 57, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 52, t2: 52, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 59, t2: 60, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "719500632014457": {
            rude: "719500632014457",
            nombreCompleto: "BEATRIZ CAMPOS CUELLAR",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 73, t3: 0 },
                "Lengua Extranjera": { t1: 75, t2: 60, t3: 0 },
                "Ciencias Sociales": { t1: 79, t2: 97, t3: 0 },
                "Educación Musical": { t1: 79, t2: 85, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 71, t2: 73, t3: 0 },
                "Educación Física y Deportes": { t1: 54, t2: 69, t3: 0 },
                "Matemáticas": { t1: 62, t2: 62, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 80, t2: 82, t3: 0 },
                "Fisica": { t1: 70, t2: 65, t3: 0 },
                "Quimica": { t1: 80, t2: 65, t3: 0 },
                "Biología - Geografía": { t1: 69, t2: 66, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 69, t2: 61, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 71, t2: 71, t3: 0 }
            },
            reuniones: []
        },
        "719500632013993": {
            rude: "719500632013993",
            nombreCompleto: "LEYDI CRUZ TOLA",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 82, t3: 0 },
                "Lengua Extranjera": { t1: 85, t2: 85, t3: 0 },
                "Ciencias Sociales": { t1: 100, t2: 95, t3: 0 },
                "Educación Musical": { t1: 79, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 79, t2: 77, t3: 0 },
                "Educación Física y Deportes": { t1: 54, t2: 66, t3: 0 },
                "Matemáticas": { t1: 71, t2: 80, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 74, t2: 73, t3: 0 },
                "Fisica": { t1: 85, t2: 85, t3: 0 },
                "Quimica": { t1: 90, t2: 85, t3: 0 },
                "Biología - Geografía": { t1: 61, t2: 66, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 63, t2: 58, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 71, t2: 93, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "5195000120142495": {
            rude: "5195000120142495",
            nombreCompleto: "HERLIN MARK ESCOBAR RODRIGUEZ",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 81, t2: 96, t3: 0 },
                "Lengua Extranjera": { t1: 90, t2: 98, t3: 0 },
                "Ciencias Sociales": { t1: 100, t2: 100, t3: 0 },
                "Educación Musical": { t1: 82, t2: 98, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 99, t2: 100, t3: 0 },
                "Educación Física y Deportes": { t1: 96, t2: 99, t3: 0 },
                "Matemáticas": { t1: 96, t2: 90, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 92, t2: 94, t3: 0 },
                "Fisica": { t1: 95, t2: 98, t3: 0 },
                "Quimica": { t1: 95, t2: 98, t3: 0 },
                "Biología - Geografía": { t1: 90, t2: 93, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 88, t2: 93, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 91, t2: 93, t3: 0 }
            },
            reuniones: []
        },
        "5195000120152048": {
            rude: "5195000120152048",
            nombreCompleto: "ADRIANA GUTIERREZ MATURANO",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 56, t2: 68, t3: 0 },
                "Lengua Extranjera": { t1: 85, t2: 75, t3: 0 },
                "Ciencias Sociales": { t1: 89, t2: 91, t3: 0 },
                "Educación Musical": { t1: 80, t2: 66, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 80, t2: 84, t3: 0 },
                "Educación Física y Deportes": { t1: 71, t2: 98, t3: 0 },
                "Matemáticas": { t1: 57, t2: 59, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 82, t2: 75, t3: 0 },
                "Fisica": { t1: 85, t2: 80, t3: 0 },
                "Quimica": { t1: 90, t2: 80, t3: 0 },
                "Biología - Geografía": { t1: 72, t2: 66, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 60, t2: 93, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 75, t2: 56, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "7195006320151374": {
            rude: "7195006320151374",
            nombreCompleto: "ADRIAN JUSTINIANO CASTEDO",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 62, t3: 0 },
                "Lengua Extranjera": { t1: 51, t2: 60, t3: 0 },
                "Ciencias Sociales": { t1: 47, t2: 84, t3: 0 },
                "Educación Musical": { t1: 75, t2: 60, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 51, t2: 81, t3: 0 },
                "Educación Física y Deportes": { t1: 51, t2: 53, t3: 0 },
                "Matemáticas": { t1: 42, t2: 51, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 30, t2: 61, t3: 0 },
                "Fisica": { t1: 51, t2: 60, t3: 0 },
                "Quimica": { t1: 51, t2: 53, t3: 0 },
                "Biología - Geografía": { t1: 42, t2: 39, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 38, t2: 51, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 61, t2: 64, t3: 0 }
            },
            reuniones: []
        },
        "5195000120152071": {
            rude: "5195000120152071",
            nombreCompleto: "DARWIN MENDEZ APARICIO",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 54, t2: 76, t3: 0 },
                "Lengua Extranjera": { t1: 70, t2: 65, t3: 0 },
                "Ciencias Sociales": { t1: 66, t2: 69, t3: 0 },
                "Educación Musical": { t1: 80, t2: 79, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 58, t2: 62, t3: 0 },
                "Educación Física y Deportes": { t1: 88, t2: 99, t3: 0 },
                "Matemáticas": { t1: 70, t2: 53, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 71, t2: 62, t3: 0 },
                "Fisica": { t1: 65, t2: 65, t3: 0 },
                "Quimica": { t1: 70, t2: 65, t3: 0 },
                "Biología - Geografía": { t1: 49, t2: 63, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 52, t2: 55, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 63, t2: 56, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "5195000120152029": {
            rude: "5195000120152029",
            nombreCompleto: "SAUL MENDOZA CRUZ",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 46, t2: 73, t3: 0 },
                "Lengua Extranjera": { t1: 55, t2: 51, t3: 0 },
                "Ciencias Sociales": { t1: 53, t2: 63, t3: 0 },
                "Educación Musical": { t1: 55, t2: 90, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 52, t2: 65, t3: 0 },
                "Educación Física y Deportes": { t1: 62, t2: 81, t3: 0 },
                "Matemáticas": { t1: 48, t2: 48, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 61, t2: 58, t3: 0 },
                "Fisica": { t1: 65, t2: 51, t3: 0 },
                "Quimica": { t1: 60, t2: 51, t3: 0 },
                "Biología - Geografía": { t1: 55, t2: 59, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 45, t2: 52, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 59, t2: 47, t3: 0 }
            },
            reuniones: []
        },
        "8188001720151219": {
            rude: "8188001720151219",
            nombreCompleto: "LIDIA ORTIZ MASAI",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 58, t2: 65, t3: 0 },
                "Lengua Extranjera": { t1: 70, t2: 76, t3: 0 },
                "Ciencias Sociales": { t1: 68, t2: 65, t3: 0 },
                "Educación Musical": { t1: 79, t2: 90, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 85, t2: 63, t3: 0 },
                "Educación Física y Deportes": { t1: 57, t2: 69, t3: 0 },
                "Matemáticas": { t1: 52, t2: 73, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 71, t2: 65, t3: 0 },
                "Fisica": { t1: 65, t2: 76, t3: 0 },
                "Quimica": { t1: 60, t2: 76, t3: 0 },
                "Biología - Geografía": { t1: 38, t2: 54, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 51, t2: 61, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 67, t2: 53, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "7195006320141066": {
            rude: "7195006320141066",
            nombreCompleto: "LADISLAO ORTIZ ALBAREZ",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 61, t2: 0, t3: 0 },
                "Lengua Extranjera": { t1: 97, t2: 0, t3: 0 },
                "Ciencias Sociales": { t1: 67, t2: 0, t3: 0 },
                "Educación Musical": { t1: 70, t2: 0, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 90, t2: 0, t3: 0 },
                "Educación Física y Deportes": { t1: 100, t2: 0, t3: 0 },
                "Matemáticas": { t1: 56, t2: 0, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 0, t2: 0, t3: 0 },
                "Fisica": { t1: 68, t2: 0, t3: 0 },
                "Quimica": { t1: 92, t2: 0, t3: 0 },
                "Biología - Geografía": { t1: 83, t2: 0, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 66, t2: 0, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 89, t2: 0, t3: 0 }
            },
            reuniones: []
        },
        "719500632013626": {
            rude: "719500632013626",
            nombreCompleto: "DAVID QUINTANA MEJIAS",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 55, t2: 66, t3: 0 },
                "Lengua Extranjera": { t1: 65, t2: 70, t3: 0 },
                "Ciencias Sociales": { t1: 61, t2: 61, t3: 0 },
                "Educación Musical": { t1: 55, t2: 86, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 59, t2: 66, t3: 0 },
                "Educación Física y Deportes": { t1: 65, t2: 81, t3: 0 },
                "Matemáticas": { t1: 46, t2: 55, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 44, t2: 61, t3: 0 },
                "Fisica": { t1: 65, t2: 70, t3: 0 },
                "Quimica": { t1: 70, t2: 70, t3: 0 },
                "Biología - Geografía": { t1: 48, t2: 51, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 53, t2: 52, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 60, t2: 62, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "5195000120142639": {
            rude: "5195000120142639",
            nombreCompleto: "JORGE MATIAS TORREZ CORREA",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 54, t2: 75, t3: 0 },
                "Lengua Extranjera": { t1: 85, t2: 80, t3: 0 },
                "Ciencias Sociales": { t1: 67, t2: 74, t3: 0 },
                "Educación Musical": { t1: 80, t2: 99, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 88, t2: 75, t3: 0 },
                "Educación Física y Deportes": { t1: 84, t2: 97, t3: 0 },
                "Matemáticas": { t1: 73, t2: 60, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 82, t2: 63, t3: 0 },
                "Fisica": { t1: 80, t2: 80, t3: 0 },
                "Quimica": { t1: 75, t2: 80, t3: 0 },
                "Biología - Geografía": { t1: 62, t2: 56, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 68, t2: 71, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 66, t2: 73, t3: 0 }
            },
            reuniones: []
        },
        "719500632013150": {
            rude: "719500632013150",
            nombreCompleto: "SEVERO URAEZAÑA RODRIGUEZ",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 68, t3: 0 },
                "Lengua Extranjera": { t1: 65, t2: 51, t3: 0 },
                "Ciencias Sociales": { t1: 89, t2: 84, t3: 0 },
                "Educación Musical": { t1: 79, t2: 97, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 51, t2: 65, t3: 0 },
                "Educación Física y Deportes": { t1: 87, t2: 100, t3: 0 },
                "Matemáticas": { t1: 43, t2: 48, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 70, t2: 62, t3: 0 },
                "Fisica": { t1: 65, t2: 51, t3: 0 },
                "Quimica": { t1: 65, t2: 51, t3: 0 },
                "Biología - Geografía": { t1: 51, t2: 61, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 47, t2: 52, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 62, t2: 53, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "71950063201363": {
            rude: "71950063201363",
            nombreCompleto: "ALEXANDER VACA TOSUBE",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 44, t2: 68, t3: 0 },
                "Lengua Extranjera": { t1: 70, t2: 72, t3: 0 },
                "Ciencias Sociales": { t1: 70, t2: 66, t3: 0 },
                "Educación Musical": { t1: 79, t2: 99, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 51, t2: 56, t3: 0 },
                "Educación Física y Deportes": { t1: 64, t2: 63, t3: 0 },
                "Matemáticas": { t1: 52, t2: 54, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 64, t2: 67, t3: 0 },
                "Fisica": { t1: 70, t2: 61, t3: 0 },
                "Quimica": { t1: 75, t2: 87, t3: 0 },
                "Biología - Geografía": { t1: 48, t2: 70, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 41, t2: 52, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 46, t2: 72, t3: 0 }
            },
            reuniones: []
        },
        "5195000120142571": {
            rude: "5195000120142571",
            nombreCompleto: "JOHANA VERA TELMO",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 53, t2: 72, t3: 0 },
                "Lengua Extranjera": { t1: 75, t2: 55, t3: 0 },
                "Ciencias Sociales": { t1: 71, t2: 88, t3: 0 },
                "Educación Musical": { t1: 78, t2: 86, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 89, t2: 77, t3: 0 },
                "Educación Física y Deportes": { t1: 73, t2: 84, t3: 0 },
                "Matemáticas": { t1: 51, t2: 46, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 80, t2: 71, t3: 0 },
                "Fisica": { t1: 75, t2: 70, t3: 0 },
                "Quimica": { t1: 70, t2: 70, t3: 0 },
                "Biología - Geografía": { t1: 41, t2: 64, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 39, t2: 54, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 76, t2: 74, t3: 0 }
            },
            reuniones: []
        },
        "5195000120142586": {
            rude: "5195000120142586",
            nombreCompleto: "ALFRED YAPORI ROJAS",
            curso: "4to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 4 CUARTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 63, t2: 83, t3: 0 },
                "Lengua Extranjera": { t1: 75, t2: 85, t3: 0 },
                "Ciencias Sociales": { t1: 100, t2: 95, t3: 0 },
                "Educación Musical": { t1: 79, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 92, t2: 95, t3: 0 },
                "Educación Física y Deportes": { t1: 87, t2: 98, t3: 0 },
                "Matemáticas": { t1: 97, t2: 90, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 81, t2: 84, t3: 0 },
                "Fisica": { t1: 80, t2: 81, t3: 0 },
                "Quimica": { t1: 85, t2: 81, t3: 0 },
                "Biología - Geografía": { t1: 79, t2: 80, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 84, t2: 71, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 73, t2: 74, t3: 0 }
            },
            reuniones: []
        },
        "8196001120142086": {
            rude: "8196001120142086",
            nombreCompleto: "DAYANE PRISCILA AGUILAR SURUBI",
            curso: "5to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 5 QUINTO.png",
            observaciones: [
                { fecha: " ", descripcion: " " }
            ],
            asistencia: [
                { fecha: "02-09-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "03-09-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "04-09-2025", materia: "A.Plastica", estado: "Presente", turno: "Mañana" },
                { fecha: "05-09-2025", materia: "Ingles", estado: "Presente", turno: "Mañana" },
                { fecha: "05-09-2025", materia: "T.Especializada", estado: "Ausente", turno: "Tarde" },
                { fecha: "08-05-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "09-09-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "09-09-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "11-09-2025", materia: "A.Plastica", estado: "Presente", turno: "Tarde" },
                { fecha: "12-09-2025", materia: "Ingles", estado: "Presente", turno: "Tarde" },
                { fecha: "15-09-2025", materia: "T.Especializada", estado: "Ausente", turno: "Tarde" },
                { fecha: "16-09-2025", materia: "Matematica", estado: "Ausente", turno: "Mañana" },
                { fecha: "17-09-2025", materia: "Sociales", estado: "Presente", turno: "Mañana" },
                { fecha: "18-09-2025", materia: "A.Plastica", estado: "Presente", turno: "Mañana" },
                { fecha: "19-09-2025", materia: "Ingles", estado: "Presente", turno: "Mañana" },
                { fecha: "26-09-2025", materia: "Ingles", estado: "Presente", turno: "Mañana" },
                { fecha: "26-09-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "01-08-2025", materia: "A.Plastica", estado: "Presente", turno: "Mañana" },
                { fecha: "04-08-2025", materia: "Valores", estado: "Ausente", turno: "Mañana" },
                { fecha: "04-08-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "05-08-2025", materia: "Matematica", estado: "Ausente", turno: "Mañana" },
                { fecha: "05-08-2025", materia: "T.Especializada", estado: "Ausente", turno: "Tarde" },
                { fecha: "11-08-2025", materia: "T.Especializada", estado: "Ausente", turno: "Tarde" },
                { fecha: "12-08-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "13-08-2025", materia: "Sociales", estado: "Presente", turno: "Mañana" },
                { fecha: "13-08-2025", materia: "T.Especializada", estado: "Ausente", turno: "Tarde" },
                { fecha: "15-08-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "18-08-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "19-08-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "20-08-2025", materia: "Sociales", estado: "Ausente", turno: "Mañana" },
                { fecha: "21-08-2025", materia: "A.Plastica", estado: "Presente", turno: "Mañana" },
                { fecha: "22-08-2025", materia: "ingles", estado: "Presente", turno: "Mañana" },
                { fecha: "25-08-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "26-08-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "26-08-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "27-08-2025", materia: "Sociales", estado: "Presente", turno: "Mañana" },
                { fecha: "27-08-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "28-08-2025", materia: "A.Plastica", estado: "Licencia", turno: "Mañana" },
                { fecha: "29-08-2025", materia: "T.Especializada", estado: "Ausente", turno: "Tarde" },
                { fecha: "28-07-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "28-07-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "29-07-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "30-07-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "31-07-2025", materia: "A.Plastica", estado: "Presente", turno: "Mañana" },
                { fecha: "02-06-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "02-06-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "09-06-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "09-06-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "10-06-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "11-06-2025", materia: "Sociales", estado: "Presente", turno: "Mañana" },
                { fecha: "11-06-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "12-06-2025", materia: "A.Plastica", estado: "Presente", turno: "Mañana" },
                { fecha: "13-06-2025", materia: "Ingles", estado: "Licencia", turno: "Mañana" },
                { fecha: "16-06-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "23-06-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "23-06-2025", materia: "T.Especializada", estado: "Retraso", turno: "Tarde" },
                { fecha: "25-06-2025", materia: "Sociales", estado: "Presente", turno: "Mañana" },
                { fecha: "25-06-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "26-06-2025", materia: "A.Plastica", estado: "Presente", turno: "Mañana" },
                { fecha: "27-06-2025", materia: "T.Especializado", estado: "Presente", turno: "Tarde" },
                { fecha: "02-05-2025", materia: "Ingles", estado: "Presente", turno: "Mañana" },
                { fecha: "05-05-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "05-05-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "06-05-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "06-05-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "07-05-2025", materia: "Sociales", estado: "Presente", turno: "Mañana" },
                { fecha: "07-05-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "09-05-2025", materia: "Ingles", estado: "Presente", turno: "Mañana" },
                { fecha: "09-05-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "12-05-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "12-05-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "13-05-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "13-05-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "14-05-2025", materia: "Sociales", estado: "Presente", turno: "Mañana" },
                { fecha: "14-05-2025", materia: "T.Especializada", estado: "Licencia", turno: "Tarde" },
                { fecha: "15-05-2025", materia: "A.Plastica", estado: "Presente", turno: "Mañana" },
                { fecha: "16-05-2025", materia: "Ingles", estado: "Presente", turno: "Mañana" },
                { fecha: "16-05-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "19-05-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "19-05-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "21-05-2025", materia: "Sociales", estado: "Presente", turno: "Mañana" },
                { fecha: "21-05-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "22-05-2025", materia: "A.Plastica", estado: "Presente", turno: "Mañana" },
                { fecha: "23-05-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "26-05-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "26-05-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "28-05-2025", materia: "Sociales", estado: "Ausente", turno: "Mañana" },
                { fecha: "28-05-2025", materia: "T.Especializada", estado: "Ausente", turno: "Tarde" },
                { fecha: "30-05-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "01-04-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "03-04-2025", materia: "A.Plastica", estado: "Presente", turno: "Mañana" },
                { fecha: "08-04-2025", materia: "T.Escpecializada", estado: "Presente", turno: "Tarde" },
                { fecha: "09-04-2025", materia: "Sociales", estado: "Presente", turno: "Mañana" },
                { fecha: "11-04-2025", materia: "Ingles", estado: "Presente", turno: "Mañana" },
                { fecha: "14-04-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "15-04-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "15-04-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "21-04-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "22-04-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "23-04-2025", materia: "Sociales", estado: "Presente", turno: "Mañana" },
                { fecha: "25-04-2025", materia: "Ingles", estado: "Presente", turno: "Mañana" },
                { fecha: "28-04-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "28-04-2025", materia: "Valores", estado: "Presente", turno: "Tarde" },
                { fecha: "29-04-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "29-04-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "30-04-2025", materia: "Sociales", estado: "Presente", turno: "Mañana" },
                { fecha: "05-03-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "10-03-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "11-03-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "12-03-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "13-03-2025", materia: "A.Plastica", estado: "Presente", turno: "Mañana" },
                { fecha: "14-03-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "18-03-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "18-03-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "24-03-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "25-03-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "27-03-2025", materia: "A.Plastica", estado: "Presente", turno: "Mañana" },
                { fecha: "31-03-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "03-02-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "03-02-2025", materia: "T.Especializada", estado: "Ausente", turno: "Tarde" },
                { fecha: "05-02-2025", materia: "A.Plastica", estado: "Presente", turno: "Mañana" },
                { fecha: "07-02-2025", materia: "Ingles", estado: "Presente", turno: "Mañana" },
                { fecha: "10-02-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "10-02-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "11-02-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "12-02-2025", materia: "Sociales", estado: "Presente", turno: "Mañana" },
                { fecha: "13-02-2025", materia: "A.Plastica", estado: "Presente", turno: "Mañana" },
                { fecha: "17-02-2025", materia: "Valores", estado: "Presente", turno: "Mañana" },
                { fecha: "17-02-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "18-02-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "20-02-2025", materia: "A.Plastica", estado: "Presente", turno: "Mañana" },
                { fecha: "25-02-2025", materia: "Matematica", estado: "Presente", turno: "Mañana" },
                { fecha: "25-02-2025", materia: "T.Especializada", estado: "Presente", turno: "Tarde" },
                { fecha: "27-02-2025", materia: "A.Plastica", estado: "Presente", turno: "Mañana" },
                { fecha: "30-02-2025", materia: "Ingles", estado: "Presente", turno: "Mañana" }

            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 61, t2: 86, t3: 0 },
                "Lengua Extranjera": { t1: 90, t2: 90, t3: 0 },
                "Ciencias Sociales": { t1: 96, t2: 88, t3: 0 },
                "Educación Musical": { t1: 80, t2: 89, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 94, t2: 88, t3: 0 },
                "Educación Física y Deportes": { t1: 82, t2: 95, t3: 0 },
                "Matemáticas": { t1: 68, t2: 81, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 83, t2: 76, t3: 0 },
                "Fisica": { t1: 90, t2: 90, t3: 0 },
                "Quimica": { t1: 85, t2: 90, t3: 0 },
                "Biología - Geografía": { t1: 65, t2: 71, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 82, t2: 87, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 89, t2: 75, t3: 0 }
            },
            reuniones: []
        },
        "819600962015326": {
            rude: "819600962015326",
            nombreCompleto: "CATALINA ALGARAÑAZ LEIGUEZ",
            curso: "5to de Secundaria", 
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 5 QUINTO.png",
            observaciones: [
                { fecha: "2025-04-16", area:"C. Cosmovisiones",docente:"Lic. Silvia Delgado Cruz " , descripcion: " No presento su actividad de producción (crucigrama)." },
                
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 68, t2: 78, t3: 0 },
                "Lengua Extranjera": { t1: 90, t2: 95, t3: 0 },
                "Ciencias Sociales": { t1: 87, t2: 87, t3: 0 },
                "Educación Musical": { t1: 79, t2: 89, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 97, t2: 92, t3: 0 },
                "Educación Física y Deportes": { t1: 87, t2: 94, t3: 0 },
                "Matemáticas": { t1: 73, t2: 88, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 84, t2: 77, t3: 0 },
                "Fisica": { t1: 90, t2: 90, t3: 0 },
                "Quimica": { t1: 90, t2: 95, t3: 0 },
                "Biología - Geografía": { t1: 68, t2: 73, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 85, t2: 87, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 86, t2: 74, t3: 0 }
            },
            reuniones: []
        },
        "5195000120142734": {
            rude: "5195000120142734",
            nombreCompleto: "LUIS DEIVY BARRERO ROJAS",
            curso: "5to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 5 QUINTO.png",
            observaciones: [
                { fecha: "2025-07-30", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No Presentó su juego didáctico (cartel) y carpeta." },
                { fecha: "2025-08-27", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No Presentó su Cuestionario, cartel y carpeta., No dio su evaluación." },
                { fecha: "2025-09-01", area:"Valores",docente:"Lic. Ana Roxana Quispe Encina" , descripcion: "No fue a formación y se quedó en el curso realizando su tarea. Es la 2 vez que se queda en aula" },
                { fecha: "2025-09-03", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "Falta 2 cuestionario." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 55, t2: 75, t3: 0 },
                "Lengua Extranjera": { t1: 75, t2: 70, t3: 0 },
                "Ciencias Sociales": { t1: 76, t2: 68, t3: 0 },
                "Educación Musical": { t1: 78, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 70, t2: 75, t3: 0 },
                "Educación Física y Deportes": { t1: 85, t2: 81, t3: 0 },
                "Matemáticas": { t1: 59, t2: 75, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 71, t2: 68, t3: 0 },
                "Fisica": { t1: 70, t2: 87, t3: 0 },
                "Quimica": { t1: 90, t2: 70, t3: 0 },
                "Biología - Geografía": { t1: 54, t2: 57, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 78, t2: 83, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 84, t2: 78, t3: 0 }
            },
            reuniones: []
        },
        "5195000120142772": {
            rude: "5195000120142772",
            nombreCompleto: "ESTHER CHAILE ABRIGO",
            curso: "5to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 5 QUINTO.png",
            observaciones: [
                { fecha: "2025-05-22", area:"C. Sociales",docente:"Lic. Lidia Zelama Camacho" , descripcion: "No trajo su archivador y tampoco hizo las actividades en clases" },
                { fecha: "2025-08-27", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó su cuestionario, proyecto y carpeta" },
                { fecha: "2025-09-05", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó su 2 cuestionario." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 60, t2: 76, t3: 0 },
                "Lengua Extranjera": { t1: 70, t2: 75, t3: 0 },
                "Ciencias Sociales": { t1: 73, t2: 79, t3: 0 },
                "Educación Musical": { t1: 79, t2: 100, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 80, t2: 82, t3: 0 },
                "Educación Física y Deportes": { t1: 83, t2: 79, t3: 0 },
                "Matemáticas": { t1: 51, t2: 75, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 71, t2: 63, t3: 0 },
                "Fisica": { t1: 75, t2: 65, t3: 0 },
                "Quimica": { t1: 70, t2: 65, t3: 0 },
                "Biología - Geografía": { t1: 57, t2: 55, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 80, t2: 81, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 76, t2: 83, t3: 0 }
            },
            reuniones: []
        },
        "719500632013951": {
            rude: "719500632013951",
            nombreCompleto: "YESSICA CHAMO ESTRADA",
            curso: "5to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 5 QUINTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 66, t2: 0, t3: 0 },
                "Lengua Extranjera": { t1: 74, t2: 0, t3: 0 },
                "Ciencias Sociales": { t1: 58, t2: 0, t3: 0 },
                "Educación Musical": { t1: 51, t2: 0, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 40, t2: 0, t3: 0 },
                "Educación Física y Deportes": { t1: 100, t2: 0, t3: 0 },
                "Matemáticas": { t1: 51, t2: 0, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 0, t2: 0, t3: 0 },
                "Fisica": { t1: 43, t2: 0, t3: 0 },
                "Quimica": { t1: 54, t2: 0, t3: 0 },
                "Biología - Geografía": { t1: 53, t2: 0, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 65, t2: 0, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 91, t2: 0, t3: 0 }
            },
            reuniones: []
        },
        "519500012015217": {
            rude: "519500012015217",
            nombreCompleto: "NELSON CONDORI TICONA",
            curso: "5to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 5 QUINTO.png",
            observaciones: [
                { fecha: "2025-08-27", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "Faltó a clases sin licencia" },
                { fecha: "2025-08-27", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó su cuestionario, proyecto y cartel." },
                { fecha: "2025-08-27", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No dio su evaluación." },
                { fecha: "2025-09-01", area:"Valores",docente:"Lic. Hna. Roxana Quispe Encina" , descripcion: "No fue a la formación y se quedó en curso., Es la 2da vez que se queda." },
                { fecha: "2025-09-03", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó el cuestionario" }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 58, t2: 84, t3: 0 },
                "Lengua Extranjera": { t1: 85, t2: 90, t3: 0 },
                "Ciencias Sociales": { t1: 93, t2: 82, t3: 0 },
                "Educación Musical": { t1: 78, t2: 85, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 90, t2: 74, t3: 0 },
                "Educación Física y Deportes": { t1: 91, t2: 83, t3: 0 },
                "Matemáticas": { t1: 81, t2: 83, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 83, t2: 71, t3: 0 },
                "Fisica": { t1: 80, t2: 95, t3: 0 },
                "Quimica": { t1: 90, t2: 95, t3: 0 },
                "Biología - Geografía": { t1: 66, t2: 70, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 81, t2: 87, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 86, t2: 89, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "71950020201216": {
            rude: "71950020201216",
            nombreCompleto: "LUIS GABRIEL LLANOS ABREGO",
            curso: "5to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 5 QUINTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 92, t2: 89, t3: 0 },
                "Lengua Extranjera": { t1: 90, t2: 98, t3: 0 },
                "Ciencias Sociales": { t1: 100, t2: 99, t3: 0 },
                "Educación Musical": { t1: 85, t2: 100, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 95, t2: 88, t3: 0 },
                "Educación Física y Deportes": { t1: 90, t2: 87, t3: 0 },
                "Matemáticas": { t1: 93, t2: 96, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 91, t2: 95, t3: 0 },
                "Fisica": { t1: 90, t2: 98, t3: 0 },
                "Quimica": { t1: 95, t2: 98, t3: 0 },
                "Biología - Geografía": { t1: 95, t2: 95, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 97, t2: 95, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 95, t2: 95, t3: 0 }
            },
            reuniones: []
        },
        "5195000120142677": {
            rude: "5195000120142677",
            nombreCompleto: "MICHELLE ESTEFANY MEJIA SALAZAR",
            curso: "5to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 5 QUINTO.png",
            observaciones: [
                { fecha: "16-08-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No Presentó su actividad de Producción (cronograma)" },
                { fecha: "27-08-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "Faltó a clases sin licencia, No presentó su cuestionario, proyecto, cartel y carpeta, No dio 1ra Evaluación" },
                { fecha: "03-09-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó 1 cuestionario." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 67, t2: 84, t3: 0 },
                "Lengua Extranjera": { t1: 90, t2: 85, t3: 0 },
                "Ciencias Sociales": { t1: 97, t2: 90, t3: 0 },
                "Educación Musical": { t1: 85, t2: 99, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 85, t2: 88, t3: 0 },
                "Educación Física y Deportes": { t1: 86, t2: 90, t3: 0 },
                "Matemáticas": { t1: 64, t2: 77, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 81, t2: 70, t3: 0 },
                "Fisica": { t1: 90, t2: 90, t3: 0 },
                "Quimica": { t1: 95, t2: 90, t3: 0 },
                "Biología - Geografía": { t1: 75, t2: 75, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 89, t2: 89, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 91, t2: 83, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "519500012013740": {
            rude: "519500012013740",
            nombreCompleto: "INGRID MENDOZA CRUZ",
            curso: "5to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 5 QUINTO.png",
            observaciones: [
                { fecha: "08-04-2025", area:"Lenguaje",docente:"Lic. Jafer Serrate Molina" , descripcion: "No realizó exposición grupal del tema" },
                { fecha: "16-04-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó su actividad de producción (cronograma)" },
                { fecha: "28-04-2025", area:"Valores",docente:"Lic. Hna. Roxana Quispe Encina" , descripcion: "No realizó su papelógrafo, No se presentó para la exposición individual" },
                { fecha: "27-08-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó su cuestionario." },
                { fecha: "03-09-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó su cuestionario." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 62, t2: 87, t3: 0 },
                "Lengua Extranjera": { t1: 80, t2: 80, t3: 0 },
                "Ciencias Sociales": { t1: 100, t2: 94, t3: 0 },
                "Educación Musical": { t1: 85, t2: 100, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 83, t2: 83, t3: 0 },
                "Educación Física y Deportes": { t1: 98, t2: 97, t3: 0 },
                "Matemáticas": { t1: 66, t2: 69, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 80, t2: 68, t3: 0 },
                "Fisica": { t1: 85, t2: 76, t3: 0 },
                "Quimica": { t1: 85, t2: 80, t3: 0 },
                "Biología - Geografía": { t1: 80, t2: 83, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 92, t2: 78, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 61, t2: 83, t3: 0 }
            },
            reuniones: []
        },
        "8196003420144408": {
            rude: "8196003420144408",
            nombreCompleto: "FABIANA CAROLA MUQUEMA LINO",
            curso: "5to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 5 QUINTO.png",
            observaciones: [
                { fecha: "30-04-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó su actividad de producción (Proyecto)." },
                { fecha: "28-04-2025", area:"Valores",docente:"Lic. Hna. Roxana Quispe Encinas" , descripcion: "No realizó su papelógrafo de exposición., No se presentó para la exposición." },
                { fecha: "20-05-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó su cuestionario, Proyecto y Carpeta" }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 63, t2: 82, t3: 0 },
                "Lengua Extranjera": { t1: 90, t2: 98, t3: 0 },
                "Ciencias Sociales": { t1: 88, t2: 93, t3: 0 },
                "Educación Musical": { t1: 79, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 92, t2: 93, t3: 0 },
                "Educación Física y Deportes": { t1: 87, t2: 94, t3: 0 },
                "Matemáticas": { t1: 90, t2: 92, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 0, t2: 0, t3: 0 },
                "Fisica": { t1: 90, t2: 98, t3: 0 },
                "Quimica": { t1: 90, t2: 98, t3: 0 },
                "Biología - Geografía": { t1: 86, t2: 85, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 81, t2: 86, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 70, t2: 48, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "519500012013756": {
            rude: "519500012013756",
            nombreCompleto: "JOEL NUÑEZ YOPIE",
            curso: "5to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 5 QUINTO.png",
            observaciones: [
                { fecha: "30-08-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó su actividad de producción (Cartel de violencia)" },
                { fecha: "27-08-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó su cuestionario, cartel, carpeta., No dio su evaluación." },
                { fecha: "01-09-2025", area:"Valores",docente:"Hna. Roxana Quispe Encinas" , descripcion: "No fue a la formación y se quedó en el curso., Es la 2da vez que se queda en el curso." },
                { fecha: "03-09-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó 2 cuestionarios." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 61, t2: 72, t3: 0 },
                "Lengua Extranjera": { t1: 80, t2: 80, t3: 0 },
                "Ciencias Sociales": { t1: 84, t2: 75, t3: 0 },
                "Educación Musical": { t1: 78, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 79, t2: 78, t3: 0 },
                "Educación Física y Deportes": { t1: 98, t2: 98, t3: 0 },
                "Matemáticas": { t1: 66, t2: 70, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 74, t2: 70, t3: 0 },
                "Fisica": { t1: 80, t2: 85, t3: 0 },
                "Quimica": { t1: 85, t2: 85, t3: 0 },
                "Biología - Geografía": { t1: 66, t2: 60, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 81, t2: 86, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 74, t2: 77, t3: 0 }
            },
            reuniones: []
        },
        "519500012013777": {
            rude: "519500012013777",
            nombreCompleto: "JADIRH POSIABO YOPIE",
            curso: "5to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 5 QUINTO.png",
            observaciones: [
                { fecha: "27-08-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó su cuestionario, cartel y carpeta., No dio su evaluación." },
                { fecha: "01-09-2025", area:"Valores",docente:"Hna. Roxana Quispe Encinas" , descripcion: "No fue a la formación y se quedó en el curso., Es la 2da vez que se queda en el curso." },
                { fecha: "03-09-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó 1 cuestionarios." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 57, t2: 81, t3: 0 },
                "Lengua Extranjera": { t1: 85, t2: 85, t3: 0 },
                "Ciencias Sociales": { t1: 100, t2: 93, t3: 0 },
                "Educación Musical": { t1: 79, t2: 87, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 76, t2: 77, t3: 0 },
                "Educación Física y Deportes": { t1: 99, t2: 98, t3: 0 },
                "Matemáticas": { t1: 53, t2: 72, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 71, t2: 67, t3: 0 },
                "Fisica": { t1: 85, t2: 83, t3: 0 },
                "Quimica": { t1: 90, t2: 85, t3: 0 },
                "Biología - Geografía": { t1: 69, t2: 68, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 85, t2: 83, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 87, t2: 87, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "5195000120142768": {
            rude: "5195000120142768",
            nombreCompleto: "MARIA DE LOS ANGELES SACU PEREIRA",
            curso: "5to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 5 QUINTO.png",
            observaciones: [
                { fecha: "16-04-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No Presentó su actividad de producción (cronograma)" },
                { fecha: "30-04-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "Faltó a Clases Sin licencia, No presentó cartel, cuento o poesía, crucigrama, proyecto, carpeta." },
                { fecha: "28-04-2025", area:"Valores",docente:"Lic. Hna. Roxana Quispe Encinas" , descripcion: "No asistió a clases constantes, No realizó su papelografo y no expuso" },
                { fecha: "27-08-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó su cuestionario, proyecto y carpeta., Debe evaluaciones por falta." },
                { fecha: "03-09-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó 2 cuestionario, carpeta" }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 51, t2: 37, t3: 0 },
                "Lengua Extranjera": { t1: 65, t2: 65, t3: 0 },
                "Ciencias Sociales": { t1: 70, t2: 56, t3: 0 },
                "Educación Musical": { t1: 78, t2: 79, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 71, t2: 61, t3: 0 },
                "Educación Física y Deportes": { t1: 52, t2: 46, t3: 0 },
                "Matemáticas": { t1: 51, t2: 55, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 38, t2: 42, t3: 0 },
                "Fisica": { t1: 70, t2: 64, t3: 0 },
                "Quimica": { t1: 65, t2: 64, t3: 0 },
                "Biología - Geografía": { t1: 58, t2: 52, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 35, t2: 65, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 49, t2: 48, t3: 0 }
            },
            reuniones: []
        },
        "51950001201372A": {
            rude: "51950001201372A",
            nombreCompleto: "RUTH MARY TITO ARTEAGA",
            curso: "5to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 5 QUINTO.png",
            observaciones: [
                { fecha: "08-04-2025", area:"Lenguaje",docente:"Lic. Jafet Serrate Molina" , descripcion: "No realizó exposición grupal del tema" },
                { fecha: "16-04-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No Presentó su actividad de producción (cronograma)" },
                { fecha: "30-07-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó su cruzgrama, proyecto y carpeta" },
                { fecha: "03-09-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No presentó el cuestionario" }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 66, t2: 61, t3: 0 },
                "Lengua Extranjera": { t1: 70, t2: 70, t3: 0 },
                "Ciencias Sociales": { t1: 93, t2: 85, t3: 0 },
                "Educación Musical": { t1: 79, t2: 79, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 93, t2: 85, t3: 0 },
                "Educación Física y Deportes": { t1: 91, t2: 96, t3: 0 },
                "Matemáticas": { t1: 60, t2: 63, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 66, t2: 45, t3: 0 },
                "Fisica": { t1: 75, t2: 65, t3: 0 },
                "Quimica": { t1: 80, t2: 70, t3: 0 },
                "Biología - Geografía": { t1: 81, t2: 62, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 81, t2: 66, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 82, t2: 46, t3: 0 }
            },
            reuniones: []
        },
        "719500632013673": {
            rude: "719500632013673",
            nombreCompleto: "CONSUELO YOPIE RIOS",
            curso: "5to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de 5 QUINTO.png",
            observaciones: [
                { fecha: "14-04-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "No Presentó su actividad de producción (cronograma)" },
                { fecha: "14-04-2025", area:"Cosmovisiones",docente:"Lic. Silvia Delgado Cruz" , descripcion: "Faltó a clases sin licencia., No presentó su cuestionario, cartel, proyecto y carpeta., No dio su evaluación." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 65, t2: 77, t3: 0 },
                "Lengua Extranjera": { t1: 65, t2: 80, t3: 0 },
                "Ciencias Sociales": { t1: 83, t2: 80, t3: 0 },
                "Educación Musical": { t1: 80, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 86, t2: 83, t3: 0 },
                "Educación Física y Deportes": { t1: 80, t2: 95, t3: 0 },
                "Matemáticas": { t1: 70, t2: 83, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 83, t2: 90, t3: 0 },
                "Fisica": { t1: 60, t2: 85, t3: 0 },
                "Quimica": { t1: 65, t2: 80, t3: 0 },
                "Biología - Geografía": { t1: 58, t2: 64, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 83, t2: 61, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 77, t2: 71, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "71950063201296A": {
            rude: "71950063201296A",
            nombreCompleto: "ALEXANDER AÑEZ CESARI",
            curso: "6to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de SEXTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 81, t2: 75, t3: 0 },
                "Lengua Extranjera": { t1: 55, t2: 65, t3: 0 },
                "Ciencias Sociales": { t1: 71, t2: 66, t3: 0 },
                "Educación Musical": { t1: 79, t2: 89, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 89, t2: 72, t3: 0 },
                "Educación Física y Deportes": { t1: 87, t2: 88, t3: 0 },
                "Matemáticas": { t1: 70, t2: 66, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 57, t2: 70, t3: 0 },
                "Fisica": { t1: 65, t2: 70, t3: 0 },
                "Quimica": { t1: 60, t2: 70, t3: 0 },
                "Biología - Geografía": { t1: 62, t2: 65, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 65, t2: 79, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 49, t2: 55, t3: 0 }
            },
            reuniones: []
        },
        "719500632013876": {
            rude: "719500632013876",
            nombreCompleto: "WALTER GREGORI CANO TRUJILLO",
            curso: "6to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de SEXTO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 73, t2: 71, t3: 0 },
                "Lengua Extranjera": { t1: 55, t2: 65, t3: 0 },
                "Ciencias Sociales": { t1: 90, t2: 59, t3: 0 },
                "Educación Musical": { t1: 78, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 73, t2: 65, t3: 0 },
                "Educación Física y Deportes": { t1: 88, t2: 92, t3: 0 },
                "Matemáticas": { t1: 62, t2: 57, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 0, t2: 0, t3: 0 },
                "Fisica": { t1: 60, t2: 70, t3: 0 },
                "Quimica": { t1: 65, t2: 70, t3: 0 },
                "Biología - Geografía": { t1: 48, t2: 66, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 44, t2: 69, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 61, t2: 44, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "619500172013599": {
            rude: "619500172013599",
            nombreCompleto: "ROSY CATARI MARTINEZ",
            curso: "6to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de SEXTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 84, t2: 58, t3: 0 },
                "Lengua Extranjera": { t1: 60, t2: 60, t3: 0 },
                "Ciencias Sociales": { t1: 64, t2: 31, t3: 0 },
                "Educación Musical": { t1: 80, t2: 76, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 91, t2: 56, t3: 0 },
                "Educación Física y Deportes": { t1: 69, t2: 70, t3: 0 },
                "Matemáticas": { t1: 71, t2: 48, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 54, t2: 45, t3: 0 },
                "Fisica": { t1: 65, t2: 65, t3: 0 },
                "Quimica": { t1: 70, t2: 60, t3: 0 },
                "Biología - Geografía": { t1: 53, t2: 47, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 60, t2: 58, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 53, t2: 43, t3: 0 }
            },
            reuniones: []
        },
        "7195001620133155": {
            rude: "7195001620133155",
            nombreCompleto: "DAINER FLORES YOVIO",
            curso: "6to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de SEXTO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 59, t2: 70, t3: 0 },
                "Lengua Extranjera": { t1: 65, t2: 65, t3: 0 },
                "Ciencias Sociales": { t1: 62, t2: 53, t3: 0 },
                "Educación Musical": { t1: 79, t2: 89, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 59, t2: 66, t3: 0 },
                "Educación Física y Deportes": { t1: 80, t2: 82, t3: 0 },
                "Matemáticas": { t1: 68, t2: 67, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 0, t2: 0, t3: 0 },
                "Fisica": { t1: 55, t2: 65, t3: 0 },
                "Quimica": { t1: 65, t2: 65, t3: 0 },
                "Biología - Geografía": { t1: 45, t2: 64, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 51, t2: 73, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 52, t2: 49, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "81980574201391": {
            rude: "81980574201391",
            nombreCompleto: "CELESTE BELEN LANDAETA SERRATE",
            curso: "6to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de SEXTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 96, t2: 91, t3: 0 },
                "Lengua Extranjera": { t1: 95, t2: 100, t3: 0 },
                "Ciencias Sociales": { t1: 99, t2: 91, t3: 0 },
                "Educación Musical": { t1: 84, t2: 100, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 92, t2: 91, t3: 0 },
                "Educación Física y Deportes": { t1: 98, t2: 91, t3: 0 },
                "Matemáticas": { t1: 96, t2: 91, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 0, t2: 0, t3: 0 },
                "Fisica": { t1: 95, t2: 100, t3: 0 },
                "Quimica": { t1: 90, t2: 100, t3: 0 },
                "Biología - Geografía": { t1: 90, t2: 90, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 87, t2: 86, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 86, t2: 77, t3: 0 }
            },
            reuniones: []
        },
        "7195006320121444": {
            rude: "7195006320121444",
            nombreCompleto: "JAZMIN CANDY MAMANI MARTINEZ",
            curso: "6to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de SEXTO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 95, t2: 90, t3: 0 },
                "Lengua Extranjera": { t1: 90, t2: 100, t3: 0 },
                "Ciencias Sociales": { t1: 95, t2: 85, t3: 0 },
                "Educación Musical": { t1: 89, t2: 100, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 95, t2: 90, t3: 0 },
                "Educación Física y Deportes": { t1: 79, t2: 77, t3: 0 },
                "Matemáticas": { t1: 86, t2: 89, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 91, t2: 90, t3: 0 },
                "Fisica": { t1: 95, t2: 100, t3: 0 },
                "Quimica": { t1: 95, t2: 100, t3: 0 },
                "Biología - Geografía": { t1: 86, t2: 86, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 89, t2: 86, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 87, t2: 77, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "7195001920112722": {
            rude: "7195001920112722",
            nombreCompleto: "KENJIRO NAKAOKA MURILLO",
            curso: "6to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de SEXTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 77, t2: 64, t3: 0 },
                "Lengua Extranjera": { t1: 55, t2: 70, t3: 0 },
                "Ciencias Sociales": { t1: 60, t2: 68, t3: 0 },
                "Educación Musical": { t1: 55, t2: 87, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 78, t2: 64, t3: 0 },
                "Educación Física y Deportes": { t1: 53, t2: 84, t3: 0 },
                "Matemáticas": { t1: 58, t2: 64, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 58, t2: 56, t3: 0 },
                "Fisica": { t1: 60, t2: 65, t3: 0 },
                "Quimica": { t1: 65, t2: 70, t3: 0 },
                "Biología - Geografía": { t1: 48, t2: 56, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 45, t2: 70, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 53, t2: 52, t3: 0 }
            },
            reuniones: []
        },
        "719500632011780": {
            rude: "719500632011780",
            nombreCompleto: "CAMILA OLMOS CORTEZ",
            curso: "6to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de SEXTO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 83, t2: 79, t3: 0 },
                "Lengua Extranjera": { t1: 65, t2: 65, t3: 0 },
                "Ciencias Sociales": { t1: 70, t2: 64, t3: 0 },
                "Educación Musical": { t1: 80, t2: 84, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 80, t2: 66, t3: 0 },
                "Educación Física y Deportes": { t1: 78, t2: 90, t3: 0 },
                "Matemáticas": { t1: 63, t2: 52, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 60, t2: 62, t3: 0 },
                "Fisica": { t1: 60, t2: 65, t3: 0 },
                "Quimica": { t1: 60, t2: 65, t3: 0 },
                "Biología - Geografía": { t1: 43, t2: 57, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 62, t2: 51, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 52, t2: 42, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "5195000120122581": {
            rude: "5195000120122581",
            nombreCompleto: "NELSON PEÑARANDA GOMEZ",
            curso: "6to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de SEXTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 61, t2: 70, t3: 0 },
                "Lengua Extranjera": { t1: 60, t2: 55, t3: 0 },
                "Ciencias Sociales": { t1: 80, t2: 54, t3: 0 },
                "Educación Musical": { t1: 79, t2: 89, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 61, t2: 64, t3: 0 },
                "Educación Física y Deportes": { t1: 75, t2: 81, t3: 0 },
                "Matemáticas": { t1: 59, t2: 53, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 87, t2: 80, t3: 0 },
                "Fisica": { t1: 55, t2: 55, t3: 0 },
                "Quimica": { t1: 60, t2: 55, t3: 0 },
                "Biología - Geografía": { t1: 72, t2: 60, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 66, t2: 52, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 51, t2: 57, t3: 0 }
            },
            reuniones: []
        },
        "719500632012110A": {
            rude: "719500632012110A",
            nombreCompleto: "JESUS MIGUEL SARAVIA PACHURY",
            curso: "6to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de SEXTO.png",
            observaciones: [
                { fecha: "2025-03-15", descripcion: "Participación destacada en la feria de ciencias." },
                { fecha: "2025-04-22", descripcion: "Necesita mejorar la puntualidad en la entrega de tareas de Matemáticas." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Matemáticas", estado: "Ausente" },
                { fecha: "2025-05-09", materia: "Lenguaje", estado: "Presente" },
                { fecha: "2025-05-08", materia: "Ciencias", estado: "Presente" },
                { fecha: "2025-05-07", materia: "Sociales", estado: "Atraso" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 73, t2: 61, t3: 0 },
                "Lengua Extranjera": { t1: 55, t2: 65, t3: 0 },
                "Ciencias Sociales": { t1: 97, t2: 60, t3: 0 },
                "Educación Musical": { t1: 82, t2: 100, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 85, t2: 59, t3: 0 },
                "Educación Física y Deportes": { t1: 81, t2: 93, t3: 0 },
                "Matemáticas": { t1: 68, t2: 71, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 70, t2: 41, t3: 0 },
                "Fisica": { t1: 65, t2: 65, t3: 0 },
                "Quimica": { t1: 60, t2: 65, t3: 0 },
                "Biología - Geografía": { t1: 62, t2: 62, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 40, t2: 68, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 47, t2: 47, t3: 0 }
            },
            reuniones: [
                { fecha: "2025-06-01", hora: "10:00 AM", motivo: "Entrega de notas del primer trimestre.", lugar: "Sala de reuniones" }
            ]
        },
        "81890096201297A": {
            rude: "81890096201297A",
            nombreCompleto: "EMANUEL SOLIZ MENDEZ",
            curso: "6to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de SEXTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 96, t2: 77, t3: 0 },
                "Lengua Extranjera": { t1: 95, t2: 100, t3: 0 },
                "Ciencias Sociales": { t1: 98, t2: 88, t3: 0 },
                "Educación Musical": { t1: 90, t2: 100, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 92, t2: 88, t3: 0 },
                "Educación Física y Deportes": { t1: 94, t2: 93, t3: 0 },
                "Matemáticas": { t1: 98, t2: 90, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 94, t2: 95, t3: 0 },
                "Fisica": { t1: 95, t2: 100, t3: 0 },
                "Quimica": { t1: 100, t2: 100, t3: 0 },
                "Biología - Geografía": { t1: 92, t2: 89, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 97, t2: 85, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 94, t2: 79, t3: 0 }
            },
            reuniones: []
        },
        "5195000120132225": {
            rude: "5195000120132225",
            nombreCompleto: "MARCO ANTONIO TITO COAQUIRA",
            curso: "2do de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de SEXTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 77, t2: 60, t3: 0 },
                "Lengua Extranjera": { t1: 65, t2: 70, t3: 0 },
                "Ciencias Sociales": { t1: 70, t2: 61, t3: 0 },
                "Educación Musical": { t1: 75, t2: 80, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 69, t2: 61, t3: 0 },
                "Educación Física y Deportes": { t1: 68, t2: 74, t3: 0 },
                "Matemáticas": { t1: 73, t2: 67, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 73, t2: 68, t3: 0 },
                "Fisica": { t1: 70, t2: 72, t3: 0 },
                "Quimica": { t1: 80, t2: 70, t3: 0 },
                "Biología - Geografía": { t1: 64, t2: 62, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 74, t2: 67, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 73, t2: 54, t3: 0 }
            },
            reuniones: []
        },
        "519500012013644": {
            rude: "519500012013644",
            nombreCompleto: "JOSE CARLOS URABEBEY CORREA",
            curso: "6to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de SEXTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 88, t2: 70, t3: 0 },
                "Lengua Extranjera": { t1: 75, t2: 95, t3: 0 },
                "Ciencias Sociales": { t1: 99, t2: 88, t3: 0 },
                "Educación Musical": { t1: 80, t2: 90, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 85, t2: 65, t3: 0 },
                "Educación Física y Deportes": { t1: 91, t2: 92, t3: 0 },
                "Matemáticas": { t1: 81, t2: 75, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 70, t2: 80, t3: 0 },
                "Fisica": { t1: 85, t2: 93, t3: 0 },
                "Quimica": { t1: 85, t2: 95, t3: 0 },
                "Biología - Geografía": { t1: 85, t2: 81, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 75, t2: 77, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 81, t2: 79, t3: 0 }
            },
            reuniones: []
        },
        "719500632012153": {
            rude: "719500632012153",
            nombreCompleto: "DEISY EMILI VARGAS RODRIGUEZ",
            curso: "6to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de SEXTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 52, t2: 57, t3: 0 },
                "Lengua Extranjera": { t1: 51, t2: 40, t3: 0 },
                "Ciencias Sociales": { t1: 51, t2: 38, t3: 0 },
                "Educación Musical": { t1: 79, t2: 70, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 54, t2: 51, t3: 0 },
                "Educación Física y Deportes": { t1: 49, t2: 57, t3: 0 },
                "Matemáticas": { t1: 54, t2: 41, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 0, t2: 0, t3: 0 },
                "Fisica": { t1: 60, t2: 40, t3: 0 },
                "Quimica": { t1: 55, t2: 40, t3: 0 },
                "Biología - Geografía": { t1: 49, t2: 34, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 35, t2: 42, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 43, t2: 37, t3: 0 }
            },
            reuniones: []
        },
        "519500012013889": {
            rude: "519500012013889",
            nombreCompleto: "YASMIN YAMBAMINI SOLIZ",
            curso: "6to de Secundaria",
            grado: "A",
            turno: "Mañana",
            "horarioImg": "img/Horario de SEXTO.png",
            observaciones: [
                { fecha: "2025-04-10", descripcion: "Líder del equipo en el proyecto de historia." }
            ],
            asistencia: [
                { fecha: "2025-05-10", materia: "Física", estado: "Presente" }
            ],
            notas: {
                "Comunicación y Lenguajes": { t1: 74, t2: 73, t3: 0 },
                "Lengua Extranjera": { t1: 65, t2: 75, t3: 0 },
                "Ciencias Sociales": { t1: 60, t2: 65, t3: 0 },
                "Educación Musical": { t1: 79, t2: 89, t3: 0 },
                "Artes Plásticas y Visuales": { t1: 87, t2: 76, t3: 0 },
                "Educación Física y Deportes": { t1: 88, t2: 85, t3: 0 },
                "Matemáticas": { t1: 69, t2: 70, t3: 0 },
                "Técnica Tecnológica Especializada": { t1: 60, t2: 68, t3: 0 },
                "Fisica": { t1: 60, t2: 80, t3: 0 },
                "Quimica": { t1: 60, t2: 75, t3: 0 },
                "Biología - Geografía": { t1: 58, t2: 64, t3: 0 },
                "Cosmovisión - Filosofía - Psicología": { t1: 51, t2: 60, t3: 0 },
                "Valores Espiritualidad y Religiones": { t1: 54, t2: 61, t3: 0 }
            },
            reuniones: []
        },
        
    };

    let currentStudent = null;

    // --- MANEJO DE EVENTOS ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const rudeValue = rudeInput.value;
        const student = estudiantesDB[rudeValue];

        if (student) {
            currentStudent = student;
            loginView.classList.add('hidden');
            mainPortalView.classList.remove('hidden');
            mainPortalView.classList.add('flex');
            populatePortal();
            document.querySelector('[data-tab="seguimiento"]').click();
        } else {
            loginMessage.textContent = 'RUDE no válido o no encontrado.';
            setTimeout(() => { loginMessage.textContent = ''; }, 3000);
        }
    });

    logoutButton.addEventListener('click', () => {
        currentStudent = null;
        rudeInput.value = '';
        mainPortalView.classList.add('hidden');
        mainPortalView.classList.remove('flex');
        loginView.classList.remove('hidden');
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            tabPanes.forEach(pane => {
                pane.id === `content-${targetTab}` ? pane.classList.remove('hidden') : pane.classList.add('hidden');
            });
        });
    });

    // --- FUNCIONES PARA POBLAR EL PORTAL ---
    const populatePortal = () => {
        if (!currentStudent) return;
        studentName.textContent = currentStudent.nombreCompleto;
        populateSeguimiento();
        populateAsistencia();
        populateNotas();
        populateReuniones();
        populateHorario(); // Nueva función para el horario
    };

    const getStatusColorClass = (status) => {
        switch (status) {
            case 'Presente': return 'text-green-600';
            case 'Ausente': return 'text-red-600';
            case 'Atraso': return 'text-yellow-600';
            default: return 'text-gray-700';
        }
    };

    function populateSeguimiento() {
        studentRudeDisplay.textContent = currentStudent.rude;
        studentCourse.textContent = currentStudent.curso;
        studentGrade.textContent = currentStudent.grado;
        studentShift.textContent = currentStudent.turno;

        studentObservations.innerHTML = '';
        const observations = currentStudent.observaciones;

        if (observations && observations.length > 0) {
            observations.forEach(obs => {
                const obsElement = document.createElement('div');
                obsElement.className = 'p-4 rounded-lg border-l-4 bg-gray-100 border-gray-400 mb-3';
                obsElement.innerHTML = `
                    <p class="text-sm font-medium text-gray-800">${obs.descripcion}</p>
                    <p class="text-xs mt-1 text-gray-600">- Fecha: ${obs.fecha}</p>`;
                studentObservations.appendChild(obsElement);
            });
        } else {
            studentObservations.innerHTML = '<p class="text-gray-500">No hay observaciones registradas.</p>';
        }
    }

    function populateAsistencia() {
        const tableBody = document.getElementById('asistencia-table-body');
        tableBody.innerHTML = '';
        const attendance = currentStudent.asistencia ? [...currentStudent.asistencia].sort((a, b) => new Date(b.fecha) - new Date(a.fecha)) : [];

        if (attendance.length > 0) {
            attendance.forEach(att => {
                const row = document.createElement('tr');
                const statusColor = getStatusColorClass(att.estado);
                row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${att.fecha}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${att.materia}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ${statusColor}">${att.estado}</td>`;
                tableBody.appendChild(row);
            });
        } else {
            tableBody.innerHTML = '<tr><td colspan="3" class="px-6 py-4 text-center text-gray-500">No hay registros de asistencia.</td></tr>';
        }
    }

    function populateNotas() {
        const tableBody = document.getElementById('notas-table-body');
        tableBody.innerHTML = '';
        const grades = currentStudent.notas ? Object.entries(currentStudent.notas) : [];

        if (grades.length > 0) {
            grades.forEach(([subject, scores]) => {
                let validTrimesters = 0;
                let sumGrades = 0;
                if (scores.t1 > 0) { sumGrades += scores.t1; validTrimesters++; }
                if (scores.t2 > 0) { sumGrades += scores.t2; validTrimesters++; }
                if (scores.t3 > 0) { sumGrades += scores.t3; validTrimesters++; }
                const average = validTrimesters > 0 ? (sumGrades / validTrimesters).toFixed(0) : '-';
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${subject}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800">${scores.t1 > 0 ? scores.t1 : '-'}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800">${scores.t2 > 0 ? scores.t2 : '-'}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800">${scores.t3 > 0 ? scores.t3 : '-'}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-center font-bold ${average < 51 && average !== '-' ? 'text-red-600' : 'text-blue-700'}">${average}</td>`;
                tableBody.appendChild(row);
            });
        } else {
            tableBody.innerHTML = '<tr><td colspan="5" class="px-6 py-4 text-center text-gray-500">No hay calificaciones registradas.</td></tr>';
        }
    }

    function populateReuniones() {
        const container = document.getElementById('reuniones-container');
        container.innerHTML = '';
        const meetings = currentStudent.reuniones;

        if (meetings && meetings.length > 0) {
            meetings.forEach(meeting => {
                const meetingElement = document.createElement('div');
                meetingElement.className = "bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4";
                meetingElement.innerHTML = `
                    <h4 class="font-semibold text-blue-800 mb-2">${meeting.motivo}</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-700">
                        <div><strong>Fecha:</strong> ${meeting.fecha}</div>
                        <div><strong>Hora:</strong> ${meeting.hora}</div>
                        <div class="md:col-span-2"><strong>Lugar:</strong> ${meeting.lugar}</div>
                    </div>`;
                container.appendChild(meetingElement);
            });
        } else {
            container.innerHTML = '<p class="text-gray-500">No hay reuniones programadas.</p>';
        }
    }
    
    // --- NUEVA FUNCIÓN PARA MOSTRAR EL HORARIO ---
    function populateHorario() {
        const imgElement = document.getElementById('horario-img');
        const messageElement = document.getElementById('horario-message');
        
        if (currentStudent && currentStudent.horarioImg) {
            imgElement.src = currentStudent.horarioImg;
            imgElement.classList.remove('hidden');
            messageElement.classList.add('hidden');
        } else {
            imgElement.classList.add('hidden');
            messageElement.classList.remove('hidden');
        }
    }
});